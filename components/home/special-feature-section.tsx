import { ArrowUpRight, BookOpenCheck, CalendarCheck, Flame, HandHeart, Orbit, Sparkles } from "lucide-react";
import { specialFeatureData } from "@/app/data/data";
import { Container } from "@/components/layout/container";

const processIcons = [BookOpenCheck, Orbit, HandHeart, CalendarCheck, Flame];

export function SpecialFeatureSection() {
  return (
    <section
      id="our-approach"
      aria-labelledby="special-feature-heading"
      className="bg-background pb-16 sm:pb-24"
    >
      <Container>
        <div className="grid overflow-hidden rounded-3xl border border-ritual-border bg-ritual-surface shadow-xl shadow-ritual-deep/5 sm:rounded-[2rem] lg:grid-cols-[1.1fr_1fr]">
          <div className="relative flex flex-col px-6 py-9 sm:p-10 lg:p-12 xl:p-14">
            <div className="mb-8 flex items-center gap-3">
              <span aria-hidden="true" className="grid size-10 place-items-center rounded-full border border-ritual-border text-ritual-ink">
                <Sparkles className="size-4" strokeWidth={1.5} />
              </span>
              <p className="text-xs font-semibold tracking-wide text-ritual-ink sm:text-sm">
                {specialFeatureData.eyebrow}
              </p>
              <span aria-hidden="true" className="h-px w-10 bg-ritual-border" />
            </div>
            <h2 id="special-feature-heading" className="max-w-lg text-balance">
              <span className="mb-3 block text-xl font-medium leading-relaxed text-ritual-muted sm:text-2xl">
                {specialFeatureData.heading.lead}
              </span>
              <span className="block text-3xl font-semibold leading-[1.65] tracking-tight text-ritual-ink sm:text-4xl">
                {specialFeatureData.heading.emphasis}
              </span>
            </h2>
            <p className="mt-7 max-w-lg border-l-2 border-accent/60 pl-4 text-base font-medium leading-8 text-ritual-ink">
              {specialFeatureData.introduction}
            </p>
            <p className="mt-5 max-w-lg text-sm leading-8 text-ritual-muted">
              {specialFeatureData.description}
            </p>
            <div className="mt-auto pt-8">
              <a href={specialFeatureData.action.href} className="group inline-flex min-h-12 items-center gap-5 rounded-full border border-ritual-ink bg-ritual-ink py-2 pl-5 pr-2 text-sm font-medium text-ritual-cream transition-colors hover:bg-ritual-deep focus-visible:outline-ritual-ink">
                {specialFeatureData.action.label}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ritual-gold text-ritual-deep">
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>
          </div>

          <div className="relative isolate overflow-hidden bg-ritual-deep px-6 py-9 text-ritual-cream sm:p-10 lg:p-12">
            <div aria-hidden="true" className="pointer-events-none absolute -right-36 -top-36 -z-10 size-96 rounded-full border border-ritual-gold/10 p-8">
              <div className="size-full rounded-full border border-ritual-gold/10 p-8">
                <div className="size-full rounded-full border border-dashed border-ritual-gold/15" />
              </div>
            </div>
            <div className="mb-8 flex items-center gap-4 border-b border-ritual-gold/15 pb-5">
              <span aria-hidden="true" className="text-xl text-ritual-gold">✦</span>
              <h3 className="text-xl font-medium">
                {specialFeatureData.processHeading}
              </h3>
              <span aria-hidden="true" className="ml-auto text-3xl font-light tabular-nums text-ritual-gold/40">
                {String(specialFeatureData.steps.length).padStart(2, "0")}
              </span>
            </div>
            <ol className="relative space-y-3 before:absolute before:bottom-8 before:left-4 before:top-8 before:w-px before:bg-ritual-gold/20">
              {specialFeatureData.steps.map((step, index) => {
                const Icon = processIcons[index];
                const isLast = index === specialFeatureData.steps.length - 1;

                return (
                  <li key={step} className="relative flex items-center gap-3 sm:gap-4">
                    <span aria-hidden="true" className={`relative z-10 grid size-8 shrink-0 place-items-center rounded-full border text-[11px] font-medium tabular-nums ${isLast ? "border-ritual-gold bg-ritual-gold text-ritual-deep" : "border-ritual-gold/25 bg-ritual-deep text-ritual-gold"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className={`flex min-h-18 min-w-0 flex-1 items-center gap-3 rounded-xl border px-4 py-4 sm:gap-4 sm:px-5 ${isLast ? "border-ritual-gold/40 bg-ritual-gold/10" : "border-ritual-cream/10 bg-ritual-cream/5"}`}>
                      <Icon aria-hidden="true" strokeWidth={1.5} className="size-5 shrink-0 text-ritual-gold" />
                      <span className={`text-sm leading-7 ${isLast ? "font-semibold text-ritual-gold" : "font-medium text-ritual-cream/90"}`}>
                        {step}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
