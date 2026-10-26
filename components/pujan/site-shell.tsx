import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, MessageCircle, ArrowUp } from "lucide-react";
import { phone, pujas, whatsapp } from "@/app/data/pujan";
import { ResponsiveNavigation } from "./mobile-navigation";

export function PujanHeader() {
  return <>
    <a className="skip-link" href="#main-content">मुख्य सामग्री पर जाएँ</a>
    <div className="blessing-bar"><div className="pujan-container"><span>॥ श्री गणेशाय नमः । श्री महाकालेश्वराय नमः ॥</span><span><MapPin size={13} /> महाकाल की नगरी, उज्जैन</span></div></div>
    <header className="pujan-header"><div className="pujan-container header-inner">
      <Link href="/" className="pujan-brand"><span className="brand-mark" aria-hidden="true">ॐ</span><span><strong>आचार्य राघव गुरु जी</strong><small>M.A. ज्योतिष आचार्य · उज्जैन</small></span></Link>
      <ResponsiveNavigation />
    </div></header>
  </>;
}

export function Eyebrow({children}: {children: React.ReactNode}) { return <p className="pujan-eyebrow"><span aria-hidden="true">✦</span>{children}</p>; }
export function PujanFooter() {
  return <><footer className="pujan-footer"><div className="pujan-container footer-grid">
    <div><Link href="/" className="pujan-brand"><span className="brand-mark" aria-hidden="true">ॐ</span><span><strong>आचार्य राघव गुरु जी</strong><small>श्रद्धा · परंपरा · समर्पण</small></span></Link><p>15 वर्षों से उज्जैन की पावन भूमि पर ज्योतिष, वैदिक पूजन एवं अनुष्ठान। आपकी श्रद्धा और संकल्प के साथ।</p><a className="footer-call" href={phone}><Phone size={16}/> +91 62608 52654</a></div>
    <div><h3>प्रमुख पूजन</h3>{pujas.filter(p=>["kaalsarp-dosh-shanti","mangal-dosh-shanti","mahamrityunjay-jaap","rudrabhishek"].includes(p.id)).map(p=><Link key={p.id} href={`/pujan/${p.id}`}>{p.title}</Link>)}</div>
    <div><h3>आपकी यात्रा</h3><Link href="/about">गुरु जी का परिचय</Link><Link href="/#process">पूजन की प्रक्रिया</Link><Link href="/#gallery">पूजन की झलकियाँ</Link><Link href="/guide">पूजन गाइड</Link><Link href="/contact">संपर्क करें</Link></div>
    <div><h3>पूजन के लिए संपर्क</h3><p>अंगारेश्वर महादेव मंदिर<br/>उज्जैन, मध्य प्रदेश</p><a href={whatsapp()} target="_blank" rel="noopener noreferrer">WhatsApp पर जानकारी लें <ArrowUpRight size={14}/></a><small>यात्रा से पहले तिथि एवं स्थान की पुष्टि करें।</small></div>
  </div><div className="pujan-container footer-bottom"><span>© आचार्य राघव गुरु जी।</span><span>॥ सर्वे भवन्तु सुखिनः ॥</span><a href="#main-content">ऊपर जाएँ <ArrowUp size={13}/></a></div></footer>
  <a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp पर पूजन की जानकारी लें"><MessageCircle size={23}/><span>पूजन की जानकारी</span></a></>;
}

export function Preparation() {
  return <div className="preparation-grid">{[
    ["01", "तिथि एवं समय", "यात्रा की योजना से पहले पूजन की तिथि, पहुँचने का समय और स्थान तय करें।"],
    ["02", "सामग्री एवं व्यवस्था", "पूजा में सम्मिलित सामग्री, अपनी तैयारी और दक्षिणा का विवरण पहले प्राप्त करें।"],
    ["03", "नाम एवं जन्म विवरण", "संकल्प के लिए नाम और उपलब्ध गोत्र बताएँ। ग्रह संबंधी पूजा के लिए जन्म विवरण रखें।"],
    ["04", "परिवार की सहभागिता", "साथ आने वाले सदस्यों की संख्या, वस्त्र और अन्य निर्देश पहले पूछ लें।"],
  ].map(([n,t,d])=><div key={n}><span className="step-number">{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>;
}
