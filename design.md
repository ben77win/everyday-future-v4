# Every Day Future — Design System

> Source: `Every Day Futures - Visual Identity.fig` — style-tile exploration by **Form** (Alice / designbyform.com). Document dated **5/1/2026**, marked *Confidential*.  
> As-built implementation: `everyday-future-v4` Astro site, last updated 2026-05-27.

---

## 1. Design intent

> **Coaching for creative founders experiencing growth — consciously, clearly, creating your future every day.**

A quiet, editorial, publication-feeling identity — not a tech-startup landing page. Architectural type paired with handmade marks and observational photography. The type is the hero; photography is letting.

---

## 2. Color

| Token | Value | Role |
|---|---|---|
| `--ink` | `#000000` | Display type, body text, hairlines, CTA pill background, footer background |
| `--paper` | `#FFFFFF` | Page body background |
| `--paper-off-a` | `#FAFCFA` | S3 Q2 background |
| `--paper-off-b` | `#F8FCF7` | S4 (About) background |
| `--paper-cream` | `#FFFCD1` | S2 (Services) + S5 (Waymaker) background. Warm, paper-like. |
| `--paper-sage` | `#E9EDE7` | S2 free strip + S3 Q3 + S7 (FAQ) background |
| `--blue` | `#2956E0` | Signature accent — brush marks only. The only chromatic statement in the system. |
| `--orange` | `#FF3900` | Spice accent — hover states (CTAs, links) and small static accent dots only. Never section backgrounds. |

### Section backgrounds
| Section | Background |
|---|---|
| S1 Hero | `#0a0a0a` |
| S2 Services | `--paper-cream` |
| S2 free strip | `--paper-sage` |
| S3 Q1 | `--paper` |
| S3 Q2 | `--paper-off-a` |
| S3 Q3 | `--paper-sage` |
| S4 About | `--paper-off-b` |
| S5 Waymaker | `--paper-cream` |
| S6 Taylor | `--paper` |
| S7 FAQ | `--paper-sage` |
| Footer | `--ink` |

### Palette rules
- **Black + electric blue is the entire signal pair.** Every "moment" is one of those two against a paper.
- **Three papers stack for hierarchy:** white → off-white → cream. No solid-color section dividers; tone shifts do the work.
- **Orange is reserved for hover states and small accent dots.** Never a section background, never a large fill.
- **No gradients on sections.** Hero uses a gradient overlay for text legibility only.

---

## 3. Typography

### Font families

| Token | Stack | Role |
|---|---|---|
| `--font-display` | `'Inter', sans-serif` | Wordmark only (Inter 200). Intended face is Formetica Light — not yet licensed. |
| `--font-body` | `'Helvetica Neue', 'Helvetica', 'Arial', sans-serif` | Display headlines, section headlines, body copy — the workhorse |
| `--font-mono` | `'DM Mono', ui-monospace, Menlo, monospace` | CTA labels, eyebrows, ALL CAPS meta |

> **Note:** Formetica is not yet licensed. Inter 200 is the current `--font-display` fallback. Acquire Formetica before production launch.

### Type scale

| Class | Font | Size | Weight | Tracking | Line height |
|---|---|---|---|---|---|
| `.t-wordmark` | display (Inter) | `22px` | 200 | `-0.010em` | — |
| `.t-display` | body | `clamp(42px, 5.5vw, 72px)` | 300 | `-0.030em` | 1.05 |
| `.t-h2` | body | `clamp(32px, 3.6vw, 48px)` | 300 | `-0.020em` | 1.08 |
| `.t-h3` | body | `clamp(22px, 2.2vw, 32px)` | 300 | `-0.015em` | 1.15 |
| `.t-edf` | body | `clamp(52px, 7vw, 110px)` | 500 | `-0.020em` | 1 |
| `.t-body` | body | `15px` | 300 | `0.010em` | 1.7 |
| `.t-eyebrow` | mono | `11px` | 400 | `0.180em` | 1 |
| `.t-cta` | mono | `11px` | 400 | `0.110em` | 1 |
| `.t-caption` | mono | `11px` | 300 | `0.140em` | 1 |

### Type rules
- **Sentence case always.** Title case never appears in headlines.
- **Eyebrows** (`.t-eyebrow`): DM Mono, uppercase, `0.180em` tracking. **CTA labels** (`.t-cta`): DM Mono, uppercase, `0.110em` tracking. These are distinct classes.
- **Body letter-spacing is `0.010em`** — subtle airy widening applied universally.
- **Tight tracking (`-0.030em`)** only at 65px+.
- No exclamation marks. Long, comma-spliced declaratives. Sentence case. Lower-stakes-than-usual coaching language.

---

## 4. Spacing & layout

| Token | Desktop | Tablet (≤900px) | Mobile (≤640px) |
|---|---|---|---|
| `--gutter` | `60px` | `36px` | `22px` |
| `--max-w` | `1280px` | — | — |

### Breakpoints
- Tablet: `@media (max-width: 900px)`
- Mobile: `@media (max-width: 640px)`

### Rules
- **Hairlines:** `0.5px solid rgba(0,0,0,0.18)` — used for section dividers and option row borders.
- **Border radius:** `4px` on pills/tags, `100px` on floating CTA oval, zero everywhere else.
- **Page padding:** content respects `--gutter` on left and right. Max container width `--max-w`.

---

## 5. The ink mark library

All SVGs in `public/marks/` — fill `#2956E0`, variable stroke width (drawn with stylus — do not redraw as uniform-width beziers).

