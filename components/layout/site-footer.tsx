import { ArrowUp } from "lucide-react";
import { footerData, siteData } from "@/app/data/data";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-wrap items-center justify-between gap-5 py-7 text-xs text-muted-foreground">
        <span className="font-medium text-primary">ॐ {siteData.name}</span>
        <p className="order-3 w-full sm:order-none sm:w-auto">{footerData.description}</p>
        <a href="#home" className="inline-flex items-center gap-2 hover:text-primary">{footerData.backToTop}<ArrowUp className="size-3.5" aria-hidden="true" /></a>
      </Container>
    </footer>
  );
}
