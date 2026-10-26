import { MapPin, Sparkles } from "lucide-react";
import { heroData, siteData } from "@/app/data/data";
import { Container } from "@/components/layout/container";
import { ActionLink } from "./action-link";
import { GuruPortrait } from "./guru-portrait";

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden bg-linear-to-br from-background via-background to-secondary/45">
      <Container className="grid items-center gap-6 pb-12 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pb-16 lg:pt-5">
        <div className="relative z-10 lg:py-14">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-2 text-xs text-secondary-foreground sm:text-sm"><Sparkles className="size-4 text-accent" aria-hidden="true" />{heroData.eyebrow}</p>
          <h1 id="hero-heading" className="text-[clamp(2rem,4.2vw,3.75rem)] font-semibold leading-[1.65] tracking-tight text-foreground">{heroData.heading}<span className="block text-primary">{heroData.highlight}</span></h1>
          <p className="mt-5 text-lg font-medium text-secondary-foreground sm:text-xl">{heroData.introduction}</p>
          <p className="mt-4 max-w-lg text-sm leading-8 text-muted-foreground sm:text-base sm:leading-8">{heroData.description}</p>
          <div className="mt-8 flex flex-wrap gap-3"><ActionLink href={heroData.primaryAction.href}>{heroData.primaryAction.label}</ActionLink><ActionLink variant="outline" href={heroData.secondaryAction.href}>{heroData.secondaryAction.label}</ActionLink></div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/80 pt-6 text-xs text-muted-foreground sm:text-sm">{heroData.notes.map((note) => <span key={note} className="flex items-center gap-2"><span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />{note}</span>)}</div>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground lg:hidden"><MapPin className="size-3.5 text-accent" aria-hidden="true" />{siteData.location}</p>
        </div>
        <GuruPortrait />
      </Container>
    </section>
  );
}
