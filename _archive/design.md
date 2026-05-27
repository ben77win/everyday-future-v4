# Every Day Future — Visual Identity (design.md)

> Source: `Every Day Futures - Visual Identity.fig` — a style-tile exploration by **Form** (Alice / designbyform.com) for the **Every Day Future** coaching practice. Document dated **5/1/2026**, marked *Confidential*.

This file captures the design intent of the Figma so the rest of the project can be built directly from text, without re-opening the binary.

---

## 1. The brief, in one line

> **Coaching for creative founders experiencing growth — consciously, clearly, creating your future every day.**

That sentence is the cover-to-styletile thesis. Every visual choice in the file serves it: a quiet, editorial, *publication*-feeling identity (not a tech-startup landing page) that pairs **architectural type** with **handmade marks** and **observational photography**.

Two parallel imagery directions are explicitly being weighed in the file (see §6):

- **Imagery Now** — *"Quiet observational scenes with same dimensions."*
- **Imagery Shift** — *"Consider something more active and editorial with a 'made you look' vibe."*

The styletile itself leans toward the *Now* direction; the *Shift* page is a prompt to push further.

---

## 2. File map (frames in scope)

| Page | Frame | Node | Role |
|---|---|---|---|
| Cover | `Cover` | 1:45 | Title page, 1920×1080, cream background, Form wordmark + meta block. |
| Style-Tile | `Styletile` | 11:125 | The main board — three vertical columns: black-on-white type + photo collage / cream typography panel / cream "EDF" mark studies + business-card mock. |
| Style-Tile | `Marks` | 15:367 | A scatter of 13 hand-drawn blue brush strokes — the source library for the "ink" overlays. |
| Style-Tile | `Photos` | 20:1005 | Mood board labelled *"Imagery Now: Quiet Observational Scenes with same dimensions."* — 9 photographs. |
| Style-Tile | `Photos` (2nd) | 20:1019 | Mood board labelled *"Imagery Shift: Consider something more active and editorial with a 'made you look vibe.'"* — 5 photographs. |
| Style-Tile | `V1` | 35:200 | Version label. |
| Style-Tile | `WIP` | 35:201 | Empty placeholder. |

---

## 3. Color

Pulled directly from the Figma metadata (top usage):

| Token | Value | Role |
|---|---|---|
| **Ink** | `rgb(0, 0, 0)` — `#000000` | Display type, body text, hairlines, the "GET IN TOUCH" pill. Dominates the file (145× usage). |
| **Electric Blue** | `rgb(41, 86, 224)` — `#2956E0` | The signature accent. Every blue brush mark, the underline scribble beneath "Every Day", the spiral lockup, the W-flourish at the corners of the styletile. 60× usage. *This is the only chromatic statement in the system.* |
| **Cream / Butter** | `rgb(255, 252, 209)` — `#FFFCD1` | Cover background and the right-hand typography panel of the styletile. Warm, paper-like — closer to vellum than yellow. Use over white to denote "editorial spread." |
| **Cream Tint** | `rgb(255, 252, 217)` — `#FFFCD9` | A `mix-blend-mode: color` overlay that warms the painted-flowers image into the same cream family. |
| **White** | `rgb(255, 255, 255)` — `#FFFFFF` | The styletile and mark-board base. |
| **Off-White A** | `rgb(250, 252, 250)` — `#FAFCFA` | The background of the 7×5″ business-card mock (a hair cooler than white). |
| **Off-White B** | `rgb(248, 252, 247)` — `#F8FCF7` | The greenish-cream block under "Coaching For Creative Founders…" — pulls warmth out of the image collage. |
| **Sage** | `rgb(233, 237, 231)` — `#E9EDE7` | A barely-there green tint used for one of the section blocks. |
| **Dark Blue** | `rgb(3, 68, 212)` — `#0344D4` | One darker blue rectangle behind a brush mark — treat as `electric-blue` *pressed* / heavy variant. |
| **Burnt Orange** | `rgb(255, 57, 0)` — `#FF3900` | A spice color — used 5× total, sparingly. The orange dot inside the "C" copyright glyph at the cover footer. |
| **Charcoal** | `rgb(26, 26, 26)` — `#1A1A1A` | Near-black secondary fill used for one card chip. |
| **Shadow** | `rgba(217, 217, 217, 0.7)` | Soft cool drop shadow, used ONCE, on the floating card mock. `0px 2px 34px`. |
| **Shadow (deep)** | `rgba(0, 0, 0, 0.18)` | Heavier shadow, also used sparingly. |

