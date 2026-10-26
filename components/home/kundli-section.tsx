import { ArrowUpRight, CalendarDays, Check, Clock3, MapPin, Phone, Sparkles } from "lucide-react";
import { kundliData } from "@/app/data/data";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

const birthDetailIcons = [CalendarDays, Clock3, MapPin];

export function KundliSection() {
  return (
    <section
      id="consultation"
      aria-labelledby="kundli-heading"
      className="border-t border-border bg-secondary/30 py-16 sm:py-24"
    >
      <Container>
        <div id="kundli" className="grid items-start gap-9 lg:grid-cols-[1.2fr_0.9fr] lg:gap-14">
          <div>
            <span aria-hidden="true" className="mb-6 grid size-14 place-items-center rounded-2xl border border-accent/20 bg-card text-accent">
              <Sparkles className="size-6" strokeWidth={1.5} />
            </span>
            <SectionHeading
              id="kundli-heading"
              eyebrow={kundliData.eyebrow}
              heading={kundliData.heading}
              description={kundliData.description}
            />
            <h3 className="mb-5 mt-8 text-base font-semibold text-foreground">
              {kundliData.analysisHeading}
            </h3>
            <ul className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
              {kundliData.analysisItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-secondary-foreground">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check aria-hidden="true" className="size-3" strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="border-b border-border bg-secondary/50 px-6 py-7 sm:px-8">
              <span aria-hidden="true" className="mb-4 block text-4xl text-accent">ॐ</span>
              <h3 className="text-xl font-semibold leading-relaxed text-primary">
                {kundliData.requirementsHeading}
              </h3>
            </div>
            <div className="p-6 sm:p-8">
              <ul className="space-y-4">
                {kundliData.birthDetails.map((item, index) => {
                  const Icon = birthDetailIcons[index];

                  return (
                    <li key={item} className="flex items-center gap-3 text-sm text-secondary-foreground">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-background text-accent">
                        <Icon aria-hidden="true" className="size-4" />
                      </span>
                      {item}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-7 border-t border-border pt-6">
                <a href={kundliData.phoneHref} className="flex min-h-13 items-center justify-center gap-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium leading-6 text-primary-foreground transition-colors hover:bg-primary/85">
                  {kundliData.ctaLabel}
                  <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                </a>
                <a href={kundliData.phoneHref} className="mt-5 flex min-h-11 items-center justify-center gap-2 text-base font-semibold text-primary hover:text-accent">
                  <Phone aria-hidden="true" className="size-4" />
                  <span>{kundliData.phoneLabel} <span dir="ltr">{kundliData.phone}</span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
