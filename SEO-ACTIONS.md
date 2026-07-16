# SEO Actions — Ranking Push (July 2026)

_Working checklist from the 2026-07-15 live SEO audit. Goal: rank for **"Taylor Winters Seattle"** (weeks) and **"conscious executive coaching"** (months). Update statuses here as items land; strategy background lives in `SEO.md` (🔑 Keyword Strategy)._

> **Audit conclusion:** nothing on-site is broken — all shipped SEO verified working on the live domain (indexing, titles, schema, robots, sitemap, redirects). The domain is ~4 weeks old to Google (cutover 2026-06-17); only 2 of 8 pages indexed so far. The items below are the real, fixable drags.

> States: ⬜ open · 🟡 in progress · ✅ done

---

## A — Ben-side (accounts / external)

| # | Item | Status | Detail |
|---|------|--------|--------|
| A1 | **Fix `ltw.coach` redirect → 301 https** | ✅ | **Done + verified 2026-07-15.** Squarespace forwarding rule updated (Domains → ltw.coach → Website); was 302 → `http://`. Now live-verified: `http://`, `https://`, and `/contact` all **301 → `https://everydayfuture.work`**, single hop to 200. Expect ltw.coach pages to drop from the SERP + equity to transfer over ~2–4 weeks of recrawls. _(ltw.coach email/DNS untouched — `taylor@ltw.coach` MX intact.)_ If any other old domains exist, same check applies. |
| A2 | **Update Taylor's LinkedIn** | ✅ | **Done 2026-07-15.** Headline → "Founder & Conscious Executive Coach · Every Day Future — coaching for leaders and founders navigating change" (verified live from outside view); Experience → Every Day Future (company page linked); location Seattle; About replaced with merged EDF copy (original backed up: `linkedin-about-backup.md`); website field added; **banner replaced** (rainleaves site-hero comp, `~/Desktop/EDF-linkedin-banner/`) — retired the old "Creative Entrepreneurs" banner. Google's cached SERP title may lag a few days. |
| A3 | **GSC: request indexing for the uncrawled pages** | 🟡 | **Mostly done 2026-07-15** — Ben requested indexing for `/begin/`, `/contact/`, `/writing/`, `/privacy/`, `/terms/`. **Remaining (quota — do next sitting):** the 2 essay URLs: `https://everydayfuture.work/writing/the-future-is-created-in-the-present/` + `https://everydayfuture.work/writing/how-conscious-executive-coaching-sharpens-decision-making/` (inspect first — skip if already "on Google"). Re-check indexing in ~1–2 weeks; escalate any page still out after 2 weeks. |
| A4 | **Send GBP review requests** | ⬜ | Profile live + correct since 6/17; **0 reviews**. Reviews are the biggest map-pack lever for "executive coach Seattle" queries. The request message was drafted 6/17 — send to 3–5 past/current clients (no incentives, no gating, per Google policy). Reply to each review as it lands. |
| A5 | **Check GSC Performance for impressions** | ✅ | **Done 2026-07-15 — the good scenario.** 3-month: 369 impressions / 1 click / avg position 18.9 (≈page 2, climbing). **Top query = "conscious executive coaching" (283 impressions)** — Google is already serving the site on the target term; rank, not visibility, is the gap. Long-tail queries ("decision coach for executives," "executive coaching for tactfulness") = the essay working → validates B4. **No "Taylor Winters" queries** → her name searches go to LinkedIn/ltw.coach → confirms A1+A2. Re-check monthly. |
| A7 | **Leverage the podcast appearance** (Other People's Pockets — "Taylor Winters, My Executive Coach," Maya Lau, 10/27/25; show notes already link `www.everydayfuture.work` ✅) | ⬜ | Taylor: add the episode to her LinkedIn **Featured** + post about it; Ben: **GBP post** linking the episode; Taylor: ask Maya's **permission to quote** "my executive coach… helps me immensely" as a named S3 testimonial (copy change → Ben approval). Strategic: podcast guesting = her best link channel; pitch 2–3 more shows this quarter. |
| A6 | Add a Taylor link on benjamindwinters.com | ✅ | **Done 2026-07-15.** Name-anchored followed link added to the "Now — AI" paragraph: "(Every Day Future, my wife [Taylor Winters](https://everydayfuture.work)' conscious executive coaching practice)" — name anchor + brand + keyword on Ben's indexed bio page. All four entity signals in one line. _(Original "fix stale bio" framing was corrected 7/15 — the site had no Taylor bio; the WINTR bio is Ben's own.)_ |

## B — Code-side (Claude, on Ben's word)