### Palette behavior
- **Black + electric blue is the entire signal pair.** Every "moment" in the design is one of those two against a paper.
- **Three papers stack** for hierarchy: white → off-white (FAFCFA / F8FCF7) → cream (FFFCD1). No solid-color section dividers; tone shifts do the work.
- **Orange is reserved for marks.** Treat it like a stamp, never a button.
- **No gradients. No shadows on type. One soft ambient shadow on the card mock — that's the entire shadow vocabulary.**

---

## 4. Typography

The Figma uses four families. **Formetica Light** is the wordmark face; **Helvetica Neue LT Std** carries display + body; **DM Mono** is for CTA labels.

| Family | Weight | Where it appears | Note |
|---|---|---|---|
| **Formetica** | Light | The cover wordmark "Every Day Future" at **200px / 100% line-height / black**. | Specimen face — the *only* place Formetica is used. Geometric, single-stroke, has a custom "E" with an open counter. The brand signature. |
| **Helvetica Neue LT Std** | 45 Light | Display: section headers ("Imagery Now:", "Coaching For Creative Founders…", "Invest in your future.", "Lorem ipsum…") at 36–65px. Body at 14–15px. | The workhorse. |
| **Helvetica Neue LT Std** | 55 Roman | The styletile huge type ("Coaching For Creative…" at 65px / 95px line-height / `-0.030em`) and the cream panel display copy at 40–46px. | Used when display copy needs slightly more presence than 45 Light. |
| **DM Mono** | Regular | The "GET IN TOUCH" pill label: **14.4px / 100% / `0.110em` tracking / uppercase / white on black.** Also any small data-like labels (13–14px). | The only mono in the system — reserved for CTA + meta. |

### Type rules observed in the file

- **Display headlines stack tightly.** "Coaching For Creative Founders Experiencing Growth Consciously, Clearly, Creating Your Future Every Day." is set at 65px with 95px line-height and `letter-spacing: -0.030em` — words wrap mid-phrase by design, breaking like editorial pull-quotes. Trust the wrap.
- **Display body uses sentence case.** Title case never appears in headlines.
- **Eyebrow / category labels use uppercase + tracking.** "TYPOGRAPHY" sits at the top of the cream panel as a single ALL CAPS label at 13px DM Mono.
- **Body letter-spacing is `0.020em`.** A subtle airy widening — applied to everything from 14px body to 65px display. The `-0.030em` tightening only kicks in at the very largest scales.
- **Two columns for body copy** when there's room (the cream panel runs lorem ipsum in a 2-column block ≈225px wide each, 24px line-height, 14px size).
- **Numerals are tabular-feeling** (Helvetica Neue has lining figures by default; in the file, "5/1/2026", "206-229-2091", "© Form 2026" all sit on the baseline cleanly at 15px).

### Type stack to use in HTML

```css
--font-display: 'Formetica', 'Neue Haas Grotesk Display', 'Helvetica Neue', sans-serif;
--font-sans:    'Helvetica Neue LT Std', 'Helvetica Neue', Helvetica, Arial, sans-serif;
--font-mono:    'DM Mono', ui-monospace, 'JetBrains Mono', Menlo, monospace;
```

If Formetica isn't licensed for the build, the closest free fallback is **Neue Haas Grotesk Display** Light or **Inter** at weight 200 (acknowledging Inter's more humanist `e`).

---

## 5. The "ink" mark library (15:367 — `Marks` page)

The blue scribbles are the soul of the brand. There are **13 vector brush marks** and **25 BRUSH-type strokes** (raw figma BRUSH nodes) in this file — they're hand-drawn with a stylus, then digitized.

