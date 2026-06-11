# Every Day Future — Design System (design.md)

> Derived strictly from the Figma source (`Every Day Futures - Visual Identity.fig` by Form / Alice / designbyform.com) — every token, type spec, surface, and rule in this document is traceable to that file. Where the staging build extended beyond the brand source (orange dots, --paper-bone, --paper-clay, --paper-dusk, --paper-moss, the 100px pill CTA), this pass returns to strict compliance.

**Source files:**
- `Palette Swap.html` + `styles/palette-swap.css` — visual reference, pixel-exact
- `handoff/Tokens.css` — drop-in :root replacement for `src/styles/global.css`
- This document — design system spec

> **🚫 No design drift — ever.** Nothing visual (color, spacing, sizing, radius, border, shape, icon, hover, animation, layout) goes into the build unless it **comes from this document** or has been **expressly requested or approved by Ben.** If a need arises that this spec doesn't cover, **propose** a solution built from the tokens/idioms already here and wait for approval — never invent and ship. A preview comp is a proposal, not approval; once Ben approves, it is documented here in the same batch.

---

## 1. Voice in one line

> **Choose how you practice.**

A quiet, editorial coaching site. Type is the hero. Photography is full-bleed and partial-opacity. Hand-drawn blue brush marks sit over type and images as overlays. The page reads like a publication, not a SaaS landing page.

---

## 2. Tokens

### 2.1 Color — 7 tokens, total

| Token | Hex | Used in |
|---|---|---|
| `--ink` | `#000000` | All type, hairlines, S3 outcome cards, footer, hero gradient base |
| `--paper` | `#FFFFFF` | Page default, S2 cards (on cream), S3 floor, S6 Taylor, Begin Step 3 panel |
| `--paper-off-a` | `#FAFCFA` | Reserved — barely-warm paper variant |
| `--paper-off-b` | `#F8FCF7` | S4 About |
| `--paper-cream` | `#FFFCD1` | S2 Practice background, S5 Waymaker, Begin drawer/page |
| `--paper-sage` | `#E9EDE7` | S3 testimonial cards (rotation), S7 FAQ |
| `--blue` | `#2956E0` | Brush marks (default), interaction accent (CTA hover, link hover, focus ring, S2 card hover) |

### Rules of color use
- **Ink is type, hairlines, dark surfaces.** Pure #000.
- **Blue is brush + interaction accent.** Default for brush marks. Hover state for primary CTAs. Link hover. Focus rings. Three jobs.
- **Cream is the warm motif** — S2 and S5 are cream sections. Begin flow uses cream as the conversion surface.
- **Sage is the cool gallery floor** — used on S3 testimonial cards and the S7 FAQ section.
- **No orange.** Anywhere on the site. Orange appears only on the Form agency cover sheet as a brand mark — not part of the EDF website palette.
- **No project-extension tokens.** `--paper-bone`, `--paper-clay`, `--paper-dusk`, `--paper-moss` are removed. `--ink-soft` and `--blue-deep` are removed.

### 2.2 Type tokens

```css
--font-body:    'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
--font-display: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;  /* same family */
--font-mono:    'DM Mono', ui-monospace, Menlo, monospace;
--font-cover:   'Inter', sans-serif;  /* Formetica Light fallback — cover only */
```

Webfonts loaded from Google: `Inter:wght@200&family=DM+Mono:wght@300;400`.

**Weights**
- 200 — Helvetica Neue Ultralight — wordmark
- 300 — Helvetica Neue 45 Light — body
- 400 — Helvetica Neue 55 Roman — display, names, option titles, FAQ questions

### 2.3 Layout tokens

```css
--max-w: 1280px;
--gutter: 60px;     /* 36px tablet  (max-width 900px) */
                    /* 22px mobile  (max-width 640px) */
```

---

## 3. Typography

| Use | Family | Weight | Size | Line | Tracking |
|---|---|---|---|---|---|
| Wordmark — **nav** | Helvetica Neue | 200 | **27.5px** | 1 | -0.020em |
| Wordmark — **footer** | Helvetica Neue | 200 | **24.2px** | 1 | -0.020em |
| Cover wordmark | Inter (Formetica fallback) | 200 | 200px | 1 | -0.020em |
| Display headline (hero, S2–S5 heads, S6 name, Begin headings) | Helvetica Neue 55 Roman | **400** | clamp(46, 5.6vw, 84) | 1.0 | -0.030em |
| Sub-display (S4 body, S5 first para, S7 question, form heading, offering name) | Helvetica Neue 55 Roman | 400 | clamp(22, 2.2vw, 32) | 1.2 | -0.010em |
| S3 outcome / testimonial card body | Helvetica Neue / Roman + Light | 400 / 300 | clamp(15, 1.2vw, 19) | 1.35–1.5 | varies |
| Body — **shared `.t-body-lg` class** (S2 card subheads `.s2__card-desc`, S5 paragraphs `.s5__para` non-first, S6 bio `.s6__para`, S7 FAQ answers `.s7__answer-inner`, **Contact intro `.s-contact__body`**) | Helvetica Neue 45 Light | 300 | **17px desktop / 16px mobile** | 24px desktop / 26px mobile | +0.020em |
| Body — base group (form fields) | Helvetica Neue 45 Light | 300 | **14px desktop / 16px mobile** | 24px / 26px | +0.020em |
| Mono UI (eyebrows, nav links, footer, tags, captions) | DM Mono Regular | 400 | **13px / 0.110em** uppercase | 1 | 0.110em |
| CTA label (float CTA + form buttons) | DM Mono Regular | 400 | **14.4px / 0.110em** uppercase | 1 | 0.110em |

**The .fig source has NO per-section eyebrow text.** The only eyebrow in the brand source is "TYPOGRAPHY" as a category label on the style tile. Section eyebrows ("01 / WHY THIS EXISTS"-style) are a staging-build convention — removed in this pass. Headlines carry section identity.

---

## 4. Surfaces by section

