export function SectionHeading({ id, eyebrow, heading, description }: {
  id: string;
  eyebrow: string;
  heading: string;
  description?: string;
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-medium tracking-wide text-accent sm:text-sm">{eyebrow}</p>
      <h2 id={id} className="text-2xl font-semibold leading-relaxed text-foreground sm:text-3xl">{heading}</h2>
      {description && <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{description}</p>}
    </div>
  );
}
