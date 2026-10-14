export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-4 py-1.5 text-sm font-medium before:absolute before:left-0 before:top-0 before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-gold after:absolute after:bottom-0 after:right-0 after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-gold">
      {children}
    </span>
  );
}

export default function SectionHeading({
  label,
  watermark,
  children,
}: {
  label: string;
  watermark: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative text-center">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-heading text-6xl font-extrabold uppercase text-foreground/5 sm:text-8xl"
      >
        {watermark}
      </span>
      <div className="relative">
        <SectionLabel>{label}</SectionLabel>
        <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-5xl">
          {children}
        </h2>
      </div>
    </div>
  );
}