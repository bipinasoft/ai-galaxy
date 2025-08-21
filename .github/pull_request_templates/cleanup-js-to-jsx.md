## Title
chore: cleanup legacy .js duplicates and make generators emit .jsx

## Summary
This branch removes legacy `.js` component duplicates that conflicted with Vite/esbuild JSX parsing, and updates the generator scripts to emit `.jsx` files by default and auto-clean `.js` duplicates when run.

## Changes
- Removed legacy `.js` files that have `.jsx` counterparts.
- Updated generator scripts (`script.py`, `script_1.py`, `script_2.py`, `script_3.py`, `script_4.py`) to write files using UTF-8 and to delete legacy `.js` duplicates before writing `.jsx`.
- Fixed minor indentation/encoding issues in scripts.
- Updated GitHub Pages workflow (`.github/workflows/deploy.yml`) to enable Pages via `actions/configure-pages@v4`.

## Testing checklist
- [ ] Run `npm install` then `npm run dev` locally and confirm the site loads at `http://localhost:3000/ai-galaxy/`.
- [ ] Confirm Header, Hero, Models, Services, Training, Pricing, Testimonials, Footer render without runtime console errors.
- [ ] Click the Chat button and verify chat UI opens and simulated responses appear.
- [ ] Confirm no build-time JSX parse errors: run `npm run build` and expect success.
- [ ] Confirm GitHub Actions workflow for `deploy.yml` completes successfully (configure-pages step should not fail with 'Get Pages site failed').

If any step fails, paste console/Actions logs in this PR for triage.

---
Automated: created by maintenance script to collect PR metadata.
