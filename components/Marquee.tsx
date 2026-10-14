const defaultItems = [
  "Web Apps",
  "Mobile-Ready",
  "Dashboards",
  "E-Commerce",
  "Custom Systems",
  "UI/UX Design",
];

export default function Marquee({
  items = defaultItems,
  reverse = false,
}: {
  items?: string[];
  reverse?: boolean;
}) {
  // Repeat the list so each half is wider than any screen (no gaps)
  const row = [...items, ...items, ...items];

  return (
    <div className="marquee-fade overflow-hidden py-6 text-foreground sm:py-8">
      <div className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}>
        {[0, 1].map((n) => (
          <div
            key={n}
            aria-hidden={n === 1}
            className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8"
          >
            {row.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-6 whitespace-nowrap font-heading text-lg font-bold uppercase tracking-wide sm:gap-8 sm:text-xl"
              >
                {item}
                <span aria-hidden="true">✱</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}