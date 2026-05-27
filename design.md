# Every Day Future — Design System (design.md)

> Derived from `ben77win/everyday-future-v4@staging` — an Astro 4 site, single layout, ten components. Every token, class name, selector, and behavior in this document is traceable to a specific file in that repo.

**Source map**

| Concern | File |
|---|---|
| Tokens, type scale, all section styles | `src/styles/global.css` |
| Head, fonts, all behavior (JS) | `src/layouts/Layout.astro` |
| Page composition | `src/pages/index.astro` |
| Section components | `src/components/{Hero, Services, Testimonials, About, Waymaker, TaylorBio, FAQ, Footer, Nav, CTABar, BeginFlow}.astro` |
| Brush marks | `public/marks/Vector{,-1..-12}.svg` (13 files) |
| Photography | `public/images/*.{png,jpg,gif}` (21 files) |

---

## 1. Voice in one line

> **Choose the future you want. Create what matters now.**

A quiet, editorial coaching site. Type is the hero. Photography is full-bleed and partial-opacity. Hand-drawn blue brush marks sit *over* type and images as overlays. The page reads like a publication, not a SaaS landing page.

---

## 2. Tokens

Defined once in `src/styles/global.css` under `:root`.

### 2.1 Color

| Token | Value | Where it shows up |
|---|---|---|
| `--ink` | `#000000` | All display + body type, hairlines, default CTA fill, footer background, hero scrim base |
| `--paper` | `#ffffff` | Page default, S3 Q1 background, S6 Taylor background |
| `--paper-off-a` | `#fafcfa` | S3 Q2 background |
| `--paper-off-b` | `#f8fcf7` | S4 About background |
| `--paper-cream` | `#fffcd1` | S2 Services background, S5 Waymaker background, Begin drawer background |
| `--paper-sage` | `#e9ede7` | S2 free strip, S3 Q3, S7 FAQ |
| `--blue` | `#2956e0` | Brush marks (`.mark`) only. No other element uses this token. |
| `--orange` | `#ff3900` | Hero top-right `.accent-dot`, footer `.site-footer__dot` (between links), float-CTA hover background |

**Section background map (canonical)**

| Section | Element | Background |
|---|---|---|
| S1 Hero | `.hero` | `#0a0a0a` + rotating bg image at 0.88 opacity + four-stop dark gradient overlay |
| S2 Services | `.s2` | `--paper-cream` |
| S2 free strip | `.s2__free` | `--paper-sage` (full-bleed via negative margins) |
| S3 Q1 | `.s3__quote--a` | `--paper` |
| S3 Q2 | `.s3__quote--b` | `--paper-off-a` |
| S3 Q3 | `.s3__quote--c` | `--paper-sage` |
| S4 About | `.s4` | `--paper-off-b` |
| S5 Waymaker | `.s5` | `--paper-cream` |
| S6 Taylor | `.s6` | `--paper` |
| S7 FAQ | `.s7` | `--paper-sage` |
| Footer | `.site-footer` | `--ink` |
| Begin drawer | `.begin-drawer` | `--paper-cream` |

