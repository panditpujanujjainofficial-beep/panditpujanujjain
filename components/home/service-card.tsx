import Image from "next/image";
import { servicesData, type Service } from "@/app/data/data";
import { ServiceDetails } from "./service-details";

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  return (
    <article className={`group relative isolate flex h-full overflow-hidden rounded-3xl border transition-colors duration-300 ${featured ? "border-accent/25 bg-secondary/50 md:col-span-2" : "border-border bg-card hover:border-accent/50"}`}>
      <div className={`relative z-10 flex flex-1 flex-col p-6 sm:p-7 ${featured ? "sm:max-w-[62%] sm:p-8" : ""}`}>
        <div className="mb-6 flex items-center gap-3">
          <span aria-hidden="true" className="grid size-13 shrink-0 place-items-center rounded-2xl border border-accent/15 bg-background text-2xl">{service.symbol}</span>
          {featured && <span className="text-xs font-medium text-accent">{servicesData.featuredLabel}</span>}
        </div>
        <h3 className={`font-semibold leading-relaxed text-card-foreground ${featured ? "text-2xl" : "text-xl"}`}>{service.title}</h3>
        <p className="mb-6 mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
        <div className="mt-auto border-t border-primary/10 pt-4"><ServiceDetails service={service} /></div>
      </div>
      {featured && (
        <div className="absolute inset-y-0 right-0 hidden w-[38%] overflow-hidden sm:block">
          <Image src={servicesData.image.src} alt={servicesData.image.alt} fill sizes="(max-width: 768px) 30vw, 250px" className="object-cover object-[50%_65%]" />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-secondary/70 via-secondary/10 to-transparent" />
        </div>
      )}
    </article>
  );
}
