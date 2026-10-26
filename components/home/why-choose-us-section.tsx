import { Award, BookOpen, ClipboardList, Flame, HandHeart, MapPin } from "lucide-react";
import { whyChooseUsData } from "@/app/data/data";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

const icons = {
  award: Award,
  location: MapPin,
  guidance: HandHeart,
  preparation: ClipboardList,
  kundli: BookOpen,
  tradition: Flame,
};

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="border-t border-border bg-secondary/30 py-14 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            id="why-choose-us-heading"
            eyebrow={whyChooseUsData.eyebrow}
            heading={whyChooseUsData.heading}
          />
        </div>

        <ul className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {whyChooseUsData.items.map((item) => {
            const Icon = icons[item.icon];

            return (
              <li key={item.id} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
