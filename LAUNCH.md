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

> **Cutover started 2026-06-17 (session 9).** DNS facts confirmed via `dig`: **email = Google Workspace** (`aspmx.l.google.com` + alts, on MX); **DNS hosted at Squarespace** (NS `ns0X.squarespacedns.com` + `nsone.net`); registrar Tucows/OpenSRS. **Email-safe strategy (locked): keep nameservers at Squarespace, change ONLY the apex `A` + `www` CNAME to Netlify — never touch MX/TXT.** Old Squarespace site = 3 pages (`/home`, `/rei-internal`, `/client-referral`), all → `/`.

| # | Item | Status |
|---|------|--------|
| — | **301 redirects** from old Squarespace URLs | ✅ `public/_redirects` built 2026-06-17 — `/home`, `/rei-internal`, `/client-referral` → `/` (301). Build-verified in `dist/`. |
| — | **`staging → main` merge** | ✅ **approved by Ben 2026-06-17 ("merge as-is now")** — merging current staging build to production. |
| — | Add `everydayfuture.work` + `www` to Netlify as custom domains first (apex = primary; pre-provision SSL) | ⬜ Ben (Netlify dashboard) |
| — | `www` → apex 301 (canonical is non-www) | ⬜ Auto-handled by Netlify once apex is primary + `www` CNAME points to Netlify |
| — | Lower DNS TTL ~300s ~24h before switch (apex `A` + `www`) | ⬜ Ben (Squarespace DNS panel) |
| — | **Repoint web records** in Squarespace DNS: apex `A` → Netlify IP (per Netlify UI, currently `75.2.60.5`); `www` CNAME `ext-sq.squarespace.com` → `everyday-future-v4.netlify.app`. **Leave all 5 MX + TXT records untouched.** | ⬜ Ben (Squarespace DNS panel); Claude dig-verifies MX unchanged after |
| — | Verify on the live domain (Rich Results + LinkedIn/X inspectors; HTTPS; 301s; `dig MX`) | ⬜ |
| — | Keep Squarespace live until DNS propagates (rollback = revert the 2 records), then decommission | ⬜ |

---

## 3 — Post-launch (after DNS is live)

| # | Item | Status | Note |
|---|------|--------|------|
| 7 | **Apply v4 design to client portal** | ⬜ | Reskin `edf-portal-updated_3/` to the v4 design system. |
| 8 | **Google Analytics claim** | 🟡 | Set up *after* DNS is live, or you'd measure the old Squarespace site. |
| 9 | **Google Business Profile + data** | 🟡 | The real local/Seattle lever. Update the website URL *after* DNS is live. |
| — | Submit sitemap to Search Console | 🟡 | Post-cutover (see `SEO.md`). |

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
