# Nature Life Science

A production marketing website for **Nature Life Science**, a herbal and nutritional poultry-health supplement company (a company by AVC Nutrition). Designed, built, and deployed end to end.

**Live:** https://naturelifescience.in

![Nature Life Science](https://naturelifescience.in/opengraph-image)

Built with **Next.js (App Router) and TypeScript**, deployed on Netlify with a custom domain and automatic HTTPS.

## Highlights

- **Multi-page App Router site** (Home, The Actives, The Formulary, Quality, About, Contact) with animated page transitions and scroll-reveal, all gated behind `prefers-reduced-motion`.
- **Typed product catalogue** as a single source of truth: 16 products across 7 categories live in `lib/products.ts`, and the searchable/filterable formulary grid plus detail views derive from it automatically.
- **Accessible product modal** rendered through a React portal (to escape an ancestor `transform` that otherwise traps a fixed overlay), with a position-preserving body scroll-lock and internal scrolling under a sticky header, so it behaves correctly on both mobile and desktop.
- **SEO foundation:** sitemap, robots, per-page canonical URLs, Open Graph and Twitter cards, Organization/WebSite JSON-LD, a web manifest, a favicon, and a 1200x630 Open Graph image generated with `next/og`.
- **Security hardening:** Content-Security-Policy, X-Frame-Options, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener-Policy and HSTS, applied to every route via `next.config` headers.
- **Performance:** self-hosted fonts (`next/font`), optimized responsive images (`next/image`), and static prerendering of every page.
- **Contact without a backend dependency:** WhatsApp click-to-chat with the enquiry pre-filled from the form, plus an optional Resend-backed email API route.

## Tech stack

- **Framework:** Next.js 14 (App Router), React 18
- **Language:** TypeScript
- **Styling:** hand-written CSS, no UI framework
- **Media:** `next/image`, `next/font`, `next/og`
- **Email:** Resend (serverless route handler)
- **Hosting:** Netlify (CI/CD from GitHub) with a custom domain and automatic HTTPS

## Project structure

```
app/             App Router pages, API route, metadata, sitemap, robots, OG image, manifest
components/      Section and UI components
lib/products.ts  Typed product catalogue (single source of truth)
public/          Images: product datasheets, logos, photography
```

## Run locally

Requires Node 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Environment variables (optional)

The site builds and runs without these. They only enable email delivery for the contact form, which also works through WhatsApp with no setup.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from resend.com |
| `CONTACT_TO_EMAIL` | Address that receives enquiries |
| `CONTACT_FROM_EMAIL` | Verified sender address |
