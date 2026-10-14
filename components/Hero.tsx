import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionHeading";
import TypingText from "./TypingText";

const phrases = ["Your Business", "Your Customers", "Your Growth", "Your Vision"];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 pb-14 pt-10 text-center sm:px-6 sm:pb-20 sm:pt-14">
        <SectionLabel>Building Digital Solutions Together</SectionLabel>

        <h1 className="mt-6 min-h-[5em] font-heading text-4xl font-extrabold leading-tight tracking-tight sm:min-h-[2.5em] md:text-5xl lg:text-6xl">
          <span className="block">We Build Web Solutions</span>
          Around <TypingText phrases={phrases} />
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          FiveCore Technologies is a team of passionate developers building web
          applications and digital solutions tailored to what your business needs.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-navy-dark transition hover:bg-gold-light"
          >
            Send an Inquiry <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="rounded-full border border-line bg-background px-7 py-3.5 font-semibold transition hover:border-gold"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}