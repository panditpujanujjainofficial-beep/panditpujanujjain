import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, Phone } from "lucide-react";
import { phone } from "@/app/data/pujan";
import { Eyebrow, PujanFooter, PujanHeader } from "./site-shell";

export function ContentPage({ title, eyebrow, description, image, children }: { title: string; eyebrow: string; description: string; image: { src: string; caption: string }; children: React.ReactNode }) {
  return <><PujanHeader /><main id="main-content" className="refined-home content-page"><section className="inner-page-hero"><div className="pujan-container"><nav className="breadcrumbs" aria-label="ब्रेडक्रंब"><Link href="/">मुख्य पृष्ठ</Link><ChevronRight size={14} /><span aria-current="page">{title}</span></nav><div className="inner-page-heading"><div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p><a href={phone} className="inner-page-call"><Phone size={20} /><span><small>व्यक्तिगत मार्गदर्शन</small><strong>गुरु जी से बात करें</strong></span><ArrowUpRight size={19} /></a></div><figure className="inner-page-image"><div><Image src={image.src} alt={image.caption} fill priority sizes="(max-width: 600px) 90vw, 35vw" /></div><figcaption>{image.caption}</figcaption></figure></div></div><span className="inner-page-om" aria-hidden="true">ॐ</span></section>{children}</main><PujanFooter /></>;
}
