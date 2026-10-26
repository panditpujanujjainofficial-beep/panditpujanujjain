import { ArrowUpRight, Sparkles } from "lucide-react";
import { servicesData } from "@/app/data/data";
import { Container } from "@/components/layout/container";
import { ServiceCard } from "./service-card";

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative overflow-hidden bg-background py-16 sm:py-24">
      <Container>
        <div className="mb-9 grid items-end gap-5 sm:mb-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <p className="mb-4 flex items-center gap-2.5 text-xs font-medium text-accent sm:text-sm"><span aria-hidden="true" className="h-px w-8 bg-accent/60" />{servicesData.eyebrow}</p>
            <h2 id="services-heading" className="max-w-xl text-3xl font-semibold leading-[1.6] tracking-tight text-foreground sm:text-4xl">{servicesData.heading}</h2>
          </div>
          <p className="max-w-md border-l-2 border-accent/30 pl-5 text-sm leading-8 text-muted-foreground lg:mb-2">{servicesData.description}</p>
        </div>
        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {servicesData.items.map((service, index) => <ServiceCard key={service.id} service={service} featured={index === 0} />)}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-secondary/35 px-5 py-5 sm:flex-row sm:items-center sm:px-7">
          <p className="flex items-center gap-3 text-sm text-secondary-foreground"><Sparkles className="size-5 shrink-0 text-accent" aria-hidden="true" />{servicesData.bottomNote}</p>
          <a href={servicesData.consultationHref} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent">{servicesData.consultationLabel}<ArrowUpRight className="size-4" aria-hidden="true" /></a>
        </div>
      </Container>
    </section>
  );
}
