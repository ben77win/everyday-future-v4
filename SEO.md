# SEO & AI Discoverability — Plan

> 📋 **The single launch checklist is [`LAUNCH.md`](LAUNCH.md)** — work from there. This file is the detailed SEO plan + the Domain Cutover playbook that `LAUNCH.md` links to. On-site SEO (B1–B9 + entity schema) is **done and on `staging`**; remaining SEO work is off-site (Search Console, analytics, GBP) and is tracked in `LAUNCH.md` §3.

_Status: **DONE + live on production.** On-site SEO shipped; **domain cutover complete 2026-06-17** (`everydayfuture.work` on Netlify); Search Console, Google Business Profile, and GA4 all set up. Captured 2026-06-03; this file is now the as-shipped record + the cutover/keyword playbooks._

---

# 📊 Status Board  (the dashboard — updated every working session)

> States: 🔒 locked · ✅ done · 🟡 in progress / asset ready · ⬜ open · ⛔ blocked. _Last updated 2026-06-17 (session 9 — cutover + off-site SEO complete)._
>
> **All SEO is live on production.** On-site SEO + the positioning `<h3>` shipped; **domain cutover complete 2026-06-17** — `everydayfuture.work` on Netlify, `staging` = `main`. Off-site set up: **Search Console** (domain property + sitemap), **Google Business Profile** (SAB, PNW), **GA4** (`G-05G2PBBWW1` + `generate_lead` conversion). Remaining = ongoing only (client reviews, indexing maturing over days/weeks, optional definitional content page).

| Item | Status | Current decision / note |
|---|---|---|
| Production domain | 🔒 locked | `everydayfuture.work` |
| **A1 — Positioning** | 🔒 locked | **Option B — lead with “conscious executive coaching.”** Head terms = executive/leadership coaching; differentiator = conscious executive coaching (calculated adjacency to conscious-leadership interest); audience = leaders & founders navigating change; methods = neuroscience-informed (IPNB), NLP/DBT; geo = remote-first, Seattle-based. ⚠️ **B requires homepage copy — see To-dos.** |
| A2 — AI-crawler policy | 🔒 locked | **Allow** all crawlers incl. AI (GPTBot/ClaudeBot/PerplexityBot/Google-Extended) — discoverability + citation desired |
| A3 — Share image | ✅ done | `public/images/og-image.png` (46 KB, 1200×630, brand card) |
| A4 — Favicon | ✅ done | stacked **EDF** wordmark icon provided (`wordmark-edf-icon.png`, 512px, white-on-black) |
| B1 — `site` config | ✅ done | `site: 'https://everydayfuture.work'` in astro.config.mjs |
| B2 — titles + descriptions | ✅ done | unique per page (home/contact/begin/privacy/terms) via Layout props |
| B3 — canonical URLs | ✅ done | absolute, per-page, built from `site` + path |
| B4 — OG/Twitter text tags | ✅ done | og:type/site_name/title/description/url + twitter summary_large_image |
| B5 — og:image / twitter:image | ✅ done | `https://everydayfuture.work/images/og-image.png` (+ width/height/alt) |
| B6 — favicon links | ✅ done | `public/favicon.png` (512) + generated `favicon-32.png` + `apple-touch-icon.png` (180); `<link>` tags in Layout.astro |
| B7 — robots.txt | ✅ done | `public/robots.txt` — allow all + Sitemap line (A2 = allow) |
| B8 — sitemap.xml | ✅ done | `@astrojs/sitemap` **pinned to 3.2.1** (3.7.3 needs Astro 5; this is Astro 4.16). Generates `/sitemap-index.xml` |
| B9 — FAQPage JSON-LD | ✅ done | 6 Q&As in `FAQ.astro` as JSON-LD |
| **Homepage copy — “conscious executive coaching”** | ✅ done | **Approved + applied** 2026-06-04 — clause added to the Taylor bio (`TaylorBio.astro:15`): “— a conscious executive coaching practice —”. Exact phrase now in visible homepage copy; Option B supported. |
| Opp #2 — Person/ProfessionalService schema | ✅ done | `@graph` (ProfessionalService + Person) on homepage — legalName LTW Coaching LLC, areaServed US+Europe, Seattle/WA base, founder Taylor Winters ("Founder & Conscious Executive Coach"), Berkeley Haas credential, LinkedIn+Instagram `sameAs` |
| Opp #3 — Search Console + analytics | ✅ done | SC domain property verified + `sitemap-index.xml` submitted (2026-06-17, owner `benjamin.winters@gmail.com`); GA4 `G-05G2PBBWW1` live + `generate_lead` conversion (owner `ben@wintersand.co`) |
| Opp #4 — Google Business Profile | ✅ done | Created + verified 2026-06-17 — Service-Area Business (address hidden), PNW areas, full profile (owner `ben@wintersand.co`). Ongoing: client reviews |
| Opp #5 — LinkedIn + `sameAs` | ✅ done | LinkedIn (`/in/ltaylorwinters/`) in schema `sameAs` + **visible footer link** added (Contact · Instagram · LinkedIn · Terms · Privacy) |

