import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Flame,
  Flower2,
  HeartHandshake,
  Orbit,
} from "lucide-react";
import { pujas, whatsapp, type PujaCategory } from "@/app/data/pujan";

const groups: { category: PujaCategory; Icon: typeof Orbit; note: string }[] = [
  {
    category: "ग्रह शांति",
    Icon: Orbit,
    note: "ग्रह आराधना एवं दोष निवारण पूजन",
  },
  {
    category: "शिव आराधना",
    Icon: Flower2,
    note: "भगवान शिव की उपासना एवं अभिषेक",
  },
  {
    category: "हवन एवं अनुष्ठान",
    Icon: Flame,
    note: "मंत्रोच्चार एवं अग्नि के साथ संकल्प",
  },
  {
    category: "विशेष संस्कार",
    Icon: HeartHandshake,
    note: "पूर्वजों का स्मरण एवं पारंपरिक संस्कार",
  },
];

export function PujaGuide() {
  return (
    <div className="puja-guide">
      <div className="guide-directory-heading">
        <span>
          <BookOpen size={19} />
          {pujas.length} पूजन एवं अनुष्ठान
        </span>
        <small>परिचय · पूजन · तैयारी</small>
      </div>
      <nav className="guide-directory" aria-label="पूजन विषय सूची">
        {groups.map(({ category, Icon, note }, groupIndex) => {
          const entries = pujas.filter((puja) => puja.category === category);
          return (
            <section
              className="guide-group"
              key={category}
              aria-labelledby={`guide-category-${groupIndex}`}
            >
              <div className="guide-group-heading">
                <span className="guide-group-icon">
                  <Icon size={25} strokeWidth={1.4} />
                </span>
                <div>
                  <h3 id={`guide-category-${groupIndex}`}>{category}</h3>
                  <p>{note}</p>
                </div>
                <small>{String(entries.length).padStart(2, "0")}</small>
              </div>
              <ol className="guide-topic-list">
                {entries.map((puja) => (
                  <li key={puja.id}>
                    <Link href={`/services#${puja.id}`} className="guide-topic">
                      <span className="topic-number">
                        {String(pujas.indexOf(puja) + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <strong>{puja.title}</strong>
                        <small>{puja.english}</small>
                      </span>
                      <ArrowUpRight size={17} />
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          );
        })}
      </nav>
      <div className="guide-help">
        <div>
          <strong>अपने पूजन के बारे में विस्तार से जानें।</strong>
          <p>
            पूजन के नाम पर जाएँ या अपनी आवश्यकता पर सीधे गुरु जी से चर्चा करें।
          </p>
        </div>
        <a
          href={whatsapp()}
          className="pujan-text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          गुरु जी से मार्गदर्शन लें <ArrowUpRight size={17} />
        </a>
      </div>
    </div>
  );
}
