# Every Day Future — Site Context
_Last updated: 2026-08-05 (**session 11 — v5 REDESIGN, branch `v5` only**). **The full V3-design rebuild ("v5") is underway on branch `v5`** — preview: https://v5--everyday-future-v4.netlify.app. Production (`main`) + `staging` remain untouched v4; rollback tag **`pre-v5`** = deployed v4 state. Design source: Figma "Every Day Future - Visual Identity", **Website page → V3 section** (Ben's naming: site v5 = design V3; the "About you drop-shadow" variant is out of scope). Reference exports live in **`design-v5/`** (comps @2x incl. `Home Page - Desktop.jpg`, measured geometry in `design-v5.md`, assets in `design-v5/assets/`); runtime assets in **`public/images/v5/`**. **Shipped on `v5` this session (all comp-measured, desktop-first):** ivory ground tokens (`--paper-cream` re-pointed → `#F8FCF7`; new `--card-yellow-a/b`, `--pale-yellow`), 43px black **pill** float CTA (Begin Practice, hover `--blue`), **nav** (centered stacked wordmark SVG + boxed `CLIENT PORTAL ↗`, ink at rest), **hero** (justified 79px headline, tree/silhouette/tennis photos, blue underline + circle scribbles), **Choose How** (yellow cards), **Process** (01/02/03, lorem per Ben), **Practice Makes Progress** band (comp testimonials verbatim, decorative stars — per Ben), **Someday already started**, **Waymakers** 5-card grid (SVG line icons — icon order approved as-is), **Taylor bio** (oval scribble + tall DSCF0184 portrait + Show more), **FAQ** (photo collage + signature scribble, circled accordion icons, first item open; FAQPage JSON-LD preserved), **footer** (ivory→pale-yellow gradient, ×3 fading tagline with hairline clips, black bar w/ white wordmark + links). Hero rotation retired; Writing stays hidden. **Interim/pending:** hero tree + Choose How window are **VIDEOS in Figma (IMG_0996.mp4 / Gen-4 dolly)** — static posters until Alice sends the clips; headline font is licensed **Helvetica Neue LT Std 55 Roman** — system Helvetica Neue 400 as stand-in until license (metric drift ~1-2%); mobile pass vs `Home Page - Mobile` comp DONE (passes 1–2 + Taylor full-bleed fix); **Begin flow reskinned per V3 comp (flat variant, Ben-confirmed)** — split step 2: full-bleed cream `#FFFCD1` left panel (blue boxed chip / service H1 / dek / offering grid / ✓–②–③ indicator pinned bottom-left) + white right half with 300px form column, 68px "About you", squared black submit; step-1 cards yellow (1:1 bright); comp export at `design-v5/comps/begin-about-you@2x.png`; flow logic/Netlify/Calendly untouched. Contact/legal pages inherit chrome only (no dedicated comp). Load screen exists in Figma (deferred). QA pass run 2026-08-05 (Chromium): all routes 200, no console errors, no missing v5 assets, begin variants + mobile menu verified, no 375px overflow; real iOS Safari / Firefox device checks still pending. **Ben-ratified deviations (2026-08-05, do not "fix"):** mobile Waymakers heading uses the real heading (mobile comp's repeated "Someday already started" = comp error); footer tagline reads "With Coaching" at all sizes (mobile comp's "+ Coaching" not used); hero headline re-wraps naturally between ~900–1200px (no comp for those widths). `npm run build` clean (8 pages). **Later in session 11 — mobile pass DONE (Ben: must-do):** hero rebuilt to the Home Page - Mobile comp (exact 6-line justified wrap forced via `.hv5__ln` spans — display:contents desktop / block mobile; measured photo+scribble coords; font 9.6vw/-0.04em vs comp's 40px LT Std), hamburger nav (bars replace MENU text), 28px pill, 112px wordmark, Taylor = portrait-first order (`.tb5__cols` display:contents + photo order:-1), FAQ collage SHOWN on mobile per comp, footer tagline 5.8vw edge-to-edge + stacked black-bar links. Ben's calls logged: headline font approved as-is (system HN); Waymaker icons approved as-is; **Begin flow must follow the V3 comp** — the only comp is frame "On About you section click - dropshadow" (1440×1046: LEFT pale-yellow panel = SELECTED chip + service display heading + dek + 2×2 offering grid + ✓①②③ step indicator bottom; RIGHT white panel = About you + note + underline fields + black RECT "CONTINUE TO SCHEDULING →" + reassurance). Ben earlier excluded "the About-you variation with drop shadow" — interpretation to confirm: build THIS layout, flat (no shadow). **NEXT SESSION: Begin flow reskin to that comp (BeginFlow.astro Step 2 primarily; Steps 1/3 adapted to v5), desktop 1280/1440 QA sweep vs comps, subpage (contact/legal) pass.** Also noted: tagline copy differs across comps — Home Page - Desktop says "With Coaching", Group 60 (footer comp) + Home Page - Mobile say "+ Coaching"; built as "With Coaching", ask Ben/Alice which is current._

---

