# Every Day Future — Site Context
_Last updated: 2026-05-29 — Design comp audit pass: S2 card redesign, hero type scale override, S5/S6/S7/footer fixes_

---

## Project Overview

Redesign and build of `everydayfuture.work` — Taylor Winters' coaching practice site. **Astro 4.16** project, deployed via GitHub → Netlify.

**Framework:** Astro 4.16 (static output)  
**Repo:** `everyday-future-v4` on GitHub (ben77win/everyday-future-v4)  
**Live URL:** https://everyday-future-v4.netlify.app (main)  
**Staging URL:** https://staging--everyday-future-v4.netlify.app (staging branch)  
**Hero concept URL:** separate Netlify site, publish dir `hero-concept/`  
**Dev server:** `npm run dev` (Astro, port 4321 — config in `.claude/launch.json`)  
**Build:** `npm run build` → `dist/`

**Rollback tags:**
- `pre-astro-migration` — last single-file HTML state on staging
- `pre-session-2026-05-27` — staging tip before this session (`f3468b1`)

**Archived HTML:** `_archive/index-pre-astro.html`

**Worktree preview note:** Each worktree needs its own `.claude/launch.json`. Main repo launch.json uses port 4321 (`npm run dev`). Worktrees should use the next available port and start a new server from there.

---

## ⚠️ Design Authority + CSS Lock Rule

**Handoff 4** (`/Users/agentcomputer/Desktop/Claude Workspace/handoff 4/`) is the canonical design reference. Read those files before touching any CSS. Within handoff 4, component-specific spec files (e.g. `S3 Practice Makes Progress.md`) override the general `design.md` for that section.

**Never change these CSS values without Ben's explicit approval:**
- Body font-size: `14px` desktop / `16px` mobile — `+0.020em` tracking — `24px`/`26px` line-height
- Display headings: `clamp(46px, 5.6vw, 84px)` weight 400, `-0.030em` — S2/S3/S4/S5 section heads
- **Hero headline:** `clamp(46px, 6.8vw, 84px)` — exact comp spec (previous session had inflated override at 8.3vw/120px — reverted)
- **Hero subhead:** `font-size: 16px` / `line-height: 26px` / `max-width: 520px` — exact comp spec
- **Hero copy block:** `max-width: 520px`
- S2 option cards: `aspect-ratio: 1/1` (square) — `padding: 40px 28px 36px` — `gap: 16px` grid — no border — `aspect-ratio` must stay square
- S3 card: `clamp(280px, 30vw, 420px)` / `aspect-ratio: 3/4` / `padding: 40px`
- S3 card body: `clamp(17px, 1.4vw, 21px)`
- S3 card quote: `clamp(20px, 1.7vw, 26px)`
- All Mono: `13px` / `0.110em` (UI) · `14.4px` / `0.110em` (CTA) — never 10/11/12px or other tracking

**If the spec file and the live code disagree, check with Ben before changing either.**

---

## Design System

See [`design.md`](design.md) — comprehensive as-built reference for all tokens, type scale, marks library, imagery rules, components, mobile, animation, and open decisions. Sourced directly from the repo by Claude Design on 2026-05-27. Supersedes all prior versions. The original Figma source is `Every Day Futures - Visual Identity.fig` by Form (Alice / designbyform.com).

---

## Site Sections

| ID | Section | Status |
|----|---------|--------|
| S1 | Hero (`Hero.astro`) | ✅ Complete |
| S2 | Coaching options — 1:1, Group, Orgs & Teams, Self-Led (`Services.astro`) | ✅ Complete |
| S3 | Practice Makes Progress — snap rail (`Testimonials.astro`) | ✅ Complete — 8 cards, ink/sage, `clamp(280,30vw,420)` / `3:4` |
| S4 | Copy + Tags / About (`About.astro`) | ✅ Complete |
| S5 | Waymaker (`Waymaker.astro`) | ✅ Complete |
| S6 | Taylor / Bio (`TaylorBio.astro`) | ✅ Complete |
| S7 | FAQ accordion (`FAQ.astro`) | ✅ Complete |
| — | Footer (`Footer.astro`) | ✅ Complete |
| — | Nav (`Nav.astro`) | ✅ Complete |
| — | Floating CTA (`CTABar.astro`) | ✅ Complete |
| — | **Begin flow** (`BeginFlow.astro`, `begin.astro`) | ✅ Complete — **live on main** |

---