**Rules from the code:**
- **Black + electric blue is the only signal pair.** Every "moment" is one of those two against a paper.
- **Hierarchy = stacked papers, never borders.** No 1px solid section dividers exist in the codebase; tone shifts do the work.
- **Blue is a brush color, not an interface color.** It exists only in `.mark` overlays. No button, link, or text uses `--blue` in source.
- **Orange is a spice.** Three exact uses: `.accent-dot` (hero), `.site-footer__dot` (footer separator), `.float-cta__link:hover` (and footer's inverted hover variant).
- **Hairline alphas observed in the wild:** `rgba(0,0,0,0.10 / 0.12 / 0.18 / 0.30 / 0.35 / 0.40 / 0.45 / 0.55)` and `rgba(255,255,255,0.45 / 0.55)`. **`0.18` is the default** for structural hairlines.

### 2.2 Type tokens

```css
--font-display: 'Inter', sans-serif;                            /* wordmark only */
--font-body:    'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
--font-mono:    'DM Mono', ui-monospace, Menlo, monospace;
```

Loaded in `Layout.astro` from Google Fonts:

```
family=DM+Mono:wght@300;400&family=Inter:wght@200
```

— **only Inter 200, DM Mono 300, and DM Mono 400** are fetched. Helvetica Neue ships with the OS; no webfont fallback is loaded for it.

### 2.3 Layout tokens

```css
--max-w: 1280px;
--gutter: 60px;   /* desktop */
                  /* 36px tablet  (max-width 900px) */
                  /* 22px mobile  (max-width 640px) */
```

Two breakpoints: **`@media (max-width: 900px)`** and **`@media (max-width: 640px)`**.

---

## 3. Typography

Nine reusable classes. Sentence case is universal — title-case headlines do not exist in source.

| Class | Family | Weight | Size | Line | Tracking | Used in |
|---|---|---|---|---|---|---|
| `.t-wordmark` | Inter | 200 | `22px` | — | `-0.01em` | Nav wordmark, footer wordmark variant |
| `.t-display` | Helvetica | 300 | `clamp(42px, 5.5vw, 72px)` | `1.05` | `-0.030em` | Hero headline |
| `.t-h2` | Helvetica | 300 | `clamp(32px, 3.6vw, 48px)` | `1.08` | `-0.020em` | Generic H2 helper (not actively used by S2-S7 — they declare their own sizes) |
| `.t-h3` | Helvetica | 300 | `clamp(22px, 2.2vw, 32px)` | `1.15` | `-0.015em` | Reserved helper |
| `.t-edf` | Helvetica | 500 | `clamp(52px, 7vw, 110px)` | `1` | `-0.020em` | EDF stacked mark (unused in current build but the helper exists) |
| `.t-body` | Helvetica | 300 | `15px` | `1.7` | `0.010em` | Generic body helper |
| `.t-eyebrow` | DM Mono | 400 | `11px` | `1` | `0.180em` UPPER | Generic eyebrow helper |
| `.t-cta` | DM Mono | 400 | `11px` | — | `0.110em` UPPER | Float-CTA label, drawer close "Back" |
| `.t-caption` | DM Mono | 300 | `11px` | — | `0.140em` UPPER | Reserved |

**Section-local type declarations override `.t-h2/.t-h3/.t-body` in most places.** Notable per-section sizes:

- `.s2__headline` — `clamp(42px, 4.8vw, 64px)` / 300 (animated clip-reveal)
- `.s2__option-title` — `clamp(44px, 5.8vw, 78px)` / 300 / `-0.030em` / `line-height: 1`
- `.s2__free-title` — `clamp(36px, 4.2vw, 58px)` / 300 / `-0.025em`
- `.s3__text` — `clamp(42px, 5.8vw, 80px)` / 300 **italic** / `1.05` / `-0.032em`
- `.s4__body` — `clamp(20px, 2.4vw, 30px)` / 300 / `1.35` / `0.020em`
- `.s5__word` — `clamp(52px, 7vw, 96px)` / 300 / `-0.030em`
- `.s5__item` — `clamp(18px, 2vw, 26px)` / 300 / `0.020em`
- `.s6__name` — `clamp(40px, 4.5vw, 58px)` / 300 / `-0.030em`
- `.s6__para` — `15px` / 300 / `1.75` / `0.020em`
- `.s7__question` — `clamp(18px, 2.2vw, 28px)` / 300 / `0.010em`

**Tracking rule of thumb:** negative kerning (`-0.020em` → `-0.032em`) appears at display scale (≥36px). Body and meta sit at `+0.010em → +0.020em`. The `0.110em` and `0.140em–0.180em` ranges are reserved for ALL-CAPS DM Mono.

---

## 4. Imagery

Stored in `public/images/`. The hero rotates one of four on each reload (via `localStorage.edf_hero`):

```
hero-rose.png  →  hero-red-sun.jpg  →  feather.png  →  lotus.png  → (loops)
```

Each rotation entry carries a `background-position` (e.g. `50% 30%`, `50% 40%`) so the crop is intentional.

**Photo inventory & where each lives:**

| File | Used in | Treatment |
|---|---|---|
| `hero-rose.png`, `hero-red-sun.jpg`, `feather.png`, `lotus.png` | Hero rotation | full-bleed bg, `opacity: 0.88`, gradient overlay |
| `mountain-card.png` | S3 Q1 — tall portrait bleeding right | `opacity: 0.80`, parallax `0.08` |
| `horizon.png` | S3 Q2 — wide landscape bleeding left+down | `opacity: 0.80`, parallax `-0.10` |
| `rose.png` | S3 Q3 — portrait bleeding right+down into S4 | `opacity: 0.80`, parallax `0.09` |
| `feather.png`, `lotus.png`, `dunes.png`, `window-sunset.png` | S2 free-strip parallax scatter | `0.70–0.78` opacity, 4 absolute positions |
| `taylor-01.png` | S6 — main portrait | `opacity: 0.82`, parallax `0.04` |
| `taylor-03.gif` | S6 — looping ski-lift GIF | `opacity: 0.76`, parallax `0.06` |
| `taylor-02.jpg` | S6 — small family photo, **grayscale** | `opacity: 0.72`, `filter: grayscale(100%)`, parallax `0.08` |
| ~~`painting.png`, `hero-coast.jpg`, `taylor-03.jpg`, `taylor-04..07.{jpg}`, `taylor-04b.jpg`, `taylor-05b.jpg`~~ | **Deleted 2026-05-27** | Removed from `public/images/` — no longer in repo |

**Treatment rules from the code:**
- Photos are always opacity-reduced (`0.70–0.88`) so the underlying paper bleeds through.
- No rounded corners, no shadows, no borders on image tiles. Hard rectangular edges everywhere.
- Crops are full-bleed within their tile (`object-fit: cover`).
- One single image uses a `grayscale` filter (`taylor-02`). The rest are full color.
- Mobile S3 inverts: images go to **full bleed at 100% opacity** under a black gradient, with white text on top — three full-viewport cinematic moments instead of three tonal blocks.

---

## 5. Brush marks

13 SVGs in `public/marks/`, drawn with a pressure-sensitive stylus. **They are filled paths (not strokes) — variable-width by design. Do not redraw with uniform-width beziers.**

All marks render through the bare `.mark` class (just `display: block; pointer-events: none; user-select: none`). Sizing, position, rotation, and opacity are applied **inline at the component level**, not via class modifiers.

**Active marks** (used in current components):

| File | Used by | Treatment notes |
|---|---|---|
| `Vector-12.svg` | `Hero.astro` — under "future" | 190px, opacity 0.68, rotate 1.5°, `filter: brightness(0) invert(1)` → **white** |
| `Vector-5.svg` | `Hero.astro` — over "now." | 145px, opacity 0.62, rotate -2.5°, **filtered to white** |
| `Vector-5.svg` | `TaylorBio.astro` — under "speaks to you" | 240px, opacity 0.48, rotate 2°, **blue (default)** |
| `Vector-4.svg` | `Services.astro` — S2 header right | 155px, opacity 0.32, rotate -4° |
| `Vector-6.svg` | `Services.astro` — S2 free strip | 200px, opacity 0.42, rotate 3° |
| `Vector-1.svg` | `Testimonials.astro` — S3 Q2 | 130px, opacity 0.50, absolute bottom-left of quote |
| `Vector-8.svg` | `About.astro` — S4 top-left | 125px, opacity 0.42, rotate 4° |
| `Vector-10.svg` | `Waymaker.astro` — S5, **and** `FAQ.astro` — S7 top-left | S5: 72px, opacity 0.52, rotate -6°. S7: 80px, opacity 0.45, rotate -2° |

**Idle marks** (present in `public/marks/` but never imported by a component):

`Vector.svg`, `Vector-2.svg`, `Vector-3.svg`, `Vector-7.svg`, `Vector-9.svg`, `Vector-11.svg` — 6 marks kept as a reserve.

**Mark treatment, codified:**
- Default stroke color is `#2956e0` (baked into each SVG file).
- To render over photography or a dark hero, apply `filter: brightness(0) invert(1)` to make them **white**, then drop opacity to `0.6–0.7`.
- All marks are `position: absolute`, `pointer-events: none`, with manual `top/left/right` placement and small rotations (`-6° to +4°` observed).
- Marks cross hard edges intentionally — they sit over type and image, not behind.
- They are good candidates for `stroke-dasharray` entry animations, but the current code does not animate them; they only fade with their parent block during scroll-reveal.

---

## 6. Components

### 6.1 Nav (`Nav.astro`)

```html
<nav class="nav" id="nav">
  <a href="/" class="nav__wordmark t-wordmark">Every Day Future</a>
  <div class="nav__right">
    <a href="/portal" class="nav__link">Client Portal</a>
  </div>
</nav>
```

- Fixed top, `22px var(--gutter)` padding.
- **Over hero (default):** transparent background, wordmark and "Client Portal" link in `rgba(255,255,255,0.92 / 0.78)` with soft text-shadow.
- **After hero exits viewport:** `.scrolled` class added — `rgba(255,255,255,0.96)` bg, `backdrop-filter: blur(8px)`, text shifts to `--ink`. No bottom border.
- Right side has *only* the Client Portal link in source. Note: `.nav__cta` styles exist in `global.css` but no `nav__cta` element is rendered — this is **dead CSS**.

### 6.2 Hero (`Hero.astro`)

```
.hero (100vh, min 640px, #0a0a0a)
├── .hero__bg              ← rotating image at opacity 0.88
├── .hero__gradient        ← 4-stop top→bottom (18 → 8 → 32 → 68 % black)
├── .hero__chrome-top      ← orange accent dot, top-right
└── .hero__content         ← bottom-left, padded 80px from bottom
    └── .hero__copy        ← max-width 680px
        ├── h1.t-display.hero__headline   ← white, two inline marks (Vector-12, Vector-5)
        ├── p.hero__subhead               ← 19px/1.6, rgba(255,255,255,0.82), max-width 520px
        └── .tags.hero__tags              ← 3 tag pills
```

### 6.3 Float CTA (`CTABar.astro`)

The persistent "Begin your practice" pill.

- **Position:** `fixed`, `bottom: 32px`, horizontally centered (`left: 50%; transform: translateX(-50%)`).
- **Shape:** `height: 48px`, `padding: 0 40px`, `border-radius: 100px` (pure pill).
- **Type:** DM Mono 11px, `0.110em`, UPPERCASE, white on `--ink`.
- **Shadow:** `0 4px 28px rgba(0,0,0,0.28)`.
- **States:**
  - Default: hidden (`opacity: 0`, `pointer-events: none`) while hero is in view; fades in (`.visible`) once hero exits.
  - Hover: background → `--orange`, shadow → `0 6px 32px rgba(255,57,0,0.35)`.
  - **`.over-footer`** (when site footer is in viewport): inverts to **white pill on black**; hover still goes orange.
- **Behavior:** click is intercepted; if `window.__openBeginDrawer` exists, it slides up the Begin drawer instead of navigating.

### 6.4 Service options (`Services.astro` / `.s2__option`)

Full-width rows separated by 0.5px hairlines (`rgba(0,0,0,0.18)`).

```
[ Title ─────────────────── ]   [ description ]   [ → ]
```

- **Title:** `clamp(44px, 5.8vw, 78px)`, weight 300, tracking `-0.030em`, line-height 1.
- **Description:** `max-width: 260px`, `13px`, right-aligned, `rgba(0,0,0,0.50)`.
- **Arrow:** body font, 32px, `rgba(0,0,0,0.25)`.
- **Hover:** entire row background → `--ink` (full-bleed via negative `var(--gutter)` margins), title → white, description → `rgba(255,255,255,0.80)`, arrow → white + `translateX(6px)`.
- **Source order:** `1:1 Coaching → Orgs & Teams → Group Coaching → Self-led`.
- **Reveal:** rows start `opacity: 0; translateY(28px)`, animated to identity with `cubic-bezier(0.16, 1, 0.3, 1)` over 650ms, staggered 110ms by global observer.
- **Mobile:** description hidden; title scales to `clamp(36px, 9.5vw, 56px)`; row uses gutter padding directly.

### 6.5 Tags (two flavors)

Hero tags (`.tag`) sit over dark imagery:

- 30px tall, `0 14px` padding, `0.5px solid rgba(255,255,255,0.55)`, `color: rgba(255,255,255,0.88)`.
- DM Mono 10px / `0.130em` / UPPER, `border-radius: 4px`.
- Hover inverts to white fill / black text.

S4 tags (`.s4__tag`) sit over paper:

- 36px tall, `0 20px` padding, `0.5px solid rgba(0,0,0,0.30)`, ink text.
- DM Mono 13px / `0.110em` / UPPER.
- Hover inverts to ink fill / white text.

### 6.6 S2 free strip CTA (`.s2__free-cta`)

A standalone secondary button on the sage band.

- 39px tall, `0 24px` padding, `0.5px solid rgba(0,0,0,0.35)`, `border-radius: 4px`.
- DM Mono **14.4px** / `0.110em` / UPPER — **larger than `.t-cta`'s 11px**. The only CTA in the system at that size; treat as a one-off, not a template.
- Hover: fills `--orange`, border matches, text white.

### 6.7 FAQ accordion (`FAQ.astro` / `.s7__item`)

- 0.5px hairlines above and below the list, one between each item.
- Trigger row: 32px y-padding, question (left) + plus icon (right).
- **Plus icon (`.s7__icon`):** 20×20, drawn entirely with `::before` (horizontal 0.5px bar) and `::after` (vertical 0.5px bar). Open state fades the vertical bar via opacity + `scaleY(0)`, leaving a minus.
- **Answer:** `max-height: 0 → 400px` transition over 450ms, `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Single-open behavior:** clicking a closed item closes all others.

### 6.8 Begin drawer (`index.astro` styles, `BeginFlow.astro` content)

- Full-viewport modal that slides up from the bottom: `transform: translateY(100%) → 0` over 550ms, `cubic-bezier(0.16, 1, 0.3, 1)`.
- Background: `--paper-cream` to match S2 and S5.
- Sticky 60px top bar with a `← Back` close button (DM Mono 11px, `0.140em`).
- Below the bar: scrollable region (`overflow-y: auto`) hosting `<BeginFlow />`.
- Behind: a `rgba(0,0,0,0.35)` scrim that fades in.
- **History integration:** `pushState('/begin')` on open, `replaceState('/')` on close. Escape key closes. Float-CTA click opens the drawer instead of navigating.

### 6.9 Footer (`Footer.astro` / `.site-footer`)

- `--ink` background, `60px var(--gutter)` padding, `max-width: 1280px` inner.
- Left: wordmark in Inter 200 / 18px / `rgba(255,255,255,0.72)` (note: smaller than nav at 22px).
- Right: `Login · ● · Terms & Conditions · ● · Privacy Policy` — `●` is a **6px orange dot**, DM Mono 13px / `0.110em` / UPPER link text in `rgba(255,255,255,0.46)`, hovering to `0.86`.
- Mobile: stacks vertically, dots hidden.

---

## 7. Section anatomy

| Section | ID | Background | Inner pattern | Key marks |
|---|---|---|---|---|
| S1 Hero | `#hero` | `#0a0a0a` + rotating image | bottom-left copy block | Vector-12 (white) under "future"; Vector-5 (white) over "now." |
| S2 Services | `#practice` | `--paper-cream` | 2-up header + 4 option rows + free strip | Vector-4 in header; Vector-6 in free strip |
| S3 Testimonials | `#quotes` | 3-tone tonal shift (paper → off-a → sage) | 3 italic quotes, 3 bleeding images | Vector-1 in Q2 |
| S4 About | `#about` | `--paper-off-b` | 2-col (body + tag stack) | Vector-8 top-left |
| S5 Waymaker | `#waymaker` | `--paper-cream` | 2-col (definition + hairline list) | Vector-10 over the word |
| S6 Taylor | `#taylor` | `--paper` | 2-col (photo scatter + bio) | Vector-5 under "speaks to you" |
| S7 FAQ | `#faq` | `--paper-sage` | accordion list (5 items) | Vector-10 top-left |
| Footer | — | `--ink` | wordmark + link row | — |

**The narrative the section order tells:**

1. **Hero** — frame the choice.
2. **Services** — show the four ways to enter the practice + a free discovery call.
3. **Testimonials** — three short voices, big italic type, escalating tonal warmth.
4. **About** — what the work *is*, in one paragraph + three tag-pillars.
5. **Waymaker** — define who this is for (a word + its definition + its qualities).
6. **Taylor** — who you're working with.
7. **FAQ** — answer the residual hesitation.
8. **Footer** — the legal floor.

---

## 8. Animation & interaction

All behavior lives inline at the bottom of `Layout.astro` — a single ~70-line IIFE, no libraries.

### Hero image rotation
On every load, reads `localStorage.edf_hero` (default `0`), increments, mods by 4, and writes back. Sets `.hero__bg` `background-image` and `background-position` from a 4-entry table. Sequential — not random.

### Hero wordmark intro animation
Runs only on pages that contain `.hero__bg` (homepage only). On load:

1. The nav wordmark's original width is measured (for scale calculation).
2. `hero-wordmark-active` class is added to `<body>`, which sets `.nav__wordmark` to `position: absolute; left: 50%; top: 50%; white-space: nowrap`.
3. `font-size` is set to `min(8.5vw, 85px)` — rendering at display size so the text is crisp at maximum scale (avoids upscaling pixel blur).
4. A `NAV_SCALE` factor is computed: `original_nav_width / display_width` (always < 1 — scaling down is always crisp).
5. Scroll drives a `translate(TX, ty) scale(s)` transform via a passive `scroll` listener with ease-in² (`p²`) curve, completing at 48% of viewport height.
   - **p = 0:** wordmark centered horizontally (`TX = -heroW/2`, always viewport-width-independent), lifted to 40% of viewport height.
   - **p = 1:** wordmark resolved to nav center — `translate(-heroW/2, -heroH/2) scale(NAV_SCALE)`.
6. `.hero__copy` opacity is hidden initially (via `.hero-wordmark-active .hero__copy { opacity: 0 }`) and fades in from p = 0.55 → 1.

The `left: 50%` CSS anchor makes horizontal centering viewport-width-independent. `top: 50%` anchors to the nav bar's vertical center.

### Scroll observers (all `IntersectionObserver`)

| Trigger element | Threshold | Effect |
|---|---|---|
| `#hero` | 0.15 | Adds `.scrolled` to nav AND `.visible` to float CTA when hero exits |
| `.site-footer` | 0 | Toggles `.over-footer` on float CTA (inverts color) |
| `#practice` | 0.3 | One-time: adds `.revealed` to `#s2Headline` (triggers clip-up animation) |
| `.s2__option, .s2__free, .s3__quote, .s4__body, .s4__tags, .s5__left, .s5__item, .s6__photos, .s6__bio, .s7__item` | 0.15 | Staggered reveal — adds `.revealed` with `i * 110ms` delay |

### Parallax (`[data-parallax]`)

A `scroll` listener (passive) walks every `[data-parallax]` element, finds its closest `.s2__free / .s3__quote / .s6__photos` ancestor, computes `centerOffset = (rect.top + rect.height/2) - viewportHeight/2`, then sets `transform: translateY(centerOffset * speed)`. Speeds observed in source:

- S2 free scatter: `0.20`, `-0.28`, `0.14`, `-0.22` (mixed directions for jitter)
- S3 quote images: `0.08`, `-0.10`, `0.09`
- S6 Taylor photos: `0.04`, `0.06`, `0.08`

### FAQ accordion
Click any `.s7__trigger` → closes every open item, then opens the clicked one (unless it was the open one). Uses `aria-expanded` for screen readers. Animates via `max-height: 0 → 400px`.

### Begin drawer
Detailed in §6.8. Open via `window.__openBeginDrawer()`. The drawer **patches `window.scrollTo`** so that `BeginFlow`'s internal step transitions scroll the *drawer*'s scrollable region rather than the page.

### Easing & timing — the canonical curve

- **Reveals:** `cubic-bezier(0.16, 1, 0.3, 1)` over `550 – 800ms`. This is the system's hero easing — used for opacity+translateY scroll-ins, the S2 headline clip-up, the FAQ open, and the Begin drawer.
- **Hovers:** `ease` over `200 – 300ms`. Used for color, background, border-color, transform on small UI bits.
- **Nav scroll state:** `0.3s ease` on background.
- **Float CTA fade:** `0.4s ease` on opacity.

No bounces. No springs. Nothing decelerates harder than the canonical curve.

---

## 9. Layout fundamentals

- **Max content width:** `1280px`, centered, with `var(--gutter)` left/right padding.
- **Gutter:** `60px → 36px → 22px` at the two breakpoints.
- **Breakpoints:** `≤900px` (tablet) and `≤640px` (mobile). Below mobile, gutters hold at 22px.
- **Hairlines:** always `0.5px solid` with an alpha-modulated black, never a solid token. `rgba(0,0,0,0.18)` is the structural default; `0.12` is "barely there"; `0.30 – 0.40` is "outlined element" (S2 free CTA, S4 tag).
- **Border-radius palette:** `4px` (pills, tags), `100px` (float CTA), `50%` (orange dots). **Everything else is `0`.** Architecture, not consumer-tech.
- **Shadows:** only the float CTA has them — `0 4px 28px rgba(0,0,0,0.28)` default, `0 6px 32px rgba(255,57,0,0.35)` on hover, `0 4px 28px rgba(0,0,0,0.18)` over-footer. Everywhere else, **depth comes from paper-on-paper, not shadow.**

---

## 10. The lexicon (sampled from copy)

`practice · progress · future · choose · clarity · direction · waymaker · transforming · what matters · resistance · now · invest`

Hero: *"Choose the future you want. Create what matters now."*
S2: *"A new way needs practice to make progress."*
S4: *"The future shapes how you think, feel, and act in the present."*
S5 (Waymaker definition): *"someone who goes first and creates direction"*
S6 sign-off: *"If this speaks to you, this is for you."*

Sentence case. Long, comma-spliced declaratives. Lower-stakes-than-usual coaching language. No exclamation marks anywhere in the codebase.

---

## 11. Don'ts (codified from what the code refuses to do)

- **No gradient backgrounds** outside the hero scrim and the float-CTA hover shadow. Cream stays flat.
- **No shadows on type, cards, or sections.** Only the float CTA carries a shadow.
- **No solid section borders.** Section boundaries are tone shifts. Hairlines exist only as 0.5px alpha-modulated black, and only inside sections (between option rows, between FAQ items, etc.).
- **No rounded corners** beyond the three values in §9. No 8px, no 12px, no 16px.
- **No title-case headlines.** Sentence case is universal.
- **Don't redraw the brush marks.** They are pressure-sensitive variable-width fills — copy the SVGs from `public/marks/`. A uniform-width path is the wrong shape.
- **Don't use `--blue` for UI.** It's a brush color, not a link or button.
- **Don't expand `--orange`.** Three uses, total. Hover-state on the float CTA, the hero dot, the footer dot separator.
- **No emoji.** None appear in any component.

---

## 12. Known inconsistencies and dead code

A short list of things the next pass should resolve:

1. **`.nav__cta` styles exist; the element doesn't.** `global.css` defines styles for `.nav__cta`, but `Nav.astro` only renders the wordmark and `Client Portal` link. Either re-add the CTA in the nav or strip the orphan CSS.
2. **Generic helpers `.t-h2`, `.t-h3`, `.t-edf`, `.t-eyebrow`, `.t-caption`, `.rule-h`, `.edf-mark`, `.pill--outline*` are defined but mostly not used.** Section components declare their own type sizes inline. These helpers may be from a Figma-era token export that the current build outgrew.
3. **Two coaching tier orders.** The visual order in `Services.astro` is **1:1 → Orgs → Group → Self-led**, but the `option=` querystring suggests the canonical naming is `1on1`, `orgs`, `group`, `selflead`. Stay consistent.
4. **Lorem ipsum in FAQ.** All five answers are placeholder Latin. Real copy required.
5. **`Orgs & Teams` description is lorem ipsum** in `Services.astro`. Real copy required.
6. ~~**9 unused photos in `public/images/`**~~ — **Resolved 2026-05-27.** All 9 unused photos (`hero-coast.jpg`, `painting.png`, `taylor-03.jpg`, `taylor-04..07.{jpg}`, `taylor-04b.jpg`, `taylor-05b.jpg`) deleted from repo.
7. **6 unused marks** (`Vector.svg`, `Vector-2/3/7/9/11.svg`). Same question as photos.
8. **The hero rotation increments on every load** — refreshing the page changes the image. This may or may not be desirable. The doc-of-record should call it out.

---

## 11. Mobile

Two breakpoints control everything: **`@media (max-width: 900px)`** (tablet) and **`@media (max-width: 640px)`** (mobile). The site uses these as overrides on top of the desktop base.

### 11.1 Layout shifts (≤900px)

- `--gutter: 36px` (was `60px`)
- `.s4__inner, .s5__inner, .s6__inner { gap: 48px }` — tighter cross-axis gap on two-col blocks
- `.s6__photos { height: 480px }` — Taylor scatter shortens

### 11.2 Mobile rewrites (≤640px)

#### Layout
- `--gutter: 22px`
- `.nav { padding: 18px var(--gutter) }` — tightens

#### Hero
- `.hero__content` bottom padding drops `80px → 56px`
- `.hero__subhead` shrinks from `19px → 16px`, `max-width` released to `100%`
- `.hero__folio` (bottom-right meta chip) is **hidden**
- `.hero__tags` switches `flex-direction: column`, `align-items: flex-start` — tags stack vertically left-aligned

#### S2 — Services
- `.s2 { padding: 64px var(--gutter) 0 }` — top padding drops `100px → 64px`
- `.s2__header` collapses to `flex-direction: column`, gap `60px → 28px`, bottom padding `80px → 48px`
- **Option rows drop their description entirely** — `.s2__option-desc { display: none }`. Grid changes from `1fr auto auto` to `1fr auto` (title + arrow only).
- `.s2__option-title` scales to `clamp(36px, 9.5vw, 56px)` (was `clamp(44px, 5.8vw, 78px)`)
- `.s2__option` padding becomes `30px var(--gutter)`
- **The S2 free-strip parallax scatter is fully removed.** `.s2__free-img { display: none }`. Decorative marks tagged `[aria-hidden]` inside `.s2__header-right` and `.s2__free-content` are also hidden.
- `.s2__free` loses `min-height`, padding becomes `64px → 72px`

#### S3 — Testimonials (the biggest mobile change in the system)

Mobile S3 is a different design entirely. Three tonal-shift paper sections become **three full-viewport cinematic moments**:

```css
.s3__quote {
  min-height: 90vh;
  display: flex; align-items: center;
  padding: 80px var(--gutter) !important;
  background: #0a0a0a !important;      /* all three quotes go to ink */
}
.s3__quote::after {                    /* black gradient overlay */
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to bottom,
    rgba(0,0,0,0.22) 0%,
    rgba(0,0,0,0.48) 55%,
    rgba(0,0,0,0.68) 100%);
  z-index: 1;
}
.s3__img {                             /* image goes full-bleed */
  position: absolute !important;
  width: 100% !important; height: 100% !important;
  top: 0 !important; left: 0 !important;
  object-fit: cover !important;
  opacity: 1 !important;               /* was 0.80 — full color on mobile */
  z-index: 0 !important;
}
.s3__text {
  color: #fff !important;
  font-size: clamp(26px, 7vw, 40px);
}
```

Net effect:
- **Background:** three paper tones → solid black across all three
- **Image opacity:** `0.80` → `1.0` (full color, full bleed)
- **Position:** oversized bleed crops → 100% × 100% full viewport
- **Text color:** ink → white
- **Hairline divider** between quotes (`.s3__quote + .s3__quote::before`) is hidden

The desktop S3 and mobile S3 are functionally two different design directions.

#### S4 — About
- Padding compresses to `72px var(--gutter)` (was `220px var(--gutter) 120px`)
- `.s4__inner` grid drops to single column, `gap: 40px`

#### S5 — Waymaker
- Padding compresses to `72px var(--gutter) 88px`
- `.s5__inner` drops to single column, `gap: 40px`
- `.s5__mark` left position adjusts (`-22px → -6px`) so it doesn't overflow
- `.s5__list` `margin-top` zeroed (the desktop 20px is removed)

#### S6 — Taylor
- Padding compresses to `72px var(--gutter) 88px`
- `.s6__inner` drops to single column, `gap: 48px`
- **Photo scatter shrinks** to a 340px-tall mini-arrangement with new pixel positions:
  - `.s6__photo--a` — `200 × 280px` at top-left
  - `.s6__photo--b` — `145 × 195px` at bottom-right
  - `.s6__photo--c` — `105 × 145px` overlapping at `top: 130px, right: 165px` (the grayscale image)

#### S7 — FAQ
- Padding compresses to `72px var(--gutter) 88px`
- `.s7__trigger` gap drops `40px → 24px`, padding `32px → 26px` — denser rows

#### Footer
- Padding compresses to `44px var(--gutter)`
- `.site-footer__inner` becomes `flex-direction: column`, `align-items: flex-start`, `gap: 28px`
- Footer link row gets `flex-wrap: wrap`, gap drops to `18px`
- **Orange dot separators are hidden** (`display: none`) on mobile

#### Begin drawer
- `.begin-drawer__bar` padding adjusts to `0 22px`

### 11.3 What stays identical across breakpoints

- All token values (`--paper-*`, `--ink`, `--blue`, `--orange`)
- Type families and weights
- Type scale at display sizes uses `clamp()` so it fluidly resizes without breakpoint changes (`.t-display`, `.t-h2`, `.t-h3`, `.t-edf`, plus most section-local titles)
- The full mark library — every active mark keeps its desktop placement on tablet, and only the S2 decorative marks are hidden on mobile
- The paper background map (S1 Hero, S2 cream, S3 papers, S4 off-b, S5 cream, S6 paper, S7 sage, Footer ink) **except** S3, which goes solid black on mobile
- All animations and the canonical easing curve
- Float CTA size and shape (`48px × 100px-radius` pill stays the same on all viewports)
- Nav structure (wordmark + Client Portal link)
- FAQ accordion behavior

### 11.4 Observations about the mobile design (descriptive only)

A few things worth knowing about how mobile currently behaves; these are statements of fact, not change proposals.

- **The CSS is desktop-first.** Base rules describe desktop; mobile is expressed as `max-width` override layers. Mobile-only behavior (the S3 inversion in particular) lives entirely inside `@media (max-width: 640px)` blocks, which means you need to read the desktop styles first to understand the mobile result.
- **Several `!important` declarations cluster in mobile S3** because the rule needs to override desktop opacity/position/color values that win specificity otherwise.
- **Decorative marks are removed by selector pattern** (`[aria-hidden]`) rather than by class — adding a new decorative mark on mobile requires it to be `aria-hidden` to participate in the hide rule.
- **Three things only ever appear on desktop:** option-row descriptions, the S2 free-strip scatter (`feather/lotus/dunes/window-sunset`), and the hero folio chip. Designs that lean on those won't have a mobile equivalent without new work.
- **Two things only ever appear on mobile:** the S3 full-bleed black cinematic mode, and the wrapped multi-line footer link row.

---

*This document supersedes any prior `design.md` in the repo. Edits to design should land both in source and in this file in the same PR.*
