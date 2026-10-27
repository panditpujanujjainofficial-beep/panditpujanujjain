# पंडित पूजा उज्जैन

Hindi website for आचार्य राघव गुरु जी, featuring puja services, preparation guidance, ceremony photos and videos, Medium articles, and direct contact options in Ujjain.

## Features

- Responsive home page with service cards and tap-to-call buttons.
- Directory of 17 puja services, grouped by category, with individual service pages.
- Distinct service images, including original ceremony photos and generated ritual illustrations.
- Photo gallery with full-image links and three ceremony videos.
- Contact details with phone, alternative number, WhatsApp, temple address, and directions.
- Medium blog with three latest articles on the homepage and up to ten on `/blog`.
- Custom maroon-and-gold diya SVG favicon, ICO fallback, and Apple touch icon.

## Stack

Next.js 16.4.2 App Router, React 19.3, TypeScript, Tailwind CSS 4, shadcn/ui, and Lucide icons. See `package.json` for dependencies and scripts.

## Local development

Use Node.js 20.9 or later and npm. The feed parser test command below requires Node.js 22.6 or later for TypeScript stripping.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables, database, or API keys are required. Contact actions use `tel:` links and WhatsApp links. The blog fetches Medium's public RSS feed on the server; if Medium is unavailable, the site displays a link to the Medium profile.

## Checks and production

```bash
# Check code style
npm run lint

# Check TypeScript without writing build metadata
npx tsc --noEmit --incremental false

# Run the Medium RSS parser tests (Node.js 22.6+)
node --experimental-strip-types --test lib/medium-feed.test.mjs

# Build and serve production output
npm run build
npm start
```

Run the production server after the build completes. Deploy to hosting that supports Next.js server features; the configuration enables component caching and partial prefetching.

## Pages

| Route | Content |
| --- | --- |
| `/` | Home, service cards, gallery preview, and contact details |
| `/services` | Categorized service directory |
| `/pujan/[slug]` | Individual puja information and preparation |
| `/gallery` | Full photo gallery |
| `/blog` | Latest Medium articles with links to the original posts |
| `/guide` | Puja preparation guide |
| `/about` | Guru ji's introduction |
| `/contact` | Contact details and travel preparation |

## Updating content

| File or directory | Purpose |
| --- | --- |
| `app/data/data.ts` | Site information, introductory copy, and base service content |
| `app/data/pujan.ts` | Service details, image assignments, and shared phone/WhatsApp links |
| `app/data/gallery.ts` | Photo gallery entries and descriptions |
| `app/data/navigation.ts` | Navigation links |
| `app/data/location.ts` | Shared address and Google Maps directions link |
| `app/page.tsx` | Homepage sections and introductory copy |
| `app/pujan/[slug]/page.tsx` | Service detail layout, metadata, and generated route parameters |
| `components/pujan/puja-catalog.tsx` | Service cards and call buttons |
| `components/pujan/contact-section.tsx` | Shared contact details panel |
| `components/pujan/site-shell.tsx` | Header, footer, and shared site elements |
| `app/pujan.css` | Site styling and responsive layouts |
| `lib/medium.ts` | Medium profile, RSS feed URL, post limit, and server cache settings |
| `lib/medium-feed.ts` | RSS parsing, article sorting, and URL validation |
| `components/pujan/blog-posts.tsx`, `app/blog.css` | Shared blog rendering and styling |
| `app/layout.tsx` | Root layout and default metadata |
| `public/pujan/` | Photos, generated service images, video posters, and MP4 files |
| `public/brand/` | Brand logos and image generation prompts |
| `app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png` | Browser and device icons |

### Gallery and service images

Place images in `public/pujan/` with descriptive filenames. Add gallery entries to `app/data/gallery.ts` using `/pujan/filename.ext` paths, Hindi titles, and descriptions. Adding a file alone does not add it to the gallery.

Service image assignments live in `cardImages` in `app/data/pujan.ts`. Set `image`, `imageLabel`, and `imageStyle` when adding an image so the card displays it. Keep generated scenes described as illustrations (`चित्रण`) rather than actual ceremony photographs. The `photo` rendering style is also used for generated photographic scenes to fill the card frame.

Generated service assets use optimized WebP files. Their prompts are recorded in `public/brand/service-image-prompts.json`.

### Contact details

- Primary phone and WhatsApp: **+91 62608 52654**
- Alternative phone: **+91 82240 17407**
- Location: **Acharya raghav guru ji / kalsarp dosh pujan ujjain, Angareshwar mahadev mandir, Ujjain, Madhya Pradesh 456006**. The shared address and Google Maps directions link live in `app/data/location.ts`.

The shared contact section displays contact details instead of an enquiry form. Visitors can call directly, open WhatsApp, or view temple directions. Confirm the meeting location and puja arrangements before travel.

When changing numbers, update the shared links in `app/data/pujan.ts` and the displayed numbers in the contact section, footer, metadata, and other relevant content. Search for the old number to catch hardcoded copies. The alternative number is a phone contact; WhatsApp currently uses the primary number.

### Medium blog

The homepage displays up to three latest Medium posts; `/blog` lists up to ten latest posts supplied by Medium's public RSS feed. Medium may limit the feed to recent posts, so the blog page also links back to Medium. Article links open the original post on Medium.

The configured profile is [@panditpujanujjainofficial](https://medium.com/@panditpujanujjainofficial). To change accounts, update both `mediumProfile` and the RSS URL in `lib/medium.ts`.

`lib/medium.ts` fetches the feed exclusively on the server using a `server-only` boundary. No API key or environment variable is required. `MAX_BLOG_POSTS = 10` caps the parsed posts cached and returned by the server. The RSS request still downloads Medium's full XML response; this is a result limit, not a network fetch limit. Successful results are cached and become eligible for background refresh after 15 minutes when the site receives traffic. Temporary failures display a Medium link and become eligible for retry after one minute. Requests time out after ten seconds.

`lib/medium-feed.ts` parses RSS into plain excerpts and permits only HTTPS Medium article links and Medium CDN images. `components/pujan/blog-posts.tsx` renders the shared feed; `app/blog.css` styles the cards.

Blog images use Next.js image optimization. The allowed Medium CDN hosts are configured in `next.config.ts`; image URL validation lives in `lib/medium-feed.ts`.

## Repository guidance

Follow `AGENTS.md`. Before changing Next.js code, read the relevant version-specific documentation in `node_modules/next/dist/docs/`.
