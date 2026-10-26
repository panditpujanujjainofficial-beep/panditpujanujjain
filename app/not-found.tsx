import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PujanHeader, PujanFooter, Eyebrow } from "@/components/pujan/site-shell";

export default function NotFound() {
  return <><PujanHeader/><main id="main-content" className="section-space"><div className="pujan-container center-heading"><Eyebrow>पृष्ठ उपलब्ध नहीं है · 404</Eyebrow><h1 className="text-4xl leading-relaxed">यह पृष्ठ नहीं मिला।</h1><p>पूजन की जानकारी के लिए मुख्य पृष्ठ पर सभी अनुष्ठान देखें।</p><Link href="/services" className="pujan-button mt-7"><ArrowLeft size={17}/>सभी पूजन देखें</Link></div></main><PujanFooter/></>;
}
