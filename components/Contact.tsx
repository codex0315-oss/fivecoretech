import { Clock, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// TODO: replace with your real contact details
const CONTACT = {
  email: "ericsonbareno028@gmail.com",
  location: "Cebu City, Philippines",
  hours: "Mon – Fri, 7:00 AM – 10:00 PM",
};

const details = [
  { icon: Mail, label: "Email", value: CONTACT.email },
  { icon: MapPin, label: "Location", value: CONTACT.location },
  { icon: Clock, label: "Working hours", value: CONTACT.hours },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading label="Contact Us" watermark="Contact">
            Let&apos;s Talk About <span className="text-highlight">Your Project</span>
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <aside className="h-fit rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="font-heading text-lg font-semibold">Contact Details</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Tell us what you need and we&apos;ll get back to you.
              </p>
              <ul className="mt-6 space-y-5">
                {details.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background ring-1 ring-line">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}