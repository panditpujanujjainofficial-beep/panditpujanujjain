import Image from "next/image";
import { Film, Play } from "lucide-react";

const gallery = [
  { src: "/pujan/agareshwar.jpeg", title: "अंगारेश्वर महादेव में अभिषेक", text: "शिव आराधना में गुरु जी" },
  { src: "/pujan/pujanMangal.jpeg", title: "वैदिक पूजन की वेदी", text: "कलश, पूजन सामग्री एवं संकल्प" },
  { src: "/pujan/punan_place.jpeg", title: "पूजन स्थल की झलक", text: "श्रद्धालुओं के साथ अनुष्ठान" },
];
const videos = [
  { src: "kaalsarp", title: "कालसर्प दोष पूजन", text: "संकल्प एवं वैदिक विधि से अनुष्ठान", duration: "0:39" },
  { src: "bhatpujan", title: "मंगल भात पूजन", text: "मंगल आराधना की एक झलक", duration: "0:12" },
  { src: "rudraabhishek", title: "रुद्राभिषेक पूजन", text: "भगवान शिव का अभिषेक एवं आराधना", duration: "0:36" },
];

export function GalleryContent() {
  return <>
    <div className="photo-gallery">{gallery.map((g, index) => <figure key={g.src}><div><Image src={g.src} alt={`${g.title} — ${g.text}`} fill sizes="(max-width: 600px) 90vw, 33vw" /></div><figcaption><small>चित्र {String(index + 1).padStart(2, "0")} · {g.text}</small><h3>{g.title}</h3></figcaption></figure>)}</div>
    <div className="video-section-heading"><div><span className="video-heading-label"><Film size={16} />अनुष्ठानों के वीडियो</span><h3>पूजन के कुछ वास्तविक पल।</h3></div><span>वीडियो चलाकर अनुष्ठान देखें</span></div>
    <div className="video-gallery">{videos.map((v, index) => <figure key={v.src} className="ritual-video-card"><div className="video-card-top"><span><Play size={13} fill="currentColor" />पूजन की झलक</span><span>{v.duration}</span></div><div className="video-wrap"><video controls playsInline preload="none" poster={`/pujan/${v.src}-poster.jpg`} aria-label={`${v.title} का वीडियो`}><source src={`/pujan/${v.src}.mp4`} type="video/mp4" /><a href={`/pujan/${v.src}.mp4`}>{v.title} का वीडियो देखें</a></video></div><figcaption><span className="video-card-index">{String(index + 1).padStart(2, "0")}</span><div><h3>{v.title}</h3><p>{v.text}</p></div></figcaption></figure>)}</div>
  </>;
}
