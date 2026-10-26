import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Orbit, Sun, Moon, Flame, Flower2, HeartHandshake, Shield, Sparkles, Waves, CircleDot } from "lucide-react";
import { pujas, type Puja } from "@/app/data/pujan";

const ritualIcons: Record<string, typeof Orbit> = {
  "mangal-dosh-shanti": Sun, "angarak-dosh-shanti": Flame,
  "guru-chandal-dosh-shanti": Orbit, "shapit-dosh-shanti": Shield,
  "vish-dosh-shanti": Moon, "ark-kumbh-vivah": HeartHandshake,
  "baglamukhi-havan": Flame, "shani-shanti": Orbit,
  "rahu-ketu-shanti": CircleDot, "pitra-pujan": Flower2,
  "mirchi-havan": Flame, "mahamrityunjay-jaap": Waves,
};
const photoIds = new Set(["kaalsarp-dosh-shanti", "mangalnath-bhat-puja", "angareshwar-mahadev-puja", "rudrabhishek", "navgrah-shanti-puja"]);

export function PujaCard({ puja, index = 0 }: { puja: Puja; index?: number }) {
  const RitualIcon = ritualIcons[puja.id] || Sparkles;
  const hasPhoto = photoIds.has(puja.id);
  return <Link href={`/pujan/${puja.id}`} className="puja-card" style={{"--puja-accent": puja.accent} as React.CSSProperties}>
    <div className={`puja-card-image${hasPhoto ? "" : " ritual-art"}`}>
      {hasPhoto ? <Image src={puja.image} alt={puja.imageLabel} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"/> : <div className="ritual-art-symbol" aria-hidden="true"><RitualIcon size={52} strokeWidth={1}/></div>}
      <span>{puja.category}</span>
      {hasPhoto ? <small className="card-photo-label">{puja.imageLabel}</small> : <small className="ritual-art-caption">॥ श्रद्धा · संकल्प · आराधना ॥</small>}
      <span className="card-arrow"><ArrowUpRight size={21}/></span>
    </div>
    <div className="puja-card-body"><small>{String(index+1).padStart(2,"0")} / {puja.english}</small><h3>{puja.title}</h3><p>{puja.description}</p><span className="card-link">विधि एवं पूरी जानकारी <ArrowRight size={17}/></span></div>
  </Link>;
}
export function PujaCatalog() {
  return <div className="puja-grid">{pujas.map((puja, index) => <PujaCard puja={puja} key={puja.id} index={index} />)}</div>;
}