## Implemented Features

### Hero Image Rotation
Images cycle sequentially on each page reload via `localStorage`. Sequence:
1. `/images/hero-rose.png` — `50% 30%`
2. `/images/hero-red-sun.jpg` — `50% 40%`
3. `/images/feather.png` — `50% 50%`
4. `/images/lotus.png` — `50% 60%`

Key: `edf_hero`. JS runs before nav observer, sets `background-image` and `background-position` on `.hero__bg`.

### Begin Flow (`BeginFlow.astro`)

Three-step flow at `/begin` (standalone page) and as a bottom-sheet drawer on the homepage.

**Step 1 — Option selection**
- Four options: 1:1 Coaching, Orgs & Teams, Group Coaching, Self-led (order matches homepage)
- Auto-advances after 350ms on click (no Continue button)

**Step 2 — Contact form**
- Fields: First name (required), Email (required), Phone (optional)
- Back button + selected badge above heading
- **Offering detail block** shown above "About you" when a relevant option is selected:
  - `#bfOffering1on1` — shown for `1on1`; sections: Structure, What we work with, Between sessions, AI-supported practice
  - `#bfOfferingOrgs` — shown for `orgs`; sections: Structure, What we practice, Engagement types, Facilitation & support
  - Group Coaching: no offering block yet (content pending)
  - Self-led: no offering block (no detail needed)
- `.bf-offering--hidden` (CSS `display: none`) toggled by `selectOption()` JS
- When offering is visible, the standalone "About you" h2 (`.bf-headline--form`) is hidden via CSS sibling selector; the offering block ends with its own "About you" h2 before the form
- Netlify Forms — hidden static form + AJAX POST; advances immediately regardless of network outcome
- Mobile: flex-push submit button (margin-top: auto), `font-size: 16px` prevents iOS zoom, `env(safe-area-inset-bottom)` for home bar

**Step 3 — Downstream**
- For 1:1, Group, Orgs: Calendly widget loaded dynamically
- For Self-led: Confirmation screen ("You're on the list — Winter 2026")

**URL param shortcut:** `/begin?option=1on1|group|orgs|selflead` skips step 1 — inline script adds `bf-has-param` to `<html>` before paint.

**Step visibility fix:** `showStep()` uses `element.style.setProperty('display', 'none', 'important')` and removes `bf-has-param` on every transition to prevent CSS specificity conflicts.

### Begin Drawer (homepage)

`BeginFlow` is embedded in a bottom-sheet drawer on the homepage (`index.astro`). Triggered by "Begin your practice" CTA.

- Drawer: `position: fixed; inset: 0; transform: translateY(100%)→translateY(0)` — 0.55s spring easing
- URL updates to `/begin` via `history.pushState` on open, reverts via `history.replaceState` on close
- `window.scrollTo` is patched while drawer is open so BeginFlow's step transitions scroll the drawer's inner scroll area instead of the window
- Close: ← BACK button, scrim click, Escape key, or browser back
- Focus trapped to drawer; first interactive element focused after transition
- `CTABar.astro` calls `window.__openBeginDrawer()` if available, else falls back to `/begin` href navigation

### Nav Contrast (hero page)

Nav text has a soft `text-shadow` for readability over the hero image — no gradient band:
```css
.nav__wordmark { text-shadow: 0 1px 12px rgba(0,0,0,0.40), 0 0px 4px rgba(0,0,0,0.20); }
.nav__link     { text-shadow: 0 1px 10px rgba(0,0,0,0.35), 0 0px 4px rgba(0,0,0,0.18); }
/* Cleared when scrolled (opaque white bg) or on begin page (dark text on cream bg) */
```

### Begin Page Background

`/begin` standalone page uses `background: var(--paper-cream)` so the transparent fixed nav blends with the BeginFlow content — no white stripe visible under the nav.

### S3 — Practice Makes Progress

Horizontal snap rail. 8 cards alternating ink (outcome) / sage (testimonial). Mouse drag + touch scroll.

- Card: `width: clamp(280px, 30vw, 420px)` · `aspect-ratio: 3/4` · `padding: 40px`
- Outcome body: `clamp(17px, 1.4vw, 21px)` Light 300
- Testimonial quote: `clamp(20px, 1.7vw, 26px)` Roman 400, NOT italic, `"` glyph prefix
- Mobile (≤640px): `78vw` cards, `28px` padding, no gap

