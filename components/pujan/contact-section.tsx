"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowUpRight, MapPin, Phone, MessageCircle } from "lucide-react";
import { phone, pujas } from "@/app/data/pujan";
import { Eyebrow } from "./site-shell";

export function ContactSection({pujaTitle}: {pujaTitle?:string}) {
  const [sent,setSent]=useState(false);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const message=`नमस्ते गुरु जी, मेरा नाम ${String(data.get("name")).trim()} है। मुझे ${data.get("puja")} की जानकारी चाहिए।${data.get("date") ? ` प्रस्तावित तिथि: ${data.get("date")}।` : ""}${data.get("message") ? ` मेरा प्रश्न: ${data.get("message")}` : ""} कृपया विधि, सामग्री, स्थान और दक्षिणा की जानकारी दें।`;
    window.open(`https://wa.me/916260852654?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
    setSent(true);
  }
  return <section id="contact" className="contact-section section-space"><div className="pujan-container contact-grid"><div><Eyebrow>आपकी श्रद्धा, हमारा मार्गदर्शन</Eyebrow><h2>एक शुभ संकल्प की<br/><em>शुरुआत करें।</em></h2><p>पूजन का चयन, तिथि या तैयारी — अपने प्रश्न सीधे गुरु जी से साझा करें। आपकी आवश्यकता के अनुसार पूरी जानकारी प्राप्त करें।</p><a className="contact-phone" href={phone}><span><Phone size={23}/></span><div><small>गुरु जी से बात करें</small><strong>+91 62608 52654</strong></div><ArrowUpRight size={23}/></a><div className="contact-location"><MapPin size={20}/><p>अंगारेश्वर महादेव मंदिर, उज्जैन<br/><small>आने से पहले मिलने के स्थान की पुष्टि करें।</small></p></div></div>
  <form className="pujan-form" onSubmit={submit}><h3>पूजन के बारे में पूछें</h3><p>अपनी जानकारी भरें और WhatsApp पर बातचीत शुरू करें।</p><label htmlFor="contact-name">आपका नाम <span>*</span></label><Input id="contact-name" name="name" placeholder="अपना पूरा नाम लिखें" required maxLength={100}/><div className="form-row"><div><label htmlFor="contact-puja">पूजन का चयन</label><select id="contact-puja" name="puja" defaultValue={pujaTitle || "पूजन के चयन में मार्गदर्शन"}><option>पूजन के चयन में मार्गदर्शन</option>{pujas.map(p=><option key={p.id}>{p.title}</option>)}</select></div><div><label htmlFor="contact-date">प्रस्तावित तिथि <small>(वैकल्पिक)</small></label><Input id="contact-date" name="date" type="date"/></div></div><label htmlFor="contact-message">आपका प्रश्न <small>(वैकल्पिक)</small></label><textarea id="contact-message" name="message" placeholder="पूजन से जुड़ा अपना प्रश्न लिखें…" rows={3} maxLength={1000}/><Button className="pujan-button" type="submit"><MessageCircle size={18}/>WhatsApp पर जानकारी लें<ArrowUpRight size={18}/></Button><small className="form-note">यह WhatsApp खोलेगा। संदेश भेजने और तिथि की पुष्टि के बाद ही व्यवस्था तय होगी।</small>{sent && <p className="form-feedback" role="status">संदेश WhatsApp में तैयार है। यदि नया टैब नहीं खुला, पॉपअप की अनुमति देकर फिर प्रयास करें।</p>}</form></div></section>;
}
