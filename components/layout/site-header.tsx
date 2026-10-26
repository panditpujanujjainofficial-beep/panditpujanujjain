import { MapPin, Menu } from "lucide-react";
import { navigationData, siteData } from "@/app/data/data";
import { ActionLink } from "@/components/home/action-link";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <>
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-50 rounded-lg bg-card p-4 text-primary focus:not-sr-only">{siteData.accessibility.skipToContent}</a>
      <div className="border-b border-primary/10 bg-secondary/60">
        <Container className="flex min-h-9 items-center justify-center gap-4 py-2 text-center text-[10px] text-secondary-foreground sm:justify-between sm:text-xs">
          <span>{siteData.blessing}</span>
          <span className="hidden items-center gap-1.5 sm:flex"><MapPin className="size-3" aria-hidden="true" />{siteData.location}</span>
        </Container>
      </div>
      <header className="relative z-20 border-b border-border/70 bg-background">
        <Container className="flex min-h-24 items-center justify-between gap-5">
          <a href="#home" className="flex items-center gap-3" aria-label={siteData.name}>
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-primary/20 text-3xl text-primary" aria-hidden="true">ॐ</span>
            <span><strong className="block text-base font-semibold text-primary sm:text-lg">{siteData.name}</strong><span className="mt-1 block text-[11px] text-muted-foreground">{siteData.brandSubtitle}</span></span>
          </a>
          <nav aria-label={siteData.accessibility.mainNavigation} className="hidden items-center gap-7 text-sm lg:flex">
            {navigationData.map((item) => <a className="py-3 transition-colors hover:text-primary" href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <div className="hidden xl:block"><ActionLink href={siteData.consultationHref}>{siteData.consultationLabel}</ActionLink></div>
          <details className="group relative lg:hidden">
            <summary aria-label={siteData.accessibility.openMenu} className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-border text-primary transition-colors hover:bg-secondary [&::-webkit-details-marker]:hidden"><Menu className="size-5" /></summary>
            <nav aria-label={siteData.accessibility.mobileNavigation} className="absolute right-0 top-14 grid w-60 rounded-2xl border border-border bg-popover p-2 text-sm text-popover-foreground shadow-lg">
              {navigationData.map((item) => <a className="rounded-lg px-4 py-3 hover:bg-secondary" href={item.href} key={item.href}>{item.label}</a>)}
            </nav>
          </details>
        </Container>
      </header>
    </>
  );
}