Mark types catalogued:
1. **Underline** — straight rake-pull beneath a word ("Every Day" gets one). The lift-off dot at the end is part of it.
2. **Double underline** — two parallel pulls, fast, slightly offset.
3. **Loop / cursive `el`** — small handwritten "el"-like loop, vertical-axis, often paired with an underline.
4. **Open spiral** — single revolution opening outward, ~80px diameter.
5. **Tight spiral** — multiple revolutions, ~150px diameter, terminating in a center dot.
6. **Lozenge / wave** — a shallow tilde / "S" curve.
7. **Eight (∞) loop** — figure-eight, drawn in one stroke.
8. **Compound underline + loop** — a long pull that returns into a loop at the right end.
9. **W flourish** — a sharper zigzag that lives in the corners as decoration.
10. **Quote tick** — a tiny pair of quotation-mark style upticks.

**Treatment rules:**
- All marks are stroked in `#2956E0`, no fill.
- Stroke is variable-width — clearly drawn with a pressure-sensitive brush. *Don't redraw as a uniform-width SVG line — copy the actual brush SVGs out.*
- Marks live as **overlays**: they sit on top of type and photography, never behind. They cross hard edges intentionally (the underline blasts past the word it underlines).
- One `EVERY DAY FUTURE` arc-text stamp circles a small sun/dot — it's a circular wordmark variant. Treat as a unit.
- Marks may rotate freely; they're *applied* not *placed*.

The mark library is the project's signature animation surface. They're prime candidates for an entry stroke-on (`stroke-dasharray` reveal at 1000ms).

---

## 6. Imagery

### Direction A — "Imagery Now" (currently selected)
*"Quiet observational scenes with same dimensions."*

9 photographs in the mood board. Vocabulary:
- A **window** at dusk with bare branches outside
- A **rose** against a blue sky
- **Falling leaves** on dark water (near-black frame)
- **Snowy mountain + red berries** in foreground
- **Wind-textured snow** sastrugi
- **Coastal cliff and sky** at dusk

All shot in cool-to-cold light, mostly natural, mid-saturation, **portrait orientation, same dimensions**. The "tessellation" aesthetic — a museum wall of small windows.

Used in the styletile as a 4-up bottom strip: window, mountain (sliced), feather, rose, dunes — all opacity-dropped to **0.7–0.8** so the surrounding paper bleeds through.

### Direction B — "Imagery Shift" (proposed alternative)
*"Consider something more active and editorial with a 'made you look' vibe."*

