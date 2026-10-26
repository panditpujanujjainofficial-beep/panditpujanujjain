import { Plus } from "lucide-react";

type FaqItemProps = {
  item: {
    id: string;
    question: string;
    answer: string;
  };
};

export function FaqItem({ item }: FaqItemProps) {
  return (
    <details
      id={`faq-${item.id}`}
      name="pujan-faq"
      className="group rounded-2xl border border-border bg-card transition-colors open:border-accent/40 open:bg-secondary/25"
    >
      <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-5 text-sm font-medium leading-7 text-card-foreground transition-colors hover:text-primary sm:px-7 sm:text-base [&::-webkit-details-marker]:hidden">
        {item.question}
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border bg-background text-primary transition-colors group-open:border-primary group-open:bg-primary group-open:text-primary-foreground">
          <Plus aria-hidden="true" className="size-4 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none" />
        </span>
      </summary>
      <div className="px-5 pb-6 sm:px-7">
        <p className="border-t border-border pt-4 text-sm leading-8 text-muted-foreground">
          {item.answer}
        </p>
      </div>
    </details>
  );
}
