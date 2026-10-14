import { ArrowUpRight } from "lucide-react";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

const pills = [
  { label: "Web Apps", tilt: -8, solid: true },
  { label: "Mobile-Ready", tilt: 6, solid: false },
  { label: "Dashboards", tilt: -4, solid: false },
  { label: "E-Commerce", tilt: 9, solid: true },
  { label: "Inventory Systems", tilt: -7, solid: false },
  { label: "UI/UX Design", tilt: 5, solid: true },
  { label: "APIs", tilt: -10, solid: false },
  { label: "Custom Software", tilt: 6, solid: false },
];

export default function CtaBand() {
  return (
    <section className="pt-6">
      <Reveal>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold leading-tight sm:text-5xl">
            Let&apos;s Create an{" "}
            <span className="text-highlight">Amazing Project</span> Together!
          </h2>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-navy-dark transition hover:bg-gold-light"
          >
            Contact Us <ArrowUpRight size={18} />
          </a>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3 px-4">
          {pills.map(({ label, tilt, solid }) => (
            <span
              key={label}
              style={{ transform: `rotate(${tilt}deg)` }}
              className={`rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${
                solid
                  ? "bg-foreground text-background"
                  : "border border-line bg-surface"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </Reveal>

      <Marquee reverse />
    </section>
  );
}