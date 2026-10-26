import Image from "next/image";
import { MapPin } from "lucide-react";
import { heroData, siteData } from "@/app/data/data";

export function GuruPortrait() {
  return (
    <figure className="relative isolate mx-auto w-full max-w-lg pt-8 lg:pt-10">
      <div aria-hidden="true" className="absolute inset-x-5 bottom-16 top-16 -z-10 rounded-t-full border border-accent/25 bg-secondary/60 sm:inset-x-8" />
      <div aria-hidden="true" className="absolute inset-x-9 bottom-20 top-20 -z-10 rounded-t-full border border-accent/20 sm:inset-x-12" />
      <span aria-hidden="true" className="absolute left-5 top-28 text-4xl text-accent/60">✧</span>
      <span aria-hidden="true" className="absolute right-8 top-12 text-2xl text-accent/70">✦</span>
      <span className="absolute -right-1 top-40 z-10 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs text-secondary-foreground shadow-sm sm:right-0"><MapPin className="size-3.5 text-primary" aria-hidden="true" />{siteData.location}</span>
      <div className="relative mx-auto h-105 w-full overflow-hidden sm:h-125 lg:h-140">
        <Image src={heroData.image.src} alt={heroData.image.alt} width={1024} height={1536} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 512px, 45vw" preload className="absolute -bottom-52 left-1/2 h-157 w-auto max-w-none -translate-x-1/2 object-contain sm:-bottom-60 sm:h-187 lg:-bottom-64 lg:h-210" />
      </div>
      <figcaption className="relative mx-2 -mt-2 rounded-2xl border border-border bg-card px-5 py-5 text-center shadow-sm sm:mx-8">
        <p className="mb-2 text-[10px] tracking-widest text-accent sm:text-xs">{heroData.portraitLabel}</p>
        <p className="text-xl font-semibold text-primary sm:text-2xl">{siteData.name}</p>
      </figcaption>
    </figure>
  );
}
