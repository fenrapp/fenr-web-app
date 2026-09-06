<p align="center">
  <img src="./public/assets/favicon-rounded.png" width="96" height="96" alt="FENR logo">
</p>

<h1 align="center">FENR Web</h1>

<p align="center">
  <strong>Your bike. Clearly connected.</strong>
</p>

<p align="center">
  <a href="https://fenr.to">Website</a> ·
  <a href="https://fenr.to/privacy">Privacy</a> ·
  <a href="https://fenr.to/terms">Terms</a>
</p>

The product website for FENR, an open-source iPhone and Apple Watch companion for compatible Stark electric motorcycles.

Built with React, TypeScript, Vinext/Vite and plain CSS. Statically exported and hosted on Netlify, with no backend or analytics.

## 🚀 Run locally

Requires Node.js 22.13+ and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## ✅ Checks

```bash
npm run lint
npm test
npx tsc --noEmit
node scripts/check-media.mjs
npm run build
```

## 🛠️ Working on the site

- **Content and styles:** [`app/`](./app/).
- **TestFlight and product links:** [`app/site-config.ts`](./app/site-config.ts).
- **Media:** originals in [`public/assets/`](./public/assets/), optimized files in [`public/media/`](./public/media/).

Use real light/dark app captures with synthetic data. After replacing images, regenerate the optimized files with `cwebp` installed (`brew install webp` on macOS):

```bash
node scripts/optimize-images.mjs
```

Include the generated files and [`app/optimized-media.json`](./app/optimized-media.json) with the source changes. Normal builds do not need the encoder.

## 📜 License

[MIT](./LICENSE). Third-party dependencies retain their own licenses.

FENR is independent and unofficial, and is not affiliated with Stark Future.
