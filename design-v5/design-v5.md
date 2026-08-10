# EDF v5 Design Reference (Figma "V3" design files)

**Status: Phase 0 — extraction in progress.** This file is the v5 counterpart to the root `design.md` (which remains the v4 canon on `main`/`staging`). As each section is built, its exact values are measured from the comps in `design-v5/comps/` + the Figma file and recorded here. **No-drift rule applies: nothing ships that isn't in a comp or approved by Ben.**

**Figma source:** "Every Day Future - Visual Identity" (file `XFgMXxA7XqDz81qx96r86g`), Website page, **V3 section**. Designer: Alice Wicks. Ignore the "On About you section click - drop" variant (Ben 2026-08-05).

**Reference comps (this folder, exported 2026-08-05 — server-side exports render ALL layers, including ones that don't paint in the Figma canvas):**
| File | Frame | Size |
|---|---|---|
| `Home Page - Desktop.jpg` | Full homepage @2x | 1440×7937 (@2x = 2880×15874) |
| `Home Page - Mobile.jpg` | Full mobile homepage @2x | 360×8150 (@2x) |
| `1440w light.png` | Begin flow Step 2 (1:1 Coaching selected) | 1440×1046 |
| `Load screen.png` | Intro splash (phase-2 motion, deferred) | 1440×857 |
| `Button Hover.png/.jpg` | Hero w/ Begin Practice hover state | 1440×906 |

---

## Confirmed tokens & type (measured from Figma properties, 2026-08-05)

| Token | Value | Source |
|---|---|---|
| Ground | `#F8FCF7` (ivory, replaces v4 cream `#fffcd1`) | Home Page - Desktop frame fill |
| Ink | `#000000` | hero headline fill |
| Paper | `#FFFFFF` | Begin Practice pill label color token "paper" |
| Pale-yellow band (testimonials/footer gradient) | to measure from comp | |
| Card yellows (Choose How, 2 shades + paper texture) | to measure from comp | |
| Scribble blue | to measure (likely same family as v4 `#2956e0`) | |

**Type:**
- **Display/headline:** Helvetica Neue **LT Std 55 Roman** (weight 400) — hero: **79px / 125px line-height / -3% tracking / justified**. Build with the v4 stack (`'Helvetica Neue', Helvetica, Arial`): metric-match on macOS/iOS; Arial fallback on Windows/Android (same tradeoff as live v4 site — Ben accepted 2026-08-05; Monotype webfont license is an optional later drop-in).
- **Mono/UI:** **DM Mono 300 Light** — buttons/labels: **16px / 100% / +1.43px tracking / uppercase** (e.g. BEGIN PRACTICE, CLIENT PORTAL). Already licensed (Google Fonts).
- **Wordmark:** vector outlines in Figma (stacked "Every Day / Future") → export as SVG, no font dependency.

**CTA pill:** "BEGIN PRACTICE" — black pill (fully rounded, vs v4's 4px rect), DM Mono 16px white label. **Floating/sticky on the site (v1 scope, per Ben)** — reuse v4 float-CTA logic (visibility observer + footer parking), reskin only. Hover state comp: `Button Hover.png`.

---

## Homepage section map (V3 desktop, top → bottom)

1. **Hero** — ivory ground; stacked wordmark top-center; boxed `CLIENT PORTAL ↗` top-right; giant 3-line justified headline "Consciously Expand How You Want To Work, The Progress You Care To Create, And The Change That Changes You." with photos tucked between lines (grayscale tree/ink, silhouette-ocean, lone tree in mountains — `NEWCHINA9`, swapped in for the comp's tennis court per Ben 2026-08-10) + blue hand-drawn marks (underline under "Consciously", circle around "Changes"); black pill BEGIN PRACTICE centered below. **No background photo, no rotation (v4 hero rotation retired — Ben 2026-08-05).**
2. **Choose How** — left: "Choose how you want to practice." + body + photo collage w/ handwritten blue "Expand" script; right: **2×2 textured yellow sticky-note cards** (1:1 Coaching / Orgs & Teams / Group / Self-led) with hairline arrows, short descs.
3. **The Process** (NEW section) — "The Process" head; 3-up image tiles with big white numerals **01 Foundation (rock) / 02 Calibration (clouds) / 03 Expansion (lake)**; body copy is **Lorem ipsum — ships as-is per Ben 2026-08-05**.
4. **Practice makes progress** — pale-yellow band; blue scribble loop-arrow after head; **testimonial carousel** (Alice comment #45: "slides through testimonials and quotes"): blue ★ ratings (decorative — Ben), big blue " " quote glyphs, hairline column dividers, attribution style `CLARA / Senior IC leader, AI / major tech` — **match comps exactly incl. names (Ben 2026-08-05)**.
5. **Someday already started** — scattered imagery (pottery/shadow still, green door, figure w/ basket), two body columns ("Your future is created by your attention…" / "Possibility is the capacity for change…"), blue clock scribble.
6. **For Waymakers of Industry, Ideas, and Influence.** — 5-up row of line-art geometric icon cards w/ short "You're…" statements; blue arrow + tick scribbles around head.
7. **Taylor Winters** — head + blue oval scribble; **real portrait photo (in comp — replaces v4 DSCF pair)**; bio paragraph + "Show More" underlined link.
8. **FAQ** — left: scattered images + blue signature scribble; right: accordion, 6 questions (same set as v4), first open, ⊖/⊕ circles.
9. **Footer** — ivory→pale-yellow gradient; giant repeated fading "A Practice Of Possibility With Coaching"; stacked wordmark bottom-left; mono links `CONTACT · INSTAGRAM · LINKEDIN · TERMS & CONDITIONS · PRIVACY POLICY`.

**Begin flow:** `1440w light.png` ≈ the already-live Step 2 (chip / service H1 / dek / offering grid / white About-you panel / step indicator). Delta = chrome only (stacked wordmark, boxed CLIENT PORTAL, ivory ground). Flow logic untouched.

**Nav:** stacked wordmark centered + boxed `CLIENT PORTAL ↗` right, DM Mono. No Writing link (stays hidden — Ben 2026-08-05).

---

## Scope decisions (Ben, 2026-08-05)
- Process copy: **leave Lorem ipsum**
- Testimonials: **match comps** (names as-shown, stars decorative)
- Hero rotation: **retired**
- Writing: **stays hidden**
- Floating Begin Practice pill: **v1 scope**
- Load-screen splash + motion pass (incl. "STICKY Begin Practice" comp nuances, Button Hover micro-interactions beyond CSS hover): **phase 2, post-core**

## Designer comments to honor (Figma thread)
- #45 testimonials/quotes = sliding carousel
- #42 "de-emphasize coaching" (copy posture)
- #28 (Taylor) "more use of the outline elements elsewhere?" — outline/boxed idiom (CLIENT PORTAL box, hairline cards) is intentional and can extend

## Verification protocol
Overlay-diff build screenshots against `comps/` at 1440w and 360w. Anything unmatchable (font substitution, texture export quality) is flagged to Ben before shipping — never silently approximated.

## To extract during build (per-section, from Figma + comps)
- Exact section paddings/gaps, card dims, radii, hairline weights
- Pale-yellow + card-yellow hex values; scribble blue hex
- Asset exports: blue scribbles (SVG/PNG), yellow paper textures, all photography, 5 Waymaker line-art icons, wordmark SVG, Taylor portrait, quote glyphs
