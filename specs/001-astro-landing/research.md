# Phase 0: Outline & Research

## Framework & Architecture
- **Decision**: Astro 5.x with Island Architecture
- **Rationale**: Dictated by user requirements. Provides "zero JS by default" to hit performance targets (LCP < 2.5s) while allowing interactive islands for the promo form and navbar.
- **Alternatives considered**: None (Non-negotiable requirement).

## Styling
- **Decision**: Tailwind CSS via `@astrojs/tailwind`
- **Rationale**: Required by user. Replaces CDN Tailwind to comply with Constitution (No heavy runtime dependencies). Enables build-time purging.
- **Alternatives considered**: None.

## Language
- **Decision**: TypeScript (strict mode)
- **Rationale**: Mandated for all `.ts` and `.astro` scripts for clean and structured code (Constitution Rule 7).

## Image Optimization
- **Decision**: `astro:assets` (`<Image />` component)
- **Rationale**: Required for modern formats (WebP), responsive widths, and preventing layout shifts. Replaces hotlinked images.
- **Alternatives considered**: None.

## SEO
- **Decision**: Reusable `<SEO.astro>` component and `@astrojs/sitemap`
- **Rationale**: Constitution Rule 2 requires complete metadata, JSON-LD, and sitemap.

## Icons
- **Decision**: `astro-icon` or `lucide` (SVG)
- **Rationale**: Replaces Font Awesome CDN to improve performance and remove heavy runtime dependencies.

## Linting & Formatting
- **Decision**: ESLint (`eslint-plugin-astro`) and Prettier (`prettier-plugin-astro`)
- **Rationale**: Enforces code quality and cleanliness before completion.

## Hosting & Adapter
- **Decision**: `@astrojs/vercel` (Serverless-ready static output)
- **Rationale**: Target deployment is Vercel. Architecture remains compatible for future SSR/API route upgrades.
