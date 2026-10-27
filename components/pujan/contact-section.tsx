import { ArrowUpRight, MapPin, Phone, MessageCircle } from "lucide-react";
import { phone, alternatePhone, whatsapp } from "@/app/data/pujan";
import { contactLocation } from "@/app/data/location";
import { Eyebrow } from "./site-shell";

export function ContactSection({ pujaTitle }: { pujaTitle?: string }) {
  return (
    <section id="contact" className="contact-section section-space">
      <div className="pujan-container contact-grid">
        <div>
          <Eyebrow>आपकी श्रद्धा, हमारा मार्गदर्शन</Eyebrow>
          <h2>
            एक शुभ संकल्प की
            <br />
            <em>शुरुआत करें।</em>
          </h2>
          <p>
            पूजन का चयन, तिथि या तैयारी — अपने प्रश्न सीधे गुरु जी से साझा करें।
            आपकी आवश्यकता के अनुसार पूरी जानकारी प्राप्त करें।
          </p>
          <a className="contact-phone" href={phone}>
            <span>
              <Phone size={23} />
            </span>
            <div>
              <small>गुरु जी से बात करें</small>
              <strong>+91 62608 52654</strong>
            </div>
            <ArrowUpRight size={23} />
          </a>
          <div className="contact-location">
            <MapPin size={20} />
            <p>
              {contactLocation.name}
              <br />
              {contactLocation.address}
              <br />
              <small>आने से पहले मिलने के स्थान की पुष्टि करें।</small>
            </p>
          </div>
        </div>
        <aside className="contact-details-card" aria-labelledby="contact-details-title">
          <h3 id="contact-details-title">संपर्क विवरण</h3>
          <p>आचार्य राघव गुरु जी से सीधे संपर्क करें।</p>
          <dl className="contact-details-list">
            <div>
              <dt><Phone size={20} aria-hidden="true" /> फोन नंबर</dt>
              <dd><a href={phone}>+91 62608 52654</a></dd>
            </div>
            <div>
              <dt><Phone size={20} aria-hidden="true" /> वैकल्पिक नंबर</dt>
              <dd><a href={alternatePhone}>+91 82240 17407</a></dd>
            </div>
            <div>
              <dt><MessageCircle size={20} aria-hidden="true" /> WhatsApp</dt>
              <dd><a href={whatsapp(pujaTitle)} target="_blank" rel="noopener noreferrer">+91 62608 52654 <ArrowUpRight size={16} aria-hidden="true" /></a></dd>
            </div>
            <div>
              <dt><MapPin size={20} aria-hidden="true" /> पूजन का स्थान</dt>
              <dd><address>{contactLocation.name}<br />{contactLocation.address}</address></dd>
            </div>
          </dl>
          <a className="pujan-button" href={phone}><Phone size={18} aria-hidden="true" /> कॉल करें</a>
          <a className="contact-directions" href={contactLocation.mapsUrl} target="_blank" rel="noopener noreferrer">मंदिर का रास्ता देखें <ArrowUpRight size={17} aria-hidden="true" /></a>
          <p className="contact-details-note">आने से पहले पूजन की तिथि, समय एवं मिलने के स्थान की पुष्टि करें।</p>
        </aside>
      </div>
    </section>
  );
}
