# Cleanup list — files Ben needs to delete by hand

Deletes are hard-blocked for the agent (`~/.claude/settings.json` deny rules + `no-delete-guard.py`), so these accumulate here instead. **Nothing here is urgent** — none of it breaks the site. Clear it whenever convenient, ideally before the v5 → main merge so production ships clean.

_Last updated: 2026-08-10 (session 11)._

---

## In the repo — safe to delete

| File | Size | Why it's dead |
|---|---|---|
| `public/images/v5/hero-tennis.png` | 187 KB | Replaced by `hero-tree-china.jpg` in the hero (Ben, 2026-08-10). Ships in every deploy until removed. |
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
