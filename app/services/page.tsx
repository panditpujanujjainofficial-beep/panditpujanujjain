import type { Metadata } from "next";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { pujas } from "@/app/data/pujan";
import { ContentPage } from "@/components/pujan/content-page";
import { PujaExplanation } from "@/components/pujan/puja-catalog";

export const metadata: Metadata = {
  title: "पूजा सेवाएँ | आचार्य राघव गुरु जी – उज्जैन",
  description:
    "कालसर्प, मंगल पूजन, महामृत्युंजय जप, बगलामुखी हवन सहित उज्जैन में सभी 17 पूजन एवं अनुष्ठानों की जानकारी।",
};
export default function ServicesPage() {
  return (
    <ContentPage
      image={{
        src: "/pujan/pujanMangal.jpeg",
        caption: "कलश एवं वैदिक पूजन की वेदी",
      }}
      title="पूजा सेवाएँ एवं अनुष्ठान"
      eyebrow="आपके संकल्प के साथ"
      description="ग्रह शांति से शिव आराधना तक — हर पूजन का परिचय, विधि और तैयारी विस्तार से जानें।"
    >
      <div className="pujan-container section-space service-directory">
        {["ग्रह शांति", "शिव आराधना", "हवन एवं अनुष्ठान", "विशेष संस्कार"].map(
          (category, index) => (
            <section key={category} className="service-category">
              <div className="service-category-heading">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{category}</h2>
                  <p>
                    {pujas.filter((puja) => puja.category === category).length}{" "}
                    पूजन एवं अनुष्ठान
                  </p>
                </div>
              </div>
              <div className="service-explanations">
                {pujas
                  .filter((puja) => puja.category === category)
                  .map((puja) => (
                    <PujaExplanation
                      key={puja.id}
                      puja={puja}
                      index={pujas.indexOf(puja)}
                    />
                  ))}
              </div>
            </section>
          ),
        )}
        <div className="catalog-help">
          <BookOpen size={26} />
          <div>
            <strong>पहले पूजन की तैयारी समझें।</strong>
            <p>विधि, सामग्री और संकल्प की जानकारी पूजन गाइड में देखें।</p>
          </div>
          <Link href="/guide">
            पूजन गाइड देखें <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </ContentPage>
  );
}
