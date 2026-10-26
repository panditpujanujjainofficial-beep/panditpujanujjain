import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

export function PujanVideoSection() {
  return (
    <section
      id="pujan-video"
      aria-labelledby="pujan-video-heading"
      className="border-b border-border/70 bg-background py-14 sm:py-20"
    >
      <Container>
        <div className="mx-auto grid max-w-4xl items-center gap-8 sm:grid-cols-[1fr_360px] sm:gap-12">
          <SectionHeading
            id="pujan-video-heading"
            eyebrow="पूजन की झलक"
            heading="कालसर्प दोष पूजन"
            description="कालसर्प दोष पूजन की एक झलक इस वीडियो में देखें।"
          />
          <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-border bg-ritual-deep shadow-sm">
            <video
              controls
              playsInline
              preload="metadata"
              width={478}
              height={850}
              aria-label="कालसर्प दोष पूजन का वीडियो"
              className="block h-auto w-full"
            >
              <source src="/pujan/kaalsarp.mp4" type="video/mp4" />
              आपका ब्राउज़र वीडियो नहीं चला सकता।{" "}
              <a href="/pujan/kaalsarp.mp4">पूजन का वीडियो डाउनलोड करें</a>
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}
