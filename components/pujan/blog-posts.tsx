import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { Suspense } from "react";
import { getMediumPosts, mediumProfile } from "@/lib/medium";
import { Eyebrow } from "./site-shell";

export function BlogPosts({ preview = false }: { preview?: boolean }) {
  return (
    <section id="blog" className="section-space blog-section">
      <div className="pujan-container">
        <div className="section-intro">
          <div>
            <Eyebrow>आस्था, परंपरा एवं मार्गदर्शन</Eyebrow>
            <h2>{preview ? "नवीनतम लेख" : "नवीनतम 10 लेख"}<br /><em>पूजन और ज्योतिष की बातें।</em></h2>
          </div>
          <p>पूजा-पाठ, वैदिक परंपराओं और उज्जैन से जुड़े हमारे Medium लेख पढ़ें।</p>
        </div>
        <Suspense fallback={<p className="blog-status" role="status">लेख लोड हो रहे हैं…</p>}>
          <PostList limit={preview ? 3 : 10} />
        </Suspense>
        {preview && <div className="blog-view-all"><Link href="/blog" className="pujan-button">सभी लेख देखें <ArrowRight size={18} /></Link></div>}
        {!preview && <div className="blog-view-all"><a href={mediumProfile} target="_blank" rel="noopener noreferrer" className="pujan-text-link">और लेख Medium पर देखें <ArrowUpRight size={18} /></a></div>}
      </div>
    </section>
  );
}

async function PostList({ limit }: { limit: number }) {
  const { posts, unavailable } = await getMediumPosts();
  if (unavailable) return <FeedMessage unavailable />;
  if (!posts.length) return <FeedMessage />;

  return (
    <div className="blog-grid">
      {posts.slice(0, limit).map((post) => (
        <article className="blog-card" key={post.id}>
          <a href={post.url} target="_blank" rel="noopener noreferrer" className="blog-card-image" aria-label={`${post.title} — Medium पर पढ़ें (नया टैब)`}>
            {post.image ? <Image src={post.image} alt="" fill sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 30vw" /> : <BookOpen size={48} strokeWidth={1} aria-hidden="true" />}
            <span>Medium पर प्रकाशित</span>
          </a>
          <div className="blog-card-copy">
            {post.publishedAt && <time dateTime={post.publishedAt}>{new Intl.DateTimeFormat("hi-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" }).format(new Date(post.publishedAt))}</time>}
            <h3><a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a></h3>
            <p>{post.excerpt}</p>
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="pujan-text-link">Medium पर पूरा लेख पढ़ें <ArrowUpRight size={17} /><span className="sr-only"> (नया टैब)</span></a>
          </div>
        </article>
      ))}
    </div>
  );
}

function FeedMessage({ unavailable = false }: { unavailable?: boolean }) {
  return <div className="blog-status"><BookOpen size={30} aria-hidden="true" /><p>{unavailable ? "लेख अभी लोड नहीं हो पाए। कृपया कुछ देर बाद फिर देखें या Medium पर पढ़ें।" : "नए लेख जल्द यहाँ दिखाई देंगे। हमारे Medium पेज से जुड़े रहें।"}</p><a href={mediumProfile} target="_blank" rel="noopener noreferrer" className="pujan-text-link">Medium पर जाएँ <ArrowUpRight size={17} /></a></div>;
}
