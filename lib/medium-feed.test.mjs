import assert from "node:assert/strict";
import { test } from "node:test";
import { parseMediumFeed } from "./medium-feed.ts";

const feed = (items) => `<?xml version="1.0"?><rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/"><channel><title>Blog</title>${items}</channel></rss>`;
const item = (title, link, date = "", content = "") => `<item><title><![CDATA[${title}]]></title><link>${link}</link>${date ? `<pubDate>${date}</pubDate>` : ""}<content:encoded><![CDATA[${content}]]></content:encoded></item>`;

test("normalizes RSS, sorts latest first, removes duplicates and extracts plain excerpts", async () => {
  const posts = await parseMediumFeed(feed(
    item("पुराना लेख", "https://medium.com/@author/old", "Mon, 26 Oct 2026 10:00:00 GMT") +
    item("नया लेख", "https://medium.com/@author/new?source=rss", "Tue, 27 Oct 2026 10:00:00 GMT", '<figure><img src="https://cdn-images-1.medium.com/max/1024/photo.jpeg" /></figure><p>पूजन &amp; परंपरा</p>') +
    item("बिना तिथि", "https://medium.com/@author/undated") +
    item("पुराना लेख", "https://medium.com/@author/old?source=duplicate", "Mon, 26 Oct 2026 10:00:00 GMT")
  ));
  assert.equal(posts.length, 3);
  assert.equal(posts[0].title, "नया लेख");
  assert.equal(posts[0].url, "https://medium.com/@author/new");
  assert.equal(posts[0].excerpt, "पूजन & परंपरा");
  assert.equal(posts[0].image, "https://cdn-images-1.medium.com/max/1024/photo.jpeg");
  assert.equal(posts[2].publishedAt, null);
});

test("rejects unsafe post URLs and untrusted image hosts", async () => {
  const posts = await parseMediumFeed(feed(
    item("Unsafe", "javascript:alert(1)") +
    item("Spoofed", "https://medium.com.evil.example/post") +
    item("Safe", "https://medium.com/@author/safe", "", '<img src="https://evil.example/tracker" />')
  ));
  assert.equal(posts.length, 1);
  assert.equal(posts[0].image, null);
});

test("supports empty feeds and rejects malformed XML", async () => {
  assert.deepEqual(await parseMediumFeed(feed("")), []);
  await assert.rejects(parseMediumFeed("<rss><channel>"));
});