| # | Item | Status | Detail |
|---|------|--------|--------|
| B1 | **Un-hide the Writing links** | ⬜ | Hidden 6/22 "for ~2 weeks" — now 3+ weeks. The 2 essays (the only content targeting the niche term) are **orphaned** (zero internal links → less crawl, worse rank). Either un-comment the 3 links now (recipe in SESSION.md session 10) or publish the pending essays first — Ben's call, but end the orphaning this week. |
| B2 | **Add "Taylor Winters" to homepage meta description** | ✅ | **Committed 2026-07-15** (`eb745dc`, Ben-approved option A): "Conscious executive coaching with Taylor Winters — for leaders and founders navigating change. Reduce resistance, expand possibility. Seattle-based, remote." (156 chars; flows to og:/twitter: via Layout). Build verified. **Live on production 2026-07-15** (merged + verified on everydayfuture.work). |
| B3 | **Build the definitional page — "What is conscious executive coaching?"** | ⬜ | Still the #1 content lever (SEO.md 🔑, verified research 6/11): whoever defines the young term owns it in search + AI answers. The decision-making essay is adjacent, not definitional. Publishes in the Writing section; every future article links to it. |
| B4 | **Long-tail articles (3–4)** | ⬜ | Per the keyword→page map: "executive coach for founders / leaders navigating change," "burnout coaching for executives," "how to choose an executive coach." One intent each; all link to B3 and end at `/begin`. |
| B5 | _(Optional polish)_ `llms.txt` + article `og:type` fix | ⬜ | Low priority: `public/llms.txt` for AI crawlers; LAUNCH.md #11 og:type=`article` on `/writing/[slug]`. |
| B7 | **Build the `/taylor` bio page — buried, not orphaned** | ⬜ | Closes the name-query gap: **no page title on the site contains "Taylor Winters"** (the S6 bio is a homepage *section* — one URL, one title; fragments don't rank separately). Page = existing S6 portraits + approved bio copy promoted to its own URL; title "Taylor Winters — Conscious Executive Coach in Seattle \| Every Day Future"; credentials (Haas · ICF MCC · UPenn Positive Psych · Harvard I/O Masters in progress); **"As heard on" podcast block** (Other People's Pockets); Person schema `mainEntity` + `subjectOf` episode. **Ben's call: page stays OFF the homepage chrome** — linked only via essay **author bylines** (`/writing` → /taylor; invisible on homepage, avoids the orphan penalty), + sitemap + GSC request-indexing + LinkedIn Featured pointing at it. Comp first (existing idioms only). _Interim stopgap ✅ SHIPPED 2026-07-16: `/contact` retitled "Contact Taylor Winters — Every Day Future" + name in description (commit on staging; measure via GSC impressions on /contact)._ |
| B6 | **Add MCC + UPenn + Harvard credentials to homepage schema (± visible bio)** | ⬜ | Surfaced 2026-07-15 from Taylor's old LinkedIn About (backup: `linkedin-about-backup.md`) + the podcast notes: **ICF Master Certified Coach (MCC)** — top-tier trust signal — + **UPenn Positive Psychology** + **Masters in Applied I/O Psychology, Harvard (in progress)**. Site's Person schema (`index.astro` `@graph` `hasCredential`) currently lists Berkeley Haas only. Add both to schema; visible-bio mention needs Ben/Taylor approval (copy change). |

---

## Evidence base (2026-07-15 live audit)

- **Working:** DNS→Netlify + SSL; www→apex + http→https 301s; title "Conscious Executive Coaching — Every Day Future"; description/canonical/OG/Twitter; robots.txt (allow all + AI); sitemap (8 URLs); Person/ProfessionalService/FAQPage JSON-LD; no `noindex`; GSC 7/3 alert re-verified benign.
- **Index:** `site:everydayfuture.work` → 2 pages (homepage + decision-making essay).
- **"Taylor Winters Seattle" SERP:** LinkedIn ("LTW Executive Coaching") #1; `ltw.coach/contact` present (the 302 bug); everydayfuture.work absent.
- **"conscious executive coaching" SERP:** Inductive, CLG (conscious.is), consciousleadership.org, Melissa Dawn, Humessence, consciouscoach.co — everydayfuture.work absent (expected at domain age + 2 thin/orphaned content pages).

## Expectations

- **"Taylor Winters Seattle":** winnable in **~2–6 weeks** via A1 + A2 + A3 + B2 (name queries are low-competition; the entity needs consolidating, not authority).
- **"Conscious executive coaching":** **~2–4 months** — needs B1 + B3 + B4 shipped plus a handful of real links (A2, A6, GBP activity). The mechanics are already right; a 4-week-old domain just hasn't earned the position yet.
