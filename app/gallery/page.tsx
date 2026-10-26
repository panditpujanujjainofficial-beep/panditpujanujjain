import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { galleryPhotos } from "@/app/data/gallery";
import { GalleryPhotos } from "@/components/pujan/gallery-content";
import { PujanFooter, PujanHeader } from "@/components/pujan/site-shell";

export const metadata: Metadata = { title: "सभी चित्र | पंडित पूजा उज्जैन", description: "गुरु जी, वैदिक पूजन, अंगारेश्वर महादेव अभिषेक एवं अनुष्ठानों के सभी उपलब्ध चित्र देखें।" };

export default function GalleryPage() {
  return <><PujanHeader /><main id="main-content" className="refined-home"><section className="gallery-page-heading"><div className="pujan-container"><nav className="breadcrumbs" aria-label="ब्रेडक्रंब"><Link href="/">मुख्य पृष्ठ</Link><ChevronRight size={14} /><span aria-current="page">सभी चित्र</span></nav><h1>आस्था की झलकियाँ</h1><p>{galleryPhotos.length} चित्र · पूरा चित्र देखने के लिए उस पर टैप करें।</p></div></section><section className="gallery-page-body" aria-label="सभी चित्र"><div className="pujan-container"><GalleryPhotos all /></div></section></main><PujanFooter /></>;
}
