import Image from "next/image";
import { ArrowUpRight, LayoutTemplate } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string; // screenshot saved in public/projects/
  href?: string; // live site or case study
};

// TODO: replace these placeholders with your real projects.
// Delete every entry and the whole section hides itself.
const projects: Project[] = [
  {
    title: "ReelinkPH",
    category: "Web Application",
    description:
      "ReelinkPH is a real estate marketing platform they can turn there property listing into a marketing video reel that can be downloaded and can be post in every social media platforms.",
    tags: ["Next.js", "PostgreSQL"],
    image: "/projects/reelinkph/reelinkph.png",
    href: "https://staging.reelinkph.com/",
  },
  {
    title: "RealtyLinkPH",
    category: "Web Application",
    description:
      "RealtyLinkPH is a web application where in they cannot post a single propertylisting if they are not verified as real estate agents, this is a web application were all agents are verified, so that buyers have the confidence to transact.",
    tags: ["Laravel", "Nuxt.js"],
    image: "/projects/realtylinkph/realtylinkph.png",
    href: "https://realtylinkph.vercel.app/",
  },
  {
    title: "Prof",
    category: "Web Application",
    description:
      "Prof is a web based application were all enrty level developers can make a resume and portfolio. Prof also has a AI reviewer that helps entry level developers ready for there upcoming interviews.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/projects/Prof/Prof.png"
  },
];

export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="scroll-mt-24 pb-20 pt-4 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading label="Our Work" watermark="Projects">
            Our Recent <span className="text-highlight">Projects</span>
          </SectionHeading>
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted">
            A selection of the web applications and solutions we&apos;ve built.
          </p>
        </Reveal>

        {/* Centered rows: 1 per row on phones, 2 on tablets, 3 on desktop */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {projects.map(({ title, category, description, tags, image, href }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 80}
              className="w-full md:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)]"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-1 hover:border-gold">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-background">
                  {image ? (
                    <Image
                      src={image}
                      alt={`${title} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full place-items-center text-muted">
                      <LayoutTemplate size={40} strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-highlight">
                    {category}
                  </p>
                  <h3 className="mt-2 font-heading text-lg font-semibold">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-background px-3 py-1 text-xs font-medium"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:text-highlight"
                    >
                      View project <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}