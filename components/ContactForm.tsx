"use client";

import { useActionState } from "react";
import { ArrowUpRight } from "lucide-react";
import { sendInquiry, type InquiryState } from "@/app/actions";

const initialState: InquiryState = { ok: false, message: "" };

const field =
  "mt-2 w-full rounded-xl border border-line bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted focus:border-gold";

const projectTypes = [
  "Web application",
  "Mobile-friendly system",
  "Business website",
  "Inventory / management system",
  "E-commerce / online ordering",
  "UI/UX design",
  "Other",
];

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendInquiry, initialState);

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your Name <span className="text-gold">*</span>
          <input name="name" required placeholder="Your full name" className={field} />
        </label>

        <label className="block text-sm font-medium">
          Email <span className="text-gold">*</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={field}
          />
        </label>

        <label className="block text-sm font-medium">
          Company
          <input name="company" placeholder="Company name (optional)" className={field} />
        </label>

        <label className="block text-sm font-medium">
          Project Type
          <select name="projectType" defaultValue="" className={field}>
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium sm:col-span-2">
          Message <span className="text-gold">*</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project..."
            className={field}
          />
        </label>
      </div>

      {/* Spam trap: hidden from real visitors */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-navy-dark transition hover:bg-gold-light disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send Inquiry"} <ArrowUpRight size={18} />
      </button>

      {state.message && (
        <p
          role="status"
          className={`mt-4 text-sm font-medium ${
            state.ok ? "text-highlight" : "text-red-500"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}