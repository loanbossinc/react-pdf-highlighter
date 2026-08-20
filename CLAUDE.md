# react-pdf-highlighter — CLAUDE.md

LoanBoss fork of an open-source React PDF annotation library. TypeScript component library built on PDF.js, bundled with Vite, published as an npm package.

## Build & Test Commands

```bash
# Install dependencies
npm install

# Run the example app locally (Vite dev server)
npm start

# Build the distributable library
npm run build

# Lint and format with Biome
npx biome check .
npx biome check --apply .   # auto-fix

# Run end-to-end tests (Playwright)
npx playwright test
npx playwright test --ui     # interactive UI mode
```

## Architecture

```
src/
  components/   # React components (PdfHighlighter, Highlight, AreaHighlight, Popup, Tip, …)
  lib/          # Internal utilities (PDF.js wrappers, geometry helpers, event logic)
  style/        # Component CSS (bundled into dist/style.css)
  index.ts      # Public API — only symbols exported here are part of the package surface
  types.ts      # Shared TypeScript types (IHighlight, LTWH, LTWHP, …)

example/        # Standalone Vite app demonstrating the library — not published
e2e/            # Playwright end-to-end tests against the example app
```

The library wraps PDF.js (`pdfjs-dist`) to render PDFs inside a scrollable container and overlays React-managed highlight layers. Text highlights use PDF.js text layer coordinates; area (image) highlights use bounding-box drag selection.

## Key Conventions

- **TypeScript strict mode** — all public API types live in `src/types.ts`; do not add ad-hoc `any` casts.
- **Biome** replaces ESLint + Prettier — run `biome check --apply` before committing; CI enforces this.
- **Public surface** — `src/index.ts` is the single export barrel; adding a new component to `src/components/` does not expose it until it is re-exported there.
- **CSS isolation** — component styles live in `src/style/`; consumers must import `dist/style.css` explicitly (not auto-injected).
- **Example app** (`example/`) is a separate Vite project with its own `tsconfig.json` and `vite.config.ts`; it is not built as part of `npm run build`.
- **Node version** — use the version pinned in `.nvmrc` (`nvm use` before running anything). <!-- TODO: verify -->
- **No default exports** — all exports are named.
