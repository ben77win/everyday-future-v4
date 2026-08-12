# v5 Punch List — Ben's review pass (2026-08-12)

_Work items from Ben's full-site review. Check off as they land on `v5`; staging
syncs on Ben's word per the deploy plan. Items marked ❓ need Ben's input before
they can start._

## Global
- [x] **Begin Practice pills sized to best practice** — desktop 43→52px (matches menu pill + Begin submit), mobile 35→44px (Apple tap minimum), fonts/padding scaled (2026-08-12)
- [x] **Load screen: first visit only** — localStorage flag set on lift; verified plays fresh, skips after (2026-08-12)

## Section 1 — Choose how you want to practice
- [x] **Rollover: blue inversion** — (Ben 2026-08-12) card sweeps to --blue on hover/press, text + arrow white; supersedes the comp's pale→bright (too subtle)
- [x] **New images landed (Ben 2026-08-12):** book slot → IMG_0182 (brass paperclip); window slot → sunset figure (Screen Shot 2015-07-27); Someday figure → IMG_3703 red rose (after trying IMG_3424 path, IMG_3916 video, IMG_7858 roses)

## Section 2 — The Process
- [x] **Mobile banner crops** — per-banner object-position tuned so strips center on the SUBJECT (clouds/mountains), not the pixel middle (2026-08-12)

## Section 3 — Testimonials
- [x] **Carousel: continuous drift** — rAF marquee with cloned wrap, only pauses while dragging (2026-08-12)
- [x] **Stars only on result cards** — quote cards star-free (2026-08-12)

## Section 4 — Someday already started
- [ ] **Clock illustration blurry + misplaced** — re-export at 2x from Figma, fix position vs comp
- [x] **Figure slot final: IMG_1357 video** (2026-08-12; supersedes IMG_3703 rose still — rose asset kept ready in git history)

## Section 5 — Waymaker
- [x] **KEEP — Ben 2026-08-12** ("keep for SEO" per my flag; no change to the section)

## Section 6 — Bio
- [ ] ❓ **Different crop of Taylor's portrait** — and: can the busy background be replaced with a solid color? (Options: CSS crop to a cleaner region; or a real background knockout → needs a retouched asset like the v4 DSCF0184 treatment. Which direction?)

## Section 7 — FAQ
- [ ] ❓ **Different rollover behavior** — current: question nudges right + icon tints blue. What should it do instead?

## Footer
- [x] **Footer stack removed** — gradient kept (Ben's call) + black bar (2026-08-12)

## Nav
- [x] **Client Portal link hidden** — desktop nav + mobile menu (commented for easy reintroduction once the portal root redirect is fixed) (2026-08-12)

## Verify
- [x] **Anchors verified** — #practice #results #waymaker #taylor #faq (+ #process #about) all present; Begin deep-link JS intact in index.astro (2026-08-12)

## Cleanup (Ben deletes by hand — agent delete is guarded off)
- `public/images/v5/choose-clouds.mp4` + `choose-clouds-poster.jpg` — unused (clouds video superseded by the sunset still)
- `public/_comp-a5.html`, `public/_comp-rec.html`, `public/_comp-stacked.html` — load-screen comp scaffolding (comps also live in design-v5/comps/)
- `design-v5/comps/_footer-crop.jpg` — accidental full-size sips output (10MB)
- `~/Downloads` copies of assets now in the repo (NEWCHINA9.jpg, DSCF0065.jpg etc.)
