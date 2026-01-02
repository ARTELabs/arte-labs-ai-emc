
# ARTE Labs — AI Standards Recommender

Select **market** (EU/UK or US) and **radio type** (BLE, Wi‑Fi, GNSS, etc.). Get recommended **Radio**, **EMC**, **Safety**, and **RF Exposure** standards, plus **key clauses** and **official sources**. Export a **Word** report.

## Quick Start
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Build & Run
```bash
npm run build
npm start
```

## Data Sources
- ETSI mapping (EN 301 489-1 and tech parts; EN 300 328, EN 301 893): https://www.etsi.org/standards-search
- FCC Part 15 (Subparts B/C/E; measurement, detectors, labeling): https://www.ecfr.gov/current/title-47/part-15
- IEC 62368-1 (2018/2023): https://webstore.iec.ch/en/publication/27412 • https://webstore.iec.ch/en/publication/69308
- IEC/EN 62311 (2019/2020): https://webstore.iec.ch/en/publication/33985 • https://img.antpedia.com/standard/files/pdfs_ora/20211002/EN%20IEC%2062311-2020.pdf

## Branding
- Place logo at `public/arte-labs-logo.png`.
- Edit colors in `styles/globals.css`.

## Deploy (Vercel)
1. Create a Vercel project and link this repo.
2. Use defaults (no env vars needed).
3. On each push, Vercel builds and deploys automatically.
