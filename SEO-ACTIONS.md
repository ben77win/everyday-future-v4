# SEO Actions — Ranking Push (July 2026)

_Working checklist from the 2026-07-15 live SEO audit. Goal: rank for **"Taylor Winters Seattle"** (weeks) and **"conscious executive coaching"** (months). Update statuses here as items land; strategy background lives in `SEO.md` (🔑 Keyword Strategy)._

> **Audit conclusion:** nothing on-site is broken — all shipped SEO verified working on the live domain (indexing, titles, schema, robots, sitemap, redirects). The domain is ~4 weeks old to Google (cutover 2026-06-17); only 2 of 8 pages indexed so far. The items below are the real, fixable drags.

> States: ⬜ open · 🟡 in progress · ✅ done

---

## A — Ben-side (accounts / external)

| # | Item | Status | Detail |
|---|------|--------|--------|
| A1 | **Fix `ltw.coach` redirect → 301 https** | ⬜ | **The one actual bug.** The old domain currently 302-redirects (temporary) to `http://everydayfuture.work` — so Google keeps ltw.coach indexed, and `ltw.coach/contact` (titled "Every Day Future") outranks the new site for "Taylor Winters Seattle," splitting the entity across two domains. Fix in Squarespace domain forwarding: **301 (permanent) → `https://everydayfuture.work`**. Verify after: `curl -sI https://ltw.coach/` shows `301` and `location: https://…`. If any other old domains exist, tell Claude — same check. |
| A2 | **Update Taylor's LinkedIn** | ⬜ | Headline currently "LTW Executive Coaching" — the #1 result for her name points at the old brand. Change headline → "Founder & Conscious Executive Coach · Every Day Future"; website field → `https://everydayfuture.work`; mirror the phrase in the About section. Consolidates the entity + routes her top search result to the site. |
| A3 | **GSC: request indexing for the uncrawled pages** | ⬜ | 6 of 8 sitemap pages still await first crawl (indexed so far: homepage + the decision-making essay). In Search Console (owner `benjamin.winters@gmail.com`), URL-inspect + Request Indexing: `/begin/`, `/contact/`, `/writing/`, `/writing/the-future-is-created-in-the-present/` (+ `/privacy/`, `/terms/` low priority). Was deferred 2026-07-03 — do now. |
| A4 | **Send GBP review requests** | ⬜ | Profile live + correct since 6/17; **0 reviews**. Reviews are the biggest map-pack lever for "executive coach Seattle" queries. The request message was drafted 6/17 — send to 3–5 past/current clients (no incentives, no gating, per Google policy). Reply to each review as it lands. |
| A5 | **Check GSC Performance for impressions** | ⬜ | Diagnostic, 2 min: GSC → Performance. Impressions-without-clicks = ranking deep and climbing (expected); zero impressions on brand queries = report back to Claude. |
| A6 | _(Optional)_ Add a Taylor link on benjamindwinters.com | ⬜ | ~~"Fix stale bio"~~ **Corrected 7/15:** the site has no Taylor bio (only "…Taylor, and our son, Sebastian"; the WINTR bio is Ben's own — initial audit misread a search summary). Opportunity, not a fix: add one line, e.g. "my wife **Taylor Winters**, founder of [Every Day Future](https://everydayfuture.work), a conscious executive coaching practice" — an easy legitimate backlink + entity signal from a real site. |

## B — Code-side (Claude, on Ben's word)

| # | Item | Status | Detail |
|---|------|--------|--------|
| B1 | **Un-hide the Writing links** | ⬜ | Hidden 6/22 "for ~2 weeks" — now 3+ weeks. The 2 essays (the only content targeting the niche term) are **orphaned** (zero internal links → less crawl, worse rank). Either un-comment the 3 links now (recipe in SESSION.md session 10) or publish the pending essays first — Ben's call, but end the orphaning this week. |
| B2 | **Add "Taylor Winters" to homepage meta description** | ⬜ | Her name appears in no title/description — Google has little reason to serve the site for her name+city. Proposal (needs Ben's approval — visible SERP copy): work "Taylor Winters" into the homepage description (and optionally `/contact`). Claude to draft options. |
| B3 | **Build the definitional page — "What is conscious executive coaching?"** | ⬜ | Still the #1 content lever (SEO.md 🔑, verified research 6/11): whoever defines the young term owns it in search + AI answers. The decision-making essay is adjacent, not definitional. Publishes in the Writing section; every future article links to it. |
| B4 | **Long-tail articles (3–4)** | ⬜ | Per the keyword→page map: "executive coach for founders / leaders navigating change," "burnout coaching for executives," "how to choose an executive coach." One intent each; all link to B3 and end at `/begin`. |
| B5 | _(Optional polish)_ `llms.txt` + article `og:type` fix | ⬜ | Low priority: `public/llms.txt` for AI crawlers; LAUNCH.md #11 og:type=`article` on `/writing/[slug]`. |

---

## Evidence base (2026-07-15 live audit)

- **Working:** DNS→Netlify + SSL; www→apex + http→https 301s; title "Conscious Executive Coaching — Every Day Future"; description/canonical/OG/Twitter; robots.txt (allow all + AI); sitemap (8 URLs); Person/ProfessionalService/FAQPage JSON-LD; no `noindex`; GSC 7/3 alert re-verified benign.
- **Index:** `site:everydayfuture.work` → 2 pages (homepage + decision-making essay).
- **"Taylor Winters Seattle" SERP:** LinkedIn ("LTW Executive Coaching") #1; `ltw.coach/contact` present (the 302 bug); everydayfuture.work absent.
- **"conscious executive coaching" SERP:** Inductive, CLG (conscious.is), consciousleadership.org, Melissa Dawn, Humessence, consciouscoach.co — everydayfuture.work absent (expected at domain age + 2 thin/orphaned content pages).

## Expectations

- **"Taylor Winters Seattle":** winnable in **~2–6 weeks** via A1 + A2 + A3 + B2 (name queries are low-competition; the entity needs consolidating, not authority).
- **"Conscious executive coaching":** **~2–4 months** — needs B1 + B3 + B4 shipped plus a handful of real links (A2, A6, GBP activity). The mechanics are already right; a 4-week-old domain just hasn't earned the position yet.
