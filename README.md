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
  <a href="https://github.com/fenrapp/bike-protocol-research">Protocol research</a>
</p>

## ⚡ About this repository

This repository contains the static product website for FENR. It presents the iPhone and Apple Watch apps through real simulator captures, synthetic bike data and concise explanations of the product.

The site is intentionally simple: React, TypeScript and CSS, with no backend, analytics, cookies or persistent user data.

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

You will need a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## ✅ Quality checks

```bash
npm run lint
npm run build
```

The production build is exported as a static site.

## ⚙️ Configuration

Product links are centralized in [`app/site-config.ts`](./app/site-config.ts). The current TestFlight URL is temporary and can be replaced there without searching through the page.

## 🗂️ Project structure

```text
app/
├── globals.css       # Visual system and responsive layout
├── layout.tsx        # Document metadata and favicon
├── page.tsx          # Single page product experience
└── site-config.ts    # External product links

public/assets/        # FENR icons, photography and simulator captures
```

## 🤝 Contributing

Issues and focused pull requests are welcome. Please keep the website lightweight, accessible and grounded in confirmed FENR capabilities.

## 🔍 Open by design

FENR is built in the open so riders can inspect how telemetry is presented and how supported controls are gated. Clean room interoperability research lives in the [bike protocol research repository](https://github.com/fenrapp/bike-protocol-research).

## ⚠️ Independence notice

FENR is an independent, unofficial application. It is not affiliated with, endorsed by, sponsored by or otherwise connected to Stark Future. Stark and related trademarks belong to their respective owners.
