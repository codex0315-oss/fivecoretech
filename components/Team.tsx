import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const team = [
  { name: "Ericson Bareno", role: "Junior Software Developer", photo: "/bareno.png" },
  { name: "Rozel Batomalaque", role: "UI UX Designer", photo: "/batomalaque.png" },
  { name: "Napoleon Batoon", role: "QA Tester", photo: "/batoon.png" },
  { name: "John Rey Cilin", role: "Tech Lead & Senior Software Engineer", photo: "/cilin.png" },
  { name: "Jenelyn Diaz", role: "QA Tester", photo: "/diaz.png" },
  { name: "Guil Cinco", role: "Marketing Head", photo: "/cinco.png" },
];

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 pb-20 pt-4 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading label="Our Team" watermark="Team">
            Meet the <span className="text-highlight">Team</span> Behind FiveCore
          </SectionHeading>
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted">
            A group of passionate developers building web applications and
            solutions around what each client needs.
          </p>
        </Reveal>

        {/* 2 per row on phones, 3 per row from tablet up */}
        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-5">
          {team.map(({ name, role, photo }, i) => (
            <Reveal
              key={name}
              delay={(i % 3) * 80}
              className="w-[calc(50%_-_0.625rem)] sm:w-[calc(33.333%_-_0.84rem)]"
            >
              <article className="group h-full rounded-2xl border border-line bg-surface p-3 text-center transition hover:-translate-y-1 hover:border-gold">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-background">
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    sizes="(min-width: 640px) 300px, 50vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold">{name}</h3>
                <p className="pb-2 text-sm text-muted">{role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}