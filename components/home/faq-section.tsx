import { MessageCircleQuestion } from "lucide-react";
import { faqData } from "@/app/data/data";
import { Container } from "@/components/layout/container";
import { ActionLink } from "./action-link";
import { FaqItem } from "./faq-item";
import { SectionHeading } from "./section-heading";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-border bg-background py-16 sm:py-24"
    >
      <Container className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.3fr] lg:gap-16">
        <div>
          <span aria-hidden="true" className="mb-6 grid size-14 place-items-center rounded-2xl border border-accent/20 bg-secondary/50 text-accent">
            <MessageCircleQuestion className="size-6" strokeWidth={1.5} />
          </span>
          <SectionHeading
            id="faq-heading"
            eyebrow={faqData.eyebrow}
            heading={faqData.heading}
            description={faqData.description}
          />
          <div className="mt-7">
            <ActionLink href={faqData.consultationHref} variant="outline">
              {faqData.consultationLabel}
            </ActionLink>
          </div>
        </div>
        <div className="space-y-3">
          {faqData.items.map((item) => <FaqItem key={item.id} item={item} />)}
        </div>
      </Container>
    </section>
  );
}