| File | Dimensions | Used in |
|---|---|---|
| `Vector.svg` | 72×218 | Unused |
| `Vector-1.svg` | 243×194 | S3 Q2 — bottom-left of quote (`Testimonials.astro`) |
| `Vector-2.svg` | 313×68 | Unused |
| `Vector-3.svg` | 93×189 | Unused |
| `Vector-4.svg` | 344×318 | S2 header — top-right of subhead area (`Services.astro`) |
| `Vector-5.svg` | 348×181 | S1 Hero — under "now." (inverted white) + S6 Taylor bio — under "speaks to you" |
| `Vector-6.svg` | — | S2 free strip — above "Free discovery call" title (`Services.astro`) |
| `Vector-7.svg` | — | Unused |
| `Vector-8.svg` | 438×173 | S4 About — top-left of section (`About.astro`) |
| `Vector-9.svg` | — | Unused |
| `Vector-10.svg` | 180×140 | S5 Waymaker — left of word (`Waymaker.astro`) + S7 FAQ — top-left (`FAQ.astro`) |
| `Vector-11.svg` | — | Unused |
| `Vector-12.svg` | — | S1 Hero — underline on "future" (inverted white, `Hero.astro`) |

### Mark treatment rules
- All marks stroke `#2956E0`, no fill.
- Marks are `position: absolute` overlays — they sit on top of type and photography, cross hard edges intentionally.
- Marks may rotate freely — applied, not placed.
- Prime candidates for `stroke-dasharray` entry animation at 1000ms.

---

## 6. Imagery

### Direction A — "Imagery Now" (current)
Quiet observational scenes: windows, roses, feathers, dunes, coastal cliffs, mountain + berries. Cool-to-cold natural light, mid-saturation, portrait orientation. Opacity `0.7–0.8` when overlaid on paper.

### Direction B — "Imagery Shift" (proposed)
More active and editorial — cyanotype-style paintings, abstract prints, "made you look" contrast. Not yet adopted.

### Treatment rules (both)
- Reduced opacity `0.7–0.8` on collaged images.
- Full-bleed crops. No rounded corners, no drop shadows, no borders on image tiles.
- Photography is letting — type is always the hero.

### Active images (`public/images/`)
**Scene assets:** `dunes.png`, `feather.png`, `hero-coast.jpg`, `hero-red-sun.jpg`, `hero-rose.png`, `horizon.png`, `lotus.png`, `mountain-card.png`, `painting.png`, `rose.png`, `window-sunset.png`

**Taylor portraits:**
- `taylor-01.png` — Real portrait (PNG, active)
- `taylor-02.jpg` — Family photo, displayed in grayscale (active)
- `taylor-03.gif` — Ski lift looping GIF, 220×293px (active)

---

## 7. Components

### CTA Pill / Floating CTA
- Float CTA (`.float-cta__link`): `border-radius: 100px` oval, `height: 48px`, DM Mono `11px / 0.110em`, uppercase
- Inline pill (`.pill`): `border-radius: 4px`, `height: 36px`
- Free strip CTA (`.s2__free-cta`): `border-radius: 4px`, `height: 39px`, DM Mono `14.4px / 0.110em` — component-level override
- Float CTA hover: background becomes `--orange`. Inverts to white bg + ink text when over footer (`.over-footer`)

### Option rows (S2)
- Full-width, separated by `0.5px` hairlines
- Title: ~65px display, weight 300
- Description: 14px body, right-aligned
- Arrow `→` right edge
- All options currently hover to `--ink`. Per-option colors (blue for Group, orange for Self-led, etc.) are a pending decision.

### FAQ accordion
- Click `.s7__trigger` → toggles `.open` on `.s7__item`
- One item open at a time
- `max-height` CSS transition

### Nav
- Transparent over hero; gains `.scrolled` when hero exits viewport: `background: rgba(255,255,255,0.96)`, `backdrop-filter: blur(8px)`, `border-bottom: 0.5px`
- Left: wordmark (`.t-wordmark`, Inter 200). Right: CLIENT PORTAL link (DM Mono, `13px`, `0.110em`, uppercase)

---

## 8. Animation & interaction

### Scroll reveals
Staggered `IntersectionObserver` at `threshold: 0.15`, 110ms stagger per element. Observes:
`.s2__option`, `.s2__free`, `.s3__quote`, `.s4__body`, `.s4__tags`, `.s5__left`, `.s5__item`, `.s6__photos`, `.s6__bio`, `.s7__item`

### S2 headline clip
Fires once when `#practice` enters view at `threshold: 0.3` — adds `.revealed` to `#s2Headline`.

### Parallax
`[data-parallax]` elements calculate center offset relative to parent `.s2__free`, `.s3__quote`, or `.s6__photos`. All-positive speeds (0.04–0.28) keep photos moving together with minimal separation.

### Hero image rotation
Sequential cycle via `localStorage` key `edf_hero`. Sequence: `hero-rose.png` → `hero-red-sun.jpg` → `feather.png` → `lotus.png`.

---

## 9. Don'ts

- No gradient backgrounds — cream is flat.
- No elevation or shadows on anything except a literal physical-card mock.
- Don't redraw brush marks with smooth beziers — variable width is the point.
- No title-case headlines.
- Orange never as a section background or large fill — hover states and small accent dots only.

---

## 10. Open decisions

- [ ] **Formetica license** — acquire before launch; currently using Inter 200 fallback
- [ ] **Imagery direction** — confirm Now vs. Shift before scaling photography
- [ ] **S2 per-option hover colors** — all ink currently; blue for Group, orange for Self-led, TBD for others
- [ ] **Orange expansion** — stays as hover-only or expands into eyebrow labels?
- [ ] **EDF logomark** — stacked "EDF" specimen and arc-text stamp are candidates, not commitments
- [ ] **SVG mark tuning** — marks placed but position/scale/rotation/opacity not fully dialed in