### S2 Option Cards
4-up grid, square (`aspect-ratio: 1/1`), paper on cream, padding `40px 28px 36px`, `gap: 16px`, no border.
- Label: 32px Roman 400, `-0.020em`, top of card
- Desc: 16px Light 300, `+0.020em`, `26px` line-height, `rgba(0,0,0,0.55)`, `margin-top: auto` (pushed to bottom)
- Arrow (→): `position: absolute; top: 28px; right: 28px`, `22px`, `rgba(0,0,0,0.30)`
- Hover: surface inverts to `--ink`, label/desc go white, arrow goes `--blue` + `translateX(4px)`
- Per-option hover colors are a backlog item (all currently `--ink`)

### Design Comp Audit Fixes (2026-05-29)
CSS values verified against handoff 4 comp and corrected:
- S7 question: `clamp(20px, 2vw, 28px)` (was `clamp(22px, 2.2vw, 32px)`)
- S7 answer color: `rgba(0,0,0,0.62)` (was 0.60)
- S5 para color: `rgba(0,0,0,0.72)` (was 0.70)
- S5 inner gap: `56px` (was 48px)
- S5 body: `max-width: 880px` added (was missing)
- S6 eyebrow margin-bottom: `24px` (was 16px)
- Footer links gap: `28px` (was 40px)
- BeginFlow Step 1 cards: `aspect-ratio: 1/1` added (square, matches S2 cards)

### Mobile: Hero Tags
```css
.hero__tags { flex-direction: column; align-items: flex-start; }
```

### S6 Taylor Photo Scatter
Three photos in an absolute-positioned scatter within `.s6__photos` (position: relative):

**Images:**
| File | Description |
|------|-------------|
| `public/images/taylor-01.png` | Real Taylor portrait (PNG, 1.8MB) |
| `public/images/taylor-03.gif` | Looping GIF (3MB, 220×293px) — first 4s of ski lift video at 0.5× speed. Shows chair lift with shadow cast on snow. Shadow composition at ~45–60% of frame height. |
| `public/images/taylor-02.jpg` | Family photo (converted from HEIC). Displayed in grayscale via `filter: grayscale(100%)`. |

**HTML order (determines z-stacking — later = on top):**
```html
<img src="/images/taylor-01.png" class="s6__photo s6__photo--a" data-parallax="0.04" />
<img src="/images/taylor-03.gif" class="s6__photo s6__photo--b" data-parallax="0.06" />
<img src="/images/taylor-02.jpg" class="s6__photo s6__photo--c" data-parallax="0.08" />
```

**Desktop CSS:**
```css
.s6__photos { height: 580px; position: relative; }
.s6__photo  { position: absolute; object-fit: cover; will-change: transform; }

.s6__photo--a { width: 300px; height: 420px; top: 0; left: 0; opacity: 0.82; }
.s6__photo--b { width: 220px; height: 300px; bottom: 0; right: 20px; opacity: 0.76; }
.s6__photo--c { width: 160px; height: 220px; top: 185px; right: 250px; opacity: 0.72; filter: grayscale(100%); }
```

**Mobile CSS (≤640px):**
```css
.s6__photos  { height: 340px; overflow: hidden; }
.s6__photo--a { width: 200px; height: 280px; top: 0; left: 0; }
.s6__photo--b { width: 145px; height: 195px; bottom: 0; right: 0; }
.s6__photo--c { width: 105px; height: 145px; top: 130px; right: 165px; }
```

**Critical positioning constraint:** `right: 250px` (desktop) and `right: 165px` (mobile) keep the family photo (--c) sitting on the portrait (--a) and completely clear of the GIF (--b). The GIF shadow composition (45–60% of frame height) must remain fully unobstructed. Do NOT use `right` values smaller than 250px (desktop) or 165px (mobile) or the family photo will cover the GIF.

**Parallax JS:**
```js
var centerOffset = (rect.top + rect.height / 2) - window.innerHeight / 2;
img.style.transform = 'translateY(' + (centerOffset * speed) + 'px)';
```
All-positive speeds (0.04/0.06/0.08) keep photos moving together with minimal separation during scroll.

---

## Mobile Implementation

### Breakpoints
- Tablet: `@media (max-width: 900px)`
- Mobile: `@media (max-width: 640px)`

