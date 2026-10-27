import Parser from "rss-parser";

export type BlogPost = {
  id: string;
  title: string;
  url: string;
  excerpt: string;
  publishedAt: string | null;
  image: string | null;
};

function safeUrl(value: string | undefined, image = false) {
  if (!value) return null;
  try {
    const url = new URL(value);
    const allowed = image
      ? /^cdn-images-\d+\.medium\.com$/.test(url.hostname)
      : url.hostname === "medium.com";
    if (url.protocol !== "https:" || !allowed) return null;
    url.search = "";
    url.hash = "";
    return url.href;
  } catch {
    return null;
  }
}

export async function parseMediumFeed(xml: string): Promise<BlogPost[]> {
  const feed = await new Parser().parseString(xml);
  const posts = new Map<string, BlogPost>();

  for (const item of feed.items) {
    const url = safeUrl(item.link);
    const title = item.title?.trim();
    if (!url || !title) continue;
    const content = item["content:encoded"] ?? item.content ?? "";
    const snippet = item["content:encodedSnippet"] ?? item.contentSnippet ?? "";
    const text = snippet.replace(/\s+/g, " ").trim();
    const timestamp = Date.parse(item.isoDate ?? item.pubDate ?? "");
    const imageSrc = content.match(/<img\b[^>]*\bsrc=["']([^"']+)["']/i)?.[1];
    posts.set(url, {
      id: url,
      title,
      url,
      excerpt: text.length > 190 ? `${text.slice(0, 190).trimEnd()}…` : text,
      publishedAt: Number.isNaN(timestamp) ? null : new Date(timestamp).toISOString(),
      image: safeUrl(imageSrc, true),
    });
  }

  return [...posts.values()].sort(
    (a, b) => (b.publishedAt ? Date.parse(b.publishedAt) : 0) -
      (a.publishedAt ? Date.parse(a.publishedAt) : 0),
  );
}
