import {
  AppWindow,
  ArrowRight,
  Database,
  Globe,
  LayoutDashboard,
  Package,
  PenTool,
  Plug,
  ShoppingCart,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Service = { icon: LucideIcon; title: string; description: string };

const services: Service[] = [
  {
    icon: AppWindow,
    title: "Web Applications",
    description:
      "Custom web apps built around how your business actually works, from internal tools to customer portals.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Systems",
    description:
      "Responsive apps that feel right on phones, tablets, and desktops without separate versions to maintain.",
  },
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Fast, search-friendly company websites that turn visitors into inquiries.",
  },
  {
    icon: Package,
    title: "Inventory & Management",
    description:
      "Track stock, orders, and reports in one place, with the right access for each team member.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Ordering",
    description:
      "Online ordering and checkout with admin-controlled products, discounts, and order tracking.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Clean, easy-to-use interfaces designed around the people who will use them.",
  },
  {
    icon: Plug,
    title: "APIs & Integrations",
    description:
      "Connect your systems to payments, messaging, and the tools you already use.",
  },
  {
    icon: Database,
    title: "Dashboards & Reports",
    description:
      "Turn your data into clear dashboards so decisions get made faster.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing updates, fixes, and improvements after launch.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <Reveal>
          <SectionHeading label="What We Do" watermark="Services">
            <span className="text-highlight">Services</span> We Provide
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {services.map(({ icon: Icon, title, description }, i) => (
    <Reveal key={title} delay={(i % 3) * 80} className="h-full">
      <article className="group relative h-full rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-gold">
        <span className="absolute left-0 top-8 h-12 w-1 rounded-r bg-gold" />
        <div className="grid h-14 w-14 place-items-center rounded-full bg-background ring-1 ring-line">
          <Icon size={26} />
        </div>
        <h3 className="mt-5 font-heading text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition group-hover:text-highlight"
        >
          Inquire <ArrowRight size={16} />
        </a>
      </article>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  );
}