### Key Mobile Rules (≤640px)
```css
:root { --gutter: 22px; }

/* S2 */
.s2__header { flex-direction: column; gap: 28px; }
.s2__option { grid-template-columns: 1fr auto; }
.s2__option-desc { display: none; }
/* Tier images: horizontal scroll, snap, no gap */
.s2__tiers { overflow-x: auto; scroll-snap-type: x mandatory; gap: 0; padding: 0 var(--gutter); }
.s2__tier { flex: 0 0 72vw; scroll-snap-align: start; }
/* Hover reset + active tap state */
.s2__option:hover { background: transparent; }
.s2__option:active { background: var(--paper-bone); }

/* S3 — one card per screen, no gaps */
.s3__rail { gap: 0; padding-right: 0; }
.s3__card { width: 100vw; }

/* S4 */
.s4 { padding: 72px var(--gutter) 72px; }
.s4__inner { grid-template-columns: 1fr; }

/* S5 */
.s5__inner { grid-template-columns: 1fr; }

/* S6 — portrait only */
.s6__inner { grid-template-columns: 1fr; }
.s6__photos { height: auto; }
.s6__photo--a { position: relative; width: 100%; height: auto; top: auto; left: auto; }
.s6__photo--b, .s6__photo--c { display: none; }

/* CTA bar — full-width anchored to bottom */
.float-cta { bottom: 0; left: 0; right: 0; width: 100%; transform: none; }
.float-cta__link { width: 100%; border-radius: 0; height: 52px; }
.float-cta__link:active { background: var(--orange); }

/* Footer — clears fixed CTA bar */
.site-footer { padding-bottom: calc(52px + env(safe-area-inset-bottom, 16px)); }
.site-footer__inner { flex-direction: column; align-items: flex-start; gap: 28px; }
```

### Hero Wordmark (mobile)
Animation is skipped on mobile (`window.innerWidth < 641` early return in Layout.astro JS). Wordmark stays in nav — no risk of clipping at small viewports.

---

## JS Summary

Four IntersectionObservers:
1. **Nav / float CTA** — toggles `.scrolled` on nav and `.visible` on float CTA when hero exits
2. **Float CTA footer inversion** — adds `.over-footer` to float CTA when `.site-footer` is visible, inverting its colors
3. **S2 headline clip** — fires once, adds `.revealed` to `#s2Headline`
4. **Staggered reveal** — observes `.s2__option, .s2__free, .s3__quote, .s4__body, .s4__tags, .s5__left, .s5__item, .s6__photos, .s6__bio, .s7__item` — 110ms stagger per element

Parallax scroll handler: queries all `[data-parallax]`, calculates center offset relative to parent `.s2__free`, `.s3__quote`, or `.s6__photos`, applies `translateY`.

FAQ accordion: click triggers `.open` toggle, one item open at a time, `max-height` CSS transition.

---

## Marks Library

All SVGs in `public/marks/` (served as `/marks/`) — fill `#2956e0`, variable stroke width.

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
| `Vector-10.svg` | 180×140 | S5 Waymaker — left of word (`Waymaker.astro`) + S7 FAQ — top-left of section (`FAQ.astro`) |
| `Vector-11.svg` | — | Unused |
| `Vector-12.svg` | — | S1 Hero — underline on "future" (inverted white, `Hero.astro`) |

---

## Images Available

**Brand / scene assets** (`public/images/`):
`dunes.png`, `feather.png`, `hero-coast.jpg`, `hero-red-sun.jpg`, `hero-rose.png`, `horizon.png`, `lotus.png`, `mountain-card.png`, `painting.png`, `rose.png`, `window-sunset.png`

**Taylor portraits** (`public/images/`):
- `taylor-01.png` — **Active** — Real portrait (PNG)
- `taylor-02.jpg` — **Active** — Family photo (grayscale)
- `taylor-03.gif` — **Active** — Ski lift looping GIF
- `taylor-03.jpg`, `taylor-04.jpg`, `taylor-04b.jpg`, `taylor-05.jpg`, `taylor-05b.jpg`, `taylor-06.jpg`, `taylor-07.jpg` — Unused placeholder JPGs

---

## Passed / Rejected Concepts

| Concept | Verdict |
|---------|---------|
| Waymaker underline hover (blue scaleX `::after`) | ❌ Reverted |
| Hero image crossfade on scroll | ❌ Passed |
| Taylor chapter break on mobile (full-viewport portrait + name overlay) | ❌ Passed |

---

## Begin Page (`/begin`)

