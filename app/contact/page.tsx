import type { Metadata } from "next";
import { ContentPage } from "@/components/pujan/content-page";
import { ContactSection } from "@/components/pujan/contact-section";
import { Preparation } from "@/components/pujan/site-shell";
export const metadata: Metadata = { title: "संपर्क एवं पूजन परामर्श | आचार्य राघव गुरु जी", description: "उज्जैन में पूजन एवं ज्योतिष परामर्श के लिए आचार्य राघव गुरु जी से संपर्क करें: +91 62608 52654।" };
export default function ContactPage() {
  return <ContentPage image={{ src: "/panditJi.jpeg", caption: "आचार्य राघव गुरु जी · M.A. ज्योतिष आचार्य" }} title="गुरु जी से संपर्क करें" eyebrow="आपके प्रश्नों के लिए व्यक्तिगत मार्गदर्शन" description="पूजन, जन्मकुंडली, उपलब्ध तिथि या यात्रा की तैयारी — अपनी आवश्यकता सीधे गुरु जी से साझा करें।"><ContactSection /><section className="section-space"><div className="pujan-container"><h2 className="page-section-title">संपर्क करने से पहले यह जानकारी रखें।</h2><Preparation /></div></section></ContentPage>;
}
