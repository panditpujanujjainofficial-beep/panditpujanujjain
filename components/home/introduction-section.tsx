import { ArrowDown, ArrowRight } from "lucide-react";
import { introductionData } from "@/app/data/data";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

export function IntroductionSection() {
  return (
    <section
      id="introduction"
      aria-labelledby="introduction-heading"
      className="border-b border-border/70 bg-card py-14 sm:py-20"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="border-l-2 border-accent/60 pl-5 sm:pl-6">
            <SectionHeading
              id="introduction-heading"
              eyebrow={introductionData.eyebrow}
              heading={introductionData.heading}
            />
          </div>
          <div className="space-y-4 text-sm leading-8 text-muted-foreground sm:text-base sm:leading-8">
            {introductionData.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-9 rounded-2xl border border-border bg-secondary/40 p-5 sm:mt-10 sm:p-7">
          <h3 className="mb-5 text-sm font-semibold text-primary">
            {introductionData.purpose.heading}
          </h3>
          <ol className="grid gap-4 md:grid-cols-4 md:gap-5">
            {introductionData.purpose.steps.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full border border-accent/20 bg-card text-xs font-medium text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium leading-6 text-secondary-foreground">
                  {step}
                </span>
                {index < introductionData.purpose.steps.length - 1 && (
                  <>
                    <ArrowRight aria-hidden="true" className="ml-auto hidden size-4 shrink-0 text-accent/70 md:block" />
                    <ArrowDown aria-hidden="true" className="ml-auto size-4 shrink-0 text-accent/70 md:hidden" />
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