**Component:** `src/components/BeginFlow.astro` (self-contained — all HTML, CSS, and JS inline)  
**Page shell:** `src/pages/begin.astro`  
**Route:** `/begin`

### Flow Overview

Three-step inline flow. No page navigation between steps — JS shows/hides.

| Step | ID | Content |
|------|-----|---------|
| 1 | `#bfStep1` | Option selection — 4 cards (1:1, Group, Orgs & Teams, Self-led) |
| 2 | `#bfStep2` | Contact form — First name, Email, Phone (optional) |
| 3 | `#bfStep3` | Calendly embed (or self-led confirmation for `selflead`) |

### Step Transitions

- **Step 1 → Step 2:** Clicking an option auto-advances after **350ms** (no Continue button). The selected option is stored in `selectedOption` variable.
- **Step 2 → Step 1:** "← Change selection" back button.
- **Step 2 → Step 3:** Clicking BEGIN validates the form, fires a Netlify Forms AJAX POST (fire-and-forget), then immediately calls `advanceToStep3()`.

### URL Param Shortcut

Homepage CTAs link to `/begin?option=1on1` (or `group`, `orgs`, `selflead`). When a valid `option` param is present:
1. `begin.astro` inline script adds `bf-has-param` class to `<html>` **synchronously before paint**
2. Global CSS: `html.bf-has-param #bfStep1 { display: none !important }` and `html.bf-has-param #bfStep2 { display: flex !important }` — prevents step 1 flash
3. BeginFlow IIFE calls `selectOption(paramOption, true)` with `immediate=true` (0ms delay)
4. setTimeout fires: removes `bf-has-param`, calls `showStep(step2)`, scrolls to top

### CSS Specificity Bug (fixed 2026-05-13)

`html.bf-has-param #bfStep2 { display: flex !important }` has specificity 1-1-1, which beats `.bf-step--hidden[data-astro-cid-*] { display: none !important }` at 0-2-0 — even with `!important` on both. Higher specificity wins. If `bf-has-param` was still on `<html>` when BEGIN was clicked, step 2 could never be CSS-hidden.

**Fix:** `showStep()` now uses `element.style.setProperty('display', 'none', 'important')` for non-target steps (inline `!important` beats any stylesheet rule) and also removes `bf-has-param` on every step transition.

### Netlify Forms

A hidden static form (with `netlify` attribute) is included for build-time form registration. The visible AJAX form POSTs to `/` with `form-name: begin` and `Content-Type: application/x-www-form-urlencoded`. Response is ignored (fire-and-forget in try/catch).

### Calendly Integration

Calendly widgets are created dynamically in JS when step 3 appears. Script loaded lazily on first use. URLs currently use placeholders — **Taylor must supply real Calendly links before launch.**

| Option | Calendly URL |
|--------|-------------|
| `1on1` | `https://calendly.com/placeholder-60` ← replace |
| `group` | `https://calendly.com/placeholder-15` ← replace |
| `orgs` | `https://calendly.com/placeholder-60` ← replace |
| `selflead` | No Calendly — shows "You're on the list" confirmation screen |

### Design Decisions (Begin page)

- No "Begin your practice" eyebrow on step 1
- No Continue button — auto-advance on selection
- Step 2 nav: back arrow and badge stacked vertically (`bf-top-nav`)
- Form label: "About you" (not "A little about you")
- No form note/disclaimer — users are booking on the next screen
- Field separators: padding only, no border lines between fields
- Submit button: 48px height, 0 40px padding (matches site CTA standard)
- Option label letter-spacing: -0.020em (matches h2 scale)

---

## Design Reference

`design.md` at repo root is the source of truth for the EDF brand system — updated 2026-05-28 to the handoff 2 spec (strict Figma compliance). Key changes from prior build:

| Element | Before | After (this pass) |
|---------|--------|-------------------|
| Color palette | 11 tokens incl. orange, bone, clay, dusk, moss | 7 tokens — paper/off-a/off-b/cream/sage/ink/blue |
| Float CTA shape | 100px pill | 4px rectangle |
| Float CTA hover | Orange | Blue |
| CTA label | "Begin" | "Begin Practice" |
| Display font weight | 300 (Light) | 400 (Roman) |
| Eyebrow size | 11px / 0.180em | 13px / 0.110em |
| Wordmark family | Inter (--font-display) | Helvetica Neue (--font-body, w:200) |
| S2 layout | Option rows (title + arrow) | 4-up card grid |
| S3 surface | paper-bone | paper (white) |
| S3 card alternation | clay/dusk/moss/ink outcomes | strict ink/sage |
| S3 quote style | italic | roman |
| S6 Taylor photos | 3-photo scatter + parallax | single portrait, full opacity |
| Section eyebrows | Present on some sections | None |
| Orange accent dots | In footer, hero | Removed |
| Footer links | Login · Terms · Privacy | Contact · Instagram · Login · Terms · Privacy |
| Contact section | None | New `Contact.astro` at `#contact` |

