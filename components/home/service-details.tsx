"use client";

import { useRef } from "react";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { servicesData, type Service } from "@/app/data/data";

export function ServiceDetails({ service }: { service: Service }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `${service.id}-details-title`;

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={`${service.title} — ${servicesData.linkLabel}`}
        onClick={() => dialogRef.current?.showModal()}
        className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg py-1 text-sm font-semibold text-primary outline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
      >
        {servicesData.linkLabel}
        <span className="grid size-9 place-items-center rounded-full border border-primary/15 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><ArrowRight className="size-4" aria-hidden="true" /></span>
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
        className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%_-_2rem)] max-w-lg overflow-y-auto rounded-3xl border border-border bg-card p-0 text-card-foreground shadow-2xl backdrop:bg-foreground/50 backdrop:backdrop-blur-sm"
      >
        <div className="relative p-7 sm:p-9">
          <button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label={servicesData.closeLabel} className="absolute right-4 top-4 grid size-10 cursor-pointer place-items-center rounded-full border border-border text-muted-foreground hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring"><X className="size-4" /></button>
          <span aria-hidden="true" className="mb-6 grid size-16 place-items-center rounded-2xl border border-border bg-secondary/50 text-3xl">{service.symbol}</span>
          <p className="mb-2 text-xs font-medium text-accent">{servicesData.detailsLabel}</p>
          <h3 id={titleId} className="text-2xl font-semibold leading-relaxed">{service.title}</h3>
          <p className="mt-4 text-sm leading-8 text-muted-foreground">{service.description}</p>
          {service.details && <p className="mt-3 text-sm leading-8 text-secondary-foreground">{service.details}</p>}
          <p className="my-6 rounded-xl border border-border bg-secondary/40 p-4 text-sm leading-7 text-secondary-foreground">{servicesData.consultationNote}</p>
          <a href={servicesData.consultationHref} onClick={() => dialogRef.current?.close()} className="inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/85">{servicesData.consultationLabel}<ArrowUpRight className="size-4" aria-hidden="true" /></a>
        </div>
      </dialog>
    </>
  );
}
