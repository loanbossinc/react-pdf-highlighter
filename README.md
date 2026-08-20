![Node CI](https://github.com/loanbossinc/react-pdf-highlighter/workflows/Node%20CI/badge.svg)

# react-pdf-highlighter

A set of React components for PDF annotation, maintained by LoanBoss. Forked from [agentcooper/react-pdf-highlighter](https://github.com/agentcooper/react-pdf-highlighter).

## Features

- Built on top of PDF.js
- Text and image highlights
- Popover text for highlights
- Scroll to highlights

## Prerequisites

- Node.js (see [`.nvmrc`](.nvmrc) for the required version) <!-- TODO: verify exact version -->
- npm

## Install

```bash
npm install react-pdf-highlighter
```

## Importing CSS

The bundled CSS includes styles for PDF.js. Import it once at your app entry point:

```tsx
import "react-pdf-highlighter/dist/style.css";
```

## Usage

See [`./example/src/App.tsx`](./example/src/App.tsx) for a full component API example.

Key components exported from the package:

- `PdfHighlighter` — main viewer component
- `Highlight` / `AreaHighlight` — highlight renderers
- `Popup` — popover component for highlight annotations
- `Tip` — inline tip component

See [`src/index.ts`](./src/index.ts) for the full public API surface.

## Running the Example App Locally

```bash
npm install
npm start
```

The example app runs via Vite and opens at `http://localhost:5173` by default. <!-- TODO: verify port -->

## Development

### Build the library

```bash
npm run build
```

### Lint and format

This project uses [Biome](https://biomejs.dev/) for linting and formatting:

```bash
npx biome check .
```

### End-to-end tests

```bash
npx playwright test
```
