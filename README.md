# University Conference Website

Static SolidJS site ready for deployment to GitHub Pages.

## Local development (Bun)

```bash
bun install
bun run dev
```

## Production build

```bash
bun run build
```

Build output is generated in `dist/`.

## GitHub Pages deployment

This repository includes a ready workflow:

- `.github/workflows/deploy-pages.yml`

It runs on pushes to `main` and publishes `dist/` to GitHub Pages.

### One-time repository setup

1. Open repository settings on GitHub.
2. Go to **Pages**.
3. Set **Source** to **GitHub Actions**.

After that, each push to `main` triggers deployment automatically.
