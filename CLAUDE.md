# react-pdf-highlighter — CLAUDE.md

## Project Overview
React component library for PDF annotation and highlighting, adapted by LoanBoss from the open-source `react-pdf-highlighter` package. Provides a set of React components that render PDF documents with support for text highlights, area selections, and annotation tooltips. Used within the LoanBoss platform for document review workflows.

## Tech Stack
- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: React 16.4+ / 18.x (peer dependency)
- **PDF Rendering**: `pdfjs-dist`
- **Key Dependencies**: `react-rnd` (resizable/draggable), `lodash.debounce`
- **Build**: TypeScript compiler (`tsc`) — outputs both ESM and CJS bundles
- **Example App**: Vite
- **Testing**: Jest + Puppeteer
- **Formatting**: Prettier
- **Package Manager**: npm / pnpm

## Repository Structure
```
src/                     # Library source (TypeScript)
  style/                 # CSS styles (copied to dist on build)
dist/
  esm/                   # ES module build (main export)
  cjs/                   # CommonJS build
example/                 # Vite-based demo application
tests/                   # Jest/Puppeteer integration tests
create-react-app-example/ # CRA-based example (legacy)
```

## Build & Run

### Install dependencies
```bash
npm install
```

### Build the library
```bash
npm run build
# Produces: dist/esm/ and dist/cjs/
```

### Run the example app (development)
```bash
npm run dev
# Opens the Vite example app
```

### Run tests
```bash
npm test
# Runs Prettier format check + Jest/Puppeteer tests
```

### Format code
```bash
npm run format
```

## Publishing
The library is published as `react-pdf-highlighter` v5.3.0. The `files` field in `package.json` limits the published output to `dist/`.

## Entry Points
| Format | Path |
|--------|------|
| ES Module | `./dist/esm/index.js` |
| CommonJS | `./dist/cjs/index.js` |
| Types | `./dist/esm/index.d.ts` |

## Notes
- Styles must be imported separately: `import 'react-pdf-highlighter/dist/esm/style/...'`
- Peer dependencies (`react`, `react-dom`) must be installed by the consuming application
