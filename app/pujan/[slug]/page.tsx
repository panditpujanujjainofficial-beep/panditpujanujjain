import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, MapPin, Phone, ChevronRight, BookOpen, Flower2 } from "lucide-react";
import { pujas, phone, whatsapp } from "@/app/data/pujan";
import { PujanHeader, PujanFooter, Eyebrow, Preparation } from "@/components/pujan/site-shell";
import { PujaCard } from "@/components/pujan/puja-catalog";
import { ContactSection } from "@/components/pujan/contact-section";

type Props = { params: Promise<{slug: string}> };
export function generateStaticParams() { return pujas.map(p=>({slug:p.id})); }
export async function generateMetadata({params}:Props):Promise<Metadata> {
  const {slug}=await params;
  const current=pujas.find(p=>p.id===slug);
  return {title: current ? `${current.title} उज्जैन | आचार्य राघव गुरु जी` : "पूजन नहीं मिला", description: current?.description};
}
export default async function PujaPage({params}: Props) {
  const {slug}=await params;
  const puja=pujas.find(p=>p.id===slug);
  if(!puja) notFound();
  const related=pujas.filter(p=>p.id!==puja.id && p.category===puja.category).slice(0,3);
  const suggestions=related.length ? related : pujas.filter(p=>p.id!==puja.id).slice(0,3);
  return <div className="detail-page" style={{"--puja-accent":puja.accent} as CSSProperties}><PujanHeader/><main id="main-content">
    <section className="detail-hero"><div className="pujan-container"><nav className="breadcrumbs" aria-label="ब्रेडक्रंब"><Link href="/">मुख्य पृष्ठ</Link><ChevronRight size={13}/><Link href="/services">पूजन</Link><ChevronRight size={13}/><span aria-current="page">{puja.title}</span></nav><div className="detail-hero-grid"><div><Eyebrow>{puja.category} · उज्जैन</Eyebrow><p className="detail-english">{puja.english}</p><h1>{puja.title}</h1><p className="detail-mantra">{puja.mantra}</p><p className="detail-description">{puja.description} विधि, संकल्प और आवश्यक तैयारी की पूरी जानकारी प्राप्त करें।</p><div className="hero-actions"><a href="#contact" className="pujan-button">इस पूजन की जानकारी लें <ArrowUpRight size={18}/></a><a href={phone} className="pujan-text-link"><Phone size={16}/>गुरु जी से बात करें</a></div><div className="detail-location"><MapPin size={16}/>उज्जैन, मध्य प्रदेश <span>·</span> आचार्य राघव गुरु जी</div></div><div className="detail-hero-image"><Image src={puja.image} alt={puja.imageLabel} fill priority sizes="(max-width: 800px) 90vw, 45vw"/><span className="detail-image-label"><Flower2 size={18}/>{puja.imageLabel}</span></div></div></div></section>
    <nav className="detail-section-nav" aria-label="इस पूजन की जानकारी"><div className="pujan-container">{[["परिचय","overview"],["पूजन की विधि","ritual"],["आवश्यक तैयारी","preparation"],["सामान्य प्रश्न","questions"],["संपर्क करें","contact"]].map(([t,id])=><a href={`#${id}`} key={id}>{t}</a>)}</div></nav>
    <section className="section-space"><div className="pujan-container detail-content-grid"><div><section id="overview" className="detail-article"><Eyebrow>पूजन का परिचय</Eyebrow><h2>{puja.title}<br/><em>को विस्तार से समझें।</em></h2><p>{puja.introduction}</p><div className="purpose-box"><BookOpen size={23}/><div><h3>पूजन का धार्मिक उद्देश्य</h3><p>{puja.purpose}</p></div></div></section>
    <section id="ritual" className="detail-article"><Eyebrow>संकल्प से समापन तक</Eyebrow><h2>पूजन की <em>रूपरेखा।</em></h2><p>यह सामान्य रूपरेखा है। वास्तविक क्रम मंदिर की व्यवस्था और व्यक्तिगत परामर्श में निर्धारित विधि के अनुसार तय किया जाएगा।</p><div className="ritual-steps">{puja.steps.map((s,i)=><article key={s.title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></article>)}</div></section>
    <section className="detail-article" id="preparation"><Eyebrow>पूजा से पहले</Eyebrow><h2>सामग्री एवं <em>आपकी तैयारी।</em></h2><p>{puja.preparation}</p><ul className="offering-list">{puja.offerings.map(o=><li key={o}><Check size={17}/>{o}</li>)}</ul><p className="material-note">यह सामग्री की प्रारंभिक जानकारी है। पूरी सूची, उपलब्ध व्यवस्था और दक्षिणा की पुष्टि संपर्क करके करें।</p></section>
    {puja.video && <section className="detail-article"><Eyebrow>अनुष्ठान की झलक</Eyebrow><h2>पूजन का <em>वीडियो देखें।</em></h2><div className="detail-video"><video controls playsInline preload="none" poster={puja.image} aria-label={`${puja.title} का वीडियो`}><source src={puja.video} type="video/mp4"/><a href={puja.video}>पूजन का वीडियो देखें</a></video></div></section>}
    <section id="questions" className="detail-article"><Eyebrow>आपके प्रश्न</Eyebrow><h2>पूजन से जुड़ी <em>जरूरी बातें।</em></h2><div className="faq-list">{[{q:puja.question,a:puja.answer},{q:"पूजन का समय और दक्षिणा कितनी होगी?",a:"समय और दक्षिणा अनुष्ठान के स्वरूप, सामग्री तथा व्यवस्था के अनुसार तय होते हैं। कोई निश्चित राशि या अवधि यहाँ निर्धारित नहीं है; पूरी जानकारी संपर्क करके लें।"},{q:"पूजन के स्थान की पुष्टि कैसे करें?",a:"उज्जैन आने से पहले गुरु जी से मिलने का स्थान और पहुँचने का समय फोन या WhatsApp पर तय करें। किसी मंदिर की उपलब्धता को बिना पुष्टि के निश्चित न मानें।"}].map(f=><details key={f.q}><summary><span>{f.q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{f.a}</p></details>)}</div><p className="faith-note">पूजन धार्मिक आस्था एवं परंपरा का विषय है। किसी निश्चित परिणाम का दावा नहीं किया जाता।</p></section></div>
    <aside className="detail-aside"><div className="detail-enquiry"><span className="aside-om" aria-hidden="true">ॐ</span><h3>आपके संकल्प के साथ</h3><p>{puja.title} की तिथि, विधि और व्यवस्था की जानकारी सीधे गुरु जी से लें।</p><div><MapPin size={17}/><span>उज्जैन में प्रत्यक्ष पूजन</span></div><div><Check size={17}/><span>तैयारी की व्यक्तिगत जानकारी</span></div><a href={whatsapp(puja.title)} className="pujan-button" target="_blank" rel="noopener noreferrer">WhatsApp पर पूछें <ArrowUpRight size={17}/></a><a href={phone} className="aside-phone"><Phone size={16}/>62608 52654</a><small>तिथि एवं व्यवस्था की पूर्व पुष्टि आवश्यक है।</small></div><div className="aside-links"><h3>अन्य पूजन भी जानें</h3>{suggestions.map(p=><Link href={`/pujan/${p.id}`} key={p.id}>{p.title}<ArrowRight size={16}/></Link>)}</div></aside></div></section>
    <section className="preparation-section section-space"><div className="pujan-container"><div className="center-heading"><Eyebrow>यात्रा की योजना</Eyebrow><h2>उज्जैन आने से पहले <em>यह जान लें।</em></h2></div><Preparation/></div></section>
    <ContactSection pujaTitle={puja.title}/>
    <section className="section-space"><div className="pujan-container"><div className="section-intro"><div><Eyebrow>अन्य आराधनाएँ</Eyebrow><h2>और पूजन <em>के बारे में जानें।</em></h2></div><Link className="pujan-text-link" href="/services">सभी पूजन देखें<ArrowRight size={17}/></Link></div><div className="puja-grid related-grid">{suggestions.map(p=><PujaCard puja={p} key={p.id} index={pujas.indexOf(p)}/>)}</div></div></section>
    </main><PujanFooter/></div>;
}
