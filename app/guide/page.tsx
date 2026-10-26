import type { Metadata } from "next";
import { ContentPage } from "@/components/pujan/content-page";
import { PujaGuide } from "@/components/pujan/puja-guide";
import { Eyebrow, Preparation } from "@/components/pujan/site-shell";
export const metadata: Metadata = { title: "पूजन गाइड एवं विषय सूची | आचार्य राघव गुरु जी", description: "सभी पूजन की विषय सूची, विधि, सामग्री एवं उज्जैन आने से पहले की तैयारी जानें।" };
export default function GuidePage() {
  return <ContentPage image={{ src: "/pujan/pujan.jpeg", caption: "अनुष्ठान के लिए तैयार पूजन सामग्री" }} title="सम्पूर्ण पूजन गाइड" eyebrow="विधि, संकल्प एवं तैयारी" description="विषय सूची से अपने पूजन की विस्तृत जानकारी प्राप्त करें। यात्रा और अनुष्ठान की तैयारी पूरी जानकारी के साथ करें।"><section className="section-space"><div className="pujan-container"><PujaGuide /></div></section><section className="preparation-section section-space"><div className="pujan-container"><div className="section-intro"><div><Eyebrow>उज्जैन आने से पहले</Eyebrow><h2>आपकी यात्रा की तैयारी</h2></div><p>तिथि, समय और मिलने के स्थान की पुष्टि के बाद अपनी यात्रा तय करें।</p></div><Preparation /></div></section></ContentPage>;
}
