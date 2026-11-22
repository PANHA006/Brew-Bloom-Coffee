# Brew & Bloom Coffee

A React coffee shop website built with Vite.

## Copy to another folder

Use `homework-react-app-clean.zip`, or copy these items into your new folder:

- `src/` and `public/`
- `index.html`
- `package.json` and `package-lock.json`
- `vite.config.js`
- `.oxlintrc.json` and `.gitignore`
- `README.md`

Do not copy `node_modules/`, `dist/`, or `.workbuddy-ai/`. Dependencies and build output are regenerated; AI history is local to the original workspace.

## Start the project

Install Node.js 22.12 or newer. Open a terminal in the copied project folder and run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. On Windows, if PowerShell blocks `npm.ps1`, use `npm.cmd` instead of `npm` for these commands.

## Other commands

```sh
npm run lint
npm run build
npm run preview
```

The build is generated in `dist/`. The preview command serves that build locally.

The page loads Tailwind CSS from a CDN, so an internet connection is required for its styling. Installing dependencies also requires internet access.
