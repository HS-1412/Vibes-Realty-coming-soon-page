# Vibes Realty — Coming Soon

Premium, animated "coming soon" landing page for **Vibes Realty** (Buy · Sell
· Rent · Lease — Surat), built with Next.js 15 (App Router), TypeScript,
Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx          Root layout, fonts, full SEO metadata
    page.tsx             Assembles the homepage + JSON-LD structured data
    globals.css          Tailwind layers + design tokens
    robots.ts             Dynamic robots.txt
    sitemap.ts             Dynamic sitemap.xml
    favicon.ico / icon.png / apple-icon.png   Favicon set (from the brand mark)
    opengraph-image.png / twitter-image.png   Social share cards
  components/
    Navbar.tsx            Logo, wordmark and click-to-call chip
    Hero.tsx               Headline and email capture
    AnimatedBackground.tsx Signature rotating medallion motif + glow blobs
    EmailSubscribe.tsx      "Notify Me" form (front-end only, see below)
    Toast.tsx                Success toast
    ContactCard.tsx          Phone, WhatsApp, email, address & Instagram
    Footer.tsx
    Logo.tsx
  lib/
    site-config.ts        Single source of truth for brand + contact details
    fonts.ts                 Self-hosted Fraunces + Inter via next/font/local
  assets/fonts/            Variable font files (OFL licensed, bundled — no
                            runtime dependency on Google's font CDN)
```

## Where to make changes

### Contact details, address, socials
Everything lives in **`src/lib/site-config.ts`**. Change a value there and it
updates everywhere it's used (navbar, contact card, JSON-LD, metadata).

### Hero background
The hero currently uses a generated gradient + SVG scene
(`src/components/AnimatedBackground.tsx`) rather than a stock photo, so there
are no licensing concerns and nothing to swap before shipping. To use a real
photograph instead:

1. Add your image to `public/` (e.g. `public/hero.jpg`).
2. In `src/components/Hero.tsx`, add a `next/image` (or plain `<img>`) as the
   first child of the `<section>`, `absolute inset-0 h-full w-full object-cover`,
   with a dark overlay div on top (`bg-ink/70` or similar) so the text stays
   legible, then keep `<AnimatedBackground />` above it at reduced opacity for
   the glow/motion, or remove it entirely.

### Logo / favicon
The favicon set, app icon, Apple touch icon and the navbar mark are all
generated from the supplied brand mark. Replace `public/logo-icon.png` (and
regenerate the sizes in `public/`) if the logo changes.

### Email capture
`EmailSubscribe.tsx` has no backend wired up, per the brief — submitting
shows a local "Thanks! We'll notify you." toast. To collect real emails,
replace the `window.setTimeout` block in `handleSubmit` with a real request,
e.g.:

```ts
const res = await fetch("/api/subscribe", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});
```

and add a matching `src/app/api/subscribe/route.ts` that forwards to your
mailing list provider of choice.

## SEO

- Metadata (title, description, keywords, canonical, OpenGraph, Twitter
  cards, robots) is centralized in `src/app/layout.tsx`.
- `robots.ts` and `sitemap.ts` use the App Router's file conventions and read
  the site URL from `NEXT_PUBLIC_SITE_URL`.
- Set `NEXT_PUBLIC_SITE_URL` in `.env.local` (see `.env.example`) to your real
  production domain before deploying.
- `RealEstateAgent` JSON-LD structured data is embedded in `page.tsx` using
  the real address, phone and Instagram profile.

## Performance notes

- Fonts (Fraunces, Inter) are self-hosted variable fonts loaded via
  `next/font/local` — no external font-CDN request at runtime.
- All raster images go through `next/image`; the only images shipped are the
  small favicon/logo assets and the static OG card.
- Background motion respects `prefers-reduced-motion`.
- No client-side dependencies beyond `framer-motion` and `lucide-react`.
