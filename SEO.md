# SEO & AI Discoverability — Plan

_Status: not started. Captured 2026-06-03 to revisit. This is a plan/backlog, not implemented work._

## Current baseline (audit)
Astro **static** site (good — content is server-rendered HTML, readable by Google + AI engines). But the SEO scaffolding is essentially absent:

- `<head>` has only `<title>Every Day Future</title>` + `<html lang="en">`.
- ❌ No `<meta name="description">`
- ❌ No Open Graph / Twitter Card tags (shared links render blank in iMessage / Slack / LinkedIn / social)
- ❌ No canonical URLs
- ❌ No JSON-LD structured data
- ❌ No `robots.txt`
- ❌ No `sitemap.xml` (no `@astrojs/sitemap` integration)
- ❌ `site:` is unset in `astro.config.mjs` (required for canonical + sitemap generation)
- ❌ No favicon / web manifest / apple-touch-icon found in `public/`
- ⚠️ Hero rotation images are large PNGs (~1–2MB each) — Core Web Vitals risk
- ✅ `lang="en"`, ✅ static HTML, ✅ FAQ / bio / offerings are all in the DOM (not JS-rendered)

## Plan (prioritized)

### 1. Technical SEO foundation (high impact, mostly mechanical)
- Set `site:` in `astro.config.mjs` (needed for canonical + sitemap).
- Add `@astrojs/sitemap` → `sitemap.xml`; add `public/robots.txt` pointing to it.
- Per-page `<title>` + `<meta name="description">` via Layout props — unique for home, `/begin`, `/privacy`, `/terms`.
- Open Graph + Twitter Card tags (title, description, image, url, type) + a **1200×630 share image**.
- Canonical URLs.
- Favicon + apple-touch-icon + web manifest.

### 2. Structured data (JSON-LD) — biggest lever for Google rich results AND AI extraction
- `Organization` / `LocalBusiness` — LTW Coaching LLC dba Every Day Future; founder; service area; contact; `sameAs` socials.
- `Person` — Taylor Winters (coach + credentials: UC Berkeley Haas exec coaching cert, NLP, DBT, IPNB).
- `Service` / `Offer` — the 4 offerings (1:1, Orgs & Teams, Group, Self-led).
- **`FAQPage`** — the S7 FAQ maps 1:1; strong for AI answers + Google.
- (minor) `BreadcrumbList`.
- Verify with Google Rich Results Test.

### 3. AI discoverability (ChatGPT browse, Perplexity, Google AI Overviews, Claude)
- Structured data (above) + entity-clear, factual, self-contained copy = what AI answer engines parse and cite. Bio + FAQ + offerings already provide the facts; schema formalizes them.
- **`robots.txt` AI-crawler policy — A DECISION, not a default:** `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`. Allow = discoverable/citable; disallow = blocks AI use. (Ben to decide.)
- Optional emerging convention: `public/llms.txt` summarizing who/what/where for LLMs.
- Off-site is the real lever: mentions / backlinks / profiles — AI surfaces entities that recur across the web.

### 4. Performance (Core Web Vitals = ranking factor + UX)
- Convert/compress hero rotation PNGs → AVIF/WebP, responsive sizes (`astro:assets`), lazy-load below-the-fold.
- Run Lighthouse; fix CWV (LCP from the hero image is the likely concern).
- Fonts: Google Fonts preconnect is present; consider self-hosting + `font-display: swap`.

## Info needed before implementing
1. **Production domain** (everydayfuture.work?) — required for `site`, canonical, sitemap, OG URLs.
2. **Target keywords + audience/geography** — e.g. executive/leadership coaching, mindfulness, founders/leaders; Seattle/WA only or remote/global? (shapes meta copy).
3. **Business facts for schema** — legal name, founder, credentials, service area, contact (`info@everydayfuture.work`), all social profiles (Instagram + LinkedIn?), logo file.
4. **Share image + favicon** (or approval to make from existing assets).
5. **AI-crawler policy** (allow/block GPTBot / ClaudeBot / PerplexityBot / Google-Extended).
6. Whether **Google Search Console / Business Profile / analytics** already exist.

## Sequence
- **Phase 1 — foundation:** `site` config, sitemap, robots, per-page title/description, OG/Twitter + image, canonical, favicon. _(Can start now with just the domain + AI-crawler decision.)_
- **Phase 2 — structured data:** the JSON-LD blocks (needs business facts); verify via Rich Results Test.
- **Phase 3 — content/entity + perf:** keyword-aware meta, heading hierarchy check, image optimization, Lighthouse pass, optional `llms.txt`.
- **Phase 4 — off-site (not code):** submit sitemap to Search Console, set up Google Business Profile, pursue listings/backlinks/social cross-links.

## Quickest unblocked starts
- **Phase 1** — needs only the **domain** + **AI-crawler policy**.
- **`FAQPage` schema** — content already exists; could be added immediately.

## Related open items (see CONTEXT.md)
- Calendly URLs (placeholder → real), Netlify form routing → `info@` — both pending; relevant to conversion but separate from SEO.
