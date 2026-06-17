# Launch Checklist — Every Day Future

_The **single tracked source of truth** for shipping `everydayfuture.work` (Squarespace → Netlify cutover). Merges Ben's launch to-do list with the open items from `CONTEXT.md` and `SEO.md`. Last updated 2026-06-11._

> States: ✅ done · 🟡 in progress / needs dashboard or external action · ⚠️ needs a decision · ⬜ open · ❌ not started.
> `SEO.md` holds the detailed SEO plan + cutover playbook; this file is the one list to work from. Status here is authoritative.

---

## 0 — SEO (on-site)  ✅ done, on `staging`

All on-site SEO shipped to `staging` (tip `8d442a9`): B1 `site` config, B2 per-page titles/descriptions, B3 canonicals, B4 OG/Twitter, B5 og:image, B6 favicon, B7 robots.txt (allow all incl. AI crawlers), B8 sitemap (`/sitemap-index.xml`), B9 FAQPage JSON-LD, + Person/ProfessionalService `@graph`, "conscious executive coaching" bio clause, LinkedIn footer link. Positioning **locked** (Option B). Remaining SEO work is off-site only → see §3. Full detail: `SEO.md`.

---

## 1 — Code / on-site (must land before `staging → main` merge)

| # | Item | Status | Note |
|---|------|--------|------|
| 1 | **Calendly links** | ✅ | **All three real URLs wired 2026-06-11** (`coach-everydayfuture/` → `1-1-discovery-session`, `orgs-teams-discovery`, `group-coaching-discovery`); self-led has none by design. Unblocks #4 (full Begin-flow verification). |
| 2 | **Taylor bio images** | ⚠️ | Two already wired in S6 (`DSCF0172.jpg` + `DSCF0084.jpg`). **Decision needed:** keep these as final, or swap? |
| 3 | **Waymaker (S5) images** | ⚠️ | The Waymaker section currently has **no photos** — only the Vector-10 brush mark. Adding images is a **new design element → needs spec + Ben approval** (no-drift rule). What images, and approved? |
| 4 | **Begin flow verification** | ✅ | **Verified on staging 2026-06-11** (deploy `e366162`): all 4 offering cards + real Calendly URLs in the deployed HTML (zero placeholders); Netlify rewrote the hidden form (detection active); test POSTs for **all 4 options returned HTTP 200**; all 3 Calendly events confirmed real on Taylor's account (OG titles checked + bogus-slug control); flow mechanics (steps, deep links, self-led sub/"Notify me" swap) verified in preview at the same commit. No bookings made. _Cleanup: 4 new "Claude Test (launch #4 verify — delete me)" Forms entries to delete._ Optional: a 2-min human click-through on a phone as final sanity. |
| 5 | **Client portal link** | ✅ | Repointed `/portal` → `https://portal.everydayfuture.work` in `Nav.astro` + `Footer.astro` (`target="_blank" rel="noopener"`). Verified in preview 2026-06-05; committed + pushed in `7c12878`. |
| 6 | **Confirm data → Netlify + email** | ✅ | **Verified end-to-end 2026-06-05.** Form detection ON → staging deploy `ec42beb` processed both forms (Netlify rewrote `<form … netlify>` → `<form … method='post'>`). Reliability check added (both forms `await` the POST; success-only advance, inline error on failure). Test submissions to `contact` + `begin` returned **HTTP 200** (accepted; 404 would mean undetected) — plus Ben's own browser tests. **Email notifications live** → `coach@everydayfuture.work` (Ben confirmed emails arriving). _Cleanup: delete the "Claude Test" / test entries from the Forms store before launch. Re-verify on `main` after merge (Forms store + notifications are site-level, so already registered)._ |

---

## 2 — Domain cutover (Squarespace → Netlify)

_Full order-of-operations + gotchas live in `SEO.md` → "Domain Cutover Checklist." Summary:_

> **✅ CUTOVER COMPLETE — 2026-06-17 (session 9).** `everydayfuture.work` now serves the new Netlify site over HTTPS; email never affected. DNS facts (via `dig`): **email = Google Workspace** (`aspmx.l.google.com` + alts, on MX); DNS hosted at Squarespace (NS `squarespacedns.com` + `nsone.net`); registrar Tucows/OpenSRS. **Email-safe method used: kept nameservers at Squarespace, changed ONLY the apex `A` + `www` CNAME to Netlify — MX/TXT never touched.** Old Squarespace site = 3 pages (`/home`, `/rei-internal`, `/client-referral`), all → `/`.

