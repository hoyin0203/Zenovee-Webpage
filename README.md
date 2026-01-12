# Zenovee Webpage

This repository contains the **Zenovee marketing website** built with **Astro**, designed to be **Shopify-review ready** for ZenMerch.

## What’s included

- **ZenMerch**: Overview, Features, Pricing, Demo, Docs, FAQ
- **Shop**: ZenCraft Gifts shop landing page (`/shop`) that links out to your Shopify storefront
- **Services**: Website / Web app / Shopify development
- **Legal**: Privacy, Terms, Cookies
- **Company**: About, Roadmap
- **Contact form**: `POST /api/contact` (Vercel compatible)
- **Animations**: Scroll reveal + subtle WebGL background

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Copy:

- `env.example` → `.env`

Common:

- `PUBLIC_ZENCRAFT_SHOP_URL` (optional): your ZenCraft Shopify storefront URL (used by the “Shop now!” CTA)

## Contact form (email delivery)

Recommended: use **Resend** on Vercel.

Set:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- (optional) `CONTACT_FROM_EMAIL`

## Sanity CMS (Next.js Studio)

This repo includes a **Next.js** app at `studio/` that hosts **Sanity Studio**.

```bash
cd studio
npm install
npm run dev
```

Setup:

- Copy `studio/env.example` → `studio/.env.local`
- Set:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
