type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignmentClass}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
