"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Open the "Inquiry sent" dialog after every successful send
  useEffect(() => {
    const dialog = dialogRef.current;
    if (state.ok && dialog && !dialog.open) dialog.showModal();
  }, [state]);

  return (
    <>
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

        {!state.ok && state.message && (
          <p role="alert" className="mt-4 text-sm font-medium text-red-500">
            {state.message}
          </p>
        )}
      </form>

      <dialog
        ref={dialogRef}
        aria-labelledby="inquiry-sent-title"
        onClick={(e) => {
          // click on the dark backdrop closes it
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl border border-line bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/60"
      >
        <div className="p-8 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold">
            <CheckCircle2 size={36} />
          </span>
          <h3
            id="inquiry-sent-title"
            className="mt-5 font-heading text-2xl font-bold"
          >
            Inquiry sent!
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Thank you for reaching out to FiveCore Technologies. We received
            your inquiry and will get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="mt-6 rounded-full bg-gold px-7 py-3 font-semibold text-navy-dark transition hover:bg-gold-light"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}