Only one specimen on the board: a **cyanotype-style painting of lotus flowers** on peach paper. Hand-painted, blue-on-warm, soft focus. The "shift" is from photography → **abstract painting / cyanotype / monotype prints**, with bolder color contrast (the peach + cobalt is doing what the photographs aren't).

### Treatment rules (both directions)
- **Reduced opacity** on collaged images (0.7–0.8).
- **Mix-blend `color`** over photographs to pull them into the cream/yellow tonal family when they sit on a cream surface.
- **Crops are full-bleed within their tile.** No rounded corners. No drop shadows. No borders. Hard rectangular edges.
- **Photography is letting** — never the hero. The type is the hero.

---

## 7. Layout & composition

### Cover (1:45)
- Canvas: **1920 × 1080**, background `#FFFCD1`.
- Wordmark `Form` top-left at `(49, 51)`, drawn from 4 vector glyphs (custom F-O-R-M).
- Three column dividers drop from the top edge (vertical 0.5px black hairlines at x = 949 / 1256 / 1564), creating a 4-cell meta strip:
  - Cell 1: empty
  - Cell 2: `Everyday Future` / `5/1/2026`
  - Cell 3: `Form` / `206-229-2091` / `alice@designbyform.com`
  - Cell 4: `designbyform.com`
- Hero word: `Every Day Future` in **Formetica Light 200px** at `(153, 420)`, full-width.
- Footer: `Confidential Document` left of the right margin, `Form 2026` far right, both 15px. Between them: a tiny `(C)` copyright glyph with a **burnt-orange dot** inside the C — a 6px detail that's the only color on the cover.
- A small sun/disc icon bottom-left at `(49, 1000)`.

### Styletile (11:125)
The big board is a **three-column collage**, 1920 × 1080:

- **Left column (white, 0–636px):** The "EDF" mark studies (huge "Every Day Future" stacked with strikethrough scribble), the round arc-text stamp, and a sage-tinted bottom block with the "Coaching For Creative Founders…" pull-quote spilling across photo collage at 65/95px.
- **Middle column (cream, 636–1278px):** A clean typography spread on `#FFFCD1`. ALL-CAPS eyebrow "TYPOGRAPHY" → display lorem at 40px → small caps lorem subhead → two-column body lorem → black `GET IN TOUCH` pill at the bottom-left.
- **Right column (white, 1278–1920px):** The 7×5″ business-card mock floating on a soft cool shadow, plus a corner W-flourish, the small sun/orange-dot stamp top-right, and an "Invest in your future." headline that bridges cards and white.

Read pattern: the eye sweeps **left (loud type) → center (quiet body) → right (brand artifacts)**. It's a deliberate slow-down across the page.

### Photos pages (20:1005, 20:1019)
A **scatter** layout — not a grid. Headlines top-left at `(43, 60)`. Images placed asymmetrically across the right two-thirds, intentionally leaving wide negative space. Whitespace is the layout.

### Spacing & grid
- **Page padding:** 22–49px from the edge for chrome (wordmarks, page numbers); content can start as far in as 152–250px on the cover.
- **Section gap on the styletile:** ≈ 80–100px between major regions (cream column → white column).
- **Card interior padding:** 36–62px (the business card has 36px from the left edge to its logo).
- **Hairlines:** `0.5px solid #000` — only used on the cover meta strip and one small business-card divider. Forbidden elsewhere; tone shifts replace them.
- **Border radius:** **Zero almost everywhere.** The only exceptions: the GET IN TOUCH pill (`borderRadius: 4`), and the orange-dot copyright (full circle / 50%).

### Shadows
- **One soft drop shadow** in the entire system: `box-shadow: 0px 2px 34px rgba(217, 217, 217, 0.7)` — applied to the business-card mock to make it feel like a physical card on a flat surface. Don't reuse it elsewhere.

---

## 8. Components seen in the file

### `WordmarkForm` (custom logotype)
- 4 vector glyphs spelling "Form", lowercase-with-cap-F, ~154 × 53px.
- Always black ink on the brand surface.
- Top-left placement, 50px from edges.

### `WordmarkEDF` (specimen lockup)
- "EDF" stacked three times in Helvetica Neue Roman, ~120px each, with **horizontal black hairlines** between rows and an **electric-blue cursive `el` flourish** spanning two of the lines. This is a *type specimen treatment*, not a logo to be reused as-is — but the formula (giant Helvetica + blue cursive overlay) is reusable for headlines.

### `EveryDayFuturesArc`
- "EVERY DAY FUTURE" set in a circle in DM Mono ~13px, blue, ~120px diameter. A center dot.
- Used as a small badge / stamp.

### `MetaBlock` (cover)
- Three vertical hairlines define four cells in a top strip (1920px wide, 167px tall).
- Each cell holds: optional title row + body lines, all 15px Helvetica Neue Light, `0.020em` letter-spacing, 20px line-height, left-aligned at the cell's left padding (≈ 25–32px in from the divider).

### `BusinessCardMock`
- 504 × 809px (Figma's "Custom 7×5 in" preset) on `#FAFCFA` with the `0 2px 34px` shadow.
- Holds: small wordmark top-left, layered photo crops (rose with sun behind, feather), an underline scribble, the "EVERY DAY FUTURE" arc, and a body lorem block. Use as a recipe for a real card / collateral mock — *not* as a website component.

### `CTAPill`
- 195 × 39px black rectangle, `border-radius: 4px`.
- Label `GET IN TOUCH` in DM Mono 14.4px, `0.110em`, white, `(33, 10)` inset.

### `BlueScribble` (the marks)
- Imported as inline SVGs from `/Style-Tile/Styletile/` (Vector.svg, Vector-2.svg through Vector-9.svg).
- Stroke fill `#2956E0`. No fill on shape.
- Treat each as a `position: absolute` overlay; rotate freely.

### `ImageTile`
- A photograph on a paper surface.
- Opacity 0.7–0.8 when overlaid on color.
- Mix-blend `color` overlay (`#FFFCD9`) when the source photo is too cold for the surrounding cream.

---

## 9. Voice (sampled from the file)

- *"Coaching For Creative Founders Experiencing Growth Consciously, Clearly, Creating Your Future Every Day."*
- *"Invest in your future."*
- *"Imagery Now: Quiet Observational Scenes with same dimensions."*
- *"Imagery Shift: Consider something more active and editorial with a 'made you look' vibe."*
- CTA: `GET IN TOUCH`

Sentence case. Long, comma-spliced declaratives. Lower-stakes-than-usual coaching language — no exclamation marks, no hype, no second person yet on this board (this is the *visual* tile; the website voice will likely add "you").

---

## 10. Implementation cheat sheet

```css
:root {
  /* Papers */
  --paper-white:   #ffffff;
  --paper-off-a:   #fafcfa;
  --paper-off-b:   #f8fcf7;
  --paper-cream:   #fffcd1;
  --paper-cream-warm: #fffcd9;
  --paper-sage:    #e9ede7;

  /* Ink */
  --ink:           #000000;
  --ink-soft:      #1a1a1a;

  /* Marks */
  --blue:          #2956E0;
  --blue-deep:     #0344D4;
  --orange-spice:  #ff3900;

  /* Card shadow — used ONCE */
  --shadow-card:   0px 2px 34px rgba(217, 217, 217, 0.7);

  /* Type */
  --font-display:  'Formetica', 'Neue Haas Grotesk Display', 'Helvetica Neue', sans-serif;
  --font-sans:     'Helvetica Neue LT Std', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-mono:     'DM Mono', ui-monospace, Menlo, monospace;

  --track-tight:   -0.030em;  /* 65px+ display */
  --track-airy:    0.020em;   /* body + most display */
  --track-meta:    0.110em;   /* DM Mono CTA + ALL CAPS */
}

/* Page */
body { background: var(--paper-white); color: var(--ink); font-family: var(--font-sans); font-weight: 300; }

/* The two big type sizes */
.t-cover  { font-family: var(--font-display); font-weight: 300; font-size: 200px; line-height: 1; }
.t-display{ font-family: var(--font-sans);    font-weight: 300; font-size: 65px;  line-height: 95px; letter-spacing: var(--track-tight); }
.t-h2     { font-family: var(--font-sans);    font-weight: 400; font-size: 46px;  line-height: 1;    letter-spacing: var(--track-airy); }
.t-h3     { font-family: var(--font-sans);    font-weight: 300; font-size: 36px;  line-height: 1;    letter-spacing: var(--track-airy); }
.t-body   { font-family: var(--font-sans);    font-weight: 300; font-size: 14px;  line-height: 24px; letter-spacing: var(--track-airy); }
.t-meta   { font-family: var(--font-sans);    font-weight: 300; font-size: 15px;  line-height: 20px; letter-spacing: var(--track-airy); }
.t-eyebrow{ font-family: var(--font-mono);    font-size: 13px;  text-transform: uppercase; letter-spacing: var(--track-meta); }

/* CTA */
.cta-pill {
  display: inline-flex; align-items: center; justify-content: center;
  height: 39px; padding: 0 24px; border-radius: 4px;
  background: var(--ink); color: #fff;
  font-family: var(--font-mono); font-size: 14.4px;
  text-transform: uppercase; letter-spacing: var(--track-meta);
}
```

### Don'ts (specific to this file)
- Don't introduce gradient backgrounds. The cream is flat.
- Don't add elevation/shadows to anything except a literal physical-card mock.
- Don't redraw the brush marks with smooth bezier strokes — copy the SVGs out, they're variable-width and the irregularity is the point.
- Don't title-case headlines.
- Don't tint photographs with anything other than the cream-on-photo `mix-blend-mode: color` move.

---

## 11. Open questions / decisions to make

1. **Imagery direction:** the file is actively asking to choose between *Now* (quiet observational) and *Shift* (editorial / cyanotype / "made you look"). The styletile currently leans *Now*; revisit before scaling out.
2. **Wordmark for EDF itself:** the file shows a *Form* wordmark and "Every Day Future" set in Formetica, but no resolved EDF logomark. The "EDF" stacked specimen and the arc-text are candidates, not commitments.
3. **Formetica licensing:** the cover relies on it. If unavailable for production, fall back to Neue Haas Grotesk Display Light.
4. **Orange usage:** currently appears once (the cover (C) dot). Decide whether it expands into eyebrow labels / accents, or stays a single hidden detail.
