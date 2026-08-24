# v5 — Final To-Do (pre-merge)

_Opened 2026-08-12, at the close of the punch-list session. Everything on
`V5-PUNCHLIST.md` is done; this is what remains between here and production.
Deploy plan unchanged: build on `v5` → merge `staging` (Ben approves) → merge
`main` (Ben approves). Rollback tag `pre-v5`._

---

## 1. Blocked on other people

| # | Item | Who | Note |
|---|------|-----|------|
| 1.1 | **Real Process copy** | Taylor | Placeholder is hidden behind `SHOW_BODY_COPY = false` at the top of `Process.astro`. Drop the real text into the `steps` array's `body` fields and flip the switch to `true`. Nothing else to change. |
| 1.2 | **High-res source for the blue sketches** | Alice | The V3 sketches in Figma are crops of one photographed sheet (`IMG_5637 1.png`) with no vector behind them — exporting at 4x makes them *worse*, verified and reverted. Ask for her originals (Procreate/Illustrator/vector), or trace them (see 2.1). |
| 1.3 | **Portal root redirect** | Ben | `portal.everydayfuture.work/` currently redirects to `admin-create.html`, i.e. the portal *creator*. Fix `netlify.toml` in `edf-portal-updated_3` to point `/` → `client-portal.html`, then un-hide the Client Portal links (see 3.2). |

## 2. SVG / sketch marks

**Where it stands: 4 of 9 marks are now true vector**, from the existing
`public/marks/` library (13 SVGs, brand blue `#2956E0`, sharp at any size):

| Mark | Status |
|---|---|
| Hero underline ("Consciously") | ✅ vector — `Vector-12.svg` |
| Hero oval ("Changes") | ✅ vector — `Vector-5.svg` (stretched to the old box; closest available match) |
| Taylor lasso | ✅ vector — `Vector-8.svg` |
| FAQ spiral | ✅ vector — `Vector-4.svg` |
| Expand script | ⬜ raster — no vector equivalent; sized down to 280px (density 1.89×) |
| Someday clock | ⬜ raster — no equivalent; halved to 134px (density 2.10×) |
| Testimonials loop arrow | ⬜ raster — `Vector-7` (loop-with-tail) is a plausible swap |
| Waymakers arc arrow | ⬜ raster — no close match |
| Waymakers ticks | ⬜ raster — **`Vector-11` (two thick ticks) is a direct match; easiest next win** |

- [ ] **2.1 — Decide the path for the 5 remaining rasters.** Options: (a) swap in the closest vector where the shape reads equivalently (`Vector-11` ticks, maybe `Vector-7` loop); (b) vector-trace the V3 sketches to preserve Alice's exact drawings; (c) get her originals (1.2). Tracing is cheap and makes them infinitely sharp, at the cost of slightly regularising the hand-drawn wobble.
- [ ] **2.2 — Unused vector marks** worth knowing about: `Vector`, `Vector-1`, `Vector-2`, `Vector-3`, `Vector-6`, `Vector-9`, `Vector-10`, `Vector-11`. Rendered reference sheet: `~/Desktop/EDF-sketches-review/`.

## 3. SEO — confirm before and after merge

**Verified intact in the v5 build (2026-08-12):** meta description with "Taylor
Winters"; the positioning `<h3>` ("Outcomes from conscious executive coaching");
"conscious executive coaching" ×9 on the homepage; FAQPage + Person +
ProfessionalService schema; canonical; GA4 `G-05G2PBBWW1`; sitemap with all 8
URLs; robots.txt.

- [ ] **3.1 — Writing links still hidden** (`SEO-ACTIONS.md` B1). Hidden 2026-06-22 "for ~2 weeks"; now ~7 weeks. The two essays are the only content targeting the niche term and are **orphaned** (zero internal links). v5's nav has no Writing link either. **Decide before merge:** give Writing a place in the v5 nav/footer, or accept continued orphaning.
- [ ] **3.2 — Client Portal links** are hidden pending 1.3; restore once the redirect is fixed (commented in `Nav.astro` ×2 with the reason).
- [ ] **3.3 — Post-merge SEO watch.** v5 changes the H1 and much body copy. Expect a short re-evaluation wobble in impressions; re-check GSC ~1 and ~4 weeks after production. Current baseline (2026-07-15): 369 impressions / avg position 18.9, top query "conscious executive coaching."
- [ ] **3.4 — Carry-over items from `SEO-ACTIONS.md`, unaffected by v5:** A3 (request indexing for the 2 essay URLs), A4 (GBP review requests — biggest map-pack lever, still 0 reviews), A7 (podcast leverage), B3 (definitional "What is conscious executive coaching?" page — #1 content lever), B4 (long-tail articles), B5 (`llms.txt`, article `og:type`), B6 (MCC + UPenn + Harvard credentials into Person schema).

## 4. Verification still owed

- [ ] **4.1 — Real-device pass.** Everything so far is Chromium + emulated viewports. Needs a genuine iOS Safari and Android run: the four autoplay videos, the testimonial drift, the mobile menu, the Begin flow, and the load screen.
- [ ] **4.2 — Testimonial carousel motion on a real phone.** Verified mechanically (drift math, seamless wrap) but never watched moving on mobile — the preview pane reports `document.hidden`, which legitimately pauses it. If it jitters after a swipe on iOS, momentum scrolling is fighting the marquee; fix is a short post-touch settle.
- [ ] **4.3 — iOS video autoplay.** All four are H.264 High / level 3.0 / `yuv420p` / tv-range / faststart, with `autoplay muted playsinline` and no `controls` (no play buttons by design). If they don't move on a real phone, check Low Power Mode first — it blocks autoplay system-wide.
- [ ] **4.4 — Begin flow end-to-end on v5**: all four options, form submit → Netlify, Calendly step, and the homepage drawer.
- [ ] **4.5 — Cross-browser**: Firefox + real Safari (the `-webkit-text-stroke` on the load screen and `background-clip: text` in the footer are the risky spots).

## 5. Deferred / open design questions

- [ ] **5.1 — Portal reskin to v5** — `edf-portal-updated_3` still uses the old cream/green/gold system. Attempted once in session 9 and reverted for not meeting the bar.
- [ ] **5.2 — Formetica licence** — headline font is system Helvetica Neue (Ben approved as-is 2026-08-05).
- [ ] **5.3 — Landing pages** — structure TBD, not started.
- [ ] **5.4 — Monorepo consolidation** — site + portal sharing design tokens.
- [ ] **5.5 — Hero/Choose-How video sources** — hero tree and the S1 window were videos in Figma; hero now uses the IMG_4528 water clip, S1 uses a still. Confirm that's final.

## 6. Cleanup (Ben deletes by hand — agent delete is guarded off)

See `CLEANUP.md`. Adds from this session: `~/Desktop/EDF-sketches-review/`
(review copies), `~/Downloads/export-sketches/`, `~/Downloads/Every Day Future -
Visual Identity (4).zip`, `~/Downloads/IMG_5637 1 2 (4).png`.
