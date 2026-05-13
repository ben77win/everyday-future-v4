# Every Day Future — Site Context
_Last updated: 2026-05-13 — Astro migration merged to main_

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

**Rollback tag:** `pre-astro-migration` — points to last single-file HTML state on staging.  
**Archived HTML:** `_archive/index-pre-astro.html`

**Worktree preview note:** Each worktree needs its own `.claude/launch.json`. Main repo launch.json uses port 4321 (`npm run dev`). Worktrees should use the next available port and start a new server from there.

---

## Design System

| Token | Value |
|-------|-------|
| `--ink` | `#000000` |
| `--paper-cream` | `#fffcd1` |
| `--blue` | `#2956e0` |
| `--orange` | `#ff3900` |
| `--font-display` | Inter 200 (Formetica when licensed) |
| `--font-body` | Helvetica Neue / Arial |
| `--font-mono` | DM Mono 300/400 |
| `--gutter` | 60px desktop / 22px mobile |
| `--max-w` | 1280px |

**Type rules:**
- Display (65px+): `font-weight: 300`, `letter-spacing: -0.030em`
- Section headlines (~42-64px): `font-weight: 300`, `letter-spacing: -0.020em`
- Body (14-15px): `font-weight: 300`, `letter-spacing: 0.020em`
- CTA / eyebrows: DM Mono, `font-size: 13-14.4px`, `letter-spacing: 0.110em`, uppercase
- Orange: hover activation only — never backgrounds, never static fills
- Hairlines: `0.5px solid rgba(0,0,0,0.18)` throughout
- Border radius: 4px on pills/tags, 100px on floating CTA oval, zero elsewhere

---

## Site Sections

| ID | Section | Status |
|----|---------|--------|
| S1 | Hero (`Hero.astro`) | ✅ Complete |
| S2 | Coaching options — 1:1, Group, Orgs & Teams, Self-Led (`Services.astro`) | ✅ Complete |
| S3 | Quotes / testimonials (`Testimonials.astro`) | ✅ Complete |
| S4 | Copy + Tags / About (`About.astro`) | ✅ Complete |
| S5 | Waymaker (`Waymaker.astro`) | ✅ Complete |
| S6 | Taylor / Bio (`TaylorBio.astro`) | ✅ Complete |
| S7 | FAQ accordion (`FAQ.astro`) | ✅ Complete |
| — | Footer (`Footer.astro`) | ✅ Complete |
| — | Nav (`Nav.astro`) | ✅ Complete |
| — | Floating CTA (`CTABar.astro`) | ✅ Complete |
| — | **Begin flow** (`BeginFlow.astro`, `begin.astro`) | ✅ Complete — staging only |

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
- Four options: 1:1 Coaching, Group Coaching, Orgs & Teams, Self-led
- Auto-advances after 350ms on click (no Continue button)

**Step 2 — Contact form**
- Fields: First name (required), Email (required), Phone (optional)
- Back button + selected badge above heading
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

### S3 Quote Text

`.s3__text` has `font-style: italic`.

### S2 Hover Colors
All four options currently hover to `--ink`. Per-option colors (blue for Group, orange for Self-led, etc.) are a pending decision — see Open Items.

### Mobile: Cinematic Quotes (S3)
On mobile (`≤640px`), quote sections become full-viewport cinematic moments:
- `.s3__quote` → `min-height: 90vh`, `background: #0a0a0a`, flexbox centered
- `.s3__img` → `position: absolute`, fills full section with `object-fit: cover`, `opacity: 1`
- `::after` gradient overlay: `rgba(0,0,0,0.22) → 0.68`
- `.s3__text` → `z-index: 2`, white text, `clamp(26px, 7vw, 40px)`

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
.s2__free-img { display: none; }
.s2__header-right img[aria-hidden],
.s2__free-content img[aria-hidden] { display: none; }
.s2__free { overflow: hidden; }

/* S3 — cinematic (see above) */

/* S4 */
.s4 { padding: 72px var(--gutter) 72px; }
.s4__inner { grid-template-columns: 1fr; }

/* S5 */
.s5__inner { grid-template-columns: 1fr; }

/* S6 */
.s6__inner { grid-template-columns: 1fr; }
.s6__photos { height: 340px; overflow: hidden; }

/* Footer */
.site-footer__inner { flex-direction: column; align-items: flex-start; gap: 28px; }
```

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

## Open Items

### Begin Page (staging only — blockers before merging to main)
- [ ] **Calendly URLs** — Taylor to provide URLs for 1:1, Group, and Orgs options (currently 404 placeholder)
- [ ] **Ben approves merge to main**

### Content
- [ ] **FAQ answers** — Taylor to provide real copy (currently Latin placeholder)
- [ ] **Orgs & Teams copy** — Latin placeholder in S2 desc; Taylor to provide real copy
- [ ] **Formetica license** — currently using Inter 200 as fallback

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
