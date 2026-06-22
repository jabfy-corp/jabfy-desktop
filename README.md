# jabfy-desktop

Electron desktop application for Jabfy. The primary user-facing shell that wraps jabfy-core.

## Stack

- Electron
- React + TypeScript
- Vite

## Setup

```bash
npm install
```

## Development

```bash
npm run electron:dev
```

This starts both the Vite dev server and Electron in development mode with hot reload.

## Build

```bash
npm run build
```

Builds the React app for production.

## Package

```bash
npm run electron:build
```

Creates a distributable Electron application in the `release/` directory.