| # | Item | Status |
|---|------|--------|
| — | **301 redirects** from old Squarespace URLs | ✅ `public/_redirects` — `/home`, `/rei-internal`, `/client-referral` → `/` (301). **Live-verified: all 301 → `/`.** |
| — | **`staging → main` merge** | ✅ approved by Ben ("merge as-is now"); fast-forwarded `efcb338..c4b2a19`, production rebuilt. |
| — | Add domains to Netlify (apex primary, www redirect) | ✅ `everydayfuture.work` = ★ primary; `www` auto-redirects to apex. |
| — | Repoint web records in Squarespace DNS | ✅ Deleted "Squarespace Defaults" block; added `A @ → 75.2.60.5` + `CNAME www → everyday-future-v4.netlify.app` (Custom records). **Google Workspace MX block + `portal`/`subdomain-ownership` records untouched.** |
| — | **Email preserved** | ✅ All 5 Google MX records verified identical (authoritative + public resolvers) before, during, and after. |
| — | SSL / propagation | ✅ Propagated to Google/Cloudflare/Quad9; Netlify Let's Encrypt cert **issued** (apex HTTPS = 200, TLS OK). |
| — | Live-domain verification | ✅ Apex 200, `/writing/` 200, homepage title "Conscious Executive Coaching — Every Day Future", `www`→apex 301, old-URL 301s. _Optional follow-up: re-run Google Rich Results + LinkedIn/X inspectors on the production domain (was done on staging)._ |
| — | Keep Squarespace live until propagation confirmed, then decommission | 🟡 **Safe to decommission Squarespace site now** (propagated + verified). Rollback recipe retained in CONTEXT.md if needed. **Do NOT delete the domain/DNS or the Google Workspace MX — those stay at Squarespace.** |

---

## 3 — Post-launch (after DNS is live)

| # | Item | Status | Note |
|---|------|--------|------|
| 7 | **Apply v4 design to client portal** | ⬜ | Reskin `edf-portal-updated_3/` to the v4 design system. |
| 8 | **Google Analytics claim** | 🟡 | Set up *after* DNS is live, or you'd measure the old Squarespace site. |
| 9 | **Google Business Profile + data** | 🟡 | The real local/Seattle lever. **Full fill-in-order setup sheet in `SEO.md` → "Google Business Profile — setup sheet."** SAB (address hidden), PNW-only service areas, website → `everydayfuture.work`. To be created under `ben@wintersand.co` (transferable to EDF Workspace later). |
| — | **Search Console** | ✅ | **Done 2026-06-17:** Domain property `everydayfuture.work` verified + `https://everydayfuture.work/sitemap-index.xml` submitted (8 URLs); indexing requested for homepage + both essays; Live Test = "URL is available to Google." Owned under `benjamin.winters@gmail.com`. Crawl/indexing now on Google's timeline (~days–2 wks). |

---

## Accounts & ownership (record)

_No credentials stored here — ownership only. Both are transferable to an EDF Google Workspace account later with **zero loss of history/reviews** (GBP: add EDF account as Owner → transfer Primary Ownership, 7-day hold; Search Console: add EDF email as a verified Owner — data lives with the domain property, not the account)._

| Asset | Currently owned by | Migrate to EDF later? |
|---|---|---|
| **Google Business Profile** (Every Day Future) | `ben@wintersand.co` | ✅ Yes — transfer Primary Ownership to EDF Workspace acct |
| **Google Search Console** (`everydayfuture.work` domain property) | `benjamin.winters@gmail.com` | ✅ Yes — add EDF email as verified Owner anytime |
| **Google Analytics** (when set up) | _TBD_ | Set up under / share to the EDF Workspace acct for consistency |

_Best practice: eventually align GBP + Search Console + GA all under (or shared to) the EDF Google Workspace account so the SEO stack is business-owned and cross-linkable._

---

## 4 — Content infrastructure (independent of launch — can build anytime)

| # | Item | Status | Note |
|---|------|--------|------|
| 11 | **Article OG metadata polish** | ⬜ | Two cosmetic head fixes on article pages, deferred 2026-06-11 (they touch the shared `Layout.astro` head): (a) `og:type` emits `website` on `/writing/[slug]` pages — `article` would be marginally better; (b) `og:image:width/height` meta is hardcoded `1200×630` (the brand card's dimensions) while articles pass their own hero image. Nothing damaged — discoverability unaffected; polish only. |
| 10 | **Article CMS — Keystatic** | 🟡 | **The Content Collections half shipped 2026-06-11** as the Writing section (`src/content/writing/`, `/writing` index + `ArticleLayout.astro` with full SEO; design.md §5.14; article-page design = the approved handoff 6 comps — supersedes the old `/articles` + legal-page-idiom plan). Remaining: the **Keystatic** editor at `/keystatic` (GitHub auth → commits `.mdx` → Netlify rebuilds) so Taylor/Ben can publish without Claude/terminal. **Decisions before build:** (a) which branch the CMS commits to — `staging` pre-launch; post-launch `main` = articles straight to prod (content-only); (b) Taylor needs a GitHub collaborator seat if she'll publish, else it stays Ben's job. Note: "How Conscious Executive Coaching Sharpens Decision-Making" (published 2026-06-11) covers much of the definitional-page ground — decide whether a separate "What is conscious executive coaching?" page is still wanted (`SEO.md` 🔑). |

---

## Decisions needed from Ben / Taylor
1. ~~**Calendly** (#1)~~ — ✅ all three URLs wired 2026-06-11.
2. **Bio images** (#2) — keep current two or swap?
3. **Waymaker images** (#3) — section has none today; adding them is a design change needing approval + spec.
4. **Article CMS** (#10) — (a) which branch Keystatic commits to post-launch (`main` = articles straight to prod); (b) whether Taylor gets a GitHub collaborator seat to publish herself, or it stays Ben's job. _(The article-page design decision is resolved — shipped 2026-06-11 as the Writing section, per the approved handoff 6 comps.)_
