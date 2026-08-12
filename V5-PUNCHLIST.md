# v5 Punch List — Ben's review pass (2026-08-12)

_Work items from Ben's full-site review. Check off as they land on `v5`; staging
syncs on Ben's word per the deploy plan. Items marked ❓ need Ben's input before
they can start._

## Global
- [ ] **Begin Practice button +30%** — both pills (hero static + floating), mobile and desktop, scaled together so they stay visually identical
- [ ] **Remove the load screen** — not working reliably, deprioritized (single-commit feature: `git revert` of the LoadScreen commits + the `<LoadScreen />` include)

## Section 1 — Choose how you want to practice
- [ ] **Rollover states too subtle** — strengthen the pale→bright yellow hover shift
- [ ] ❓ **Choose new images (2)** — which two are being replaced (window/clouds video? book? and with what assets?)

## Section 2 — The Process
- [ ] **Mobile images: center-aligned crop** — 01/02/03 banners should crop from center on mobile

## Section 3 — Testimonials
- [ ] **Carousel should not stop** — "Practice makes progress" rail keeps drifting continuously (no pause at ends / on idle)
- [ ] **Remove stars above testimonial quotes** — keep stars above the client-results cards only

## Section 4 — Someday already started
- [ ] **Clock illustration blurry + misplaced** — re-export at 2x from Figma, fix position vs comp
- [ ] ❓ **Replace woman-holding-bag figure image** — replacement asset needed (or should I propose from the Figma "Updated Photos" pool?)

## Section 5 — Waymaker
- [ ] ❓ **Possibly remove the section entirely** — Ben deciding. (Note: the 5 "You're…" statements also live in the FAQ answer copy, so removal loses little; but the section carries the "waymakers of industry, ideas, and influence" positioning phrase on-page — SEO.md keyword relevance. Flag before deleting.)

## Section 6 — Bio
- [ ] ❓ **Different crop of Taylor's portrait** — and: can the busy background be replaced with a solid color? (Options: CSS crop to a cleaner region; or a real background knockout → needs a retouched asset like the v4 DSCF0184 treatment. Which direction?)

## Section 7 — FAQ
- [ ] ❓ **Different rollover behavior** — current: question nudges right + icon tints blue. What should it do instead?

## Footer
- [ ] **Remove "A Practice Of Possibility With Coaching" fading stack** — footer becomes gradient + black bar only (or bar only? confirm)

## Nav
- [ ] **Hide Client Portal link** — it currently lands on the portal ADMIN screen (the known `netlify.toml` root-redirect bug from v4). Hide in desktop nav + mobile menu until the portal root points at `client-portal.html`

## Verify
- [ ] **Section anchor links** — v4 had `#practice` `#results` `#waymaker` `#taylor` `#faq` + the 4 Begin deep links. Confirm they still target the right v5 sections and add any missing ones
