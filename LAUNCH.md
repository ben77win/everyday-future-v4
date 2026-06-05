# Launch Checklist — Every Day Future

_The **single tracked source of truth** for shipping `everydayfuture.work` (Squarespace → Netlify cutover). Merges Ben's launch to-do list with the open items from `CONTEXT.md` and `SEO.md`. Last updated 2026-06-05._

> States: ✅ done · 🟡 in progress / needs dashboard or external action · ⚠️ needs a decision · ⬜ open · ❌ not started.
> `SEO.md` holds the detailed SEO plan + cutover playbook; this file is the one list to work from. Status here is authoritative.

---

## 0 — SEO (on-site)  ✅ done, on `staging`

All on-site SEO shipped to `staging` (tip `8d442a9`): B1 `site` config, B2 per-page titles/descriptions, B3 canonicals, B4 OG/Twitter, B5 og:image, B6 favicon, B7 robots.txt (allow all incl. AI crawlers), B8 sitemap (`/sitemap-index.xml`), B9 FAQPage JSON-LD, + Person/ProfessionalService `@graph`, "conscious executive coaching" bio clause, LinkedIn footer link. Positioning **locked** (Option B). Remaining SEO work is off-site only → see §3. Full detail: `SEO.md`.

---

## 1 — Code / on-site (must land before `staging → main` merge)

| # | Item | Status | Note |
|---|------|--------|------|
| 1 | **Calendly links** | ❌ | `src/data/options.ts` still has placeholders — `placeholder-60` (1:1, orgs), `placeholder-15` (group), empty (self-led). **Needs Taylor's 3 real URLs.** Edit `options.ts` only. |
| 2 | **Taylor bio images** | ⚠️ | Two already wired in S6 (`DSCF0172.jpg` + `DSCF0084.jpg`). **Decision needed:** keep these as final, or swap? |
| 3 | **Waymaker (S5) images** | ⚠️ | The Waymaker section currently has **no photos** — only the Vector-10 brush mark. Adding images is a **new design element → needs spec + Ben approval** (no-drift rule). What images, and approved? |
| 4 | **Begin flow verification** | ⬜ | Run all 4 options end-to-end on staging (Step 1 → form → Calendly / self-led confirmation). Full booking path is blocked by #1. |
| 5 | **Client portal link** | ✅ | Repointed `/portal` → `https://portal.everydayfuture.work` in `Nav.astro` + `Footer.astro` (`target="_blank" rel="noopener"`). Verified in preview 2026-06-05. **Not yet committed.** |
| 6 | **Confirm data → Netlify + email** | ✅ | **Verified end-to-end 2026-06-05.** Form detection ON → staging deploy `ec42beb` processed both forms (Netlify rewrote `<form … netlify>` → `<form … method='post'>`). Reliability check added (both forms `await` the POST; success-only advance, inline error on failure). Test submissions to `contact` + `begin` returned **HTTP 200** (accepted; 404 would mean undetected) — plus Ben's own browser tests. **Email notifications live** → `coach@everydayfuture.work` (Ben confirmed emails arriving). _Cleanup: delete the "Claude Test" / test entries from the Forms store before launch. Re-verify on `main` after merge (Forms store + notifications are site-level, so already registered)._ |

---

## 2 — Domain cutover (Squarespace → Netlify)

_Full order-of-operations + gotchas live in `SEO.md` → "Domain Cutover Checklist." Summary:_

| # | Item | Status |
|---|------|--------|
| — | Verify on staging (Google Rich Results + LinkedIn/X inspectors) | ⬜ |
| — | **`staging → main` merge** — needs Ben's explicit go-ahead | ⬜ |
| — | Add `everydayfuture.work` to Netlify as custom domain first (pre-provision SSL) | ⬜ |
| — | **301 redirects** from old Squarespace URLs (audit Squarespace sitemap first) | ⬜ |
| — | `www` → apex 301 (canonical is non-www) | ⬜ |
| — | Lower DNS TTL ~24h before switch | ⬜ |
| — | **Repoint DNS** Squarespace → Netlify (apex + www) | ⬜ |
| — | Keep Squarespace live until DNS propagates, then decommission | ⬜ |

---

## 3 — Post-launch (after DNS is live)

| # | Item | Status | Note |
|---|------|--------|------|
| 7 | **Apply v4 design to client portal** | ⬜ | Reskin `edf-portal-updated_3/` to the v4 design system. |
| 8 | **Google Analytics claim** | 🟡 | Set up *after* DNS is live, or you'd measure the old Squarespace site. |
| 9 | **Google Business Profile + data** | 🟡 | The real local/Seattle lever. Update the website URL *after* DNS is live. |
| — | Submit sitemap to Search Console | 🟡 | Post-cutover (see `SEO.md`). |

---

## Decisions needed from Ben / Taylor
1. **Calendly** (#1) — the 3 real URLs.
2. **Bio images** (#2) — keep current two or swap?
3. **Waymaker images** (#3) — section has none today; adding them is a design change needing approval + spec.
