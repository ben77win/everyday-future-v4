# Every Day Future — Design System (design.md)

> Derived strictly from the Figma source (`Every Day Futures - Visual Identity.fig` by Form / Alice / designbyform.com) — every token, type spec, surface, and rule in this document is traceable to that file. Where the staging build extended beyond the brand source (orange dots, --paper-bone, --paper-clay, --paper-dusk, --paper-moss, the 100px pill CTA), this pass returns to strict compliance.

**Source files:**
- `Palette Swap.html` + `styles/palette-swap.css` — visual reference, pixel-exact
- `handoff/Tokens.css` — drop-in :root replacement for `src/styles/global.css`
- This document — design system spec

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
| Wordmark (nav, footer) | Helvetica Neue | 200 | 25px nav · 22px footer | 1 | -0.020em |
| Cover wordmark | Inter (Formetica fallback) | 200 | 200px | 1 | -0.020em |
| Display headline (hero, S2–S5 heads, S6 name, Begin headings) | Helvetica Neue 55 Roman | **400** | clamp(46, 5.6vw, 84) | 1.0 | -0.030em |
| Sub-display (S4 body, S5 first para, S7 question, form heading, offering name) | Helvetica Neue 55 Roman | 400 | clamp(22, 2.2vw, 32) | 1.2 | -0.010em |
| S3 outcome / testimonial card body | Helvetica Neue / Roman + Light | 400 / 300 | clamp(15, 1.2vw, 19) | 1.35–1.5 | varies |
| Body — **shared `.t-body-lg` class** (S2 card subheads `.s2__card-desc`, S5 paragraphs `.s5__para` non-first, S6 bio `.s6__para`, S7 FAQ answers `.s7__answer-inner`) | Helvetica Neue 45 Light | 300 | **17px desktop / 16px mobile** | 24px desktop / 26px mobile | +0.020em |
| Body — base group (form fields, contact form `.s-contact__body`) | Helvetica Neue 45 Light | 300 | **14px desktop / 16px mobile** | 24px / 26px | +0.020em |
| Mono UI (eyebrows, nav links, footer, tags, captions) | DM Mono Regular | 400 | **13px / 0.110em** uppercase | 1 | 0.110em |
| CTA label (float CTA + form buttons) | DM Mono Regular | 400 | **14.4px / 0.110em** uppercase | 1 | 0.110em |

**The .fig source has NO per-section eyebrow text.** The only eyebrow in the brand source is "TYPOGRAPHY" as a category label on the style tile. Section eyebrows ("01 / WHY THIS EXISTS"-style) are a staging-build convention — removed in this pass. Headlines carry section identity.

---

## 4. Surfaces by section

| Section | Background | Notes |
|---|---|---|
| S1 Hero | `#000` + rotating bg image at 0.86 opacity + four-stop dark gradient | 4-image rotation: horizon · rose · window-sunset · hero-red-sun |
| S2 Practice | `--paper-cream` | New layout: header + 3 tier tiles + 4 option cards |
| S3 Outcomes | `--paper` | Drag-snap rail · 8 cards alternating ink (outcome) / sage (testimonial) · auto-advance 4s |
| S4 About | `--paper-off-b` | Heading + body + 3-tag column |
| S5 Waymaker | `--paper-cream` | Long-form prose, ink-blue brush mark on heading |
| S6 Taylor | `--paper` | Single portrait (taylor-01.png) + bio |
| S7 FAQ | `--paper-sage` | Accordion, single-open behavior |
| Footer | `--ink` | Wordmark + Contact · Instagram · Login · Terms · Privacy |
| Contact | `--paper` | Anchored #contact, accessible from footer |
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
- 100vh, min 640px, `#000` base
- Rotating bg image at `opacity: 0.86`
- 4-stop top-to-bottom gradient (`rgba(0,0,0,0.18 / 0.08 / 0.32 / 0.70)`)
- Bottom-left copy block: `.hero__headline` (Roman 400, `clamp(46px, 6.8vw, 84px)`) + `.hero__subhead` (Light 300, 16px / 26px / max-width 520px) + `.hero__tags` (3 outlined chips, 4px radius, 13px Mono)
- Brush mark over "possibility" — Vector-5.svg, filtered white via mask
- Rotation sequence (localStorage `edf_hero`): horizon · rose · window-sunset · hero-red-sun

