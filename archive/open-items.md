# Open Items — Archive

Parked decisions / loose ends, kept here so they aren't lost. Not active work.

## 2026-06-02

- **× close — scope across steps?** — Step 2 has a × close link (`.bf-close`, href=`/`) top-right of its nav bar to cancel back to the main site. Step 1 (option picker) and Step 3 (calendar / self-led confirmation) do **not** have it. Decide whether users should be able to bail to the main site from those steps too, and if so add the same `.bf-close` to their headers.

- **× close — drawer vs page behavior?** — `BeginFlow` serves both the standalone `/begin` page and a drawer over the homepage. The × is `href="/"`, which is right for the page (navigate home) but in drawer mode would do a full reload to `/` instead of just closing the drawer overlay. Decide whether the × should *close the drawer* when in drawer mode (and only navigate on the standalone page); reconcile with the drawer's existing close mechanism in `index.astro`.

- **Orphaned `public/images/taylor-01.png`** — the old single bio portrait. Unreferenced since the S6 bio switched to the two diagonal portraits (DSCF0172 + DSCF0084, commit `e027470`). Left in place; delete if confirmed it's not needed elsewhere.
