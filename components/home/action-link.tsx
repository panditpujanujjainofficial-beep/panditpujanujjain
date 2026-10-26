import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function ActionLink({ href, children, variant = "primary" }: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}) {
  const colors = variant === "primary"
    ? "border-primary bg-primary text-primary-foreground hover:border-primary/85 hover:bg-primary/85"
    : "border-border bg-background text-foreground hover:border-primary/40 hover:bg-secondary";

  return (
    <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition-colors ${colors}`}>
      {children}<ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
    </a>
  );
}
