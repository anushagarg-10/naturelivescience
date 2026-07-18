# Nature Life Science — website

Marketing site for Nature Life Science (herbal & nutritional poultry supplements),
built with **Next.js (App Router) + TypeScript**.

- Section components in `components/`
- Product catalogue (typed) in `lib/products.ts`
- Photos via `next/image`, fonts via `next/font`
- Contact form posts to `app/api/contact/route.ts` → **Resend**

---

## 1. Run locally

Requires Node 18.18+ (Node 20 LTS recommended).

```bash
npm install
cp .env.example .env.local   # then fill in values (see below)
npm run dev                  # http://localhost:3000
```

Build / production check:

```bash
npm run build
npm start
```

## 2. Environment variables

Set these in `.env.local` (local) and in your host's dashboard (production):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) — enables the contact form |
| `CONTACT_TO_EMAIL` | Address that receives enquiries |
| `CONTACT_FROM_EMAIL` | Verified sender (e.g. `Nature Life Science <enquiries@naturelifescience.com>`). Use `onboarding@resend.dev` while testing. |

The site builds and runs without these — only the contact form needs them to deliver mail.

## 3. Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. In Vercel → **New Project** → import the repo (framework auto-detected as Next.js).
3. Add the three environment variables above under **Settings → Environment Variables**.
4. Deploy. Then **Settings → Domains** → add `naturelifescience.com` and `www.naturelifescience.com`, and set the DNS records Vercel shows at your registrar.

HTTPS is automatic.

## 4. Swapping in real photography

Three photos are currently free-license Unsplash URLs, referenced in:

- `components/Hero.tsx` — `HERO_PHOTO`
- `components/Philosophy.tsx` — `BAND_PHOTO`
- `components/Quality.tsx` — `QUALITY_PHOTO`

To use the client's own images, drop them in `public/` (e.g. `public/hero.jpg`) and
change the `src` to `"/hero.jpg"`. You can then remove the `images.remotePatterns`
entry in `next.config.mjs`. The duotone/arch treatment is CSS, so it carries over.

## 5. Editing products

All product data lives in `lib/products.ts` — add, edit or reorder entries there and
the formulary grid, filters, search and detail modals update automatically.

## Notes

- 15 products, grouped into six categories in `lib/products.ts`.
- The ISO mark is shown as **ISO 9001:2015** (the current standard, per the AVC approach sheet). Note the older contact page reads "9001-2001" — confirm the correct wording with the client.
- Domain/branding use **naturelifescience.in** and "A company by AVC Nutrition".
- `prefers-reduced-motion` is respected throughout.
