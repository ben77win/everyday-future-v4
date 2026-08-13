# Cleanup list — files Ben needs to delete by hand

Deletes are hard-blocked for the agent (`~/.claude/settings.json` deny rules + `no-delete-guard.py`), so these accumulate here instead. **Nothing here is urgent** — none of it breaks the site. Clear it whenever convenient, ideally before the v5 → main merge so production ships clean.

_Last updated: 2026-08-12 (session 12 — punch-list pass)._

---

## In the repo — safe to delete

| File | Size | Why it's dead |
|---|---|---|
| `public/images/v5/hero-tennis.png` | 187 KB | Replaced by `hero-tree-china.jpg` in the hero (Ben, 2026-08-10). Ships in every deploy until removed. |
| `public/images/v5/hero-tree.png` | 140 KB | Ink-tree still replaced by the water video `hero-water.mp4` (Ben, 2026-08-10). Ships in every deploy until removed. |
| `public/images/v5/choose-window-video-poster.png` | 109 KB | Sauna-window poster replaced in S2 (Ben, 2026-08-10). Ships in every deploy until removed. |
| `public/images/v5/choose-rhody.jpg` | 25 KB | Rhododendron — used briefly, superseded same day (Ben, 2026-08-10). |
| `public/images/v5/choose-dusk.jpg` | 14 KB | Dusk ridge — used briefly, superseded by `choose-clouds.mp4` the same day (Ben, 2026-08-10). |
| `public/_comp-a5.html` | ~8 KB | Load-screen comp staged for browser preview. **Publicly reachable** at `/_comp-a5.html` — worth removing before production. |
| `public/_comp-rec.html` | ~9 KB | Same — recommended-cut load-screen comp. Publicly reachable. |
| `public/_comp-stacked.html` | ~10 KB | Same — STACKED v3 comp (the approved one). Publicly reachable. |
| `design-v5/comps/_footer-crop.jpg` | 10 MB | Bad crop — `sips` returned the full 2880×15874 comp instead of the 700px slice. Superseded by `_footer-crop.png`. **Biggest single win.** |
| `hero-concept.html` (repo root) | — | Legacy v4-era prototype; already gitignored, still on disk. Confirm you don't want it before deleting. |
| `index.checkpoint-s2.html`, `index.checkpoint-s3.html`, `index.checkpoint-s7.html` (repo root) | — | Pre-Astro single-file checkpoints; gitignored. `_archive/index-pre-astro.html` is the canonical archive. |

### Working crops — delete only if you don't want the measurement trail
These were cropped from the comps to measure geometry. Harmless, repo-only (never deployed), but clutter:
`design-v5/comps/_faq-crop.png` · `_waymakers-crop.png` · `_mobile-1.png` → `_mobile-4.png` · `_footer-crop.png`

---

## Outside the repo — optional

| Path | Note |
|---|---|
| `~/Downloads/Every Day Future - Visual Identity (3).zip` + unzipped folders (1)/(2)/(3) | ~17 MB each. Figma exports already copied into `design-v5/`. |
| `~/Downloads/Home Page - Desktop (1).jpg`, `(2).jpg` | 10 MB each, duplicates of `design-v5/comps/Home Page - Desktop.jpg`. |
| `~/Downloads/New design request.zip` + `~/Downloads/export/` | Favicons + share card, already installed into `public/`. |
| `/private/tmp/.../scratchpad/hero-tree-china-756k-unused.png` | 756 KB alpha-PNG version of the hero tree, superseded by the 67 KB JPEG. In scratchpad — self-clears. |

---

## Not cleanup — do not delete

- `public/images/taylor-01.png`, `taylor-02.jpg`, `taylor-03.gif`, `taylor-03..07.jpg` — unused placeholders, but Ben chose to keep them (see CONTEXT.md).
- `public/images/DSCF0172.jpg` — unused since the S6 rework; explicitly left per Ben.
- `_archive/index-pre-astro.html` — the intentional pre-Astro archive.
- Anything under `Projects/Global Lease Renewal Project/Leases/` — write-protected source records.

## Added 2026-08-12 (punch-list session)

| File | Why it's dead |
|---|---|
| `public/images/v5/choose-clouds.mp4` + `choose-clouds-poster.jpg` | Clouds clip superseded by the sunset still in the S1 window slot. |
| `public/images/v5/someday-figure-poster.jpg` | Still used as the reduced-motion fallback — **keep**, listed only so it isn't mistaken for dead. |
| `public/images/DSCF0184.jpg` | Old bio portrait, replaced by `taylor-bio.jpg` (DSCF0065 square crop). Check `TaylorBio.astro` first if you ever revert. |
| `design-v5/comps/_footer-crop.jpg` | 10 MB accidental full-size `sips` output. |
| `design-v5/comps/_*.png` (crops) | Working crops used to measure the comps — `_faq-crop`, `_waymakers-crop`, `_gap-check`, `_mobile-1..4`, `_contact`. |

## Outside the repo

| Path | Why |
|---|---|
| `~/Desktop/EDF-sketches-review/` | Review copies of the 9 marks + the 13-SVG library, made for Finder browsing. Nothing references them. |
| `~/Downloads/export-sketches/` | Alice's 1x sketch exports — superseded; the repo copies are what ship. |
| `~/Downloads/Every Day Future - Visual Identity (4).zip` | The 4x Figma export that turned out to be upscaled; reverted. |
| `~/Downloads/IMG_5637 1 2 (4).png` | Single 4x clock export from the same failed attempt. |
| `~/Downloads/DSCF0065 (1).jpg`, `NEWCHINA9.jpg`, etc. | Duplicate copies of assets now committed to the repo. |