### To-dos (need Ben / Taylor)
- [x] ~~**Get “conscious executive coaching” into homepage visible copy**~~ — ✅ done 2026-06-04 (approved): clause added to Taylor bio (`TaylorBio.astro:15`).
- [x] ~~**A2 — AI-crawler policy**~~ — ✅ allow (2026-06-04).
- [x] ~~**A4 — Favicon**~~ — ✅ done 2026-06-04 (stacked EDF wordmark icon; 32px + 180px generated, wired). **Launch SEO code set complete (B1–B9).**

### Decisions log
- **2026-06-11 (publishing home)** — **Decided: all articles publish on `everydayfuture.work`, not Substack** (domain authority, canonical control, AI citations, no Substack publishing API — full rationale in the Keyword Strategy section). Also: H1/H2 options for getting "conscious executive coaching" into a visible homepage heading — **Option A approved + implemented same day** (S3 subhead → `<h3>` "Outcomes from conscious executive coaching"; verified zero visual change in preview).
- **2026-06-11 (keyword research)** — Deep-research pass on the keyword landscape → new **"🔑 Keyword Strategy"** section below. Headline: "conscious executive coaching" is contested (Inductive, Boulder CO targets the exact phrase) but winnable — no trademark, no Seattle competitor, CLG doesn't target "executive coaching." Priorities: (1) definitional "What is conscious executive coaching?" page, (2) GBP post-cutover (Seattle address + worldwide service area), (3) problem-framed long-tail articles. Don't chase: "conscious leadership coaching" (CLG-owned), national head terms, modality keywords.
- **2026-06-04 (session 4 closed)** — Email reverted info@ → **`coach@everydayfuture.work`** site-wide (7 occurrences); LinkedIn **footer link** added (`/in/ltaylorwinters/`); **Domain Cutover Checklist** (Squarespace → Netlify) added. **All committed + pushed to staging:** `27af93e` (SEO batch) + `8d442a9` (footer + checklist). Tip `8d442a9`, **93 ahead of main**. Next: verify on staging → 301 redirect map (needs Squarespace URLs) → `staging → main` merge (Ben's go-ahead) → DNS repoint → post-cutover Search Console/analytics/GBP.
- **2026-06-04 (entity schema)** — Built Person + ProfessionalService JSON-LD (`@graph`) on the homepage (`index.astro`). Verified facts only: legalName LTW Coaching LLC, areaServed **United States + Europe** (Seattle/WA base via `address`), founder "Taylor Winters — Founder & Conscious Executive Coach", credential UC Berkeley Haas exec-coaching cert (`hasCredential`, not a degree), `sameAs` = verified LinkedIn (`/in/ltaylorwinters/`) + Instagram. Both JSON-LD blocks valid; build clean. (Opp #2 done; Opp #5 schema part done — optional footer LinkedIn link remains.)
- **2026-06-04 (favicon)** — A4 favicon provided (stacked EDF wordmark, 512px white-on-black). Placed `public/favicon.png`; generated `favicon-32.png` + `apple-touch-icon.png` (180) via sharp; wired `<link>` tags in Layout. Build clean, icon serves 200. **B6 done → launch SEO code set (B1–B9) complete.** Remaining = non-code only (Search Console/analytics, GBP, LinkedIn) + optional Person/Service schema.
- **2026-06-04 (build)** — Shipped the launch SEO set (verified via `npm run build`): B1 `site` config, B2 per-page titles/descriptions, B3 canonicals, B4 OG/Twitter, B5 og:image (og-image.png), B7 robots.txt (allow), B8 sitemap (5 URLs; **sitemap pinned 3.7.3→3.2.1** for Astro-4 compat), B9 FAQPage JSON-LD. Bio copy edit applied (approved). A2 = allow. (Shipped in `27af93e`.)
- **2026-06-04** — Domain locked: `everydayfuture.work`. Share image provided + placed (`og-image.png`). **A1 LOCKED → Option B: lead with “conscious executive coaching”** (calculated adjacency; “conscious leadership coaching” ruled out as an owned CLG/15-Commitments niche). Head terms executive/leadership coaching; audience leaders & founders navigating change; methods neuroscience-informed (IPNB), NLP/DBT; geo remote-first, Seattle-based. **B carries a dependency:** the phrase must land in homepage copy (Taylor bio) — added to To-dos, pending Taylor approval. **Open:** A2 crawler policy, A4 favicon.

---

# 🔑 Keyword Strategy — "Conscious Executive Coaching" (researched 2026-06-11)

_Deep-research pass (18 sources, 87 claims extracted, 25 adversarially fact-checked → 14 confirmed). Validates the locked Option B positioning with two refinements. Caveat: specific search-volume numbers mostly failed verification (tools disagree wildly) — treat volumes as directional._

## The big picture

**"Conscious executive coaching" is contested but winnable.** It is not virgin territory — one boutique competitor, **Inductive** (inductive.work, Boulder CO), already targets the exact phrase in their page title. But one competitor is very different from an owned category. Key facts, all verified:

- **"Conscious leadership coaching" is confirmed off-limits** — anchored to the Conscious Leadership Group (conscious.is, the "15 Commitments" book). They actively sell coaching (individual, group, intensives, org cohorts), and even Inductive's method derives from CLG's toolkit. Avoiding that phrase was the right call.
- **CLG does not target "executive coaching"** as a term — the conscious + executive intersection sits between their territory and generic executive-coaching results, with only Inductive squarely on it.
- **Inductive is not in Seattle** (Boulder, CO — no WA presence). Locally, the term is open.
- **No legal obstacle:** no USPTO registration for the exact phrase; Inductive uses no ™/®. The closest mark ("THE CONSCIOUS EXECUTIVE") is a pending application stuck in an office action. It's a descriptive phrase — hard for anyone to trademark. Owning it is an SEO/brand race, not a legal one. _(Not legal advice; consult a WA attorney if Taylor ever wants to file.)_

## How people actually search (verified patterns)

1. **Two query classes:** *lead-generating* (near a hiring decision — converts, short journey) vs *traffic-generating* (research-stage). Target the first; use the second only to feed the first.
2. **Buyer-intent modifiers** mark the money queries: "best," "top," "near me," "in Seattle" → **"executive coach near me," "Seattle executive coach"** are where buyers are.
3. **Long-tail beats head terms for a solo practice** — specific service + audience phrases bring more qualified leads than bare "executive coach."
4. **Nobody searches modality terms.** Competitors in this niche frame in value/outcome language, not IPNB/NLP/DBT. Keep modalities as credibility copy (bio, schema), never as keyword targets.
5. **Volume (directional):** "leadership coaching" ≈ 18k/mo, slightly above "executive coaching." Both unrankable nationally for a new solo site — they're supporting terms, not targets.
6. **Seattle is populated but not saturated** (~32 firms on Clutch). "Seattle executive coach" is a realistic mid-term target; national head terms are not.

## The strategy, in priority order

**Tier 1 — own the niche term.**
The homepage already leads with "conscious executive coaching" (title, bio clause, schema — shipped session 4). To beat Inductive: get the phrase into a visible H1/H2, and publish **one definitional page — "What is conscious executive coaching?"** Whoever defines a term this young owns it in search *and* gets cited by AI answer engines (our robots.txt already invites them). This single page is the highest-leverage content we can create; every future article links back to it.

**Tier 2 — capture Seattle buyer intent.**
**Google Business Profile** (post-DNS-cutover, see LAUNCH.md §3) is the highest-ROI move per hour invested — it's what serves "near me" / map-pack queries. The Seattle address does **not** conflict with serving clients everywhere — local and national are two separate channels that never compete. The mental model: someone in Seattle searching "executive coach near me" finds Taylor through the map pack; someone in New York searching "conscious executive coaching" finds her through the homepage and the definitional page. Two doors, one practice.

> **GBP setup notes (when we set it up, post-cutover):**
> - Verify at the Seattle address, but configure as a **service-area business** ("I serve customers at their locations") — list Seattle + broader areas.
> - Description breaks the local frame: _"Conscious executive coaching for leaders and founders navigating change. Based in Seattle — sessions are remote, serving clients across the US and Europe."_
> - Category: "Executive coaching" (or the closest GBP offers, e.g. "Business management consultant").
> - Website URL → `everydayfuture.work` **only after DNS is live** (already flagged in LAUNCH.md — otherwise it points at the old Squarespace site).
> - A GBP never *prevents* remote clients from finding the site — it only adds the local surface. Costs nothing nationally.

The site already handles the national half correctly: schema `areaServed` = US + Europe with Seattle only as the `address`; copy leads "remote-first, Seattle-based" (geography as credibility, not a boundary); titles target the *term*, not the city. Keep content geo-neutral too — "Seattle" should appear prominently only in the GBP listing, the schema address, and at most one line on the bio/contact page. Never write site copy that implies Taylor *only* works locally.

**Tier 3 — long-tail content (post-launch).**
Problem/outcome-framed articles, one intent each, all linking to the definitional page and ending at `/begin`:
- "executive coach for founders" / "coaching for leaders navigating change"
- "burnout coaching for executives"
- "how to choose an executive coach" (classic decision-stage query)
Precision over cadence — 4–6 strong evergreen pieces beat weekly thin ones.

**Don't chase:** "conscious leadership coaching" (CLG-owned) · bare national head terms · modality keywords (IPNB/NLP/DBT explainers) · generic "leadership tips" content (traffic without leads).

## West Coast / multi-city reach beyond Seattle — non-GBP (added 2026-06-17)

EDF realistically serves the whole West Coast (Portland, SF, LA), but **GBP stays a single Seattle/PNW profile** — Google prohibits multiple/unstaffed listings, and fake city profiles risk suspending the entire profile network (see the GBP setup notes). Reach those other cities through the site instead, two legitimate paths:

- **Organic/national SEO (already the plan)** — the homepage, content, and `areaServed` schema reach Portland/SF/LA founders searching "conscious executive coaching" without any local listing.
- **City-targeted landing pages on the site, if there's real demand** — e.g. a substantive "Executive coaching for Portland founders" page. This is the allowed, non-GBP path to other-city intent. **Caveat:** only with genuine, unique content — thin "doorway" pages cloned per city get penalized. Hold this until actual demand shows up.

## Google Business Profile — setup sheet (fill-in order, added 2026-06-17)

_The actionable checklist that expands the GBP setup notes above. Do it in one sitting. **Ownership:** create while signed in as `ben@wintersand.co` (transfer to the EDF Workspace account later — see LAUNCH.md "Accounts & ownership"). **Prereq:** Taylor's real Seattle address available to verify._

1. **Start** — [business.google.com](https://business.google.com) → "Manage now," signed in as the intended owner account.
2. **Business name** — `Every Day Future` (exact — **no** appended keywords/city; name-stuffing risks suspension).
3. **Primary category** — `Business management consultant` (best executive-coaching fit for a leaders/founders/orgs practice; primary category is the biggest GBP ranking lever). **Secondary categories** (add after): `Career guidance service`, `Life coach`, `Coaching center` — add whichever GBP surfaces.
4. **Storefront? → No.** When asked "Do you want to add a location customers can visit?" answer **No** → this makes it a **Service-Area Business (SAB)** and **hides the street address**. Enter Taylor's Seattle address for verification only (stays private).
5. **Service areas — PNW only** (up to ~20; **not** the whole US, **not** other states): Seattle, Bellevue, Kirkland, Redmond, Shoreline, Bothell, Renton, Issaquah, Tacoma, Everett (+ "King County" / "Seattle metro" if offered).
6. **Contact** — business phone; **Website → `https://everydayfuture.work`**; (optional) appointment link → `/begin`.
7. **Verify** — choose **video verification** if offered (nothing mailed to the home); else postcard.
8. **Confirm address is hidden** — after going live, open the profile in **incognito** + on Google Maps; only the service area should show, no street address. (This is the 100% self-check.)
9. **Complete the profile** — description (below), hours = "By appointment," Services (below), photos (logo, Taylor portrait, brand imagery), attributes (e.g. "Online appointments").
10. **Then, ongoing — the real local levers:** request **Google reviews** from clients + reply to each (biggest lever by far); keep NAP (name/phone) consistent across site + LinkedIn; post occasional GBP updates.

**Name:** `Every Day Future`

**Description** (≤750 chars — breaks the local frame while staying locally relevant):
> Conscious executive coaching for leaders and founders navigating change. Based in Seattle, Every Day Future works remotely with clients across the US and Europe. Through 1:1, group, and organizational coaching, Taylor Winters helps leaders reduce resistance to the unknown, expand what's possible, and grow their capacity for change. A practice of possibility for the way you lead.

**Services** (add under "Services" — titles + descriptions, aligned with the site offerings for NAP/message consistency):
| Service | Description |
|---|---|
| 1:1 Executive Coaching | A dedicated one-on-one practice of what's possible, built only for you — to navigate change and lead with greater capacity. |
| Group Coaching | A shared practice in community, with structure, support, and coach facilitation. |
| Coaching for Orgs & Teams | Custom coaching and practice experiences for organizations, leadership teams, and cohorts. |
| Self-Led Practice _(coming Winter 2026)_ | Practical guidance for leading yourself through conscious change. _(Optional — add when closer to launch.)_ |

## Keyword → page map

_Which term lives where. One primary keyword per page — supporting terms appear naturally in body copy, never as competing titles. Pages marked ✦ don't exist yet (the content plan)._

| Keyword | Intent | Target page / asset | Status |
|---|---|---|---|
| **conscious executive coaching** | niche-defining (own it) | Homepage — title, bio clause, schema, S3 `<h3>` "Outcomes from conscious executive coaching" | ✅ done |
| **what is conscious executive coaching** | definitional / AI-citable | ✦ Definitional page (the #1 content priority) | not built |
| executive coaching · leadership coaching | head terms (supporting only) | Homepage title/description as modifiers ("— executive coaching for…") | ✅ done |
| **Seattle executive coach** · executive coach near me | local buyer-intent | **GBP listing** (not a site page) + schema `address` | post-cutover |
| executive coach for founders · coaching for leaders navigating change | mid-tail buyer-intent | ✦ Long-tail article #1 | not built |
| burnout coaching for executives | problem-framed long-tail | ✦ Long-tail article #2 | not built |
| how to choose an executive coach | decision-stage research | ✦ Long-tail article #3 (ends at `/begin`) | not built |
| begin coaching / book a session | conversion | `/begin` — title already targets this | ✅ done |
| contact executive coach | conversion | `/contact` | ✅ done |

_Internal-link rule: every ✦ article links to the definitional page and ends with a CTA to `/begin`. The definitional page links to the homepage and `/begin`._

## On-page H1/H2 — getting the phrase into a visible heading

The homepage has "conscious executive coaching" in the title, bio body copy, and schema — but **not in any heading**, which is the strongest remaining on-page signal. Current headings are all poetic brand voice (H1 hero "A practice of possibility +coaching"; H2s "Choose how you practice" / "Practice makes progress" / "Someday already started" / "Who this practice is for" / "Taylor Winters" / "FAQ") — none should be sacrificed wholesale. Options, in recommended order (visible copy → each needs Ben's approval, no-drift rule):

- **Option A — ✅ DONE 2026-06-11 (Ben-approved): the S3 subhead.** "Testimonials and outcomes" (`Testimonials.astro` — was a `<p class="s3__subhead">`) → an `<h3>` reading **"Outcomes from conscious executive coaching."** Rationale: the tag swap is visually invisible (styles live on the class, global reset zeroes heading margins — verified in preview, computed styles identical), the copy change is small and factual, and the phrase lands directly above the social proof — where the term gets contextualized by results. Lowest drift.
- **Option B: the S5 heading.** "Who this practice is for" → "Who conscious executive coaching is for." Stronger signal (already an H2) but a heavier intrusion into the Waymaker section's deliberately spare voice.
- **Option C: homepage untouched** — let the future definitional page carry the H1 ("What is conscious executive coaching?"). Defensible, but concedes the homepage signal.

Plan: **A now, C when the definitional page ships** (they stack). Status: **A implemented 2026-06-11** (verified in preview — zero visual change, console clean); C pending the definitional page.

## Where to publish content — own site, not Substack (decided 2026-06-11)

**Decision: all articles publish on `everydayfuture.work`.** Substack (or similar) only ever as an email-delivery layer linking back to the site — never as the publishing home.

**Rationale:**
1. **Domain authority accrues to us, not them.** Substack posts live on a substack.com subdomain; every backlink and ranking signal builds Substack's asset. Leave the platform and none of it comes with you.
2. **No canonical control.** Substack doesn't support canonical tags pointing at an external domain — cross-posting risks the Substack copy outranking our own.
3. **AI citation requires it.** AI engines (Overviews, Perplexity, ChatGPT, Claude) prefer citing primary-source URLs on the author's own domain over platform mirrors. The entire "own the definitional term + get cited" strategy depends on the content living on everydayfuture.work — our robots.txt already invites the AI crawlers.
4. **No automation path anyway.** Substack has **no official publishing API** (the official Developer API, April 2026, is read-only profile data); only ToS-gray unofficial clients exist. It can't even be cleanly mirrored.
5. **Trivial on our stack.** Each article is just a new Astro page — same Layout/SEO machinery (title, description, canonical, OG), auto-included in the sitemap.

Substack's one real advantage — built-in distribution/email — is a newsletter channel, not an SEO channel. If Taylor wants a newsletter later, use Substack/Buttondown/Beehiiv purely for delivery, with each issue linking to the canonical article on the site.

---

# 🚀 Domain Cutover Checklist (Squarespace → Netlify)

> **Context:** `everydayfuture.work` currently points to **Squarespace**. Plan: finish the site on staging → merge to `main` (production on the Netlify URL) → repoint DNS last. All our canonical/og:url/sitemap values are already `https://everydayfuture.work`, so they become correct the instant DNS flips.

### Order of operations
1. **Finish + verify on staging** — run the live link-preview (LinkedIn/X inspectors) + Google Rich Results Test on the staging URL.
2. **`staging → main`** (needs Ben's explicit go-ahead) → production live on the Netlify URL.
3. **Add `everydayfuture.work` to Netlify as a custom domain _first_** (Netlify → Domain settings) so SSL (Let's Encrypt) can pre-provision before traffic arrives.
4. **Build 301 redirects** from old Squarespace URLs → new Astro paths (`public/_redirects` or `netlify.toml`). _Audit the Squarespace site's URL structure first_ (export its sitemap). **Most-missed step — preserves existing backlinks/rankings, avoids 404s.**
5. **`www` → apex 301** — our canonical is non-www (`https://everydayfuture.work`); make Netlify redirect `www.` → apex so they don't compete.
6. **Lower DNS TTL** ~24h before the switch (faster cutover).
7. **Repoint DNS** Squarespace → Netlify (apex + www).
8. **After DNS is live:** verify SSL/HTTPS; re-test OG + Rich Results on the *production* domain; **submit sitemap to Search Console**; set up **analytics**; update **Google Business Profile** website URL.

### Gotchas
- **Don't set up Search Console / GBP until DNS is live** on Netlify — otherwise you'd verify the old Squarespace site.
- **301 redirects** are the SEO-equity preserver — don't skip the URL audit.
- If a Squarespace **Search Console / analytics** property already exists for the domain, its history carries over (same domain); otherwise set up fresh post-cutover.
- Keep the Squarespace site live until DNS fully propagates, then decommission.

---

# Minimum Launch Plan (working checklist)

> The subset of this document we will actually ship **before launch**. Everything here is either (a) a visible embarrassment if missing, or (b) high-leverage and nearly free. The full four-phase plan below this section remains the long-term reference; anything not listed here is **deferred** (see end of this section).
>
> **Known input:** production domain = `https://everydayfuture.work` (canonical; all absolute URLs derive from it).
>
> **Execution principle:** decisions first, because they unblock the writing and the assets. Then build in dependency order. Then verify. We do them **in order** — a half-built `<head>` (e.g. OG tags pointing at a non-existent image) is worse than none.

## Phase A — Decisions to lock first

These four decisions gate the build. None require code; they require Taylor's/Ben's input. Until A1 is set, any title/description copy targets nothing.

### A1 — Positioning (the single biggest lever)
- **What:** Decide three things — **(a)** the *primary phrase* you want to be found for, **(b)** the *primary audience*, **(c)** *geography* (Seattle/WA-local vs remote/global).
- **Rationale:** Title tags and meta descriptions are only as good as the intent behind them. "Coaching" alone is unrankable (too broad, too competitive). A specific phrase — e.g. *leadership coaching*, *executive coaching*, *somatic/mindfulness coaching*, *founder coaching*, *transition coaching* — points the whole site at real search demand. Geography is decisive: a local angle ("Seattle leadership coaching") is far easier to rank than a global modality term, but only if Taylor actually wants local clients. Get this wrong and every downstream tag is pretty but pointless.
- **Specific needs:**
  - The 1–2 word **primary keyword phrase** (and optionally a secondary).
  - **Who** it's for (leaders / founders / individuals-in-transition / teams). You already serve all four tiers (1:1 / Group / Orgs / Self-led) — name the *primary* one for the homepage.
  - **Local or remote?** If local, the city/region to include; if remote, confirm we optimize on modality instead.

### A2 — AI-crawler policy
- **What:** Decide whether to **allow or block** the major AI crawlers in `robots.txt`: `GPTBot` (OpenAI), `ClaudeBot` (Anthropic), `PerplexityBot`, `Google-Extended` (Google's AI-training token).
- **Rationale:** This is a values/strategy call, not a default. **Allow** = ChatGPT, Perplexity, Claude, and Google AI Overviews can read the site and *cite Taylor as a source* when people ask AI for coaches — increasingly a real discovery channel. **Block** = the content won't be used for AI answers/training. Either way, normal Google Search indexing is unaffected (that's `Googlebot`, separate from `Google-Extended`).
- **Specific needs:** A one-word answer — **allow** or **block** (can be split per-bot if desired, but a blanket choice is simplest). Recommendation for a coaching practice that *wants* to be discovered: **allow**.

### A3 — Share image (the link-preview picture)
- **What:** The **1200×630px** image that appears when the link is texted/shared (`og:image`).
- **Rationale:** Without it, every shared link (iMessage, WhatsApp, Slack, LinkedIn, X) renders as a blank/grey card — reads as unfinished and kills click-through. 1200×630 is the universal aspect ratio all platforms crop to. Must be a real, branded image, not a random photo crop, or it looks careless.
- **Specific needs (pick one path):**
  - **Provided:** Taylor/Form hands over a finished 1200×630 (JPG or PNG, < ~1 MB — keep it small so iMessage/WhatsApp reliably fetch it).
  - **Composed (recommended):** I build one from an *already-approved* hero asset (e.g. `rhododendron.jpg` or `rose-sky.jpg`) + the "Every Day Future" wordmark, and **show a comp for approval before shipping** (per the no-design-drift rule — a share card is a new visual artifact).
  - **Quick/unbranded:** crop an existing hero JPG to 1200×630 with no text. Fastest, least branded.

### A4 — Favicon / app icon
- **What:** The small icon in the browser tab and bookmarks (`favicon.ico` / `icon.svg` / `apple-touch-icon.png`).
- **Rationale:** A blank/default globe in the tab signals an unfinished site and weakens brand recall. Cheap to fix, disproportionately noticeable.
- **Specific needs:** One source mark — options: the **blue brush mark** (from `public/marks/`), an **"EDF" monogram**, or a **generated wordmark glyph** for approval. I'll output the required sizes (16/32/180px + SVG).

## Phase B — Build (dependency order)

| Step | What | Why for launch (rationale) | Specific needs / where |
|---|---|---|---|
| **B1** | Set `site: 'https://everydayfuture.work'` in `astro.config.mjs` | Canonical URLs, the sitemap, and **absolute** `og:image`/`og:url` all derive from `site`. Nothing else in Phase B is correct without it. | Domain only (have it). File: `astro.config.mjs`. **Ready now.** |
| **B2** | Per-page `<title>` + `<meta name="description">` via a `Layout.astro` prop, unique for home / `/contact` / `/begin` / `/privacy` / `/terms` | Today **every page** is `<title>Every Day Future</title>` with no description — the single biggest miss. The title is the clickable blue line in Google + the bold line in link previews; the description is the pitch under it (Google bolds matched query terms). Unique-per-page is what lets each page rank for its own intent. | A1 (positioning). Files: `Layout.astro` (accept `title`/`description` props), each `src/pages/*.astro` passes its own. Lengths: **title ≤60 chars, description ≤160 chars.** |
| **B3** | Canonical URLs (`<link rel="canonical" href="https://everydayfuture.work/…">`) | Tells Google the one true URL for each page, preventing duplicate-content dilution (e.g. trailing-slash or query-param variants). | B1. File: `Layout.astro`, built from `site` + the current path. |
| **B4** | Open Graph + Twitter **text** tags: `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `twitter:card=summary_large_image`, `twitter:title`, `twitter:description` | These are what every messaging/social app reads to build the rich preview. The text half is unblocked by A1; the image half (B5) follows. `summary_large_image` is the big-image card style. | A1, B1. File: `Layout.astro` (reuse the B2 title/description). |
| **B5** | Add `og:image` + `twitter:image` (absolute URL) + `og:image:width`/`height`/`alt` | The picture in the preview card. Done after the image exists so we never ship a tag pointing at a 404. | A3, B1. Asset in `public/` (e.g. `/og-image.jpg`); tags in `Layout.astro`. |
| **B6** | Favicon + apple-touch-icon (`<link rel="icon">`, `<link rel="apple-touch-icon">`, optional `site.webmanifest`) | Tab/bookmark/home-screen icon; removes the "unfinished" tell. | A4. Assets in `public/`; links in `Layout.astro`. |
| **B7** | `robots.txt` — allow `Googlebot`, point to the sitemap, encode the A2 AI-crawler decision | Without it crawlers guess; with it you explicitly invite Google + state the AI policy. The `Sitemap:` line is how Google discovers the URL list. | A2. File: `public/robots.txt`. |
| **B8** | `sitemap.xml` via the `@astrojs/sitemap` integration | A machine-readable list of every page so Google indexes them all, not just what it stumbles on by crawling links. Auto-generated at build from `site`. | B1. `npm i @astrojs/sitemap` + register in `astro.config.mjs`. |
| **B9** | `FAQPage` JSON-LD mapping the existing S7 FAQ | Highest-leverage structured data we can add now: the content already exists, and `FAQPage` is the strongest single lever for **both** Google rich results (expandable Q&A in search) **and** AI answer engines extracting/citing facts. | None beyond existing FAQ copy. File: a `<script type="application/ld+json">` in the FAQ component or `Layout`. **Ready now.** |

## Phase C — Verify (before calling it done)
- **Google Rich Results Test** (search.google.com/test/rich-results) — paste the staging URL, confirm `FAQPage` validates with no errors.
- **Link-preview check** — paste the URL into the **LinkedIn Post Inspector** and **X Card Validator**, and **text the link to yourself** — confirm image + title + description render on each. (Note: some platforms cache previews; the inspectors force a re-scrape.)
- **Crawl plumbing** — confirm `robots.txt` resolves and its `Sitemap:` line is correct, and that `/sitemap-index.xml` loads and lists all five pages.

## Page map (for B2 / B4 — one intent per page)

| Page | Search intent | Title pattern (≤60 char) | Description focus (≤160 char) |
|---|---|---|---|
| `/` (home) | The practice + positioning | brand + primary phrase (from A1) | the core value proposition + soft CTA |
| `/contact` | Get in touch | `Contact — Every Day Future` | invite to reach out / how to start a conversation |
| `/begin` | Start coaching | `Begin Your Practice — Every Day Future` | choose a path / book a first session |
| `/privacy` | Legal boilerplate | `Privacy Policy — Every Day Future` | one neutral line (low priority) |
| `/terms` | Legal boilerplate | `Terms & Conditions — Every Day Future` | one neutral line (low priority) |

_(Home + /begin carry the SEO weight; legal pages just need to not be blank. Final copy drafted once A1 is locked.)_

## Deferred (explicitly NOT in the launch set)
- **`Organization` / `Person` / `Service` JSON-LD** — high value, but needs business facts (legal name, founder credentials, service area, social profiles). Add post-launch once Taylor supplies them.
- **`llms.txt`**, **font self-hosting**, **deep Lighthouse/Core-Web-Vitals tuning** — refinements, not launch blockers.
- **Off-site** — submit sitemap to Search Console, set up Google Business Profile, pursue backlinks/profile cross-links. Not code; the real long-term lever but post-launch.

## Suggested working order
1. **Answer A1–A4** (A1 positioning is the gate).
2. I ship the no-decision items immediately: **B1, B3, B8, B9**.
3. I draft **B2 + B4 copy** for review (needs A1).
4. **B5 / B6** drop in once the image + favicon exist; **B7** once the crawler policy is set.
5. **Phase C** verify on staging → rides the next approved `staging → main`.

> **Correction to the audit below:** the "hero rotation images are large PNGs (~1–2 MB)" Core-Web-Vitals warning is now **stale** — the rotation is all optimized JPGs (`rhododendron.jpg`, `rose-sky.jpg` ~288 KB, etc.). Treat it as largely handled; a post-launch Lighthouse pass is enough.

---

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
