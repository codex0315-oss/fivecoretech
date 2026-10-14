"use server";

import { Resend } from "resend";

export type InquiryState = { ok: boolean; message: string };

// Where inquiries are delivered
const INQUIRY_TO = "ericsonbareno028@gmail.com";

// Resend's shared sender works without a domain.
// Once you verify your own domain, change this to e.g. "FiveCore <inquiries@yourdomain.com>"
const INQUIRY_FROM = "FiveCore Website <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();

  const name = get("name");
  const email = get("email");
  const company = get("company");
  const projectType = get("projectType");
  const message = get("message");

  // Hidden field: real people leave it empty, bots fill it in
  if (get("website")) {
    return { ok: true, message: "Thanks! We'll get back to you soon." };
  }

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in your name, email, and message." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (name.length > 100 || email.length > 200 || company.length > 150 || message.length > 5000) {
    return { ok: false, message: "One of the fields is too long. Please shorten it." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is missing. Add it to .env.local and restart the dev server.");
    return { ok: false, message: "Something went wrong on our side. Please try again later." };
  }

  const resend = new Resend(apiKey);
  const safeSubjectName = name.replace(/[\r\n]+/g, " ");

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Project type", projectType || "—"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#0b1220">
      <h2 style="margin:0 0 16px">New inquiry from your website</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f5f6f8;width:140px"><strong>${label}</strong></td>
            <td style="padding:8px 12px;border:1px solid #e5e7eb">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(message)}</p>
      <p style="margin-top:24px;color:#6b7280;font-size:13px">Hit Reply to answer ${escapeHtml(name)} directly.</p>
    </div>
  `;

  const text = [
    "New inquiry from your website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Project type: ${projectType || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: INQUIRY_FROM,
      to: INQUIRY_TO,
      replyTo: email,
      subject: `New inquiry from ${safeSubjectName}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        ok: false,
        message: "We couldn't send your inquiry right now. Please try again in a moment.",
      };
    }
  } catch (err) {
    console.error("Inquiry send failed:", err);
    return {
      ok: false,
      message: "We couldn't send your inquiry right now. Please try again in a moment.",
    };
  }

  return {
    ok: true,
    message: "Thanks! Your inquiry was sent. We'll get back to you soon.",
  };
}