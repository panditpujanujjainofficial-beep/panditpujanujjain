import "server-only";
import { cacheLife } from "next/cache";
import { parseMediumFeed } from "./medium-feed";
import type { BlogPost } from "./medium-feed";

export const mediumProfile = "https://medium.com/@panditpujanujjainofficial";
const MAX_BLOG_POSTS = 10;

export async function getMediumPosts() {
  "use cache";

  try {
    // Medium's public RSS feed needs no API key. Keep fetching on the server.
    const response = await fetch("https://medium.com/feed/@panditpujanujjainofficial", {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error(`Medium feed returned ${response.status}`);
    // This caps cached/returned posts, not the XML downloaded from Medium.
    const posts = (await parseMediumFeed(await response.text())).slice(0, MAX_BLOG_POSTS);
    cacheLife({ stale: 300, revalidate: 900, expire: 86400 });
    return { posts, unavailable: false };
  } catch {
    // A temporary outage, including at build time, must not freeze the empty state.
    cacheLife({ stale: 30, revalidate: 60, expire: 300 });
    console.warn("Medium blog feed is temporarily unavailable; retrying after 60 seconds.");
    return { posts: [] as BlogPost[], unavailable: true };
  }
}