| Section | Background | Notes |
|---|---|---|
| S1 Hero | `#000` + rotating bg image at 0.86 opacity + four-stop dark gradient | 4-image rotation: rhododendron · rainleaves · silhouette-coast · rose-sky |
| S2 Practice | `--paper-cream` | New layout: header + 3 tier tiles + 4 option cards |
| S3 Outcomes | `--paper` | Drag-snap rail · 8 cards alternating ink (outcome) / sage (testimonial) · auto-advance 4s |
| S4 About | `--paper-off-b` | Heading + body + 3-tag column |
| S5 Waymaker | `--paper-cream` | Long-form prose, ink-blue brush mark on heading |
| S6 Taylor | `--paper` | Two portraits in a diagonal implied box (DSCF0184 upper-right · DSCF0084 lower-left, mirrored) + bio |
| S7 FAQ | `--paper-sage` | Accordion, single-open behavior |
| Footer | `--ink` | Wordmark + Contact · Instagram · Terms · Privacy (+ Client Portal mobile-only) |
| Contact | `--paper` | **Standalone `/contact` page** (`src/pages/contact.astro`), linked from the footer |
| Begin drawer / /begin | `--paper-cream` | 4 option cards (Begin-style grid) |
| Begin Step 2 | `--paper-cream` | Back nav + offering detail block (1:1 / Orgs / Group variants) + form |
| Begin Step 3 | `--paper-cream` + paper panel | Calendly embed or Self-led confirmation |

**Section sequence:** ink → cream → paper → off-b → cream → paper → sage → ink. The scroll reads as a gentle climate map; cream appears twice (S2 and S5) as the warm motif; sage and paper alternate as quiet floors.

---

## 5. Components

### 5.1 Nav (`Nav.astro`)
- Fixed top, padding `22px var(--gutter)`
- Centered wordmark + right-anchored "Client Portal" link
- **Over hero:** transparent background, white wordmark + link with soft text-shadow
- **Scrolled:** `rgba(255,255,255,0.36)` glass + `backdrop-filter: blur(8px)`, ink text
- **Eliminate the wordmark intro animation.** The staging build animates the wordmark from giant center to nav. Drop this — wordmark stays in nav from page load.

### 5.2 Hero (`Hero.astro`)
- `100svh` (with `100vh` fallback), min 640px, `#000` base — **`svh` is deliberate**: a fixed small-viewport height so the hero doesn't resize when the mobile address bar collapses on scroll, which previously made the `cover` background zoom/scale (fixed Safari). Desktop is unaffected (`svh` ≈ `vh`).
- **`.hero__bg` is decoupled from the hero height** to also fix Chromium/Brave (which handle the toolbar differently than Safari): instead of `inset: 0`, the bg is `top/left/right: 0` + a **fixed `height: 100lvh`** (largest-viewport, with `100svh` fallback). `cover` then resolves to a constant scale regardless of toolbar collapse, so it never re-zooms; the hero's `overflow: hidden` clips the extra.
- Rotating bg image at `opacity: 0.86`
- 4-stop top-to-bottom gradient (`rgba(0,0,0,0.18 / 0.08 / 0.32 / 0.70)`)
- Bottom-left copy block: `.hero__headline` (Roman 400, `clamp(46px, 6.8vw, 84px)`) + `.hero__subhead` (Light 300, 19px / 30px / max-width 520px — bumped from comp `16px`/`26px` per Ben 2026-06-04; **mobile keeps 16px / 26px**) + `.hero__tags` (3 outlined chips, 4px radius, 13px Mono)
- **Mobile (≤640px): `.hero__content` reserves the floating CTA** — `padding-bottom: calc(100px + env(safe-area-inset-bottom, 0px))` (was 56px) so the copy block sits ≥20px above the BEGIN PRACTICE button + clears the home indicator. (The CTA is `position: fixed; bottom: 32px`, 48px tall → top ~80px from the bottom; the content was overlapping the last tag on devices with a home indicator.)
- Brush mark over "possibility" — Vector-5.svg, filtered white via mask
- Rotation sequence (localStorage `edf_hero`): rhododendron · rainleaves · silhouette-coast · rose-sky (see CONTEXT.md "Hero Image Rotation" for per-image positions)

### 5.3 Float CTA (`CTABar.astro`)
- Fixed bottom, centered, fades in past hero (IntersectionObserver, threshold 0.15)
- **4px rectangle, NOT 100px pill** (matches the .fig GET IN TOUCH button)
- 48px tall, padding 0 40px, DM Mono 14.4px / 0.110em, white on ink (default)
- **Over the hero (S1): inverted** — white surface / ink label (`.float-cta.over-hero`). Toggled by a scroll handler in `Layout.astro` when `heroBottom > ctaLink.top` (the hero is the section behind the button); reverts to the default black-on-ink from S2 onward. 0.25s background+color transition. _Ben-approved 2026-06-04 — a deliberate reintroduction of a white-CTA state; distinct from the old over-footer white inversion that was removed (the over-footer CTA still stays black)._
- **Hover:** background flips to `--blue` (white label) in **both** states. No shadow.
- Mobile: **same as desktop** — centered floating 4px-radius button (48px tall, content-width, 32px from bottom). (Previously a full-width edge-to-edge bottom bar; the mobile geometry overrides were removed.) Mobile keeps a `:active` tap-feedback → `--blue` (incl. over-footer).
- Label: "Begin Practice"