---

## Open Items

### Content
- [x] **FAQ answers** — real copy in place (6 Q&As)
- [x] **Orgs & Teams S2 desc** — real copy in place (via shared options data file)
- [x] **Group Coaching offering detail** — implemented in BeginFlow Step 2 (`#bfOfferingGroup`)
- [x] **Contact section** — `Contact.astro` at `#contact`, Netlify Forms wiring (routing to Netlify dashboard)
- [ ] **Formetica license** — currently using Helvetica Neue (falls back to Arial on Windows/Android)
- [ ] **Calendly URLs** — Taylor must provide real URLs for 1:1, Group, and Orgs options before launch
- [ ] **Netlify Forms routing** — configure in Netlify dashboard: `coach@everydayfuture.work` + `ben@wintersand.co`
- [x] **Begin page: pushed to main** — Live at https://everyday-future-v4.netlify.app (2026-05-28)

### Mobile (ideas not yet implemented)
- [ ] **Word-by-word quote reveal** — animated text reveal on scroll for S3 quotes on mobile
- [ ] **Sticky Waymaker with sequencing** — Waymaker list items animate in as user scrolls
- [ ] **Waymaker section hover interactivity** — no resolution yet; underline version was rejected

### Scroll / Animation (from backlog)
- [ ] Hero word stagger entrance animation
- [ ] S2 diagonal entrance on scroll
- [ ] Waymaker scale entrance
- [ ] Overlapping section stack scroll effect
- [ ] SVG mark refinement (marks placed but not tuned for position/scale/rotation/opacity)

### S2 Hover Colors
- [ ] **Per-option hover colors** — currently all ink. Decide on final per-option colors (blue for Group, cream or other for Orgs & Teams, orange for Self-led) once content direction is settled.

### Architecture
- [x] **Astro migration** — complete and merged to `main` (commit `ebcf4bc`). Live at production and staging.
- [x] **Practice options shared data file** — `src/data/options.ts` is the single source of truth for option keys, labels, descriptions, and Calendly URLs. Both `Services.astro` and `BeginFlow.astro` import from it.
- [ ] **Monorepo consolidation** — `everyday-future-v4/` and `edf-portal-updated_3/` to share design tokens
- [x] **Staging branch** — wired to Netlify, `npm run build` → `dist/` via `netlify.toml`.
- [ ] **Landing pages** — structure TBD, not started

### Portal Integration
- [ ] **Portal reskin to v4 design system** — `edf-portal-updated_3/` uses different design system
- [ ] Replace Squarespace logo URL in portal header with proper wordmark text
- [ ] Portal currently uses `localStorage` for client list

---

## Related Project: Client Portal

**Folder:** `Projects/Software/edf-portal-updated_3/`  
**Files:** `admin-create.html`, `client-portal.html`, `netlify.toml`  
**Live:** `portal.everydayfuture.work`

Admin creates portals by filling in client name + Drive folder URL + Calendly URL + Stripe URL + WhatsApp number. Data is base64-encoded into a URL param (`?c=...`) and shared with client. Client portal decodes URL and renders 4 cards (Drive, Book Session, Payments, Message Taylor). Client list stored in `localStorage` on admin device.

---

## Deployment

- GitHub repo: `ben77win/everyday-future-v4`
- Netlify auto-deploys on push to `main` (production) and `staging`
- Build command: `npm run build` — publish dir: `dist/` (set via `netlify.toml` in repo root)
- Hero concept: separate Netlify site, publish dir = `hero-concept/`
- `.gitignore` excludes: `.DS_Store`, `SESSION.md`, `index.checkpoint-*.html`, `hero-concept.html`, `node_modules`, `dist`, `.astro`
- **Note:** Netlify CDN caches aggressively. After pushing, users may need a hard refresh (`Cmd+Shift+R`) to see updates.

### Deploy Rule
Always push to `staging` first. Only push to `main` when Ben explicitly approves. Never push to `main` unilaterally.
