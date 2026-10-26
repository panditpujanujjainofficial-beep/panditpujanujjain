import { Award, BookOpen, HandHeart, MapPin } from "lucide-react";
import { heroTrustData } from "@/app/data/data";
import { Container } from "@/components/layout/container";

const trustIcons = {
  experience: Award,
  location: MapPin,
  guidance: HandHeart,
  consultation: BookOpen,
};

export function HeroTrustStrip() {
  return (
    <section aria-label={heroTrustData.label} className="border-y border-border bg-secondary/60">
      <Container>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-7 py-7 lg:grid-cols-4 lg:gap-0 lg:py-8">
          {heroTrustData.items.map((item) => {
            const Icon = trustIcons[item.icon];

            return (
              <li key={item.id} className="flex flex-col items-center gap-3 text-center lg:flex-row lg:justify-center lg:gap-3 lg:px-4 lg:text-left lg:not-first:border-l lg:not-first:border-border">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-accent/15 bg-card text-accent">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="text-xs font-medium leading-6 text-secondary-foreground sm:text-sm">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
