# LUXESTAY

A premium luxury villa and resort booking website built as a professional portfolio concept. All properties, rates, ratings, traveler stories, and brand information are fictional demonstration content.

## Features

- Six-page editorial experience: Home, Explore Stays, dynamic Property Details, Destinations, About, and Contact
- Twelve curated demo properties across six destinations
- Combined search, destination, property type, price, capacity, and rating filters with sorting and empty states
- Property galleries with a keyboard accessible lightbox
- Favorites and demo reservations saved in browser `localStorage`
- Transparent nightly rate estimates, input validation, and a confirmation screen
- Responsive layouts, semantic markup, visible focus states, and reduced-motion support
- Demo-only newsletter and contact forms with honest feedback
- Next.js metadata, optimized remote images, and a custom favicon

## Technology

Next.js App Router, React, TypeScript, Tailwind CSS, Motion, Lucide React, and Next.js Image.

## Run locally

Requires a current Node.js LTS release and internet access to install packages. Photographs and fonts are bundled locally, so runtime rendering needs no external image or font service.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. In this Windows folder, the `&` in the path requires PowerShell as npm's script shell. Use `npm.cmd --script-shell=powershell.exe run dev` after `npm.cmd install`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

On Windows in this folder, prefix each script command with `npm.cmd --script-shell=powershell.exe`, for example `npm.cmd --script-shell=powershell.exe run build`.

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository into Vercel and select the Next.js framework preset.
3. Keep the default build command (`next build`) and deploy. No API keys or database are needed.

## Demo data and integration path

`src/data/properties.ts` contains the property catalog and destination content. `src/types/index.ts` defines the property and reservation models. The booking workflow in `src/app/booking/[slug]/booking-client.tsx` currently writes to `localStorage` via `src/lib/booking.ts`; replace that function with a server action or API request when integrating a real booking backend, real availability, and payment processing. Do not treat current estimated prices or reservations as live inventory.

Photography was sourced from stable Unsplash image URLs and stored in `public/images` so Next.js Image can optimize it without remote fetches. Source IDs are recorded in `src/data/properties.ts`; `scripts/check-images.mjs` verifies the original source URLs. The UI also provides a graceful fallback if an image fails to load.

## Current limitations

- The catalog has no live availability; dates are validated for demo estimates and do not check inventory.
- Reservations and favorites are specific to the current browser and can be cleared with browser storage.
- Contact and newsletter forms do not submit to a server.
- `npm audit --omit=dev` reports no production dependency vulnerabilities. The development-only Next.js ESLint dependency chain currently reports five high-severity transitive advisories; npm's suggested forced fix would downgrade the Next.js ESLint configuration to an incompatible major version.
