import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  Flower2,
  HandHeart,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { faqData } from "@/app/data/data";
import { phone, whatsapp } from "@/app/data/pujan";
import {
  PujanHeader,
  PujanFooter,
  Eyebrow,
} from "@/components/pujan/site-shell";
import { PujaCatalog } from "@/components/pujan/puja-catalog";
import { GalleryContent } from "@/components/pujan/gallery-content";
import { PujaGuide } from "@/components/pujan/puja-guide";
import { ContactSection } from "@/components/pujan/contact-section";
import { BlogPosts } from "@/components/pujan/blog-posts";

export default function Home() {
  return (
    <>
      <PujanHeader />
      <main id="main-content" className="refined-home">
        <section className="pujan-hero" id="home">
          <div className="pujan-container hero-grid">
            <div className="hero-copy">
              <Eyebrow>महाकाल की नगरी से, आपकी आस्था तक</Eyebrow>
              <p className="hero-kicker">वैदिक पूजन · ज्योतिष · अनुष्ठान</p>
              <h1>
                आचार्य राघव
                <br />
                <em>गुरु जी – उज्जैन</em>
              </h1>
              <p className="hero-role">M.A. ज्योतिष आचार्य</p>
              <p className="hero-specialty">
                शिव शक्ति अनुष्ठान ज्योतिष केंद्र
              </p>
              <p className="hero-description">
                <strong>
                  15 वर्षों से ज्योतिष एवं वैदिक पूजन में समर्पित।
                </strong>{" "}
                भगवान महाकाल की पावन नगरी में श्रद्धा, मंत्रोच्चार और वैदिक
                परंपराओं के साथ आपके हर शुभ संकल्प का मार्गदर्शन।
              </p>
              <div className="hero-actions">
                <a href="#contact" className="pujan-button">
                  पूजन के लिए संपर्क करें <ArrowUpRight size={18} />
                </a>
                <a href={phone} className="pujan-text-link">
                  <Phone size={17} />
                  गुरु जी से बात करें
                </a>
              </div>
              <div className="hero-assurance">
                <span>
                  <Check size={15} />
                  15 वर्षों का अनुभव
                </span>
                <span>
                  <MapPin size={15} />
                  उज्जैन में प्रत्यक्ष पूजन
                </span>
              </div>
            </div>
            <div className="guru-hero-visual">
              <div className="portrait-halo" aria-hidden="true">
                <span>ॐ</span>
              </div>
              <div className="guru-cutout">
                <Image
                  src="/heroPage.png"
                  alt="ज्योतिषाचार्य आचार्य राघव गुरु जी, उज्जैन"
                  fill
                  preload
                  sizes="(max-width: 600px) 90vw, 45vw"
                />
              </div>
              <div className="experience-seal">
                <Award size={24} />
                <strong>15</strong>
                <span>वर्षों का अनुभव</span>
              </div>
              <div className="portrait-plaque">
                <span>॥ श्री महाकालेश्वराय नमः ॥</span>
                <strong>आस्था से संकल्प, विधि से पूजन</strong>
              </div>
            </div>
          </div>
          <div className="hero-bottom-line">
            <span>॥ ॐ नमः शिवाय ॥</span>
          </div>
        </section>
        <section className="values-strip" aria-label="हमारी विशेषताएँ">
          <div className="pujan-container">
            {[
              {
                Icon: Award,
                title: "15 वर्षों का अनुभव",
                text: "पूजन एवं ज्योतिष में समर्पित",
              },
              {
                Icon: BookOpen,
                title: "वैदिक विधि-विधान",
                text: "मंत्रोच्चार एवं परंपरा के साथ",
              },
              {
                Icon: MapPin,
                title: "पावन नगरी उज्जैन",
                text: "महाकाल की भूमि पर आराधना",
              },
              {
                Icon: HandHeart,
                title: "व्यक्तिगत मार्गदर्शन",
                text: "आपके संकल्प के अनुसार",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title}>
                <Icon size={27} strokeWidth={1.5} />
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section section-space">
          <div className="pujan-container about-grid">
            <div className="about-images">
              <div className="about-image-main">
                <Image
                  src="/panditJi.jpeg"
                  alt="आचार्य राघव गुरु जी वैदिक पूजन के दौरान"
                  fill
                  sizes="(max-width: 600px) 90vw, 40vw"
                />
              </div>
              <div className="about-image-small">
                <Image
                  src="/pujan/agareshwar.jpeg"
                  alt="गुरु जी द्वारा शिवलिंग का अभिषेक"
                  fill
                  sizes="180px"
                />
              </div>
              <div className="about-image-label">
                <span>ज्योतिषाचार्य · उज्जैन</span>
                <Flower2 size={20} />
              </div>
            </div>
            <div className="about-copy">
              <Eyebrow>गुरु जी का परिचय</Eyebrow>
              <h2>
                15 वर्षों की साधना,
                <br />
                <em>आपकी आस्था के साथ।</em>
              </h2>
              <h3>आचार्य राघव गुरु जी – उज्जैन</h3>
              <div className="qualification-badge">
                <Award size={17} />
                M.A. ज्योतिष आचार्य<span>·</span>15 वर्षों का अनुभव
              </div>
              <p>
                आचार्य राघव गुरु जी पिछले 15 वर्षों से पवित्र नगरी उज्जैन में
                धार्मिक पूजा-पाठ एवं वैदिक अनुष्ठान कर रहे हैं। भगवान महाकाल की
                नगरी में गुरु जी श्रद्धा, आस्था और वैदिक परंपराओं के अनुसार
                विभिन्न धार्मिक पूजाएँ संपन्न कराते हैं।
              </p>
              <p>
                कालसर्प दोष पूजा, मंगल दोष निवारण, मंगल भात पूजा, अंगारेश्वर
                महादेव पूजा, महामृत्युंजय जप एवं अन्य अनुष्ठानों में विधि-विधान,
                मंत्रोच्चार और धार्मिक परंपराओं का विशेष ध्यान रखा जाता है।
              </p>
              <ul className="about-checks">
                {[
                  "ज्योतिष एवं जन्मकुंडली का व्यक्तिगत मार्गदर्शन",
                  "पूजन की विधि, सामग्री एवं तिथि की पूरी जानकारी",
                  "श्रद्धा एवं वैदिक परंपराओं के साथ अनुष्ठान",
                ].map((t) => (
                  <li key={t}>
                    <Check size={17} />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={whatsapp("ज्योतिष परामर्श")}
                target="_blank"
                rel="noopener noreferrer"
                className="pujan-text-link"
              >
                गुरु जी से परामर्श लें <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="section-space catalog-section" id="pujas">
          <div className="pujan-container">
            <div className="section-intro">
              <div>
                <Eyebrow>हमारी पूजा सेवाएँ</Eyebrow>
                <h2>
                  आपका संकल्प।
                  <br />
                  <em>हमारा वैदिक मार्गदर्शन।</em>
                </h2>
              </div>
              <p>
                ग्रह शांति, शिव आराधना और विशेष अनुष्ठान — अपने पूजन की विधि एवं
                तैयारी जानें और गुरु जी से तिथि तय करें।
              </p>
            </div>
            <PujaCatalog />
            <div className="catalog-help">
              <Sparkles size={25} />
              <div>
                <strong>अपने लिए सही पूजन चुनने में सहायता चाहिए?</strong>
                <p>
                  अपनी जन्मकुंडली और आवश्यकता के बारे में गुरु जी से चर्चा करें।
                </p>
              </div>
              <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
                व्यक्तिगत मार्गदर्शन लें <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="section-space gallery-section section-maroon"
          id="gallery"
        >
          <div className="pujan-container">
            <div className="section-intro">
              <div>
                <Eyebrow>आस्था के कुछ पल</Eyebrow>
                <h2>
                  पूजन की झलकियाँ,
                  <br />
                  <em>परंपरा का अनुभव।</em>
                </h2>
              </div>
              <p>
                गुरु जी के पूजन, अनुष्ठान की तैयारी और श्रद्धालुओं की सहभागिता
                के वास्तविक दृश्य।
              </p>
            </div>
            <GalleryContent />
          </div>
        </section>

        <section className="why-section section-space">
          <div className="pujan-container">
            <div className="center-heading">
              <Eyebrow>विश्वास की परंपरा</Eyebrow>
              <h2>
                श्रद्धा आपकी,
                <br />
                <em>समर्पण हमारा।</em>
              </h2>
              <p>
                पूजन की तैयारी से अनुष्ठान के समापन तक व्यक्तिगत मार्गदर्शन।
              </p>
            </div>
            <div className="why-grid">
              {[
                {
                  Icon: Award,
                  title: "अनुभवी ज्योतिषाचार्य",
                  text: "15 वर्षों से ज्योतिष, पूजा-पाठ और वैदिक अनुष्ठानों का अनुभव।",
                },
                {
                  Icon: BookOpen,
                  title: "विधि-विधान से पूजन",
                  text: "संकल्प, मंत्रोच्चार और धार्मिक परंपराओं का विशेष ध्यान।",
                },
                {
                  Icon: HandHeart,
                  title: "आपके लिए मार्गदर्शन",
                  text: "आपकी आवश्यकता को समझकर उपयुक्त पूजा और तैयारी की जानकारी।",
                },
              ].map(({ Icon, title, text }) => (
                <article key={title}>
                  <span>
                    <Icon size={27} strokeWidth={1.4} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="guide" className="section-space guide-section">
          <div className="pujan-container">
            <div className="section-intro">
              <div>
                <Eyebrow>समझें, चुनें और श्रद्धा से जुड़ें</Eyebrow>
                <h2>
                  विषय सूची
                  <br />
                  <em>हर पूजन की जानकारी, एक जगह।</em>
                </h2>
              </div>
              <p>
                अपने संकल्प के अनुसार पूजन चुनें। विधि, आवश्यक सामग्री और तैयारी
                की जानकारी पाएँ।
              </p>
            </div>
            <PujaGuide />
          </div>
        </section>

        <section id="process" className="process-section section-space">
          <div className="pujan-container">
            <div className="center-heading">
              <Eyebrow>पूजन की सहज प्रक्रिया</Eyebrow>
              <h2>
                संपर्क से संकल्प तक,
                <br />
                <em>हर कदम पर साथ।</em>
              </h2>
              <p>उज्जैन आने से पहले अपनी तिथि और व्यवस्था तय करें।</p>
            </div>
            <div className="process-grid">
              {[
                [
                  "01",
                  "गुरु जी से बात करें",
                  "फोन या WhatsApp पर अपने प्रश्न एवं पूजन का उद्देश्य बताएँ।",
                ],
                [
                  "02",
                  "पूजन एवं तिथि चुनें",
                  "कुंडली, संकल्प और उपलब्धता के अनुसार तिथि पर चर्चा करें।",
                ],
                [
                  "03",
                  "पूरी तैयारी जानें",
                  "सामग्री, स्थान, समय और दक्षिणा की जानकारी प्राप्त करें।",
                ],
                [
                  "04",
                  "श्रद्धा से सहभागी बनें",
                  "गुरु जी के मार्गदर्शन में वैदिक विधि से पूजन करें।",
                ],
              ].map(([n, t, d]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space faq-section" id="faq">
          <div className="pujan-container faq-grid">
            <div>
              <Eyebrow>अक्सर पूछे जाने वाले प्रश्न</Eyebrow>
              <h2>
                पूजन से पहले,
                <br />
                <em>जान लें जरूरी बातें।</em>
              </h2>
              <p>उज्जैन की यात्रा और पूजन से जुड़े आपके प्रश्नों का समाधान।</p>
              <a href={phone} className="pujan-text-link">
                <Phone size={17} />
                गुरु जी से अपना प्रश्न पूछें <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="faq-list">
              {faqData.items
                .filter((f) => f.id !== "online-kundli")
                .map((f, i) => (
                  <details key={f.id}>
                    <summary>
                      <span>
                        <small>{String(i + 1).padStart(2, "0")}</small>
                        {f.question}
                      </span>
                      <span className="faq-plus" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
            </div>
          </div>
        </section>
        <BlogPosts preview />
        <section className="consultation-banner">
          <div className="pujan-container">
            <Flower2 size={38} strokeWidth={1.2} />
            <div>
              <h2>उज्जैन में पूजन का शुभ संकल्प लें।</h2>
              <p>तिथि, विधि और व्यक्तिगत परामर्श के लिए गुरु जी से जुड़ें।</p>
            </div>
            <a
              href={whatsapp()}
              className="pujan-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp पर संपर्क करें <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <ContactSection />
      </main>
      <PujanFooter />
    </>
  );
}
