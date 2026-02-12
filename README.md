# Bena2 Landing Page (Static GitHub Pages Version)

This repository has been converted from Vite + React + TypeScript to a pure static website.

## Project Structure

- `docs/index.html`
- `docs/css/style.css`
- `docs/js/main.js`
- `docs/assets/`
- `docs/404.html`

## Run Locally

1. Open `docs/index.html` directly in your browser.
2. Optional local server:
   - `npx serve docs`
   - or `python3 -m http.server --directory docs 8080`

## Deploy to GitHub Pages

1. Push repository to GitHub on `main` branch.
2. Go to `Settings` -> `Pages`.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch: `main`.
5. Select folder: `/docs`.
6. Save.

After deployment, GitHub Pages serves the static files directly with no build step required.
