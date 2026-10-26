import Image from "next/image";
import { ArrowUpRight, Film, Play } from "lucide-react";

import { galleryPhotos } from "@/app/data/gallery";

const videos = [
  {
    src: "kaalsarp",
    title: "कालसर्प दोष पूजन",
    text: "संकल्प एवं वैदिक विधि से अनुष्ठान",
    duration: "0:39",
  },
  {
    src: "bhatpujan",
    title: "मंगल भात पूजन",
    text: "मंगल आराधना की एक झलक",
    duration: "0:12",
  },
  {
    src: "rudraabhishek",
    title: "रुद्राभिषेक पूजन",
    text: "भगवान शिव का अभिषेक एवं आराधना",
    duration: "0:36",
  },
];

export function GalleryContent() {
  return (
    <>
      <GalleryPhotos />
      <div className="gallery-more">
        <p>गुरु जी एवं अनुष्ठानों के और चित्र देखें।</p>
        <a href="/gallery" className="pujan-button">
          सभी चित्र देखें <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="video-section-heading">
        <div>
          <span className="video-heading-label">
            <Film size={16} />
            अनुष्ठानों के वीडियो
          </span>
          <h3>पूजन के कुछ वास्तविक पल।</h3>
        </div>
        <span>वीडियो चलाकर अनुष्ठान देखें</span>
      </div>
      <div className="video-gallery">
        {videos.map((v, index) => (
          <figure key={v.src} className="ritual-video-card">
            <div className="video-card-top">
              <span>
                <Play size={13} fill="currentColor" />
                पूजन की झलक
              </span>
              <span>{v.duration}</span>
            </div>
            <div className="video-wrap">
              <video
                controls
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                playsInline
                preload="none"
                poster={`/pujan/${v.src}-poster.jpg`}
                aria-label={`${v.title} का वीडियो`}
              >
                <source src={`/pujan/${v.src}.mp4`} type="video/mp4" />
                <a href={`/pujan/${v.src}.mp4`}>{v.title} का वीडियो देखें</a>
              </video>
            </div>
            <figcaption>
              <span className="video-card-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

export function GalleryPhotos({ all = false }: { all?: boolean }) {
  const photos = all ? galleryPhotos : galleryPhotos.slice(0, 3);
  return (
    <div className={`photo-gallery${all ? " all-photo-gallery" : ""}`}>
      {photos.map((g) => (
        <figure key={g.src}>
          <div>
            <a
              href={g.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${g.title} — पूरा चित्र खोलें`}
            >
              <Image
                src={g.src}
                alt={`${g.title} — ${g.text}`}
                fill
                sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 33vw"
              />
            </a>
          </div>
        </figure>
      ))}
    </div>
  );
}