### 5.3 Float CTA (`CTABar.astro`)
- Fixed bottom, centered, fades in past hero (IntersectionObserver, threshold 0.15)
- **4px rectangle, NOT 100px pill** (matches the .fig GET IN TOUCH button)
- 48px tall, padding 0 40px, DM Mono 14.4px / 0.110em, white on ink
- **Hover:** background flips to `--blue`. No shadow.
- Mobile: full-width bottom bar (no radius), 56px tall, env(safe-area-inset-bottom)
- Label: "Begin Practice"

### 5.4 S2 Services (`Services.astro`)
- **Section top padding (shared header rhythm):** `120px` desktop / `72px` mobile — standardized across S2, S3, S4, S5 so every section header sits at the same top gap. (S2 achieves this via three coupled rules: `.s2` padding-top, `.s2__header` negative margin-top, and `.s2__header` padding-top, all matched.)
- Cream background
- Header (full-width): h2 headline + supporting body copy ("Coaching, resources, and community to develop ways of working that reduce resistance to the unknown, expand what's possible, and increase capacity for growth.")
  - Body copy (`.s2__header-body`) uses the **same type treatment as the S4 body** (`.s4__body`): `--font-body`, weight 400, `clamp(22px, 2.2vw, 32px)`, line-height 1.2, letter-spacing -0.010em, solid `--ink`. No reveal animation. Layout props specific to this header: `margin-top: 32px`, `max-width: 760px`. On mobile it keeps the 22px clamp floor (NOT reduced to the 16px body size that other paragraphs use).
- **Order: option cards first, then tier tiles.** Spacing — option cards `margin-top: 24px` desktop / `16px` mobile; tier tiles `margin-top: 48px` desktop / `24px` mobile. NB: the visible header→cards gap is larger than the card margin because `.s2__header` itself adds `padding-bottom: 80px` desktop / `56px` mobile → actual gap ≈ 104px desktop / 72px mobile.
- **4 option cards** (1:1 / Orgs & Teams / Group / Self-led): 4-up grid, `aspect-ratio: 1/1` (square), paper on cream, padding `40px 28px 36px`, 16px gap, no border. Label (32px) top-left, desc (16px Light, `rgba(0,0,0,0.55)`) pushed to bottom via `margin-top: auto`. No arrow. Hover inverts surface to `--blue` (the Begin Practice blue) with white text; mobile `:active` matches. `margin: 24px auto 0`.
- **3 tier tiles** (Foundation / Calibration / Expansion): centered row, `max-width: 660px` so each tile is 220px wide, gap 0 (flush), aspect-ratio 2/3.3, with `— 01 / 02 / 03` Mono indices top-left + Mono labels bottom-left. `margin: 48px auto 0`.
  - Images: dunes.png / feather.png / lotus.png
- Mobile: tiles become horizontal scroll-snap (72vw cards) and sit below the stacked option cards; option cards are 2-up at ≤900px, and at ≤640px stack 1-up full-width **landscape** (`aspect-ratio: 1.74/1` ≈ 331×190px at 375px, dropping the desktop square) with `28px` padding

### 5.5 S3 Practice Makes Progress (`Testimonials.astro`)
- Paper background
- Header: h2 "Practice makes progress" + sub-heading "Testimonials and outcomes" (`.s3__subhead`) — sub-heading uses the **same type treatment as the S2 header body** (`--font-body` weight 400, `clamp(22px, 2.2vw, 32px)`, line-height 1.2, -0.010em, solid `--ink`, `margin-top: 32px`, `max-width: 760px`; keeps the 22px clamp floor on mobile, NOT reduced to 16px)
- Horizontal drag-snap rail · 8 cards · **aspect-ratio 3/4, width clamp(280, 30vw, 420px), padding 40px** · no gap
- Alternating: ink (outcome) / sage (testimonial) · ink / sage · ink / sage · ink / sage
- Outcomes: white type `clamp(17px, 1.4vw, 21px)` Light 300, attribution block (Mono name + Light role)
- Testimonials: ink type `clamp(20px, 1.7vw, 26px)` Roman 400, **italic**, wrapped in opening `"` (`::before`) + closing `"` (`::after`) glyphs at 0.30 opacity
- Mouse drag-to-scroll + snap; touch is native
- Mobile: 78vw cards, 28px padding, no gap

