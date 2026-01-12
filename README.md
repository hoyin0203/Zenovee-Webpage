## Zenovee official website (Astro)

This folder contains the **Zenovee marketing website** built with **Astro** and designed to be **Shopify-review ready** for ZenMerch:

- ZenMerch: **Features**, **Pricing**, **Demo**, **Docs**, **FAQ**
- Legal: **Privacy**, **Terms**, **Cookies**
- Company: **About**, **Roadmap**
- Services + Solutions pages
- **Contact form** backed by a Vercel-compatible API route
- Global **scroll fade-in** + subtle **WebGL** background animation on every page

### Local development

```bash
cd website
npm install
npm run dev
```

### Contact form (email delivery)

The contact form posts to `POST /api/contact`.

Recommended: use **Resend** on Vercel.

1. Copy `env.example` → `.env`
2. Set:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - (optional) `CONTACT_FROM_EMAIL`

If not configured, the endpoint still redirects to `/contact?sent=1` (so the UX isn’t broken while you’re setting up), but it will only log a warning server-side.

### Hosting recommendation (Vercel + Sanity)

**Yes—Vercel + Sanity is a very solid choice** for a new company:

- **Vercel**: excellent DX for Astro/Next, fast global CDN, easy preview deployments.
- **Sanity**: flexible content modeling (great for docs/legal pages, products, FAQs), quick to iterate without code changes.

Suggested domain strategy (matches your blueprint):

- **Marketing**: `zenovee.com` (this site)
- **App backend**: `zenmerch.zenovee.com` (already in use)
- Optional later:
  - `studio.zenovee.com` (Sanity Studio)

### Sanity CMS (Next.js Studio)

This repo also includes a **Next.js** app at `website/studio/` that hosts **Sanity Studio** at `/studio`.

Local dev:

```bash
cd website/studio
npm install
npm run dev
```

Setup:

- Copy `website/studio/env.example` → `website/studio/.env.local`
- Set:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`

Deploy suggestion:

- Create a second Vercel project pointing at `website/studio`
- Attach it to `studio.zenovee.com` (same root domain; no need to buy another)