### 5.4 S2 Services (`Services.astro`)
- **Section top padding (shared header rhythm):** `120px` desktop / `72px` mobile — standardized across S2, S3, S4, S5 so every section header sits at the same top gap. (S2 achieves this via three coupled rules: `.s2` padding-top, `.s2__header` negative margin-top, and `.s2__header` padding-top, all matched.)
- **S2 bottom padding:** `140px` desktop / **`88px` mobile** (matches S5/S6/S7's mobile bottom) so the cream (`--paper-cream`) extends below the last option card before the next section — mobile was `0` previously (left over from the old bottom-bleeding tier carousel) which clipped the cream at the last card.
- Cream background
- Header (full-width): h2 headline + supporting body copy ("Coaching, resources, and community to develop ways of working that reduce resistance to the unknown, expand what's possible, and increase capacity for growth.")
  - Body copy (`.s2__header-body`) uses the **same type treatment as the S4 body** (`.s4__body`): `--font-body`, weight 400, `clamp(22px, 2.2vw, 32px)`, line-height 1.2, letter-spacing -0.010em, solid `--ink`. No reveal animation. Layout props specific to this header: `margin-top: 32px`, `max-width: 760px`. On mobile it keeps the 22px clamp floor (NOT reduced to the 16px body size that other paragraphs use).
- **Order: option cards first, then tier tiles.** Spacing — option cards `margin-top: 24px` desktop / `16px` mobile; tier tiles `margin-top: 48px` desktop / `24px` mobile. NB: the visible header→cards gap is larger than the card margin because `.s2__header` itself adds `padding-bottom: 80px` desktop / `56px` mobile → actual gap ≈ 104px desktop / 72px mobile.
- **4 option cards** (1:1 / Orgs & Teams / Group / Self-led): 4-up grid, `aspect-ratio: 1/1` (square), paper on cream, padding `40px 28px 36px`, 16px gap, no border. Label (32px) top-left, desc (16px Light, `rgba(0,0,0,0.55)`) pushed to bottom via `margin-top: auto`. **Hairline-stroke arrow** (`.s2__card-arrow`, **desktop: bottom-right** via `align-self: flex-end`; **mobile ≤640px: top-right, aligned with the label** via `position: absolute; top: 24px; right: 28px`) — a thin 1px-stroke SVG `→` (the S3-chevron / S7-plus-icon idiom, NOT a typographic glyph), `rgba(0,0,0,0.40)` at rest → white + `translateX(6px)` on hover (rides the blue invert via `currentColor`). _[Ben-approved 2026-06-04 departure — the cards were spec'd "no arrow"; reintroduced on the homepage S2 cards only (the Begin-flow `.bf-option` cards stay arrow-free).]_ Hover inverts surface to `--blue` (the Begin Practice blue) with white text; mobile `:active` matches. `margin: 24px auto 0`.
- **3 tier tiles** (Foundation / Calibration / Expansion): centered row at **full content width** (`.s2__tiers max-width: var(--max-w)`), **`gap: 4px`** (matching the S3 cards / S4 collage / S6 photos seam — was `0`/flush until 2026-06-04), **`aspect-ratio: 1/1` (square)** _[2026-06-04 — was `2/3.3` tall; reversible, see the rollback note in CONTEXT.md Open Items]_, with `01 / 02 / 03` Mono indices top-left + Mono labels bottom-left. Tile media is `object-fit: cover`. **Calibration (tile 2) video is mirrored horizontally** (`.s2__tier:nth-child(2) video { transform: scaleX(-1) }`); **Expansion (tile 3) video** keeps `transform: scale(1.20)` / `transform-origin: 50% 40%`. `margin: 48px auto 0`. **Mobile (≤640px): the group sits BELOW the option cards, inset to the gutter** (not full-bleed; matches desktop order — moved below the cards 2026-06-04, was above), no horizontal scroll/snap; the 3 tiles share the width via `flex: 1` at **`aspect-ratio: 1/1`** _(was `2/3`)_. The reorder is done by making **`.s2` a `display: grid` (`grid-template-columns: minmax(0,1fr)`) on mobile only** and setting `order` (header 0, cards 1, tiers 2; cards `margin-top: 32px` = header gap, tiers `margin-top: 16px` = inter-group gap); the inner `.s2__cards` also uses `minmax(0,1fr)` + `min-width:0` so the card text can't blow out the track. **Desktop is unchanged structurally** — `.s2` stays `display: block`, order header → cards → tiers. Mobile tier **number + label** (`.s2__tier-num`, `.s2__tier-label`) both shrink to `11px` / `0.08em` (matched) so the longest ("CALIBRATION") fits the narrower tile; the **label** is nudged to `bottom: 4px` (mobile-only) while the **number stays at `top: 14px`**.
  - Images: `foundation01.jpg` (rock still) / `calibration.mp4` (video) / `expansion.mp4` (video)
- Mobile: **tiles sit BELOW the option cards** (gutter-inset group, `flex: 1` tiles, no scroll — see the tier-tiles note above; was a 72vw scroll-snap carousel below the cards); option cards are 2-up at ≤900px, and at ≤640px stack 1-up full-width, **fixed `height: 140px`, padding `20px 28px`, label 25px** (uniform across all four — Orgs & Teams' 3-line desc sets the height; dropping the desktop square) — **matched to the Begin flow Step-1 cards so the options look identical everywhere on mobile**

### 5.5 S3 Practice Makes Progress (`Testimonials.astro`)
- Paper background
- Header: h2 "Practice makes progress" + sub-heading **"Outcomes from conscious executive coaching"** (`.s3__subhead`, an `<h3>` — _2026-06-11, Ben-approved SEO change: was a `<p>` reading "Testimonials and outcomes"; tag + copy changed to put the positioning phrase in a visible heading. Zero visual change — all type props live on the class, global reset zeroes heading margins_) — sub-heading uses the **same type treatment as the S2 header body** (`--font-body` weight 400, `clamp(22px, 2.2vw, 32px)`, line-height 1.2, -0.010em, solid `--ink`, `margin-top: 32px`, `max-width: 760px`; keeps the 22px clamp floor on mobile, NOT reduced to 16px)
- **Carousel (`.s3__carousel`):** the card track is **confined to the content column** (`max-width: var(--max-w)`, gutter padding) and **flanked by two chevrons** — `.s3__chev--prev` / `--next` sit outside the rail (`.s3__rail` is `flex: 1 1 auto; min-width: 0`), so 2–3 cards show with the next card **right-clipped**. (Replaced the old full-bleed rail that bled `padding-right: max(40vw, gutter)` off the viewport edge.)
- **Chevrons — bare hairline, on-brand (Ben-approved 2026-06-04):** thin **1px stroke** SVG chevron (16×24, `stroke-linecap: square`, `currentColor`) — **no circle, fill, or border** (echoes the S7 plus-icon hairline idiom, NOT a typographic glyph). `--ink` default → **`--blue` on hover** with a **3px outward nudge** (`translateX(±3px)`, the S7 rollover gesture). Disabled at the track ends → `opacity: 0.2`. 24×24 box, transparent background.
- 8 cards · **`aspect-ratio: 1/1` (square), width clamp(280, 30vw, 420px), padding 40px** · 4px gap _[2026-06-04 — squared from `3/4` to match the S2 tier tiles' desktop dimensions; mobile scales down proportionally to 78vw square]_
- Alternating: ink (outcome) / sage (testimonial) · ink / sage · ink / sage · ink / sage
- Outcomes: white type `clamp(17px, 1.4vw, 21px)` Light 300, attribution block (Mono name + Light role)
- Testimonials: ink type `clamp(20px, 1.7vw, 26px)` Roman 400, **italic**, **no quote glyphs** (the `::before`/`::after` curly-quote marks were removed)
- **Infinite seamless loop** _[2026-06-04]_: the 8 cards are cloned into **3 sets** (`[clones][originals][clones]`, clones `aria-hidden` + `.s3__card--clone`); `scrollLeft` is kept within the middle set's band and a ±one-set jump lands on identical content (invisible), so it **never resets to card 1**. 4s auto-advance + chevrons + mouse drag all retained; drag wraps live (incremental); chevrons throttled (550ms) so rapid clicks can't overlap smooth scrolls; no more disable-at-ends. JS in `Layout.astro`.
- Mobile (≤640px): **chevrons hidden** (`display: none`), rail reverts to the full-bleed swipe behavior — 78vw cards, 28px padding, no gap, `padding-left: var(--gutter)` / `padding-right: 28vw`

### 5.6 S4 About (`About.astro`) — "Someday already started"
- Off-b background
- 2-col grid (`.s4__inner`, `1fr 1.1fr`, `gap: 80px`, `align-items: start`): **left** (`.s4__left`) = heading + body + 3 tags; **right** = photo collage (`.s4__photos`)
- **Photo collage** (`.s4__photos`: 2×2 grid, `aspect-ratio: 1/1.1`, `gap: 4px`): `.s4__photo-main` = `waymaker-threshold.jpg` spanning the **full-height left column** (`grid-row: 1/3`) with a "THE THRESHOLD" Mono caption (11px, bottom-left, white 0.80); `.s4__photo-stack` = `waymaker-horizon.jpg` pinned to the **bottom-right** cell (`grid-column: 2; grid-row: 2/3`), leaving the **top-right open** as negative space. _[2026-06-04: removed `waymaker-pool.jpg` (it was the top-right image in the stack) per Ben; horizon kept at its original bottom-right size — `grid-row` changed from `1/3` to `2/3`.]_
- Vector-8.svg brush mark anchored to the heading (top-left, inside a `position:relative` inline-block wrapper around the `<h2>`, like S5's mark), `.s4__mark` top -48px / left -6px / 125px wide, filtered `--blue` at 0.55 opacity, rotated 4°
- Tags: 36px tall, 4px radius, 0.5px ink/30 border, DM Mono 13px

### 5.7 S5 Waymaker (`Waymaker.astro`)
- Cream background — the second cream moment
- Single column, max 1280px
- Vector-10.svg brush mark over heading, filtered `--blue` at 0.52, rotated -6°
- First paragraph is sub-display Roman 400, rest is body Light 300

### 5.8 S6 Taylor (`TaylorBio.astro`)
- Paper background
- 2-col grid (`.s6__inner`, **`1.1fr 1fr`** — photos left / bio right, `gap: 80px`, `align-items: start`): **two portraits in a diagonal implied box** + bio. The `1.1fr` photo column mirrors S4's image-column-wider pattern; the 80px gutter matches S4/S5.
- **Photo pair** (`.s6__photos`): **diagonal "implied box"** — `position: relative`, `width: 100%`, **`max-width: 420px`**, **`aspect-ratio: 420/560`**. Two absolutely-positioned `.s6__photo` images each `width: calc(50% - 2px)`, `height: calc(50% - 2px)`, `object-fit: cover` (the `-2px` per side makes the 4px diagonal gap): `.s6__photo--ur` (`top:0; right:0`) = DSCF0184.jpg (brown blazer, smiling), `.s6__photo--ll` (`bottom:0; left:0`, `transform: scaleX(-1)` — **mirrored horizontally**) = DSCF0084.jpg (couch); upper-left + lower-right quadrants are intentionally open ("/" anti-diagonal). _[Positions iterated 2026-06-05 per Ben — couch lower-left (mirrored), portrait upper-right.]_ _[Restored 2026-06-05 per Ben (original `e027470` layout). It had briefly been a side-by-side flex pair at `max-width: 580px` (`3f4291d`, 2026-06-03 → 2026-06-05); Ben asked for the diagonal back at the original 420px. No parallax/grayscale remains. See CONTEXT.md S6 Taylor Bio Photos.]_ Source JPGs downscaled to 900×1200 (~140–175 KB) from 6192×8256 originals.
- Bio: name in Roman 400 (clamp(46, 5.6vw, 84)) + 5 paragraphs body. **No eyebrow** — the "Founder of Every Day Future" mono eyebrow (`.s6__eyebrow`) was removed; the name is now the first element in the bio column. `.s6__bio` padding-top set to 0 so the name top sits flush with the photo top (`align-items: start`).
- **Show more / show less:** first 3 paragraphs always visible; paragraphs 4 & 5 wrapped in `.s6__more` (collapsed via `max-height:0` / `opacity:0`, expands to `max-height:600px` when `.s6__bio` gets `.more-open`). Toggle is `.s6__more-toggle` — **Mono UI label** matching the nav "Client Portal" link (DM Mono 13px / 0.110em uppercase, ink → `--blue` on hover); label swaps "Show more" ⇄ "Show less" (CSS uppercases it). JS lives in `Layout.astro` (after the FAQ accordion), keyed off `#s6MoreToggle` / `#s6Bio`.
- **Drop the photo scatter** (taylor-03.gif, taylor-02.jpg removed from scope)

### 5.9 S7 FAQ (`FAQ.astro`)
- Sage background
- **Heading "FAQ"** (`.s7__heading`) — display-headline type (Helvetica Neue 400, `clamp(46px, 5.6vw, 84px)`, line-height 1.0, -0.030em, ink), `margin-bottom: 56px`. Sits above the list; the Vector-10 mark overlaps its top-left like the S4/S5 heading marks. Section keeps the shared 120px / 72px top padding.
- Accordion list, single-open behavior (clicking opens one, closes others)
- Trigger: question (Roman 400) + plus icon (20x20, 0.5px crossbars)
- **Hover rollover:** `.s7__trigger:hover` nudges the question `translateX(8px)` and turns the plus icon `--blue` (both ~0.25–0.3s ease) — signals the row is interactive / will expand
- Open state: vertical bar fades, max-height 800px
- Vector-10.svg brush mark top-left, rotated -2°
- 6 real Q&As (already in staging build)

### 5.10 Footer (`Footer.astro`)
- Ink background, padding 60px var(--gutter)
- **Sticky footer (2026-06-05):** `body` is a `min-height: 100svh` (100vh fallback) flex column and `.site-footer` has `margin-top: auto`, so on short pages (e.g. the Contact "Thank you" state) the footer pins to the bottom of the viewport instead of floating mid-page. Tall pages (home, legal) are unaffected (no free space → `auto` resolves to 0). `body` keeps `position: relative` so the float-CTA over-footer parking still anchors to it; the parking observer is unaffected. Note: the footer is `display: none` on `/begin` (full-screen flow).
- Left: wordmark (Helvetica Neue Ultralight 200, 22px, white at 0.72)
- Right: link row — **Contact · Instagram · Terms & Conditions (`/terms`) · Privacy Policy (`/privacy`)** (the "Login" link was removed)
- **Client Portal link (`.site-footer__link--portal` → `/portal`): mobile only** — hidden on desktop (the nav already shows Client Portal, which is hidden at ≤640px). On mobile it sits 3rd, giving two rows: **Contact · Instagram · Client Portal** / **Terms & Conditions · Privacy Policy**. A mobile-only `.site-footer__break` (`flex-basis: 100%; height: 0`) forces the split; both it and the Client Portal link are `display: none` on desktop (single row: Contact · Instagram · Terms · Privacy).
- Links: DM Mono 13px / 0.110em uppercase, white at 0.46, **hover → `--blue`**
- **No orange dot separators** — just flat row with 28px gap
- Mobile: stacks vertical, gap 14px 22px wrap

### 5.11 Contact (`Contact.astro` → standalone `/contact` page)
- **Lives on its own page at `/contact`** (`src/pages/contact.astro` = `Layout > Nav > Contact > Footer`, mirroring `begin.astro`). _[2026-06-04: moved off the homepage — the `Contact.astro` component (self-contained: visible form + hidden Netlify static form + submit script) was removed from `index.astro` and now renders only on `/contact`. Footer "Contact" link `#contact` → `/contact`.]_ No float CTA on this page (the page IS the conversion endpoint — matches begin/legal).
- **Nav forced to ink** via `.page-contact` (inline script in `contact.astro`) since the nav sits on the `--paper` background, not the hero — same override pattern as `.page-legal` / `.page-begin` (in `global.css`, with the Client Portal blue rollover preserved).
- **"← Every Day Future" back link** (`.s-contact__back`) above the "Get in touch" heading — the same idiom as the legal pages' `.legal__back` (DM Mono 13px / 0.110em uppercase, `rgba(0,0,0,0.40)` → `--blue` hover, `href="/"`). Spans the top of the `.s-contact__inner` grid (`grid-column: 1 / -1`, `justify-self: start`; `margin-bottom: -48px` counteracts the 80px grid row-gap → ~32px above the heading). The nav wordmark also links home, but this gives a visible in-content way back. _[2026-06-04]_
- Paper background, padding 140px var(--gutter) 160px (the 140px top clears the ~68px fixed nav)
- 2-col layout: heading "Get in touch" + body + meta (Direct / Elsewhere) left, 4-field form right
- Intro body (`.s-contact__body`) uses the shared **`.t-body-lg`** (17px desktop / 16px mobile) — brought into line with the rest of the site's body copy.
- Direct email shown is **coach@everydayfuture.work** (reverted from info@ on 2026-06-04).
- Form: Name · Email · Subject · Message (textarea) + "Send a note" submit (no arrow). Inputs are borderless; the per-field divider line is the only rule, and **focus colors that divider `--blue` via `.s-contact__field:focus-within`** (the old `.s-contact__input:focus` did nothing because the input has no border). Same pattern as the Begin form.
- **Submit button** (`.s-contact__submit`): same treatment as the float-CTA / Begin Practice button (48px tall, padding 0 40px, 4px radius, ink bg, DM Mono 14.4px / 0.110em uppercase, hover → `--blue`). `align-self: flex-end` so it sizes to content (not full-width stretch) and right-aligns — keeps it clear of the bottom-left float CTA.
- Submission: Netlify Forms → coach@everydayfuture.work + ben@wintersand.co
- Mobile: single column, 80px padding

### 5.12 BeginFlow (`BeginFlow.astro`)
- 3-step flow at `/begin` (page) and as drawer over homepage
- **⚠️ Single source of truth — all flow UI/controls live INSIDE `BeginFlow.astro`.** The same component renders both the `/begin` page and the homepage drawer, so anything in it applies to the entire flow automatically. **Do NOT put flow controls in the drawer chrome (`index.astro`) or the page wrapper** — that's what caused the earlier duplicate/inconsistent back buttons. Drawer-context tweaks are done by scoping to `:global(.begin-page--drawer)` from within the component (e.g. the sticky nav).
- **Consistency with the main site (2026-06-02 pass):** Step 1 cards and body copy were brought in line with the homepage conventions — see notes below.
- **Headline sizing (mobile):** **all** in-flow headlines match — `.bf-headline` (Step 1 "Choose…" + Step 3 "Book your call"/"You're on the list.") **and** Step 2's service-name `.bf-step2-heading` all drop to the **Sub-display tier on mobile** (`clamp(22px, 2.2vw, 32px)` / -0.010em / 1.2 → ~22px). The flow is a distinct, smaller-headline state vs. the homepage. (Desktop they already share the Display clamp.)
- **Unified nav row (`.bf-nav`, 3-col grid `1fr auto 1fr`) on every step** — `← Back` (left, `.bf-back`) · **"Every Day Future" wordmark (center, `.bf-nav__brand`)** · `×` (right, `.bf-close`), hover → `--blue`. This is the *single* navigation for the whole flow (the old fixed drawer bar in `index.astro` was removed):
  - `← Back`: Step 1 → exit, Step 2 → Step 1, Step 3 → Step 2.
  - `×`: always exit the flow.
  - **Wordmark is drawer-only** (`:global(.begin-page--drawer) .bf-nav__brand { display:block }`, `display:none` otherwise) — the full-screen drawer covers the homepage nav, so the logo lives in the flow row there; the standalone `/begin` page hides it because the site `<Nav>` already shows it (no duplication).
  - **Items are pinned to explicit columns** (`.bf-back` → 1, `.bf-nav__brand` → 2, `.bf-close` → 3). Required because when the wordmark is `display:none` (the page), grid auto-placement would otherwise shift the × into the middle column; explicit columns keep it hard-right everywhere.
  - **Exit behavior** (`exitFlow` in BeginFlow JS): if in the homepage drawer (`#beginDrawer.open`) → `window.__closeBeginDrawer()` (smooth close); else the `<a href="/">` navigates home (standalone `/begin` page / no-JS fallback).
  - **In the drawer the row is `position: sticky` (`:global(.begin-page--drawer) .bf-nav`)** so Back/× stay reachable while scrolling — the drawer is full-screen with no tappable scrim, so this replaces the old fixed bar. On the standalone page it's static (site nav + browser back cover persistence).
- Step 1: heading "Choose how you want to practice." + 4 option cards (1:1, Orgs & Teams, Group, Self-led).
  - **Option cards (`.bf-option`)** mirror the S2 cards: **no arrow** (`.bf-option__arrow` removed), hover **and** `[aria-pressed]` selected state **invert to `--blue`** (was `--ink`) with white text, description uses the shared **`.t-body-lg`** class (17px / 16px mobile) and is **bottom-anchored** via `margin-top: auto` (like S2 — label top, desc bottom). **No border** (`border: none` — paper on cream like S2; separated by the grid gap). Desktop: 4-up square (`aspect-ratio 1/1`), gap 4px. **Mobile (≤640px): 1-up, fixed `height: 140px`, padding `20px 28px`, gap 8px; label 25px; `#bfStep1 .bf-header` margin-bottom 24px (symmetric with the 24px above the heading, i.e. `.bf-nav` margin-bottom)** — tuned so all four cards **+ the heading fit one iPhone logical viewport (375×812) with no scroll** (last card ≈744px). **The homepage S2 cards use the same 140px / 25px-label treatment on mobile** so the options look identical everywhere (Begin flow renders identically on the `/begin` page and the homepage drawer — same component). (On a real device with Safari's toolbar showing, the last card may need a brief scroll until the toolbar collapses.)
  - **Step padding (mobile):** Step 1 stays tight (`padding-top: 20px`, header margin 12px) for the one-viewport fit; **Steps 2 & 3 use `padding-top: 44px`** — echoes the section rhythm without doubling up under the fixed nav (72px tested but felt too airy).
  - Auto-advance after 350ms on selection
  - URL param shortcut: `/begin?option=1on1|group|orgs|selflead`
- **Step indicator (`.bf-steps`, added 2026-06-11 handoff 6) — on every step**, directly under `.bf-nav` (nav margin-bottom 18px, indicator margin-bottom 48px / 28px mobile). DM Mono **13px**/0.110em uppercase items (normalized from the comp's 12px per Ben) joined by **48px × 1px** connectors (site hairline weight — the comp's 0.5px is Writing-only); 22px circles (1px ink/25 border). States: done = ✓ ink-55 · current = `--blue` fill, white numeral, ink label · upcoming = ink-35. **Booking options show `Choose → Your details → Schedule`; Self-led shows 2 steps `Choose → Join the list`.** Items are JS-rendered (`renderSteps()` — labels/count follow the selected option; each step's container has a fixed current position), styled via `:global` under the scoped `.bf-steps`. **Mobile (≤640):** connectors 24px and only the CURRENT step keeps its label (the full row measures ~420px > viewport; off steps collapse to circles — deviation from the spec's "labels stay", approved with the comp).
- Step 2 — **anchored split (2026-06-11 redesign, handoff 6; supersedes the session-6 layout):**
  - **Layout (`.bf-step2-cols`):** grid **`1.15fr 0.85fr`, gap 72, `align-items: start`**; `#bfStep2 .bf-step__inner` bottom padding 96px. LEFT (`.bf-step2-left`, on the cream): **chip → service-name H1 → dek → offering detail.** RIGHT: the white form panel.
  - **Chip (`.bf-chip`):** `Selected · {label}` — 28px tall, 4px radius, 1px ink/30 border, Mono 13/0.110em ink-60, margin-bottom 28. **Self-led: `.bf-chip--soon`** — border+text `--blue`, copy **"Coming Winter 2026"**.
  - **Service name is the single H1** (`#bfStep2Heading`): display `clamp(46px, 5.6vw, 84px)`/400/-0.030em/0.98 (JS from `OPTION_LABELS`). **Dek** (`.bf-step2-dek`, `#bfStep2Dek`): `clamp(20px, 2vw, 26px)`/400/-0.010em/1.25 ink, max-width 520, 24px below — content = the approved offering-title copy, now the `dek` field in `options.ts` (the old secondary heading + `01 / …` eyebrows are **removed**; one title, one supporting line).
  - **Offering detail:** `.bf-step2-offerings` margin-top 48; each `.bf-offering` gets a **1px top hairline + 36px padding-top**; grid 2-col **gap 36×48** (the old bordered quadrants removed); cell label Mono 13/0.110em ink-50 mb 12; cell body **16px/24** Light +0.020em ink-66 (own type — no longer `.t-body-lg`). Copy unchanged (repo copy is canonical).
  - **Form panel (`.bf-step2-formcol`):** paper, **padding 48px 44px 44px** (20px mobile), `align-self: start` — top-aligned with the left column's first line. "**About you**" `clamp(28px, 3vw, 40px)`/400/-0.020em with a 1px bottom hairline (20px pad); **context note** (`.bf-form-note`, `#bfFormNote`) 14px Light ink-55 under it = the approved Step-2 sub copy (booking: "A few details about you…fit-check, not a sales call." / Self-led: the "coming soon" variant — JS-swapped). Fields unchanged (borderless inputs, divider focus→blue; no border-top on the first field — the heading hairline sits above).
  - **Submit:** **full-panel-width, min-height 52px**, ink → blue hover, Mono 14.4/0.110em, 4px radius. Booking label **"Continue to scheduling →"** (hairline-stroke SVG arrow `.bf-submit__arrow`, not a glyph); wraps to two lines at narrow widths (button grows). **Reassurance line** (`.bf-reassure`) under it, 12.5px Light ink-45 centered: booking "No obligation. Your details are never shared." / Self-led "We'll only email you about the self-led practice."
  - **Self-led waitlist variant** (`.bf-form--waitlist` on the form, JS): form heading "**Join the waitlist**", **Phone field hidden** (`.bf-field--phone`), submit "**Notify me**" (arrow hidden), waitlist note + reassurance, blue chip, 2-step indicator. Offering grid: 2 cells.
  - **Mobile (≤640px):** single column — indicator → chip → name → dek → offering → form panel; panel padding 20px; offering grid collapsed behind the "What's included +/−" toggle (`.bf-offering__toggle`, mobile-only), stacked cells separated by hairlines.
- Step 3: indicator (step 3 current) + **Calendly embed on a paper panel** (`.bf-calendly-wrap` — paper, 48/44/44, mirroring the form panel so the surface reads continuous Step 2 → 3; the mount's old full-bleed negative margin removed) OR Self-led "You're on the list" confirmation (unchanged, on the cream)
  - Self-led "Return to Every Day Future" link — no arrow
  - Calendly URLs: real discovery links in `options.ts` (wired 2026-06-11)
- **Body copy → `.t-body-lg`:** `.bf-subhead` and `.bf-selflead__body` use the shared body class (17px desktop / 16px mobile). (`.bf-step2-sub` no longer exists — its copy moved into the form panel note; `.bf-offering-card__body` now carries its own 16/24 type per the redesign.)
- **Link hovers → `--blue`:** `.bf-back` (change selection) and `.bf-selflead__home` hover to `--blue` (was `--ink`), matching the site's interaction convention.

### 5.13 Legal pages — Privacy & Terms (`/privacy`, `/terms`)
- Routes: `src/pages/privacy.astro` + `src/pages/terms.astro`, both rendered through the shared **`LegalDoc.astro`** component (Layout + Nav + Footer chrome; takes `title` / `intro` props + a `<slot>` for sections). Privacy = 13 sections; Terms = 13 sections.
- Linked from the footer (Terms → `/terms`, Privacy → `/privacy`); Terms §5 cross-links to `/privacy`.
- **No metadata strip:** there is intentionally NO "Effective Date / Governing Law / Contact" sup line under the title (removed), and no "Last updated" date in the page footer line. Intro paragraph sits directly under the title.
- **Contact email is `coach@everydayfuture.work`** throughout (reverted from info@ on 2026-06-04).
- **No section numbers:** the "01 / 02 / …" labels above each heading were removed (per Ben); in-body cross-references that pointed to them were reworded to name the section instead. Headings sit at the top of each section.
- **Styling (`.legal*` in global.css):** paper background, 760px column. Title = display (`clamp(44,5.2vw,76)`/400/-0.030em); page footer line in DM Mono 13px uppercase; section `h2` `clamp(24,2.4vw,34)`/400; body 17px / line-height 1.7 / ink 0.68; lists use a blue dash bullet (`::before`), bold lead terms in ink; `--caps` modifier for the all-caps legal clauses. Email/cross-links in `--blue`. A "← Every Day Future" back link (Mono, hover → `--blue`) sits above the title.
- Nav forced to ink on these pages via `.page-legal` (set by an inline script), since the nav sits on a paper background instead of the hero.
- **Excluded from publish:** the source docs' closing attorney-review disclaimer, and the Terms "Cancellation & Rescheduling" section (removed at Ben's request).

### 5.14 Writing — `/writing` index + article template (added 2026-06-11, handoff 6)
Thought-leadership publishing section on Astro **content collections** (`src/content/writing/*.mdx`, typed schema in `src/content/config.ts`). One reusable **`ArticleLayout.astro`** renders every entry; index at `src/pages/writing/index.astro`; routes via `[...slug].astro`; RSS at `/rss.xml`. Spec source: `handoff 6/Writing Section - Spec.md` + the two comps (pixel truth); built per spec with Ben's 2026-06-11 calls.

- **Scope/isolation:** all Writing CSS is prefixed `wx__` (index) / `ar__`/`ar-` (article) and lives in the Writing pages/layout — global.css gained only the `.page-writing` nav-ink override + the Writing nav-link active underline. Float CTA omitted (reading surface — the /contact rule). Nav reuses the existing `.nav.scrolled` glass state via a scroll toggle (no hero observer on these pages).
- **Writing-only departures (Ben-approved 2026-06-11):** `0.5px` hairlines and `11/12px` DM Mono sizes per the comps — the site-wide 13px mono floor and 1px hairline rules still hold everywhere else.
- **Nav/footer:** "Writing" link in the nav right cluster (before Client Portal) + first footer link. Active state on Writing pages only: 0.5px `--blue` underline (`.page-writing .nav__link--writing::after`).
- **Index (`wx__`):** eyebrow Mono 13 · h1 display `clamp(46,5.6vw,84)` "Notes on practice" · lead sub-display `clamp(22,2.2vw,32)` max 760 · topic chips Mono 12, 4px radius, hover→blue, active ink-fill (client-side filter) · featured lead grid `1.15fr 1fr` gap 64 (4:3 image, blue Mono meta, title `clamp(32,3.4vw,46)`, dek 17/24, "Read the essay →" hairline-arrow link) · list rows grid `160px 1fr 200px` gap 48, 40px pad, title `clamp(24,2.4vw,32)` hover→blue, dek 15/22, row hover = 8px left-pad nudge. ≤900: single column.
- **Article (`ar__`/`ar-`):** reading measure **680px** (box incl. gutters); masthead = "← Writing" back, blue category Mono 13, h1 `clamp(38,4.6vw,64)`, dek `clamp(20,2vw,26)` ink-62, Mono 12 byline over hairline with `<time>`; hero figure content-width 21:9 + Mono 11 caption. Body 19/1.65/+0.010 Light ink-82, 28px gaps; h2 `clamp(26,2.6vw,34)`; h3 22; blue underlined links; blue-dash lists.
- **Content blocks (components in `src/components/writing/`):** `Figure` (width=`inset|content|bleed`), `PullQuote` (2px blue left rule, `clamp(26,2.8vw,38)`), `Chart`+`ChartLine`+`ChartBar` (off-b panel 48px; brand chart vocabulary: axes ink/25 1px, gridlines ink/08, blue 2px primary w/ 3.5px dots, ink/45 1.5px secondary, Mono 12 axis labels; data-driven SVG, no libraries), `Note` (off-b, 2px blue rule, 15px), `KeyTakeaways` (sage panel 44/48, 17px blue-dash list), `ArticleTable` (content-width; Mono 11 thead, 15px cells, hairline rows), `Faq` (static-open S7 idiom + FAQPage JSON-LD), `Sources` (intro 17/0.72, list 15, standards note 15/0.6). End matter: author card (72px portrait, 18/400 name, 14 bio) + 3-up related grid (3:2 image, blue Mono 11 cat, 20/400 title hover→blue).
- **Imagery:** article images live in **`src/assets/writing/`** and render via Astro `<Image>` (responsive srcset/WebP, lazy, intrinsic dims; heroes eager). The `public/images` copies still serve the main site. Schema enforces processed assets (`image()` helper).
- **SEO:** per-article title/description/canonical/OG/Twitter + `Article` JSON-LD; `CollectionPage` on the index; `/rss.xml`; sitemap includes Writing. Drafts (`draft: true`) render in dev only — excluded from build/sitemap/RSS.

---

## 6. Imagery

Stored in `public/images/`. **No grayscale-by-default treatment.** Full color throughout. **No hover-color-from-grayscale signature move.** (The staging build's "Digital Curator" gesture is dropped.)

**Hero rotation** (sequential via `localStorage.edf_hero`) — see CONTEXT.md "Hero Image Rotation" for per-image crop notes:
1. rhododendron.jpg — 50% 60% (landscape)
2. rainleaves.jpg — 50% 60% (landscape)
3. silhouette-coast.jpg — 50% 50% (landscape, horizontal crop)
4. rose-sky.jpg — 50% 40% (portrait)

**S2 tier tiles:**
- foundation01.jpg — Foundation (rock still)
- calibration.mp4 — Calibration (video, mirrored `scaleX(-1)`)
- expansion.mp4 — Expansion (video, `scale(1.20)` slow-mo)

**S6 Taylor:**
- DSCF0184.jpg (upper-right) + DSCF0084.jpg (lower-left, mirrored `scaleX(-1)`) — two portraits in a diagonal "implied box" (no scatter, no parallax, no grayscale)

**Treatment rules:**
- Hero bg at `opacity: 0.86` with dark gradient overlay
- S2 tier media at full opacity — stills and videos, `object-fit: cover` in the cards
- S6 portraits at full opacity
- No grayscale filters anywhere

---

## 7. Begin offering detail copy

**As-built copy lives in `BeginFlow.astro`** (`#bfOffering1on1` / `#bfOfferingOrgs` / `#bfOfferingGroup`); Self-led has no offering block by design. **All three offerings re-copywritten by Ben 2026-06-11** — the component is the source of truth for the exact text. Current titles:

- **1:1** — "Dedicated practice of what's possible, only for you." (Structure / What we practice / Between sessions / AI-supported practice)
- **Orgs & Teams** — "Custom coaching and practice experiences for organizations, leadership teams, and cohorts." (Structure / What we practice / Engagement types / Facilitation & support)
- **Group** — "A shared practice in community with structure, support, and coach facilitation." (Structure / What we practice / Experience / Facilitation & support)

_The longer bullet-list Group copy that previously lived in this section (the 2026-06 "provided" draft) was condensed into the four card sections above; superseded._

---

## 8. Behavior + interaction

### Sticky float CTA
- **Visible from first paint and persists throughout the scroll.** `.float-cta` base is `opacity: 1; pointer-events: auto` — the button shows immediately over the hero and never hides.
- The hero IntersectionObserver (threshold 0.15) still drives the nav `.scrolled` glass state; it also toggles a now-redundant `.visible` class on the CTA (harmless — base is already visible).
- **Over-footer behavior (all viewports — desktop + mobile).** A second IntersectionObserver on `.site-footer` (threshold 0) toggles `.over-footer` on the CTA. Instead of overlapping the footer, the CTA **parks 10px above it**: it switches to `position: absolute; bottom: calc(var(--footer-h) + 10px)` (anchored to `body`, which is `position: relative`; `--footer-h` is the footer height, published by JS in `Layout.astro` on load + resize **and via a `ResizeObserver` on the footer** so it stays accurate through font loading / footer-content changes — otherwise a stale value lets the CTA overlap the footer). The button **stays black (`--ink`) the whole time** — there is no white over-footer inversion (removed). Base hover → `--blue` still applies; mobile keeps a `:active` tap-feedback → `--blue`. Mid-page (footer not in view) it's the normal `position: fixed; bottom: 32px` floating button.

### Hover states
- **Primary CTA:** hover background → `--blue` (was orange in staging)
- **Float CTA over-hero inversion:** white surface / ink label while the hero is the section behind the button; reverts to black from S2 onward (`.over-hero`, scroll handler in `Layout.astro`). Over-footer parking stays black (see Over-footer behavior above).
- **S2 option card:** hover surface inverts to `--blue`, label/desc go white; hairline `.s2__card-arrow` (bottom-right) rides the invert → white + `translateX(6px)`
- **S3 rail:** drag-to-scroll + auto-advance every 4 seconds (pauses on hover)
- **Nav link ("Client Portal"):** hover text → `--blue` (`.nav__link:hover`, both hero and scrolled states) — same rollover as the bio "Show more" toggle. Persists on the ink-nav pages (legal + begin) via `.page-legal .nav__link:hover, .page-begin .nav__link:hover` (specificity 0,3,0 beats the 0,2,0 ink override).
- **Footer link:** hover text → `--blue`
- **Form field:** focus underline → `--blue`

### Tap states (mobile)
- Tap = brief active state, no persistent hover. Active state mirrors hover (ink invert) momentarily before navigation.

### FAQ accordion
- Click trigger → close all other open items, toggle clicked item
- `max-height: 0 → 800px` over 0.45s
- Plus icon → minus via opacity + scaleY transition on vertical bar

### Hero rotation
- Sequential cycle on each reload via localStorage
- 3 images, position presets per image
- Fade-in via `background-image` transition

### S3 rail
- Drag-to-scroll (mouse): pointer events, captures pointer, snaps to nearest card on release
- Touch: native scroll-snap (no JS needed)
- **Auto-advance:** `setInterval(4000)` scrolls one card width forward, loops to start at end
- Pauses on `pointerdown` and `mouseenter`, resumes on `mouseleave`

---

## 9. Don'ts (strict-Figma compliance)

- **No orange anywhere.** Not for dots, separators, CTAs, hovers. The .fig restricts orange to the Form agency cover sheet only.
- **No bone/clay/dusk/moss colors.** Project additions, not in source.
- **No grayscale-by-default photography.** Staging's "Digital Curator" treatment is dropped.
- **No wordmark intro animation.** Wordmark is static in the nav from load.
- **No italic on S3 quotes.** The .fig source is Roman, not italic.
- **No section eyebrow text.** Headlines carry section identity. The .fig has no per-section labels.
- **No 100px pill on the float CTA.** The .fig's button is a 4px rectangle.
- **No photo scatter on S6.** Single portrait only.
- **No orange dot separators in footer.** Just gap between links.
- **No emoji.** Anywhere.

---

## 10. Open items for code/content

| Item | Owner | Notes |
|---|---|---|
| Formetica Light license | Taylor / Ben | Cover wordmark only. Currently using Inter 200 fallback. |
| Calendly URLs | Taylor | Begin Step 3, per option (1:1, Group, Orgs) |
| Form routing | Engineering | Netlify Forms → coach@everydayfuture.work, ben@wintersand.co |
| Per-page SEO meta | Engineering | Titles, descriptions, OG images, structured data |
| Cross-OS wordmark | Engineering | Helvetica Neue Ultralight falls back to Arial Regular on Windows/Android. Accept variation. |
| ~~/contact route~~ | ~~Engineering~~ | ✅ Done 2026-06-04 — standalone `/contact` page (`src/pages/contact.astro`) using the Contact.astro component; removed from the homepage. |

---

*This document is the source of truth for the EDF redesign. Edits should land here and in `palette-swap.css` together.*
