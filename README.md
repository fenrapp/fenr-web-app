<p align="center">
  <img src="./public/assets/favicon-rounded.png" width="96" height="96" alt="FENR logo">
</p>

<h1 align="center">FENR</h1>

<p align="center">
  <strong>Your bike. Clearly connected.</strong>
</p>

<p align="center">
  The open source riding companion for compatible Stark electric motorcycles.
</p>

<p align="center">
  <a href="#-run-locally">Run locally</a> ·
  <a href="#-what-the-site-covers">Features</a> ·
  <a href="#-privacy-and-terms">Privacy &amp; terms</a> ·
  <a href="https://github.com/fenrapp/bike-protocol-research">Protocol research</a>
</p>

## ⚡ About this repository

This repository contains the static product website for FENR. It presents the iPhone and Apple Watch apps through real simulator captures, synthetic bike data and concise explanations of the product.

The site is intentionally simple: React, TypeScript and CSS, with no backend, analytics or cookies. Only a visitor's chosen color scheme is saved locally. A real simulator video introduces the app, followed by a horizontal feature tour and dedicated Apple Watch and Live Activities sections.

## 🏍️ What the site covers

- **Live riding dashboard:** speed, battery, power mode, regeneration and energy use.
- **Complete navigation:** road routing, enduro guidance, route recording and GPX import or export.
- **Dynamic Cards:** configurable pages for trips, efficiency, range, system health, ride dynamics and more.
- **Charging and battery health:** charge power, target, ETA, cell balance, voltage spread and thermal data.
- **Guarded bike controls:** capability aware configuration for supported power, regeneration and traction settings.
- **Bike Log:** ride history, service records, costs and maintenance reminders based on published Stark guidance.
- **Advanced telemetry:** decoded vehicle data, raw signals, connection quality and exportable Bluetooth logs.
- **Apple Watch and Live Activities:** direct Watch connectivity plus compact information on the Lock Screen and Dynamic Island.

## 🧰 Stack

- React
- TypeScript
- Vinext and Vite
- Plain CSS
- Static export

## 🚀 Run locally

You will need Node.js 22.13 or newer (an LTS release is recommended) and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## ✅ Quality checks

```bash
npm run lint
npm test
npx tsc --noEmit
node scripts/check-media.mjs
npm run build
```

The production build is exported as a static site.

## ⚙️ Configuration

Product links are centralized in [`app/site-config.ts`](./app/site-config.ts). The current TestFlight URL is temporary and can be replaced there without searching through the page.

## 📄 Privacy and terms

The website includes dedicated, statically exported legal pages linked from its footer:

- **[Privacy Policy](https://fenr.to/privacy):** local bike and ride records, permissions, diagnostic logs, maps, exports, TestFlight, website hosting and data rights.
- **[Terms & Conditions](https://fenr.to/terms):** authorized motorcycle use, supported controls, navigation and maintenance limitations, MIT licensing and Apple distribution.

Both pages share a responsive document layout, a section index, light/dark appearance and print styles. They are written in English and describe the current iPhone and Apple Watch app, not hypothetical accounts or cloud services.

Cross-page navigation uses native HTML links so it works directly with the static export, without relying on a client-side router. `npm test` checks this contract; verify actual clicks against the production export when changing navigation.

Provider details and the last-updated date are centralized in [`app/legal-config.ts`](./app/legal-config.ts):

- **Provider:** Oscar Antonio Duran Grillo
- **Location:** Barcelona, Spain
- **Contact:** [support@oduran.me](mailto:support@oduran.me)
- **Last updated:** September 5, 2026

When app behavior or data handling changes, review the corresponding policy text and update the document date. Keep App Store privacy disclosures and in-app legal links aligned separately; these web pages do not replace them or guarantee App Store approval.

## 🗂️ Project structure

```text
app/
├── globals.css          # Shared styles, hero, trust and footer
├── companions.css       # Apple Watch and Live Activities layouts
├── product-tour.css     # Responsive feature cards and tour controls
├── product-story.tsx    # Feature content and horizontal tour
├── motion-controller.tsx # Scroll reveals and visible-only video playback
├── theme-toggle.tsx     # System appearance and saved light/dark choice
├── color-scheme.css     # Light/dark tokens and theme control styles
├── responsive-image.tsx # Static responsive WebP rendering
├── optimized-media.json # Generated content-fingerprinted asset registry
├── layout.tsx           # Document metadata and favicon
├── page.tsx             # Product landing page and legal footer links
├── privacy/page.tsx     # Privacy Policy at /privacy
├── terms/page.tsx       # Terms & Conditions at /terms
├── legal-document.tsx  # Shared legal page layout and section navigation
├── legal-config.ts     # Provider, contact and document date
├── legal.css           # Legal pages, footer links and print styles
└── site-config.ts       # External product links

public/assets/           # FENR icons, photography, WebP captures and video
public/media/            # Generated responsive files with immutable URLs
scripts/                 # Local image generation and integrity checks
```

The tour uses native scrolling with keyboard-accessible navigation. Scroll effects respect reduced motion, and the hero video pauses outside the viewport. Reduced motion and data-saving preferences disable automatic video playback. All app media uses synthetic simulator data.

## 🪶 Loading and appearance

Images use responsive WebP variants, reserved dimensions and lazy loading below the hero. The hero uses a single video surface with a lightweight poster, so a fallback dashboard cannot show behind playback. Autoplay is disabled for reduced motion, Save-Data and reported 2G/3G connections.

The site initially follows the browser/system light or dark appearance. A header button switches modes and remembers only that choice locally. A tiny pre-paint script restores it without a theme flash. Styles and fonts are served locally; there are no third-party font or stylesheet requests.

Netlify serves the static site through its CDN. Generated files in `public/media/` have content hashes and a one-year immutable browser cache. Other files keep default revalidation so new releases appear correctly.

After replacing source captures in `public/assets/`, install the WebP encoder (`brew install webp` on macOS) and run:

```bash
node scripts/optimize-images.mjs
```

Commit the generated `public/media/` files and `app/optimized-media.json` along with the source changes. Normal builds do not need the encoder. Original captures remain available for future exports.

## 🤝 Contributing

Issues and focused pull requests are welcome. Please keep the website lightweight, accessible and grounded in confirmed FENR capabilities.

## 🔍 Open by design

FENR is built in the open so riders can inspect how telemetry is presented and how supported controls are gated. Clean room interoperability research lives in the [bike protocol research repository](https://github.com/fenrapp/bike-protocol-research).

## ⚠️ Independence notice

FENR is an independent, unofficial application. It is not affiliated with, endorsed by, sponsored by or otherwise connected to Stark Future. Stark and related trademarks belong to their respective owners.