_Prior update: 2026-06-22 (**session 10 — Writing link hidden from nav (temporary)**)._ Per Ben, the **Writing** link was hidden from all site chrome — **desktop nav, mobile menu, and footer** (`Nav.astro` ×2, `Footer.astro`) — until more essays are ready to publish (~2 weeks). **Links-only hide, "keep indexed" (Ben's call):** the `/writing` index + 2 published essays stay **live, in `sitemap-index.xml`, in `/rss.xml`, and indexed in Google** — only the on-site links are removed, so the freshly-indexed pages aren't disturbed before reintroduction. Implemented as Astro `{/* */}` comments (stripped from output — not even in page source) with a dated reintroduce note in each spot; mobile-menu numerals re-sequenced **Home 01 / Contact 02 / Client Portal 03** (Writing was 02). **To reintroduce:** un-comment the three links and renumber the mobile menu back (Writing 02, Contact 03, Client Portal 04). No changes to sitemap/RSS/robots/pages. Verified on preview: 0 Writing links in chrome, `/writing` still 200, prod-build sitemap still lists the 3 writing URLs, console clean. Pushed to `staging`._

---

_Last updated: 2026-06-17 (**session 9 — domain cutover ✅ COMPLETE + verified live**). **`everydayfuture.work` now serves the new Netlify site over HTTPS; email never affected.** Ben approved `staging → main` "as-is" (bio/Waymaker image decisions deferred, non-blocking). Email-safe method: DNS stayed at Squarespace, only the web records moved. Session 9 work:_
_1. **301 redirects** — `public/_redirects`: `/home`, `/rei-internal`, `/client-referral` → `/` (301). Live-verified all three 301 → `/`._
_2. **`staging → main` merge** — fast-forward `efcb338..c4b2a19`; production rebuilt + verified healthy._
_3. **DNS cutover (Squarespace panel):** confirmed email = **Google Workspace** (MX `aspmx.l.google.com` + alts) sits in its own "Google Workspace" record block, separate from the "Squarespace Defaults" web records. **Deleted the "Squarespace Defaults" block** (4 apex `A` → Squarespace IPs + `www` CNAME → `ext-sq.squarespace.com`) and **added two Custom records:** `A @ → 75.2.60.5` + `CNAME www → everyday-future-v4.netlify.app` (30-min TTL). **Left untouched:** the Google Workspace MX block, the `portal` CNAME (→ `benevolent-frangipane-ac9c76.netlify.app`), and the `subdomain-ownership` TXT._
_4. **Netlify:** `everydayfuture.work` = ★ primary, `www` auto-redirects to apex; DNS verification successful; Let's Encrypt cert issued._
_5. **Verified live (curl/dig):** apex HTTPS 200 + valid cert; `/writing/` 200; homepage title "Conscious Executive Coaching — Every Day Future"; `www`→apex 301; old-URL 301s; **all 5 Google MX records identical** (authoritative + Google/Cloudflare/Quad9)._
_**Rollback (if ever needed):** in Squarespace Custom records, restore four `A @` → `198.49.23.144`, `198.49.23.145`, `198.185.159.144`, `198.185.159.145` + `www` CNAME → `ext-sq.squarespace.com`._
_6. **Post-cutover SEO/analytics stack — all set up + verified (2026-06-17):** **Search Console** domain property verified + `sitemap-index.xml` submitted (8 URLs) + key pages indexing-requested (owner `benjamin.winters@gmail.com`). **Google Business Profile** created + verified as a Service-Area Business (address hidden, PNW service areas, category/services/description/photos; owner `ben@wintersand.co`; setup sheet in `SEO.md`). **GA4** `gtag.js` (`G-05G2PBBWW1`) installed site-wide in `Layout.astro` (`is:inline`), `page_view` verified firing; **`generate_lead` conversion event** on confirmed Begin + Contact submits (`BeginFlow.astro`/`Contact.astro`, no PII — `form_name`/`option` only). LAUNCH.md §5 = Squarespace-decommission + optional Cloudflare-registrar playbooks._
_7. **Client portal reskin (LAUNCH #7) — attempted this session and REVERTED.** Reskinned `edf-portal-updated_3/` toward v4 (data logic preserved — round-trip verified) but it didn't meet the bar; **both files reverted byte-for-byte to original (no net change).** A redo must map exactly to `global.css` tiers. Deploy path is a separate setup (Ben to provide; `edf-portal-updated_3/` is not a git repo / no `.netlify`; portal site = `benevolent-frangipane-ac9c76.netlify.app`)._
_8. **🐞 OPEN BUG — "Client Portal" link lands on the ADMIN screen.** The site nav/mobile-menu/footer "Client Portal" link → `https://portal.everydayfuture.work` (root), and the portal's `netlify.toml` redirects `/` → `/admin-create.html`, so visitors hit the portal *creator*. **Fix options:** (a) **portal side, proper** — change `netlify.toml` root redirect `/ → /client-portal.html` (admin stays at `/admin-create.html`); fixes any bare-URL visit too; needs the portal deploy path. (b) **site side, deployable now** — point the `Client Portal` links in `Nav.astro` (×2) + `Footer.astro` to `…/client-portal.html`. NOT yet fixed (Ben to pick)._
_**Project status: LAUNCH COMPLETE.** Remaining items are optional / Ben-side only: mark GA4 `generate_lead` as a Key event (after it fires once); decommission the Squarespace site (`LAUNCH.md` §5a — keep domain + MX); request GBP client reviews; deferred design decisions (bio images keep/swap, Waymaker S5 images — needs spec); client-portal reskin redo (LAUNCH #7, deploy path TBD); optional definitional "What is conscious executive coaching?" content page (biggest organic lever, `SEO.md` 🔑)._

---

_Last updated: 2026-06-11 (**session 8 — CLOSED**). **Handoff 7: mobile menu shipped + QA'd, pushed to `staging`.** Rollback: tag `pre-handoff-7` = `1b0215f` (on origin) — `git reset --hard pre-handoff-7` (or revert the handoff-7 commit) → push `staging`. Session 8 shipped:_
_1. **Handoff 7 intake:** only `Mobile Menu - design.md` + `comps/Mobile-Menu-Comp.html` + `comps/Mobile-Menu-Live-Demo.html` are current — the rest of the zip is stale handoff-2-era Palette-Swap material plus already-shipped handoff-6 specs (**do not apply**)._
_2. **Mobile menu (≤640px only; design.md §5.15)** — "MENU" Mono trigger in the nav right slot (reuses `.nav__link` color states) opens a full-screen **ink curtain** (descends 0.45s, mirror of the Begin drawer): centered 27.5px wordmark + ×, hairline link list Home/Writing/Contact/Client Portal with Mono numerals (current page's numeral blue), full-width paper "Begin Practice" (opens the Begin drawer on the homepage via `__openBeginDrawer`, navigates to `/begin` elsewhere), Instagram/Terms/Privacy foot row. Focus trap, Esc/×, body scroll lock, float CTA hidden while open, reduced-motion fallback. Ben's calls: link set confirmed; curtain wordmark 27.5px (site nav size, over the comp's 22) — pending his look; label per comp ("Menu" + CSS uppercase); menu-only departures approved (0.5px white hairlines + 11px mono, Writing-precedent)._
_3. **Footer mobile Client Portal link retired** (per Ben) — `.site-footer__link--portal` + `.site-footer__break` removed (markup + CSS); the menu now carries Client Portal on mobile; footer links wrap naturally._
_4. **Verified + full QA pass:** all 7 pages (home, /writing, article, /contact, /begin, /privacy, /terms) — trigger color states (hero white+shadow / scrolled+page-* ink), curtain open/close, active numerals, body-lock + scroll-position restore, link navigation, drawer hand-off cycle, focus trap (Tab wrap both directions, focus return), 24× rapid-toggle ARIA consistency, 640/641 boundary, console clean + **prod-build diff vs HEAD: every page differs ONLY by the nav trigger + curtain markup and the footer portal-link removal; CSS bundle diff = mmenu block added + 2 footer rules removed — nothing else**. **QA findings fixed (all in `Nav.astro`):** (a) trigger font-weight — UA button stylesheet forced DM Mono 400 vs the comp/site 300 → explicit `font-weight: 300`; (b) float-CTA hide never fired (script runs before CTABar renders) → `#floatCta` lookup moved inside `setOpen()`; (c) first **link** now focused on open per spec (was the ×); (d) short-viewport clipping (<~550px height: foot row unreachable) → curtain `overflow-y: auto` safety valve (no effect at normal heights); (e) rotate-to-landscape while open left the body scroll-locked on desktop → `matchMedia('(min-width: 641px)')` change handler closes the menu. Chromium-only; real iOS Safari device check pending (existing backlog)._
_5. **Curtain wordmark = 27.5px** (matches the staging homepage nav exactly — measured identical; the comp's 22px not used, per Ben's "try 27.5" + sign-off). Note: production main still shows the older 25px until the merge._
_**Next:** unchanged from session 7 — Waymaker images, bio images decision, SEO verify on staging → 301 map → `staging → main` merge + DNS cutover; device checks (iOS Safari/Android) for Begin flow + Writing + now the mobile menu._

---

_Last updated: 2026-06-11 (**session 7 — CLOSED**). **Handoff 6 complete — BOTH parts pushed to `staging`** (tip `417a09a`): Writing section (part 1) + Begin Step 2 redesign (part 2), plus the ≤900 short submit label and the Writing head-copy change. **Rollback: tag `pre-handoff-6` = `7edbba8` (on origin)** — `git reset --hard pre-handoff-6` (or revert the handoff-6 commits) → push `staging`. Session 7 shipped:_
_1. **`/writing` thought-leadership section** (handoff 6 `Writing Section - Spec.md` + comps; design.md §5.14) — Astro content collections (`src/content/writing/*.mdx`) + one reusable `ArticleLayout.astro`; index with topic filter, featured lead + editorial rows; article template with Figure/PullQuote/Chart(SVG)/Note/KeyTakeaways/ArticleTable/Faq/Sources blocks; author card + related grid. CSS scoped `wx__`/`ar`-prefixed; **Writing-only departures (Ben-approved): 0.5px hairlines + 11/12px mono** (site rules unchanged elsewhere). New deps `@astrojs/mdx@3.1.9` + `@astrojs/rss@4.0.18` (Astro-4-compatible)._
_2. **Published articles (Ben 2026-06-11): "The future is created in the present" (featured) + "How Conscious Executive Coaching Sharpens Decision-Making"** — live on `/writing`, in the sitemap (8 URLs now) + `/rss.xml`, Article JSON-LD + canonicals + OG. **4 placeholder stubs stay `draft: true`** = dev-preview only, excluded from build/sitemap/RSS (the `import.meta.env.DEV || !draft` filter — localhost shows drafts by design)._
_3. **Writing imagery via Astro `<Image>`** — article images in `src/assets/writing/` (responsive srcset/WebP/lazy/no-CLS; the `public/images` copies still serve the main site; schema `image()` enforces processed assets)._
_4. **"Writing" link added to Nav (before Client Portal) + Footer (first link)**; blue 0.5px underline active state on Writing pages only (`.page-writing`); nav reuses the `.nav.scrolled` glass state via a scroll toggle on the hero-less Writing pages._
_5. **Handoff 6 intake:** only 3 files are current (`Begin Flow Redesign - Spec.md`, `Writing Section - Spec.md`, `Writing Section - design.md` + `comps/`) — **the rest of the zip is stale handoff-4-era material (ignore; would re-break approved work)**. Ben's calls logged: repo copy beats Claude-Design copy rewrites; spec over comp; mono → 13px in the Begin redesign (Writing keeps the comped 11/12); 0.5px hairlines Writing-only; the Begin spec supersedes the session-6 Step 2 layout incl. the context-note-in-panel reversal._
_6. **Begin flow Step 2 redesign (handoff 6 part 2, Ben-approved comp)** — design.md §5.12 fully resynced. Step indicator on all steps (booking `Choose → Your details → Schedule`; Self-led 2-step `Choose → Join the list`; Mono 13px + 1px lines per Ben's normalization; mobile = circles + current label only — approved deviation, the spec'd full row overflows 375px). Step 2 = anchored split `1.15fr/0.85fr` gap 72: LEFT chip ("Selected · {label}"; Self-led = blue "Coming Winter 2026") + service-name H1 (display 46–84) + dek (= the approved offering titles, now `options.ts` `dek` field; `01 /` eyebrows removed) + offering grid (1px top hairline, open 2-col 36×48, cells 16/24); RIGHT white panel 48/44/44 ("About you" + hairline, note = the approved sub copy, fields, **full-width 52px "Continue to scheduling →"** + reassurance line). Self-led waitlist variant: "Join the waitlist", no Phone, "Notify me" (no arrow). Step 3: Calendly on a paper panel (continuous surface). Flow logic/Netlify/deep links untouched; **regression-proven via full prod-build diff: only `begin/index.html`, `index.html` (drawer markup only), and BeginFlow's hashed CSS differ — every other page byte-identical.**_
_7. **Begin redesign pushed (`a6c3cca`) + verified end-to-end** — full functional pass in preview (all 4 variants, step 1→2→3, validation, mobile toggle, drawer deep-links, console clean); **Ben confirmed live Netlify form POSTs work**. **Chromium viewport sweep** (320/375/390/430/768/900/1100/1280) found ONE defect: the full-width submit label wrapped to 3 lines at 640–900 (comp collapses at ≤900, build at ≤640). **Fix per Ben (`e6d98ec`): layout untouched (2-col split stays to 640) — booking submit label swaps to short "Schedule →" at ≤900** (`.bf-submit__label--short`, aria-hidden twin span; waitlist "Notify me" everywhere). Known/accepted: 900–~1180 the full label wraps 2 lines (the old "Begin Practice" tolerance). Engine caveat: Chromium only — real Safari/iOS + Firefox still need device checks._
_8. **Writing index head copy (`417a09a`, per Ben):** h1 "Notes on practice" → **"A practice of possibility"**; lead shortened to "Essays on conscious change, leadership, and the practice of working with what comes." (title/meta/schema already matched — SEO untouched). Note: h1 is the standard Display tier (71.68px @1280) — same as S2–S5 heads, smaller than the hero's 84px._
_**Next:** remaining launch items (Waymaker images, bio images, SEO verify on staging → 301 map → `staging → main` merge + DNS cutover). Deferred to-do: LAUNCH.md §4 #11 (article OG polish: og:type=article + per-article og:image dims — cosmetic). Device checks pending: real iOS Safari/Android pass on the Begin flow + Writing pages._

---

_Last updated: 2026-06-11 (**session 6 — CLOSED**). All work committed + pushed to `staging`, verified (preview + live staging checks); build clean; production/`main` still stale. Session 6 shipped, in order:_
_1. **Docs pass** — design.md §4/§6 imagery synced to as-built (stale hero/S2/S6 lists); commit-count fixes. (`3c81e9c`)_
_2. **SEO keyword strategy** — deep-research pass written into `SEO.md` (🔑 section): "conscious executive coaching" is contested (Inductive, Boulder CO — no Seattle presence, no trademark) but winnable; keyword→page map; GBP setup notes (Seattle address + worldwide service area — two channels, no conflict); **decision: articles publish on `everydayfuture.work`, never Substack** (no canonical control, no publishing API, AI-citation strategy requires own domain). Priorities: definitional "What is conscious executive coaching?" page → GBP post-cutover → problem-framed long-tail articles. (`3c81e9c`)_
_3. **S3 subhead → `<h3>` "Outcomes from conscious executive coaching"** — the positioning phrase now in a visible heading (was `<p>` "Testimonials and outcomes"); zero visual change (class owns the type, reset zeroes margins). (`66d9f77`)_
_4. **Keystatic article CMS** added to `LAUNCH.md` §4 (item #10) — Astro Content Collections + Keystatic at `/keystatic`, GitHub auth → commits markdown → Netlify rebuilds; decisions pending (branch target, Taylor's GitHub seat, article-page design). (`6174aa3`)_
_5. **Begin flow copy + Calendly (launch #1 ✅):** Step 2 sub reworded (`9eab2c6`); **all 3 real Calendly discovery URLs wired** (`6d9aa59`, `a914418`, `97b21c6`) — events verified live on Taylor's account._
_6. **Step 2 layout rework (Ben-approved comps):** heading + sub + offering detail LEFT **on the cream (offering card lost its white bg)**; "About you" + form in a **white box** right (`.bf-step2-formcol`, top-aligned with the offering). Known: Begin Practice label wraps ~641–1000px (accepted). (`6c6232f`)_
_7. **Offering copy re-write, all four options** (`ea7ff7c`, `efb621a`, `3979bbc`): 1:1 ("Dedicated practice of what's possible, only for you."), Orgs ("Custom coaching and practice experiences…"), Group ("…structure, support, and coach facilitation."); all four say "reduce resistance". **Self-led now has its own offering card** (04 / Self-led, "Available Winter 2026") + conditional Step 2 sub ("…coming soon.") + submit button "**Notify me**"; the `--nobox` single-column fallback was removed — all four options share one layout._
_8. **Launch #4 Begin-flow verification ✅** — on live staging (deploy `e366162`): deployed HTML carries all 4 cards + real URLs (zero placeholders); form detection active (hidden form rewritten); test POSTs all 4 options → HTTP 200; all 3 Calendly events confirmed real (OG titles + bogus-slug control). No bookings made._
_**Open for launch (next session):** (1) **Waymaker (S5) images** — needs Ben's spec + approval; (2) **bio images decision** (keep/swap); (3) SEO verify on staging (Rich Results + link inspectors) → 301 redirect map → **`staging → main` merge + DNS cutover**. Housekeeping: delete the "Claude Test" entries from Netlify Forms (**now incl. 4 new "launch #4 verify" entries**); unused `DSCF0172.jpg` still on disk (left per Ben)._

---

_Last updated: 2026-06-05 (**session 5 — CLOSED**). All work below is committed + pushed to `staging` and verified in preview; build clean; production/`main` still stale (needs the eventual `staging → main` merge). Session 5 shipped, in order:_
_1. **`LAUNCH.md`** — single tracked source of truth for launch (merges Ben's to-do list + the CONTEXT/SEO open items; SEO folded in as §0). (`7c12878`)_
_2. **Client Portal link** repointed `/portal` → `https://portal.everydayfuture.work` (`_blank`/`noopener`) in `Nav.astro` + `Footer.astro`. (`7c12878`)_
_3. **S6 bio rework** — new retouched `DSCF0184.jpg` (warm wood column extended over the pale ceiling block, 900×1200); diagonal "implied box" restored (420px); couch (`DSCF0084`) lower-left + **mirrored** (`scaleX(-1)`), portrait (`DSCF0184`) upper-right. (`b78052b`)_
_4. **Section Slugs / Deep Links** — `#results` (S3 id renamed from `quotes`) + `#practice`/`#waymaker`/`#taylor`/`#faq` (pre-existing) + 4 Begin deep links `#1-1coaching`/`#orgcoaching`/`#groupcoaching`/`#selfcoaching` (open homepage drawer → skip to Step 2). Fragments only — no SEO/canonical/schema impact (`#taylor` `@id` deliberately kept). (`0fec966`) — see the **Section Slugs / Deep Links** subsection._
_5. **Form reliability check** — Contact + Begin forms now `await` the Netlify POST and only succeed on `res.ok`; on failure show inline error + re-enable (no silently lost leads). (`ec42beb`)_
_6. **Netlify Forms VERIFIED end-to-end** — detection on (deploy `ec42beb` rewrote `<form … netlify>` → `method='post'`), test POSTs returned HTTP 200, **email notifications → `coach@everydayfuture.work` confirmed arriving.** Launch item #6 ✅. (`2e7e4ca`)_
_7. **Contact "Thank you" success state** — on success the page transforms: heading "Get in touch" → "Thank you", intro + Direct/Elsewhere + form replaced by the thank-you message (fixed a pre-existing bug where the confirm sat inside the hidden form and never showed). **Sticky footer** added (`body` min-height:100svh flex column + `.site-footer { margin-top:auto }`) so the footer pins to the bottom on short pages; tall pages + float-CTA parking unaffected. (`e34f385`)_
_**Rollback tags pushed:** `pre-slugs` (`b78052b`) · `pre-testing` (`2e7e4ca`)._
_**Open for launch (next session):** (1) **Calendly URLs** — `options.ts` still placeholders (blocks Begin booking + full #4 verification); (2) **Waymaker (S5) images** — section has none, adding them needs Ben's spec + approval (no-drift); then **`staging → main` merge + DNS cutover**. Housekeeping: delete the "Claude Test" entries from Netlify Forms; the unused `DSCF0172.jpg` is still on disk (left per Ben)._

_Last updated: 2026-06-04 (session 4) — **Launch SEO implemented (most of it).** Positioning locked (Option B: lead "conscious executive coaching"; head terms executive/leadership coaching; remote-first, Seattle-based). `Layout.astro` now takes `title`/`description`/`image` props and emits per-page `<title>`, meta description, canonical, full Open Graph + Twitter `summary_large_image` (og:image = `/images/og-image.png`, the supplied 1200×630 brand card). Unique title/description wired on home/contact/begin + via `LegalDoc` for privacy/terms. `astro.config.mjs` sets `site: 'https://everydayfuture.work'` + `@astrojs/sitemap` (**pinned 3.2.1** — 3.7.3 needs Astro 5; we're on 4.16 → generates `/sitemap-index.xml`, 5 URLs). `public/robots.txt` allows all incl. AI crawlers + Sitemap line. `FAQ.astro` now emits FAQPage JSON-LD. Bio gained the approved clause "— a conscious executive coaching practice —" (`TaylorBio.astro`). `FAQ.astro` now emits FAQPage JSON-LD. **Favicon (B6) done** — stacked EDF wordmark icon (`public/favicon.png` 512 + generated `favicon-32.png` + `apple-touch-icon.png`), `<link>` tags in Layout. Bio gained the approved clause "— a conscious executive coaching practice —" (`TaylorBio.astro`). **Person + ProfessionalService JSON-LD** added on the homepage (`index.astro` `@graph`): legalName LTW Coaching LLC, areaServed United States + Europe (Seattle/WA base), founder "Taylor Winters — Founder & Conscious Executive Coach", UC Berkeley Haas exec-coaching credential, `sameAs` LinkedIn (`/in/ltaylorwinters/`) + Instagram. Verified via `npm run build` (both JSON-LD blocks valid). **Launch SEO code set (B1–B9) + entity schema complete;** remaining is non-code only (Search Console + analytics, Google Business Profile) + optional visible footer LinkedIn link. **Contact email reverted info@ → `coach@everydayfuture.work` site-wide** (Contact page, both legal pages, LegalDoc footer, homepage schema) per Ben; design.md §5.11/§5.13 + the Netlify-notifications checklist synced. **LinkedIn footer link added** (`Footer.astro` → `/in/ltaylorwinters/`; Contact · Instagram · LinkedIn · Terms · Privacy). **Domain Cutover Checklist** (Squarespace → Netlify) added to `SEO.md`. **All committed + pushed to `staging`:** `27af93e` (SEO batch) + `8d442a9` (footer LinkedIn + cutover checklist) → tip `8d442a9`, **93 ahead of main** (production stale, needs merge). Domain currently points to Squarespace; plan = finish on staging → merge to main → repoint DNS. Full plan/status in `SEO.md` (Status Board + Cutover Checklist)._

_Last updated: 2026-06-04 (session 3) — **Contact form moved to its own page.** The `Contact.astro` component (self-contained: visible form + hidden Netlify static form + submit script) was removed from `index.astro` and now renders only on a new standalone **`/contact`** page (`src/pages/contact.astro` = `Layout > Nav > Contact > Footer`, mirroring `begin.astro`). Footer "Contact" link `#contact` → `/contact`. Nav forced to ink on the page via a `.page-contact` class (inline script + `global.css` override, same pattern as `.page-legal`/`.page-begin`, Client Portal blue rollover preserved). No float CTA on the page (matches begin/legal — the page is the conversion endpoint). Added a "← Every Day Future" back link (`.s-contact__back`) above the "Get in touch" heading — the legal-page `.legal__back` idiom (DM Mono 13px → blue hover, `href="/"`); the nav wordmark also links home. Netlify Forms unaffected: the hidden static form travels with the component (still detected), AJAX `POST /` target unchanged. design.md §4/§5.11/§10 synced. Not committed yet._

_Last updated: 2026-06-04 (session 2) — **Process rules added:** "🚫 No design drift" (Design Authority section) + "📄 Stale docs are bugs / keep all context files current" (Documentation Rule section) — both now codified. **S3 carousel:** confined to content column with bare hairline chevrons (S3-chevron/S7-plus idiom); then **cards squared `3/4`→`1/1`** to match the S2 tiles (mobile 78vw square) + **infinite seamless loop** (8 cards cloned ×3, scrollLeft wraps onto identical content — never resets to card 1; auto-advance + chevrons + drag retained). **Hero:** subhead bumped 16→19px/26→30px desktop (Ben-approved locked-value departure; mobile stays 16/26); rotation = rhododendron `50%60%` / rainleaves `50%60%` / silhouette-coast (now HORIZONTAL crop) `50%50%` / **rose-sky (NEW portrait, replaced willow-pool)** `50%40%`; mobile `.hero__content` padding-bottom → `calc(100px + env(safe-area-inset-bottom))` so copy/tags clear the CTA. **Float CTA:** over-hero inversion (white over hero → black at S2, hover --blue both; over-footer stays black). **S2:** tier tiles `gap:0`→`4px`; option cards gained a hairline `.s2__card-arrow` (Ben-approved departure from "no arrow" — bottom-right desktop / top-right label-aligned mobile); mobile order swapped to header→cards→tiles (tiles BELOW cards). **S4:** removed `waymaker-pool` (horizon kept bottom-right, top-right open). **S6:** bio photos enlarged to fill the column (`1.1fr 1fr` + max-width 580). Marks Library corrected (only Vector-5/8/10 used). Orphaned `willow-pool.jpeg` + `waymaker-pool.jpg` deleted. Netlify Forms confirmed wired (dashboard verify pending). All on `staging` (tip c564ca0, 89 ahead of main — production stale, needs merge).  ·  Earlier 2026-06-04: Hero carousel updated: rotation now rhododendron.jpg / rainleaves.jpg / silhouette-coast.jpg / willow-pool.jpeg (all 50%50%). Hero headline: "possibility" and "+coaching" separated (margin-top:0.38em block span); Vector-5.svg mark repositioned to circle "possibility" (width:87%, top:-16px, rotate(-3deg), opacity:0.75). S2 tier tiles: Foundation→foundation01.jpg (rock still), Calibration→calibration.mp4, Expansion→expansion.mp4 (10% speed slow-mo, scale(1.20) transform-origin 50%40%); tier num/label color white→--ink with z-index:1; desktop tier max-width now var(--max-w) (was 660px); desktop header→cards gap tightened (padding-bottom 80→32px); mobile header→tiers gap 56px→0 with tiers margin 24→32px. S4 (Someday already started / About): restructured HTML — tags moved into .s4__left alongside heading+body; photo collage added as right column (.s4__photos grid, 4px gap) with threshold image large-left, pool+horizon stacked-right, "THE THRESHOLD" caption. S5 (Waymaker): accidentally overwritten this session, fully restored to original "Who this practice is for" content. S6 Taylor bio photos: diagonal scatter removed; now side-by-side flex with 4px gap, each calc(50%-2px) wide, aspect-ratio 3/4. Design authority: design.md at repo root is now canonical; handoff 4/ is archived (ARCHIVED.md added). S3 carousel redesign in progress (not committed) — pending discussion on implementation._

_Last updated: 2026-06-03 — S2: header body restyled to match S4 body type (weight 400); tier tiles resized to 220px wide (max-width 660px, gap 0) and moved below the option cards (header→cards→tiles), divider hairline removed, header→cards gap tightened (card margin 24px desktop / 16px mobile); option cards lost their → arrow and hover/active now inverts to --blue (was --ink); mobile (≤640px) option cards now 1-up full-width landscape (aspect-ratio 1.74/1 ≈ 331×190px, padding 28px) instead of square; section top padding standardized to 120px desktop / 72px mobile across S2/S3/S4/S5 (S3 was 140/80, S4 was 220/72) for a consistent header gap; S3 testimonial quotes now italic (the opening/closing " glyphs that were briefly added via ::before/::after were later removed — quotes are now italic with no quote marks); S3 gained a "Testimonials and outcomes" sub-heading (.s3__subhead, repurposed from old unused 14px style) matching the S2 header body type; S4 infinity brush mark (Vector-8.svg / .s4__mark) re-anchored to the heading via an inline-block wrapper (was pinned to section corner) so it travels with the headline like S5's mark; float CTA always-visible + over-footer invert + mobile :active blue; "Get in touch" copy. Body-copy sizing: S2 card desc (.s2__card-desc), S5 paragraphs (.s5__para non-first), and S6 bio (.s6__para) all set to 16px (line-height 24px) for a consistent body size — .s2__card-desc was 16px (line-height nudged 26→24), .s5__para and .s6__para raised from 14→16px. S7 answers / form fields / contact-form body remain 14px desktop. (Note: this group was briefly tried at 20px, then settled at 16px.) S6 Taylor bio: removed the "Founder of Every Day Future" mono eyebrow (.s6__eyebrow + its CSS deleted); name is now the first element and .s6__bio padding-top set 8→0 so the name top aligns flush with the photo top. S6 bio now shows the first 3 paragraphs with paragraphs 4 & 5 collapsed behind a "Show more"/"Show less" toggle (.s6__more + .s6__more-toggle, styled as a Mono UI label matching the nav "Client Portal" link — DM Mono 13px/0.110em uppercase, ink→--blue hover; JS in Layout.astro). S7 FAQ gained an "FAQ" display headline (.s7__heading — Helvetica Neue 400, clamp(46,5.6vw,84), -0.030em, margin-bottom 56px) above the accordion; Vector-10 mark overlaps its top-left. S7 FAQ rows gained a subtle hover rollover: .s7__trigger:hover nudges the question translateX(8px) and tints the plus icon --blue, cueing expandability. S6 bio photo replaced: single taylor-01.png swapped for two diagonal portraits in an implied box (.s6__photos = relative, max-width 420px, aspect-ratio 420/560) — .s6__photo--ul (DSCF0172.jpg) top-left + .s6__photo--lr (DSCF0084.jpg) bottom-right, each calc(50%-2px), inner corners meeting at center with a 4px gap; tablet/mobile photo overrides removed so the box scales intact. New JPGs downscaled to 900×1200 (~140-175KB) from 6192×8256 originals. Bio "Show more" toggle restyled from underlined Helvetica to a Mono UI label matching the nav "Client Portal" link (DM Mono 13px/0.110em uppercase, ink→--blue hover); added `.nav__link:hover{color:--blue}` so "Client Portal" gets the same rollover. Created shared body-copy class `.t-body-lg` (17px desktop / 16px mobile floor; type only) applied to S2 card subheads, S5 paragraphs (non-first), S6 bio, and S7 FAQ answers — replacing their individual font declarations, per-element color + layout retained (S2 card hover-to-white preserved). Net desktop size changes: S5 16→17, S2 cards 16→17, S6 bio 16→17, S7 answers 14→17. Contact "Send a note" submit (.s-contact__submit): added align-self:flex-end so it sizes to content + right-aligns (was stretching full-width in the column-flex form) — matches the Begin Practice/float-CTA button and clears the bottom-left float CTA. Begin page (/begin, BeginFlow.astro) consistency pass: Step 1 option cards now mirror S2 cards (arrow removed, hover/selected invert to --blue not --ink, description uses .t-body-lg 17px and is bottom-anchored via margin-top:auto, no border — border:none; desktop 4-up square aspect 1/1 gap 4px, mobile ≤640px 1-up landscape aspect 1.74/1 padding 28px gap 8px); S2 tier tiles on mobile (≤640px) changed from a 72vw-per-tile horizontal snap carousel to a gutter-inset group that sits ABOVE the option cards (no scroll; .s2__tier flex:1, aspect 2/3, .s2__tiers margin 24px 0 0). Mobile reorder via .s2 display:grid + order (header 0 / tiers 1 / cards 2); .s2 and inner .s2__cards both use minmax(0,1fr) (+min-width:0) so the card desc text can't blow out the track. Desktop unchanged (.s2 block, cards-then-tiers, tiers max-width 660). Float CTA "Begin Practice" on mobile now matches desktop (centered floating 4px button, 48px, content-width, 32px from bottom) — removed the mobile full-width-bottom-bar overrides, kept the :active tap feedback. On mobile, when the footer is revealed the CTA now PARKS 10px above it (position:absolute, bottom:calc(var(--footer-h)+10px); body is position:relative; --footer-h published by JS in Layout.astro on load+resize) instead of overlapping; since it then sits on the light bg it keeps the normal ink button. [Later unified: desktop now does the SAME — both viewports park 10px above the footer and the button stays BLACK the whole time; the white over-footer inversion was removed entirely, and the parking rule moved to the base .float-cta.over-footer (no longer mobile-only).] Mobile tier number + label (.s2__tier-num + .s2__tier-label) both shrink to 11px/0.08em (matched) so "CALIBRATION" fits the narrower tile and the index size matches the label; body copy (.bf-subhead, .bf-step2-sub, .bf-offering-card__body, .bf-selflead__body) moved to shared .t-body-lg (scoped type props stripped); submit label "Begin Practice →"→"Begin Practice" and self-led "Return to Every Day Future" lost their arrows; .bf-back and .bf-selflead__home link hovers → --blue. Note: .t-body-lg lives in global.css and applies to BeginFlow's scoped markup because it's a global class. Begin Step-2 form lines simplified to one per section (matching the Contact form): removed the .bf-input underline (border:none); the single line is the .bf-field divider (0.18); focus/error feedback moved to the divider (.bf-field:focus-within → --blue, .bf-field:has(.bf-input--error) → --ink). Begin Step-2 heading now shows the selected service name (#bfStep2Heading, set from OPTION_LABELS — "1:1 Coaching"/"Orgs & Teams"/"Group"/"Self-led") instead of static "Begin your practice."; the .bf-step2-badge next to "Change selection" was removed; added a × close link (.bf-close, href="/", hover→--blue) top-right of the step-2 nav to cancel back to the main site. "About you" heading (.bf-about-heading) enlarged to clamp(32px,3.4vw,48px) / 28px mobile (was clamp(22,2.2vw,32)) for more prominence. Step-2 layout reworked (.bf-step2-cols grid-template-areas): desktop now stacks intro + About + form in the LEFT column with the offering card spanning the RIGHT (form moved inside .bf-step2-cols, no longer a full-width block below; flexible 5th grid row prevents left-stack spreading). Mobile (≤640px): single column ordered heading→sub→card→about→form, and the offering detail grid collapses by default behind a "What's included +/−" toggle (.bf-offering__toggle, mobile-only; expands via .bf-offering--expanded; JS toggle handler + icon fixed to −/+). Added legal pages /privacy + /terms (src/pages/privacy.astro, terms.astro) via a shared LegalDoc.astro component (Layout+Nav+Footer chrome; title/meta/intro props + slot); EDF-branded styles in global.css under .legal* (paper bg, 760px column, display title, Mono meta + section numbers, 17px/1.7 body, blue dash-bullet lists, --caps modifier for all-caps legal clauses, blue links, "← Every Day Future" back link); nav forced ink via .page-legal class. Footer Terms/Privacy links now point to /terms & /privacy (were #). The source docs' "recommends review by a licensed WA attorney prior to publication" line was intentionally excluded. Source .docx live in Projects/Every Day Future/transfer/. Per Ben: removed the "Effective Date / Governing Law / Contact" metadata strip under the title (and the "Last updated" date from the footer line) — intro now sits directly under the title; contact email is info@everydayfuture.work throughout (not coach@); and the Terms "Cancellation & Rescheduling" section was removed. Also removed the "01/02/03…" section-number labels above each heading on both pages (.legal__num span + CSS deleted) and reworded the in-body "See Section 7/9" cross-refs to name the section instead. Footer link hover changed from white-0.86 to --blue. Client Portal nav hover now persists on the ink-nav pages (legal + begin): added .page-legal .nav__link:hover, .page-begin .nav__link:hover → --blue (0,3,0 specificity beats the 0,2,0 .page-* ink override that was winning before). Begin Step 1 cards on mobile (≤640px) changed from 1:1 squares (331×331, tall with a big empty gap) to 1-up landscape aspect-ratio 1.74/1 padding 28px (≈331×190), matching the S2 mobile card. S2 mobile option cards AND Begin Step 1 cards (.bf-option) then set to a uniform fixed `height: 182px` on mobile (aspect-ratio dropped → auto), so all four match Orgs & Teams' 3-line height — applied in both places (global.css .s2__card and BeginFlow.astro .bf-option, ≤640px only; desktop squares untouched). S2 mobile bottom padding set 0→88px (matching S5/S6/S7) so the cream extends below the last option card before S3 — the 0 was leftover from the old bottom-bleeding tier carousel. Float CTA over-footer parking + always-black unified across desktop + mobile (moved to base .float-cta.over-footer; white inversion removed entirely). S3 testimonial quote glyphs (::before/::after curly quotes) removed — quotes stay italic. Nav wordmark "Every Day Future" (.nav__wordmark) made heavier + larger per Ben: font-weight 200→400, font-size 25→27.5px (~10% larger) — a deliberate departure from the Figma-source ultralight 200/25px. Footer wordmark (.site-footer__wordmark) given the same treatment: 200→400, 22→24.2px (~10% larger). [Later: the weight was rolled back to the spec 200 on both wordmarks per Ben — only the enlarged sizes (nav 27.5px, footer 24.2px) were kept.] Nav wordmark over-hero text-shadow reduced 50% (opacities 0.20/0.10 → 0.10/0.05). Begin flow Step 1 cards (.bf-option, mobile ≤640px) shrunk from 182px to fixed height:140px, padding 20px 28px, label 28→25px, #bfStep1 .bf-header margin 16→12px — so all four cards + heading fit one iPhone logical viewport (375×812, last card ~744px) without scrolling. (Real-device Safari toolbar may still need a brief scroll until it collapses.) Then made consistent everywhere: homepage S2 cards (.s2__card) also set to 140px / padding 20px 28px / label 25px on mobile to match the Begin flow (Begin renders identically on /begin + the homepage drawer — same component). Begin step padding (mobile): Step 1 stays tight (one-viewport fit); Steps 2 & 3 use padding-top:44px (72px was tested but too airy under the fixed nav; Step 2 28→44, Step 3 overridden from base 72→44, bottom kept at base). Begin flow navigation unified: ONE consistent row (.bf-nav) on every step — "← Back" (.bf-back, left) + "×" (.bf-close, right), hover→--blue. ← Back: Step1→exit, Step2→Step1, Step3→Step2; ×: always exit. exitFlow() closes the drawer (window.__closeBeginDrawer, exposed from index.astro) if open, else the <a href="/"> navigates home. The old fixed drawer bar (.begin-drawer__bar + its close btn) was REMOVED; in its place .bf-nav is position:sticky inside the drawer (:global(.begin-page--drawer) .bf-nav) so Back/× stay reachable while scrolling (drawer is full-screen, scrim not tappable). On the standalone /begin page the nav is static. ARCHITECTURE RULE: all flow UI/controls live inside BeginFlow.astro (single source of truth — renders in both /begin page and homepage drawer); never put flow controls in index.astro drawer chrome. Step 1 still fits one viewport (last card ~773px). Begin headlines (.bf-headline — Step 1 + Step 3) dropped to the Sub-display tier on mobile only (clamp(22px,2.2vw,32px) / -0.010em / 1.2 → ~22px, was 34px) so they read as modest in-flow labels; applies on /begin page + drawer; Step 2's .bf-step2-heading stays 34px. (t-h2 was tried first but its 32px mobile floor was ~no change from 34px.) Step 2's .bf-step2-heading also dropped to 22px mobile so ALL flow headlines match. Begin nav unified: every step now has ONE row (.bf-nav, 3-col grid) — ← Back (left) · "Every Day Future" wordmark (center, drawer-only) · × (right). ← Back = Step1→exit / Step2→1 / Step3→2; × = exit. exitFlow(): closes the drawer (window.__closeBeginDrawer) if open, else the <a href="/"> navigates home. Sticky in the drawer (:global(.begin-page--drawer) .bf-nav) so controls stay reachable while scrolling (full-screen drawer has no tappable scrim). The old fixed drawer bar (.begin-drawer__bar) + #beginDrawerClose were REMOVED from index.astro; index.astro now exposes window.__closeBeginDrawer. Wordmark is drawer-only (display:none on the /begin page since the site Nav shows it). ARCHITECTURE RULE (now in design.md §5.12): all begin-flow UI/controls must live inside BeginFlow.astro — never in the drawer chrome (index.astro) — so changes apply to the page + drawer automatically; drawer-only tweaks via :global(.begin-page--drawer). Hero height changed 100vh→100svh (with 100vh fallback) to fix a mobile artifact where the cover background zoomed/scaled on scroll — caused by the address bar collapsing and changing 100vh; svh is a fixed small-viewport height so the hero no longer resizes (desktop unaffected). That fixed Safari but NOT Chromium/Brave (different toolbar handling), so also decoupled .hero__bg from the hero height: it's now top/left/right:0 + fixed height:100lvh (svh fallback) instead of inset:0, so background-size:cover resolves to a constant scale and can't re-zoom as the toolbar collapses (hero overflow:hidden clips the extra). Note: can't reproduce the mobile toolbar in the chromeless preview — needs device verification. Contact "Get in touch" section brought into spec: intro body (.s-contact__body) now uses shared .t-body-lg (14→17px desktop; type props stripped, removed from the mobile 16px group since the class covers it); form focus indicator moved to the divider (.s-contact__field:focus-within → --blue; the old .s-contact__input:focus did nothing since inputs are border:none); displayed Direct email changed coach@→info@everydayfuture.work. (Netlify form-submission routing in the dashboard is separate.) Added a mobile-only "Client Portal" footer link (.site-footer__link--portal → /portal): hidden on desktop (nav has it, but nav is hidden on mobile). Removed the footer "Login" link (was → /portal, redundant). On mobile the footer wraps to two rows — Contact · Instagram · Client Portal / Terms & Conditions · Privacy Policy — forced by a mobile-only .site-footer__break (flex-basis:100%;height:0); both the break and Client Portal are display:none on desktop (single row Contact · Instagram · Terms · Privacy)._

---

## Project Overview

Redesign and build of `everydayfuture.work` — Taylor Winters' coaching practice site. **Astro 4.16** project, deployed via GitHub → Netlify.

**Framework:** Astro 4.16 (static output)  
**Repo:** `everyday-future-v4` on GitHub (ben77win/everyday-future-v4)  
**Live URL:** https://everyday-future-v4.netlify.app (main)  
**Staging URL:** https://staging--everyday-future-v4.netlify.app (staging branch)  
**Hero concept URL:** separate Netlify site, publish dir `hero-concept/`  
**Dev server:** `npm run dev` (Astro, port 4321 — config in `.claude/launch.json`)  
**Build:** `npm run build` → `dist/`

**Rollback tags:**
- `pre-astro-migration` — last single-file HTML state on staging
- `pre-session-2026-05-27` — staging tip before this session (`f3468b1`)
- `pre-slugs` — staging tip **before** the Section Slugs / Deep Links change (`b78052b`). To roll the slugs back: `git revert <slugs-commit>` (or `git reset --hard pre-slugs` if nothing newer depends on it) → push `staging`.
- `pre-testing` — staging tip (`2e7e4ca`) **before** the Contact "Thank you" success state + sticky-footer change (the work tested at the end of session 5, pre-push). Roll back with `git revert <commit>` or `git reset --hard pre-testing` → push `staging`.
- `pre-handoff-6` — staging tip (`7edbba8`) **before** the handoff 6 work (Writing section + Begin Step 2 redesign). Roll back with `git reset --hard pre-handoff-6` (or revert the handoff-6 commits) → push `staging`.
- `pre-handoff-7` — staging tip (`1b0215f`) **before** the handoff 7 work (mobile menu + footer portal-link retirement). Roll back with `git reset --hard pre-handoff-7` (or revert the handoff-7 commits) → push `staging`.

**Archived HTML:** `_archive/index-pre-astro.html`

**Worktree preview note:** Each worktree needs its own `.claude/launch.json`. Main repo launch.json uses port 4321 (`npm run dev`). Worktrees should use the next available port and start a new server from there.

---

## ⚠️ Design Authority + CSS Lock Rule

**`design.md` at the repo root** is the canonical design reference — it is the as-built document updated through all prior sessions. Read it before touching any CSS.

**🚫 No design drift — ever.** Never introduce a design element, value, or visual change — color, spacing, sizing, radius, border, shape, icon, hover, animation, or layout — unless it **(a)** comes directly from `design.md`, **or (b)** has been **expressly requested or approved by Ben.** When something is genuinely needed but not covered by `design.md` (e.g. a new control like the S3 carousel chevrons), do not invent and apply it: **propose it first**, grounded in existing `design.md` tokens and idioms, and wait for Ben's approval. A comp shown in the preview is a **proposal, not approval** — nothing becomes canon until Ben signs off, at which point it is added to `design.md` in the same batch.

**Do not use files in `handoff 4/` as a design reference.** That folder contains the original deliverables and is kept for historical record only (`handoff 4/ARCHIVED.md` explains this). The repo `design.md` supersedes everything there.

**Never change these CSS values without Ben's explicit approval:**
- Body font-size — `+0.020em` tracking, `24px`/`26px` line-height. Two groups (Ben-approved 2026-06-02):
  - **`.t-body-lg` shared class — 17px desktop / 16px mobile:** the single source of truth for S2 card subheads (`.s2__card-desc`), S5 paragraphs (`.s5__para` non-first), S6 bio (`.s6__para`), and S7 FAQ answers (`.s7__answer-inner`). The class owns only type (family/weight/size/line-height/tracking); each element keeps its own color + layout (and S2 card keeps its hover-to-white). **To resize any of these four, edit `.t-body-lg` once.**
  - **14px desktop / 16px mobile:** form fields, contact-form body (`.s-contact__body`)
- Display headings: `clamp(46px, 5.6vw, 84px)` weight 400, `-0.030em` — S2/S3/S4/S5 section heads
- **Hero headline:** `clamp(46px, 6.8vw, 84px)` — exact comp spec (previous session had inflated override at 8.3vw/120px — reverted)
- **Hero subhead:** desktop `font-size: 19px` / `line-height: 30px` / `max-width: 520px` — **Ben-approved 2026-06-04 bump from the comp spec `16px`/`26px`** (the copy read too small at 16px); kept Light 300 + `+0.020em` tracking + 520px block (a size-only nudge, not a tier change). **Mobile (≤640px) keeps `16px` / `26px`** (the mobile override must set BOTH — a regression where it inherited the desktop `30px` line-height was fixed 2026-06-04)
- **Hero copy block mobile bottom padding:** `.hero__content` mobile `padding-bottom: calc(100px + env(safe-area-inset-bottom, 0px))` — reserves the floating BEGIN PRACTICE CTA (≥20px gap + home indicator); don't drop below this or the last tag overlaps the CTA on devices with a home indicator
- **Hero copy block:** `max-width: 520px`
- S2 header body (`.s2__header-body`): matches S4 body type — `--font-body` weight 400, `clamp(22px, 2.2vw, 32px)`, line-height 1.2, `-0.010em`, solid `--ink`; keeps 22px clamp floor on mobile (NOT reduced to 16px like other paragraphs)
- S2 option cards: desktop `aspect-ratio: 1/1` (square) — `padding: 40px 28px 36px` — `gap: 16px` grid — no border — desktop square is locked. **Mobile (≤640px): 1-up full-width, fixed `height: 182px`, `padding: 28px`** — uniform across all four cards (square is dropped only at this breakpoint)
- S3 card: `clamp(280px, 30vw, 420px)` / `aspect-ratio: 3/4` / `padding: 40px`
- S3 card body: `clamp(17px, 1.4vw, 21px)`
- S3 card quote: `clamp(20px, 1.7vw, 26px)`
- All Mono: `13px` / `0.110em` (UI) · `14.4px` / `0.110em` (CTA) — never 10/11/12px or other tracking

**If the spec file and the live code disagree, check with Ben before changing either.**

---

## 📄 Documentation Rule — stale docs are bugs

**Keep ALL context files current — an out-of-date document is a bug.** Every change must leave `CONTEXT.md`, `SESSION.md`, `design.md`, `SEO.md`, and any other context/doc file accurate **in the same session/batch** as the work it describes. Docs are not allowed to drift behind the code.

- **Treat staleness like a bug:** when you notice a doc that no longer matches reality (a section describing removed images, superseded values, or old behavior — e.g. a "Hero Image Rotation" list naming images that were swapped out), **fix it as part of the work**, not "later."
- **Scan before finishing:** before wrapping any task, re-read the context files you touched — and adjacent ones — for drift, and correct what's stale.
- This is the enforcement arm of the same-batch doc-sync rule and the "No design drift" rule: code, design.md, and the context files move together, every time.

---

## Design System

See [`design.md`](design.md) — comprehensive as-built reference for all tokens, type scale, marks library, imagery rules, components, mobile, animation, and open decisions. Sourced directly from the repo by Claude Design on 2026-05-27. Supersedes all prior versions. The original Figma source is `Every Day Futures - Visual Identity.fig` by Form (Alice / designbyform.com).

---

## Site Sections

| ID | Section | Status |
|----|---------|--------|
| S1 | Hero (`Hero.astro`) | ✅ Complete |
| S2 | Coaching options — 1:1, Group, Orgs & Teams, Self-Led (`Services.astro`) | ✅ Complete |
| S3 | Practice Makes Progress — snap rail (`Testimonials.astro`) | ✅ Complete — 8 cards, ink/sage, `clamp(280,30vw,420)` / `3:4` |
| S4 | Copy + Tags / About (`About.astro`) | ✅ Complete |
| S5 | Waymaker (`Waymaker.astro`) | ✅ Complete |
| S6 | Taylor / Bio (`TaylorBio.astro`) | ✅ Complete |
| S7 | FAQ accordion (`FAQ.astro`) | ✅ Complete |
| — | Footer (`Footer.astro`) | ✅ Complete |
| — | Nav (`Nav.astro`) | ✅ Complete |
| — | **Mobile menu** (`Nav.astro` `.mmenu*`) | ✅ Complete — **staging only** (2026-06-11, handoff 7; design.md §5.15; ≤640px ink curtain) |
| — | Floating CTA (`CTABar.astro`) | ✅ Complete |
| — | **Begin flow** (`BeginFlow.astro`, `begin.astro`) | ✅ Complete — **live on main** (Step 2 anchored-split redesign + step indicator on staging, 2026-06-11) |
| — | **Writing** (`/writing` — `ArticleLayout.astro`, `src/pages/writing/`, `src/content/writing/`) | ✅ Complete — **link hidden from nav/footer/mobile 2026-06-22** (temporary; section still live + indexed). 2026-06-11, handoff 6; design.md §5.14; 2 published essays + 4 dev-only draft stubs |

---

## Implemented Features

### Hero Image Rotation
Images cycle sequentially on each page reload via `localStorage`. Sequence (`Layout.astro`):
1. `/images/rhododendron.jpg` — `50% 60%` (landscape — bottom-favored crop)
2. `/images/rainleaves.jpg` — `50% 60%` (landscape — bottom-favored crop)
3. `/images/silhouette-coast.jpg` — `50% 50%` (landscape — centered) — **2026-06-04: swapped from the vertical 1080×1440 crop to the horizontal `BR23_NL_Harmony_Lifestyle_Talent_Medium_Close_2_230519_2160` source, optimized to 2000×1333 (~476KB). Centered crop frames the silhouette head with ocean/rocks opening to the right.**
4. `/images/rose-sky.jpg` — `50% 40%` (portrait — red rose against blue sky; bloom framed upper-center, raised ~50px vs the initial `35%`) — **2026-06-04: added from source `IMG_3703.jpg` (1836×2611), optimized to 1406×2000 (~288KB). Replaced `willow-pool.jpeg` (square pool), which was removed from the rotation.**

Per-image `background-position` set in the rotation JS; CSS fallback on `.hero__bg` is `50% 60%` (only visible the split-second before JS runs). Positions tuned per-image because the photos differ in aspect ratio (3 landscape, 1 portrait) and `background-size: cover` crops each differently. **Note:** for the portrait `rose-sky`, **increasing** the Y% raises the bloom (counter-intuitive: the tall image overflows top/bottom, so a higher Y reveals lower image content, shifting the rose up). **Note:** on mobile (tall viewport) the *landscape* photos overflow left/right, so their vertical position has no effect there — the horizontal `50%` governs them. Mobile crops reviewed 2026-06-04 and left as-is (desktop values carry over acceptably). Key: `edf_hero`. JS runs before nav observer, sets `background-image` and `background-position` on `.hero__bg`.

### Begin Flow (`BeginFlow.astro`)

Three-step flow at `/begin` (standalone page) and as a bottom-sheet drawer on the homepage.

**Step 1 — Option selection**
- Four options: 1:1 Coaching, Orgs & Teams, Group Coaching, Self-led (order matches homepage)
- Auto-advances after 350ms on click (no Continue button)

**Step 2 — Contact form**
- Fields: First name (required), Email (required), Phone (optional — hidden for Self-led)
- Unified `.bf-nav` row (← Back · wordmark · ×) + **step indicator** above the content
- **Layout (anchored split — 2026-06-11 redesign, handoff 6; full spec in design.md §5.12):** grid `1.15fr/0.85fr` gap 72. LEFT on the cream: `Selected · {label}` **chip** → **service name as the single display-size H1** → **dek** (the approved offering-title copy, from `options.ts` `dek`) → offering grid (1px top hairline, open 2-col). RIGHT: **white form panel** (48/44/44) with "About you" + hairline, context note (the approved sub copy), fields, **full-width "Continue to scheduling →"** submit + reassurance line — **≤900px the booking submit label swaps to the short "Schedule →"** (`.bf-submit__label--short`; per Ben 2026-06-11, instead of collapsing the split; 900–~1180 the full label wraps 2 lines, accepted). Mobile = single column (indicator → chip → name → dek → offering w/ "What's included" toggle → panel at 20px padding). **Self-led waitlist variant** (JS, `.bf-form--waitlist`): blue "Coming Winter 2026" chip, 2-step indicator, "Join the waitlist" heading + coming-soon note, no Phone, submit **"Notify me"** (no arrow), waitlist reassurance.
- **Offering detail block** shown when a relevant option is selected:
  - `#bfOffering1on1` — shown for `1on1`; sections: Structure, What we work with, Between sessions, AI-supported practice
  - `#bfOfferingOrgs` — shown for `orgs`; sections: Structure, What we practice, Engagement types, Facilitation & support
  - `#bfOfferingGroup` — shown for `group`; sections: Structure, What we practice, Experience, Facilitation & support
  - `#bfOfferingSelflead` — shown for `selflead` (added 2026-06-11); sections: Structure ("Available Winter 2026"), What you practice
- `.bf-offering--hidden` (CSS `display: none`) toggled by `selectOption()` JS
- Netlify Forms — hidden static form + AJAX POST; **awaits the response and only advances to Step 3 on `res.ok`** (2026-06-05 reliability check). On failure: re-enables the submit button, removes the loading spinner, and shows `#bfSubmitError` ("That didn't send — please try again."); stays on Step 2 so the lead isn't silently lost.
- Mobile: flex-push submit button (margin-top: auto), `font-size: 16px` prevents iOS zoom, `env(safe-area-inset-bottom)` for home bar

**Step 3 — Downstream**
- For 1:1, Group, Orgs: Calendly widget loaded dynamically, on a **paper panel** mirroring the Step-2 form panel (2026-06-11)
- For Self-led: Confirmation screen ("You're on the list — Winter 2026"), on the cream

**URL param shortcut:** `/begin?option=1on1|group|orgs|selflead` skips step 1 — inline script adds `bf-has-param` to `<html>` before paint.

**Step visibility fix:** `showStep()` uses `element.style.setProperty('display', 'none', 'important')` and removes `bf-has-param` on every transition to prevent CSS specificity conflicts.

### Begin Drawer (homepage)

`BeginFlow` is embedded in a bottom-sheet drawer on the homepage (`index.astro`). Triggered by "Begin your practice" CTA.

- Drawer: `position: fixed; inset: 0; transform: translateY(100%)→translateY(0)` — 0.55s spring easing
- URL updates to `/begin` via `history.pushState` on open, reverts via `history.replaceState` on close
- `window.scrollTo` is patched while drawer is open so BeginFlow's step transitions scroll the drawer's inner scroll area instead of the window
- Close: ← BACK button, scrim click, Escape key, or browser back
- Focus trapped to drawer; first interactive element focused after transition
- `CTABar.astro` calls `window.__openBeginDrawer()` if available, else falls back to `/begin` href navigation

### Nav Contrast (hero page)

Nav text has a soft `text-shadow` for readability over the hero image — no gradient band:
```css
.nav__wordmark { text-shadow: 0 1px 12px rgba(0,0,0,0.40), 0 0px 4px rgba(0,0,0,0.20); }
.nav__link     { text-shadow: 0 1px 10px rgba(0,0,0,0.35), 0 0px 4px rgba(0,0,0,0.18); }
/* Cleared when scrolled (opaque white bg) or on begin page (dark text on cream bg) */
```

### Begin Page Background

`/begin` standalone page uses `background: var(--paper-cream)` so the transparent fixed nav blends with the BeginFlow content — no white stripe visible under the nav.

### S3 — Practice Makes Progress

Horizontal carousel, confined to the content column with flanking hairline chevrons. 8 cards alternating ink (outcome) / sage (testimonial). Mouse drag + touch scroll.

- Card: `width: clamp(280px, 30vw, 420px)` · **`aspect-ratio: 1/1` (square)** · `padding: 40px` _(squared from `3/4` on 2026-06-04 to match the S2 tier tiles)_
- Outcome body: `clamp(17px, 1.4vw, 21px)` Light 300
- Testimonial quote: `clamp(20px, 1.7vw, 26px)` Roman 400, italic
- **Infinite seamless loop** (2026-06-04): cards cloned into 3 sets (`[clones][originals][clones]`, clones `aria-hidden`); `scrollLeft` wraps by exactly one set onto identical content — never visibly resets to card 1. 4s auto-advance + chevrons + drag all retained (drag wraps live; chevrons throttled 550ms; no disable-at-ends). JS in `Layout.astro`.
- Mobile (≤640px): `78vw` **square** cards, `28px` padding, no gap (scales down proportionally)

### S2 Option Cards
4-up grid, square (`aspect-ratio: 1/1`), paper on cream, padding `40px 28px 36px`, `gap: 16px`, no border.
- Label: 32px Roman 400, `-0.020em`, top of card
- Desc: 16px Light 300, `+0.020em`, `26px` line-height, `rgba(0,0,0,0.55)`, `margin-top: auto` (pushed to bottom)
- **Hairline arrow** (`.s2__card-arrow`): thin 1px-stroke SVG `→` (S3-chevron / S7-plus-icon idiom, not a glyph), `rgba(0,0,0,0.40)` at rest. **Desktop: bottom-right** (`align-self: flex-end`). **Mobile ≤640px: top-right, aligned with the label** (`position: absolute; top: 24px; right: 28px`). _Ben-approved 2026-06-04 departure — cards were spec'd "no arrow"; this is the homepage S2 cards only (Begin `.bf-option` cards stay arrow-free)._
- Hover: surface inverts to `--blue` (#2956E0, the Begin Practice blue), label/desc go white; the arrow rides the invert → white + `translateX(6px)` (via `currentColor`). Mobile `:active` matches (blue).
- Per-option hover colors are a backlog item (all currently `--blue`)

### Design Comp Audit Fixes (2026-05-29)
CSS values verified against handoff 4 comp and corrected:
- S7 question: `clamp(20px, 2vw, 28px)` (was `clamp(22px, 2.2vw, 32px)`)
- S7 answer color: `rgba(0,0,0,0.62)` (was 0.60)
- S5 para color: `rgba(0,0,0,0.72)` (was 0.70)
- S5 inner gap: `56px` (was 48px)
- S5 body: `max-width: 880px` added (was missing)
- S6 eyebrow margin-bottom: `24px` (was 16px)
- Footer links gap: `28px` (was 40px)
- BeginFlow Step 1 cards: `aspect-ratio: 1/1` added (square, matches S2 cards)

### Mobile: Hero Tags
```css
.hero__tags { flex-direction: column; align-items: flex-start; }
```

### S6 Taylor Bio Photos
Two portraits in a **diagonal "implied box"** in the left column of the S6 bio grid (`#taylor` / `TaylorBio.astro`) — `--ur` pinned upper-right, `--ll` pinned lower-left (the "/" anti-diagonal), inner corners meeting at center with the 4px gap (upper-left + lower-right left open). _(Restored 2026-06-05 per Ben — this is the same layout originally shipped in `e027470`. It had been changed to a side-by-side flex pair in `3f4291d` (2026-06-03); Ben asked to bring the diagonal back. The even-earlier 3-photo absolute parallax scatter — `taylor-01.png` / `taylor-02.jpg` / `taylor-03.gif`, grayscale + GIF — is gone: no parallax, no grayscale.)_

**Markup:**
```html
<div class="s6__photos" id="s6Photos">
  <img src="/images/DSCF0084.jpg" class="s6__photo s6__photo--ll" alt="Taylor Winters" />  <!-- couch (lower-left) -->
  <img src="/images/DSCF0184.jpg" class="s6__photo s6__photo--ur" alt="Taylor Winters" />  <!-- brown blazer, smiling — upper-right (DSCF0184 retouched: warm wood column extended over the pale ceiling block; 900×1200) -->
</div>
```

**Layout (as built 2026-06-05 — diagonal restored):**
- `.s6__inner` — 2-col grid **`1.1fr 1fr`** (photos left / bio right), `gap: 80px`, `align-items: start`, `max-width: var(--max-w)`. (Grid unchanged from the side-by-side era; the 420px box left-aligns in the 1.1fr column.)
- `.s6__photos` — **`position: relative`, `max-width: 420px`, `aspect-ratio: 420/560`** (the implied-box frame). _Ben chose 420px (the original size) over a scaled-up variant; the photos read smaller and the column carries open space to the right._
- `.s6__photo` — `position: absolute`, `width: calc(50% - 2px)`, `height: calc(50% - 2px)`, `object-fit: cover` (the `-2px` per side makes the 4px diagonal gap). **`.s6__photo--ur { top:0; right:0 }`** = DSCF0184.jpg (smiling; the retouched DSCF0184 — warm wood column extended up over the pale ceiling block, replaced DSCF0172.jpg); **`.s6__photo--ll { bottom:0; left:0; transform: scaleX(-1) }`** = DSCF0084.jpg (couch, **mirrored horizontally** — same `scaleX(-1)` idiom as the S2 Calibration video). _Positions iterated 2026-06-05 per Ben: first swapped (couch UL / portrait LR), then moved to the anti-diagonal — couch straight down to lower-left, portrait straight up to upper-right; then the couch photo flipped horizontally._
- Source JPGs downscaled to 900×1200 (~140–175 KB) from 6192×8256 originals. Layout scales on tablet/mobile via the aspect-ratio (the column stacks to 1-up at ≤900/≤640).

### Section Slugs / Deep Links (added 2026-06-05)

Shareable fragment links into the homepage. **Fragments only — no SEO/canonical/sitemap impact; the SEO schema `#taylor` `@id` was deliberately left untouched.**

**Section anchors** (native browser scroll — section `id`s):
| Slug | Section |
|---|---|
| `#practice` | S2 — Choose how you practice (pre-existing) |
| `#results` | S3 — Practice makes progress _(renamed from `id="quotes"` 2026-06-05)_ |
| `#waymaker` | S5 — Who this practice is for (pre-existing) |
| `#taylor` | S6 — Taylor's bio (pre-existing; kept over `#coach` so the SEO Person `@id` stays valid) |
| `#faq` | S7 — FAQ (pre-existing) |

No `scroll-margin-top` needed — each section's top padding already clears the 78px fixed nav (verified on `#results`).

**Begin deep links** (JS-handled — NOT element ids): open the homepage Begin **drawer** and skip to **Step 2** with the option preselected.
| Slug | Option key |
|---|---|
| `#1-1coaching` | `1on1` |
| `#orgcoaching` | `orgs` |
| `#groupcoaching` | `group` |
| `#selfcoaching` | `selflead` |

Mechanism: `BeginFlow.astro` exposes `window.__beginSelectOption(key)` (calls its `selectOption(key, true)` → immediate skip to Step 2); an inline `is:inline` script in `index.astro` reads `location.hash` on load + `hashchange`, maps the slug, then calls `window.__openBeginDrawer()` + `__beginSelectOption(key)`. Opening the drawer `pushState`s to `/begin`, which drops the hash (clean URL, no re-trigger). Digit-leading `#1-1coaching` is safe because these are read as hash strings, never used as CSS selectors / element ids.

---

## Mobile Implementation

### Breakpoints
- Tablet: `@media (max-width: 900px)`
- Mobile: `@media (max-width: 640px)`

### Key Mobile Rules (≤640px)

`--gutter: 22px`. **Authoritative source: the `@media (max-width: 640px)` block in `src/styles/global.css`** — this is a current summary, not a verbatim copy. (The previous version of this block was stale — it described a removed mobile tier *carousel*, the old `.s2__option` rows, the `.s6__photo--a/b/c` scatter, a full-width bottom CTA bar, and removed tokens `--paper-bone` / `--orange`. None of that exists anymore.)

- **S2:** the section becomes `display: grid` (`grid-template-columns: minmax(0, 1fr)`) and reorders via `order` to **header (0) → option cards (1) → tier tiles (2)** (same order as desktop — tiles moved below the cards 2026-06-04); section bottom padding 88px. Gaps: cards `margin-top: 32px` (header gap), tiers `margin-top: 16px` (inter-group). The `.s2__header` keeps its full-bleed cream band (negative margin/padding — not a flex change). **Tier tiles** sit BELOW the cards, `flex: 1`, **square `aspect-ratio: 1/1`**, **`gap: 4px`**, `max-width: none` (no scroll/snap — replaced the old 72vw snap carousel); tier number + label shrink to 11px/0.08em, label nudged to `bottom: 4px`. **Option cards** (`.s2__card`) are 1-up, `aspect-ratio: auto`, fixed `height: 140px`, `padding: 20px 28px`, `.s2__card-label` 25px; `:active` → `--blue`.
- **S3:** carousel chevrons hidden (`.s3__chev display: none`); rail is the full-bleed swipe (`gap: 0`, `padding-left: var(--gutter)`, `padding-right: 28vw`); cards `width: 78vw`, `padding: 28px`.
- **S4 / S5 / S6:** two-column grids collapse to single column (`grid-template-columns: 1fr`); S4 gap 40px (its photo collage keeps the 2-column grid — threshold left full-height + horizon bottom-right, top-right open since `waymaker-pool` was removed), S5 gap 40px, S6 gap 48px (the two bio portraits scale via their aspect-ratio).
- **Float CTA:** same centered floating 4px button as desktop (NOT a full-width bar); parks 10px above the footer when revealed (handled in the base `.float-cta` rules, all viewports); `:active` → `--blue`.
- **Footer:** `.site-footer__inner` stacks (`flex-direction: column`, gap 28px); links wrap naturally (the mobile-only "Client Portal" link + `.site-footer__break` were retired 2026-06-11 — the mobile menu carries Client Portal); bottom padding clears the floating CTA.
- **Nav:** `.nav__right` (Writing + Client Portal links) hidden; the **"MENU" trigger** (`.mmenu-trigger`) renders in its slot and opens the mobile menu curtain (design.md §5.15).

### Hero Wordmark (mobile)
Animation is skipped on mobile (`window.innerWidth < 641` early return in Layout.astro JS). Wordmark stays in nav — no risk of clipping at small viewports.

---

## JS Summary

Three IntersectionObservers:
1. **Nav / float CTA** — toggles `.scrolled` on nav and `.visible` on float CTA when hero exits
1b. **Float CTA over-hero inversion** — a scroll handler (in the same `if (hero && nav && floatCta)` block) toggles `.over-hero` on the float CTA when `hero.getBoundingClientRect().bottom > ctaLink.top` (the hero is the section behind the button). `.float-cta.over-hero` → **white surface / ink label** (default is black-on-ink); reverts from S2 onward. Hover stays `--blue` in both states; 0.25s background+color transition. (Ben-approved 2026-06-04 reintroduction of a white-CTA state — distinct from the removed over-footer white inversion; over-footer still stays black.)
2. **Float CTA over-footer parking** — adds `.over-footer` to the float CTA when `.site-footer` is visible; the CTA then parks 10px above the footer (`position: absolute; bottom: calc(var(--footer-h) + 10px)`, anchored to `body`) and stays black (no color inversion). Applies to desktop + mobile. `--footer-h` is published by JS in `Layout.astro` on load + resize + a `ResizeObserver` on the footer (the observer is important — without it, changing the footer links left `--footer-h` stale and the CTA overlapped the footer).
3. **Staggered reveal** — observes `.s2__headline, .s2__card, .s3, .s4__body, .s4__tags, .s5__left, .s5__body, .s6__photos, .s6__bio, .s7__item` — 110ms stagger per element. The S2 headline uses this standard fade-up (opacity + translateY 24px); it no longer has a bespoke clip-mask slide-up reveal.

Parallax scroll handler: queries all `[data-parallax]`, calculates center offset relative to parent `.s2__free`, `.s3__quote`, or `.s6__photos`, applies `translateY`.

FAQ accordion: click triggers `.open` toggle, one item open at a time, `max-height` CSS transition.

Taylor bio show more: `#s6MoreToggle` click toggles `.more-open` on `#s6Bio`, expanding `.s6__more` (paragraphs 4 & 5) via `max-height` transition; button label swaps "Show more" ⇄ "Show less" + `aria-expanded`.

---

## Marks Library

All SVGs in `public/marks/` (served as `/marks/`) — fill `#2956e0`, variable stroke width.

| File | Dimensions | Used in |
|---|---|---|
| `Vector.svg` | 72×218 | Unused |
| `Vector-1.svg` | 243×194 | Unused (was S3 quote — no longer rendered) |
| `Vector-2.svg` | 313×68 | Unused |
| `Vector-3.svg` | 93×189 | Unused |
| `Vector-4.svg` | 344×318 | Unused (was S2 header — no longer rendered) |
| `Vector-5.svg` | 348×181 | S1 Hero — circles "possibility" (inverted white, inline-styled in `Hero.astro`) |
| `Vector-6.svg` | — | Unused (was S2 "Free discovery call" strip — no longer exists) |
| `Vector-7.svg` | — | Unused |
| `Vector-8.svg` | 438×173 | S4 About — top-left of section (`About.astro`) |
| `Vector-9.svg` | — | Unused |
| `Vector-10.svg` | 180×140 | S5 Waymaker — left of word (`Waymaker.astro`) + S7 FAQ — top-left of section (`FAQ.astro`) |
| `Vector-11.svg` | — | Unused |
| `Vector-12.svg` | — | Unused (was S1 Hero underline on "future") |

---

## Images Available

**Brand / scene assets** (`public/images/`):
`dunes.png`, `feather.png`, `hero-coast.jpg`, `hero-red-sun.jpg`, `hero-rose.png`, `horizon.png`, `lotus.png`, `mountain-card.png`, `painting.png`, `rose.png`, `window-sunset.png`

**Taylor portraits** (`public/images/`):
- **Active S6 bio portraits: `DSCF0184.jpg` + `DSCF0084.jpg`** (diagonal implied box — see "S6 Taylor Bio Photos"; 900×1200)
- `taylor-01.png`, `taylor-02.jpg`, `taylor-03.gif` — **Unused** (former parallax-scatter portraits; replaced)
- `taylor-03.jpg`, `taylor-04.jpg`, `taylor-04b.jpg`, `taylor-05.jpg`, `taylor-05b.jpg`, `taylor-06.jpg`, `taylor-07.jpg` — Unused placeholder JPGs

---

## Passed / Rejected Concepts

| Concept | Verdict |
|---------|---------|
| Waymaker underline hover (blue scaleX `::after`) | ❌ Reverted |
| Hero image crossfade on scroll | ❌ Passed |
| Taylor chapter break on mobile (full-viewport portrait + name overlay) | ❌ Passed |

---

## Begin Page (`/begin`)

**Component:** `src/components/BeginFlow.astro` (self-contained — all HTML, CSS, and JS inline)  
**Page shell:** `src/pages/begin.astro`  
**Route:** `/begin`

### Flow Overview

Three-step inline flow. No page navigation between steps — JS shows/hides.

| Step | ID | Content |
|------|-----|---------|
| 1 | `#bfStep1` | Option selection — 4 cards (1:1, Group, Orgs & Teams, Self-led) |
| 2 | `#bfStep2` | Contact form — First name, Email, Phone (optional) |
| 3 | `#bfStep3` | Calendly embed (or self-led confirmation for `selflead`) |

### Step Transitions

- **Step 1 → Step 2:** Clicking an option auto-advances after **350ms** (no Continue button). The selected option is stored in `selectedOption` variable.
- **Step 2 → Step 1:** "← Change selection" back button.
- **Step 2 → Step 3:** Clicking BEGIN validates the form, `await`s the Netlify Forms AJAX POST, and calls `advanceToStep3()` **only if `res.ok`** (2026-06-05). On failure it shows `#bfSubmitError` and re-enables the button (no advance).

### URL Param Shortcut

Homepage CTAs link to `/begin?option=1on1` (or `group`, `orgs`, `selflead`). When a valid `option` param is present:
1. `begin.astro` inline script adds `bf-has-param` class to `<html>` **synchronously before paint**
2. Global CSS: `html.bf-has-param #bfStep1 { display: none !important }` and `html.bf-has-param #bfStep2 { display: flex !important }` — prevents step 1 flash
3. BeginFlow IIFE calls `selectOption(paramOption, true)` with `immediate=true` (0ms delay)
4. setTimeout fires: removes `bf-has-param`, calls `showStep(step2)`, scrolls to top

### CSS Specificity Bug (fixed 2026-05-13)

`html.bf-has-param #bfStep2 { display: flex !important }` has specificity 1-1-1, which beats `.bf-step--hidden[data-astro-cid-*] { display: none !important }` at 0-2-0 — even with `!important` on both. Higher specificity wins. If `bf-has-param` was still on `<html>` when BEGIN was clicked, step 2 could never be CSS-hidden.

**Fix:** `showStep()` now uses `element.style.setProperty('display', 'none', 'important')` for non-target steps (inline `!important` beats any stylesheet rule) and also removes `bf-has-param` on every step transition.

### Netlify Forms

A hidden static form (with `netlify` attribute) is included for build-time form registration. The visible AJAX form POSTs to `/` with `form-name: begin` and `Content-Type: application/x-www-form-urlencoded`. **The response is now awaited and checked (`res.ok`)** — advance on success, show `#bfSubmitError` on failure (2026-06-05; the Contact form's `#contactForm` got the same treatment via `#contactError`). **Contact success state (2026-06-05):** on `res.ok` the whole page transforms — the heading `#contactHeading` swaps "Get in touch" → **"Thank you"** (same `.s-contact__heading` style), the intro `#contactIntro` + meta `#contactMeta` (Direct/Elsewhere) are hidden (`style.display='none'` — inline, since `.s-contact__meta` sets its own `display` and the `hidden` attr wouldn't win), the form column `.s-contact__form-wrap` is hidden, and `#contactConfirm` (in the **left** column, styled `.s-contact__body t-body-lg`, `hidden` by default) reveals: "Thanks so much for your interest and someone from Every Day Future will be in touch shortly." (Earlier `#contactConfirm` lived *inside* the form, so it was hidden with the form and never showed — that's the bug this fixed.) `#contactError` stays inside the form (the form stays visible on failure).

### Calendly Integration

Calendly widgets are created dynamically in JS when step 3 appears. Script loaded lazily on first use. **All real URLs wired 2026-06-11 (launch #1 ✅); events verified live on Taylor's account.**

| Option | Calendly URL |
|--------|-------------|
| `1on1` | `https://calendly.com/coach-everydayfuture/1-1-discovery-session` |
| `orgs` | `https://calendly.com/coach-everydayfuture/orgs-teams-discovery` |
| `group` | `https://calendly.com/coach-everydayfuture/group-coaching-discovery` |
| `selflead` | No Calendly — shows "You're on the list" confirmation screen (submit button reads "Notify me") |

### Design Decisions (Begin page)

- No "Begin your practice" eyebrow on step 1
- No Continue button — auto-advance on selection
- Step 2 nav: back arrow and badge stacked vertically (`bf-top-nav`)
- Form label: "About you" (not "A little about you")
- No form note/disclaimer — users are booking on the next screen
- Field separators: padding only, no border lines between fields
- Submit button: 48px height, 0 40px padding (matches site CTA standard)
- Option label letter-spacing: -0.020em (matches h2 scale)

---

## Design Reference

`design.md` at repo root is the source of truth for the EDF brand system — updated 2026-05-28 to the handoff 2 spec (strict Figma compliance). Key changes from prior build:

| Element | Before | After (this pass) |
|---------|--------|-------------------|
| Color palette | 11 tokens incl. orange, bone, clay, dusk, moss | 7 tokens — paper/off-a/off-b/cream/sage/ink/blue |
| Float CTA shape | 100px pill | 4px rectangle |
| Float CTA hover | Orange | Blue |
| CTA label | "Begin" | "Begin Practice" |
| Display font weight | 300 (Light) | 400 (Roman) |
| Eyebrow size | 11px / 0.180em | 13px / 0.110em |
| Wordmark family | Inter (--font-display) | Helvetica Neue (--font-body, w:200) |
| S2 layout | Option rows (title + arrow) | 4-up card grid |
| S3 surface | paper-bone | paper (white) |
| S3 card alternation | clay/dusk/moss/ink outcomes | strict ink/sage |
| S3 quote style | italic | roman |
| S6 Taylor photos | 3-photo scatter + parallax | single portrait, full opacity |
| Section eyebrows | Present on some sections | None |
| Orange accent dots | In footer, hero | Removed |
| Footer links | Login · Terms · Privacy | Contact · Instagram · Login · Terms · Privacy |
| Contact section | None | New `Contact.astro` at `#contact` |

---

## Open Items

> 📋 **Launch-blocking to-dos are tracked in [`LAUNCH.md`](LAUNCH.md)** (the single launch checklist — Calendly URLs, bio/Waymaker images, Begin-flow verify, Netlify Forms, domain cutover, post-launch). The lists below are the broader product/design/architecture backlog; where they overlap with launch, `LAUNCH.md` is authoritative.

### ↩️ Deliberate spec departures (may revert)
- [ ] **S2 tier tiles → square (`1/1`)** — _added 2026-06-04; we may want to go back to the tall version, so this is the rollback recipe._ The 3 tier tiles (Foundation / Calibration / Expansion) were changed from **tall** to **square**, plus the Calibration video mirrored and the mobile labels nudged down. **To roll back to the previous (tall) version, revert these 4 edits in `src/styles/global.css`:**
  1. `.s2__tier` (desktop) `aspect-ratio: 1 / 1` → **`2 / 3.3`**
  2. `.s2__tier` (mobile, ≤640px block) `aspect-ratio: 1 / 1` → **`2 / 3`**
  3. **Remove** the mirror rule `.s2__tier:nth-child(2) video { transform: scaleX(-1); }` (Calibration flip — this was new, not a pre-existing value)
  4. **Remove** the mobile label nudge `.s2__tier-label { bottom: 4px; }` (label reverts to the base `bottom: 14px`)
  Everything else (full-width row, `Expansion scale(1.20)` zoom, `01/02/03` numbers at `top: 14px`, the 11px mobile num/label size) is unchanged by this departure and stays as-is on rollback.
- [ ] **Wordmark enlarged (weight kept at spec)** — the heavier weight was tried (commits `8d85620`/`4cd61cf`) then **rolled back to the Figma-spec `200` ultralight**; only the **size** now departs from spec: nav `27.5px` (was 25), footer `24.2px` (was 22). To fully restore the Figma spec, also reset the sizes: `.nav__wordmark` → `font-size: 25px;` and `.site-footer__wordmark` → `font-size: 22px;`.

### ⏳ Needs device verification (may roll back)
- [ ] **Hero `.hero__bg` Chromium/Brave zoom fix** — commit `c4f1eb9` (staging) decoupled the hero background to a fixed `height: 100lvh` (was `inset: 0`) to stop the cover image re-zooming as the mobile toolbar collapses. `svh` (commit `f9ac889`) already fixed Safari; this targets Chromium/Brave. **Cannot be verified in the chromeless preview — must be tested on a real Brave/Android device.** If it doesn't help or regresses, roll back with: `git revert c4f1eb9 && git push origin staging`. Next thing to try if it persists: the bg's `opacity: 0.88` layer being re-rasterized during Brave's toolbar animation (move darkening to the gradient overlay, or force a stable compositing layer).


### Content
- [x] **FAQ answers** — real copy in place (6 Q&As)
- [x] **Orgs & Teams S2 desc** — real copy in place (via shared options data file)
- [x] **Group Coaching offering detail** — implemented in BeginFlow Step 2 (`#bfOfferingGroup`)
- [x] **Contact section** — `Contact.astro` at `#contact`, Netlify Forms wiring (routing to Netlify dashboard)
- [ ] **Formetica license** — currently using Helvetica Neue (falls back to Arial on Windows/Android)
- [x] **Calendly URLs** — ✅ all three real discovery URLs wired + events verified 2026-06-11 (launch #1 done; see `options.ts`)
- [x] **Netlify Forms — capture + email notifications VERIFIED end-to-end (2026-06-05).** Detection ran on staging deploy `ec42beb` (Netlify rewrote `<form … netlify>` → `<form … method='post'>`); test POSTs to `contact` + `begin` returned HTTP 200 (accepted); reliability check live (success-only advance/confirm); **email notifications → `coach@everydayfuture.work` confirmed arriving.** Remaining: delete test entries; re-verify on `main` after merge (Forms store + notifications are site-level → already registered). Original checklist kept below for reference: (dashboard only — the form *code* is confirmed correctly wired: `contact` + `begin`, both with hidden static form + `netlify` + honeypot + AJAX `POST /`, present in the deployed HTML).
  1. **Confirm detection** — Netlify → site `everyday-future-v4` → latest deploy log shows "Detected 2 forms" (`contact`, `begin`); or Site config → **Forms** lists both. _If NOT detected:_ Site config → Forms → enable **Form detection**, then Deploys → **Trigger deploy → Clear cache and deploy site** so detection re-runs.
  2. **Test submit** — submit each form once on the live site (staging or prod), then confirm the entry appears under Forms → `contact` (name/email/subject/message) and `begin` (first-name/email/phone/option).
  3. **Notifications → `coach@everydayfuture.work`** — Forms → notifications → add an **Email notification** for BOTH forms (the site displays `coach@` as of 2026-06-04). Optionally add Slack/webhook.
  4. **Spam** — honeypot (`bot-field`) is already wired; enable reCAPTCHA in form settings only if spam appears.
  5. **Production** — re-confirm on `main` after merge (the Forms store + notifications are site-level, so detection on either branch registers the form).
  - ✅ Reliability check ADDED (2026-06-05): both forms now `await` the POST and only succeed on `res.ok` — a rejected/undetected POST shows an inline error instead of false success (`#contactError` / `#bfSubmitError`). ⚠️ **Sequencing:** this means a failed submit now *blocks* (contact won't confirm; begin won't reach Step 3). So **Netlify form detection must be enabled/confirmed** (step 1 below) before relying on the live flow — otherwise every submit errors. The check actually helps surface a misconfigured form during launch verification.
  - Note: Calendly (Begin step 3, for 1:1/Group/Orgs) captures booking data in **Calendly**, separate from Netlify; the `begin` form still captures the lead before step 3.
- [x] **Begin page: pushed to main** — Live at https://everyday-future-v4.netlify.app (2026-05-28)

### Mobile (ideas not yet implemented)
- [ ] **Word-by-word quote reveal** — animated text reveal on scroll for S3 quotes on mobile
- [ ] **Sticky Waymaker with sequencing** — Waymaker list items animate in as user scrolls
- [ ] **Waymaker section hover interactivity** — no resolution yet; underline version was rejected

### Scroll / Animation (from backlog)
- [ ] Hero word stagger entrance animation
- [ ] S2 diagonal entrance on scroll
- [ ] Waymaker scale entrance
- [ ] Overlapping section stack scroll effect
- [ ] SVG mark refinement (marks placed but not tuned for position/scale/rotation/opacity)

### S2 Hover Colors
- [ ] **Per-option hover colors** — currently all ink. Decide on final per-option colors (blue for Group, cream or other for Orgs & Teams, orange for Self-led) once content direction is settled.

### Architecture
- [x] **Astro migration** — complete and merged to `main` (commit `ebcf4bc`). Live at production and staging.
- [x] **Practice options shared data file** — `src/data/options.ts` is the single source of truth for option keys, labels, descriptions, and Calendly URLs. Both `Services.astro` and `BeginFlow.astro` import from it.
- [ ] **Monorepo consolidation** — `everyday-future-v4/` and `edf-portal-updated_3/` to share design tokens
- [x] **Staging branch** — wired to Netlify, `npm run build` → `dist/` via `netlify.toml`.
- [ ] **Landing pages** — structure TBD, not started

### Portal Integration
- [ ] **Portal reskin to v4 design system** — `edf-portal-updated_3/` uses different design system
- [ ] Replace Squarespace logo URL in portal header with proper wordmark text
- [ ] Portal currently uses `localStorage` for client list

---

## Related Project: Client Portal

**Folder:** `Projects/Software/edf-portal-updated_3/`  
**Files:** `admin-create.html`, `client-portal.html`, `netlify.toml`  
**Live:** `portal.everydayfuture.work`

Admin creates portals by filling in client name + Drive folder URL + Calendly URL + Stripe URL + WhatsApp number. Data is base64-encoded into a URL param (`?c=...`) and shared with client. Client portal decodes URL and renders 4 cards (Drive, Book Session, Payments, Message Taylor). Client list stored in `localStorage` on admin device.

---

## Deployment

- GitHub repo: `ben77win/everyday-future-v4`
- Netlify auto-deploys on push to `main` (production) and `staging`
- Build command: `npm run build` — publish dir: `dist/` (set via `netlify.toml` in repo root)
- Hero concept: separate Netlify site, publish dir = `hero-concept/`
- `.gitignore` excludes: `.DS_Store`, `SESSION.md`, `index.checkpoint-*.html`, `hero-concept.html`, `node_modules`, `dist`, `.astro`
- **Note:** Netlify CDN caches aggressively. After pushing, users may need a hard refresh (`Cmd+Shift+R`) to see updates.

### Deploy Rule
Always push to `staging` first. Only push to `main` when Ben explicitly approves. Never push to `main` unilaterally.