### 5.6 S4 About (`About.astro`)
- Off-b background
- 2-col grid: heading + body left, 3-tag column right
- Vector-8.svg brush mark anchored to the heading (top-left, inside a `position:relative` inline-block wrapper around the `<h2>`, like S5's mark), `.s4__mark` top -48px / left -6px / 125px wide, filtered `--blue` at 0.55 opacity, rotated 4°
- Tags: 36px tall, 4px radius, 0.5px ink/30 border, DM Mono 13px

### 5.7 S5 Waymaker (`Waymaker.astro`)
- Cream background — the second cream moment
- Single column, max 1280px
- Vector-10.svg brush mark over heading, filtered `--blue` at 0.52, rotated -6°
- First paragraph is sub-display Roman 400, rest is body Light 300

### 5.8 S6 Taylor (`TaylorBio.astro`)
- Paper background
- 2-col grid: **two diagonal portraits** + bio
- **Diagonal photo box** (`.s6__photos`): an implied box at the original portrait footprint — `position:relative`, `width:100%`, `max-width:420px`, `aspect-ratio:420/560`. Two `.s6__photo` images sized `calc(50% - 2px)` square-of-box, absolutely positioned at opposite corners: `.s6__photo--ul` (DSCF0172.jpg, brown blazer) top-left, `.s6__photo--lr` (DSCF0084.jpg, couch) bottom-right. Their inner corners meet at center with a **4px** gap (the `-2px` per side). Top-right & bottom-left quadrants are empty, implying the box. Layout is preserved on tablet/mobile (scales via aspect-ratio). Source JPGs downscaled to 900×1200 (~140–175 KB) from 6192×8256 originals.
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
- Left: wordmark (Helvetica Neue Ultralight 200, 22px, white at 0.72)
- Right: link row — **Contact · Instagram · Login · Terms & Conditions · Privacy Policy**
- Links: DM Mono 13px / 0.110em uppercase, white at 0.46, hover to white at 0.86
- **No orange dot separators** — just flat row with 28px gap
- Mobile: stacks vertical, gap 14px 22px wrap

### 5.11 Contact (`Contact.astro` — NEW)
- Anchored `#contact`, accessible from footer link
- Paper background, padding 140px var(--gutter) 160px
- 2-col layout: heading "Get in touch" + body + meta (Direct / Elsewhere) left, 4-field form right
- Form: Name · Email · Subject · Message (textarea) + "Send a note" submit (no arrow)
- **Submit button** (`.s-contact__submit`): same treatment as the float-CTA / Begin Practice button (48px tall, padding 0 40px, 4px radius, ink bg, DM Mono 14.4px / 0.110em uppercase, hover → `--blue`). `align-self: flex-end` so it sizes to content (not full-width stretch) and right-aligns — keeps it clear of the bottom-left float CTA.
- Submission: Netlify Forms → coach@everydayfuture.work + ben@wintersand.co
- Mobile: single column, 80px padding

### 5.12 BeginFlow (`BeginFlow.astro`)
- 3-step flow at `/begin` (page) and as drawer over homepage
- Step 1: eyebrow "— · Begin your practice" + heading "Choose how you want to practice." + 4 option cards (1:1, Orgs & Teams, Group, Self-led)
  - Auto-advance after 350ms on selection
  - URL param shortcut: `/begin?option=1on1|group|orgs|selflead`
- Step 2: change-selection bar + selected badge + heading + offering detail block + form
  - Offering variants per option (1:1 / Orgs / Group / Self-led)
  - **Group offering copy** — see §7 below
  - Form: First name / Email / Phone (optional) + "Begin Practice →"
- Step 3: schedule heading + Calendly embed OR Self-led "You're on the list" confirmation
  - Calendly URLs placeholder — Taylor to provide

---

## 6. Imagery

Stored in `public/images/`. **No grayscale-by-default treatment.** Full color throughout. **No hover-color-from-grayscale signature move.** (The staging build's "Digital Curator" gesture is dropped.)

**Hero rotation** (sequential via `localStorage.edf_hero`):
1. horizon.png — 50% 50%
2. rose.png — 50% 35%
3. window-sunset.png — 50% 60%
4. hero-red-sun.jpg — 50% 40%

**S2 tier tiles:**
- dunes.png — Foundation
- feather.png — Calibration
- lotus.png — Expansion

**S6 Taylor:**
- taylor-01.png — single full portrait (no scatter)

**Treatment rules:**
- Hero bg at `opacity: 0.86` with dark gradient overlay
- S2 tier images at full opacity (no overlay needed — they sit in cards)
- S6 portrait at full opacity
- No grayscale filters anywhere

---

## 7. Begin offering detail copy

### Group Coaching (provided)

> A shared practice in curated community with structure, support, and coach facilitation.

**Structure**
- 12-week guided group practice
- Limited to 8 participants
- 90-minute virtual group sessions
- 3 individual coaching sessions included during the program
- Structured around the EDF Practice and dimensions of conscious change

**What we practice**
- Conscious change in how we work, relate, and create
- Expanding possibility and reducing resistance
- Greater clarity, coherence, courage, connection, and curiosity
- Meaningful progress through shared practice and accountability

**Experience**
- Community with other waymakers navigating growth, change, creativity, leadership, and transition
- Shared learning, reflection, and perspective
- Practices integrated into real work between sessions
- Supportive accountability and continuity through ongoing participation

**Facilitation & Support**
- Coach-led structure and facilitation
- Practical frameworks, exercises, reflection, and discussion
- AI-supported notes, reflections, and follow-ups available depending on the group format

### 1:1 Coaching, Orgs & Teams, Self-led
Already in staging build (`src/components/BeginFlow.astro` `#bfOffering1on1` and `#bfOfferingOrgs`). Self-led has no offering block by design.

---

## 8. Behavior + interaction

### Sticky float CTA
- **Visible from first paint and persists throughout the scroll.** `.float-cta` base is `opacity: 1; pointer-events: auto` — the button shows immediately over the hero and never hides.
- The hero IntersectionObserver (threshold 0.15) still drives the nav `.scrolled` glass state; it also toggles a now-redundant `.visible` class on the CTA (harmless — base is already visible).
- **Over-footer inversion (palette-compliant).** A second IntersectionObserver on `.site-footer` (threshold 0) toggles `.over-footer` on the CTA. Over the ink footer the button inverts to `--paper` (white) background with `--ink` text so it stays legible; the rollover stays `--blue` with white text. On mobile (≤640px) the tap-feedback `:active` state also stays `--blue` over the footer (`.float-cta.over-footer .float-cta__link:active`), matching the desktop hover. This is NOT the dropped orange inversion — it uses only palette tokens.

### Hover states
- **Primary CTA:** hover background → `--blue` (was orange in staging)
- **S2 option card:** hover surface inverts to `--blue`, label/desc go white (no arrow)
- **S3 rail:** drag-to-scroll + auto-advance every 4 seconds (pauses on hover)
- **Nav link ("Client Portal"):** hover text → `--blue` (`.nav__link:hover`, both hero and scrolled states) — same rollover as the bio "Show more" toggle
- **Footer link:** hover text → white at 0.86
- **Form field:** focus underline → `--blue`

### Tap states (mobile)
- Tap = brief active state, no persistent hover. Active state mirrors hover (ink invert) momentarily before navigation.

### FAQ accordion
- Click trigger → close all other open items, toggle clicked item
- `max-height: 0 → 800px` over 0.45s
- Plus icon → minus via opacity + scaleY transition on vertical bar

### Hero rotation
- Sequential cycle on each reload via localStorage
- 4 images, position presets per image
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
| /contact route | Engineering | New page using the Contact.astro component (or section anchored from homepage footer — choose one) |

---

*This document is the source of truth for the EDF redesign. Edits should land here and in `palette-swap.css` together.*
