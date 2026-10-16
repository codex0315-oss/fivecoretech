import Image from "next/image";
import Reveal from "./Reveal";
import { SectionLabel } from "./SectionHeading";

// Edit the bio any time. To show initials instead of a photo,
// change the photo line to: photo: undefined as string | undefined,
const advisor = {
  name: "John Rey Cilin",
  role: "Advisor · Tech Lead · Senior Software Engineer",
  bio: "John Rey Cilin is FiveCore Technologies' advisor, Tech Lead, and Senior Software Engineer, guiding the team's technical direction on every project we build.",
  photo: "/cilin.png" as string | undefined,
  initials: "JC",
};

export default function Advisor() {
  const { name, role, bio, photo, initials } = advisor;

  return (
    <section id="advisor" className="scroll-mt-24 pb-20 sm:pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <article className="flex flex-col items-center gap-8 rounded-2xl border border-line bg-surface p-6 text-center sm:flex-row sm:p-10 sm:text-left">
            <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-2xl bg-background ring-2 ring-gold sm:h-52 sm:w-52">
              {photo ? (
                <Image
                  src={photo}
                  alt={name}
                  fill
                  sizes="(min-width: 640px) 208px, 176px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="grid h-full place-items-center font-heading text-5xl font-bold text-highlight">
                  {initials}
                </div>
              )}
            </div>

            <div>
              <SectionLabel>Our Advisor</SectionLabel>
              <h3 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
                {name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-highlight">
                {role}
              </p>
              <p className="mt-4 leading-relaxed text-muted">{bio}</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}