import Image from "next/image";
import {
  ArrowUpRight,
  Phone,
  Orbit,
  Sun,
  Moon,
  Flame,
  Flower2,
  HeartHandshake,
  Shield,
  Sparkles,
  Waves,
  CircleDot,
} from "lucide-react";
import { pujas, phone, type Puja } from "@/app/data/pujan";

const ritualIcons: Record<string, typeof Orbit> = {
  "mangal-dosh-shanti": Sun,
  "angarak-dosh-shanti": Flame,
  "guru-chandal-dosh-shanti": Orbit,
  "shapit-dosh-shanti": Shield,
  "vish-dosh-shanti": Moon,
  "ark-kumbh-vivah": HeartHandshake,
  "baglamukhi-havan": Flame,
  "shani-shanti": Orbit,
  "rahu-ketu-shanti": CircleDot,
  "pitra-pujan": Flower2,
  "mirchi-havan": Flame,
  "mahamrityunjay-jaap": Waves,
};

function PujaVisual({ puja }: { puja: Puja }) {
  const RitualIcon = ritualIcons[puja.id] || Sparkles;
  const hasPhoto = Boolean(puja.imageStyle);
  return (
    <div className={`puja-card-image${hasPhoto ? "" : " ritual-art"}`}>
      {hasPhoto ? (
        <Image
          src={puja.image}
          alt={puja.imageLabel}
          className={
            puja.imageStyle === "illustration"
              ? "service-illustration"
              : undefined
          }
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
      ) : (
        <div className="ritual-art-symbol" aria-hidden="true">
          <RitualIcon size={52} strokeWidth={1} />
        </div>
      )}
      <span>{puja.category}</span>
      {hasPhoto ? (
        <small className="card-photo-label">{puja.imageLabel}</small>
      ) : (
        <small className="ritual-art-caption">
          ॥ श्रद्धा · संकल्प · आराधना ॥
        </small>
      )}
      <span className="card-arrow">
        <ArrowUpRight size={21} />
      </span>
    </div>
  );
}

export function PujaCard({ puja, index = 0 }: { puja: Puja; index?: number }) {
  return (
    <article
      className="puja-card"
      style={{ "--puja-accent": puja.accent } as React.CSSProperties}
    >
      <PujaVisual puja={puja} />
      <div className="puja-card-body">
        <small>
          {String(index + 1).padStart(2, "0")} / {puja.english}
        </small>
        <h3>{puja.title}</h3>
        <p>{puja.description}</p>
        <a
          href={phone}
          className="pujan-button puja-call-button"
          aria-label={`${puja.title} के लिए कॉल करें`}
        >
          <Phone size={17} aria-hidden="true" /> कॉल करें
        </a>
      </div>
    </article>
  );
}
export function PujaCatalog() {
  return (
    <div className="puja-grid">
      {pujas.map((puja, index) => (
        <PujaCard puja={puja} key={puja.id} index={index} />
      ))}
    </div>
  );
}

export function PujaExplanation({
  puja,
  index,
}: {
  puja: Puja;
  index: number;
}) {
  return (
    <article
      id={puja.id}
      className="service-explanation"
      style={{ "--puja-accent": puja.accent } as React.CSSProperties}
    >
      <PujaVisual puja={puja} />
      <div className="service-explanation-copy">
        <span className="service-number">
          {String(index + 1).padStart(2, "0")} · {puja.english}
        </span>
        <h3>{puja.title}</h3>
        <p>{puja.introduction}</p>
        <div className="service-ritual-note">
          <strong>पूजन की रूपरेखा</strong>
          <p>{puja.steps.map((step) => step.title).join(" · ")}</p>
        </div>
        <a
          href={phone}
          className="pujan-button puja-call-button"
          aria-label={`${puja.title} के लिए कॉल करें`}
        >
          <Phone size={17} aria-hidden="true" /> कॉल करें
        </a>
      </div>
    </article>
  );
}
