# Implementation Plan: Astro Landing Page Rewrite

**Branch**: `001-astro-landing` | **Date**: 2026-08-26 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-astro-landing/spec.md`

## Summary

Bangun ulang website landing page "Sayur Online Bantul (SOB)" dari prototype HTML statis menjadi situs production-grade multi-page berbasis Astro dengan arsitektur Island ("zero JS by default"), mempertahankan konten dan class Tailwind, dengan target skor Lighthouse ≥ 95 dan SEO 100.

## Technical Context

**Language/Version**: TypeScript (strict mode), Astro 5.x

**Primary Dependencies**: `@astrojs/tailwind`, `@astrojs/sitemap`, `@astrojs/vercel`, `astro-icon` / `lucide`

**Storage**: Hardcoded data (via `src/config/site.ts`), no backend/database required.

**Testing**: Lighthouse, Core Web Vitals checks. Validation via manual testing & static typing.

**Target Platform**: Vercel (Serverless-ready static deployment).

**Project Type**: Static web application with interactive islands.

**Performance Goals**: Core Web Vitals "Good" (LCP < 2.5s, INP < 200ms, CLS < 0.1), Lighthouse Mobile ≥ 95 (all categories).

**Constraints**: "Zero JS by default", Mobile-First (70% traffic), Semantic HTML5, No heavy runtime dependencies (no Tailwind CDN, no external font awesome). All images must be processed by Astro.

**Scale/Scope**: ~5 pages (Home, Promo, 3 Categories), single project scope.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **PERFORMANCE-FIRST**: Met via Astro's Island architecture, zero JS by default, local asset optimization, and `@astrojs/tailwind` for CSS purging.
- **SEO & LOCAL DISCOVERABILITY**: Met via `<SEO.astro>` component, automated sitemap/robots.txt, JSON-LD schemas.
- **TIDAK ADA DEPENDENSI RUNTIME YANG BERAT**: Tailwind CDN and Font Awesome CDN removed, replaced with build-time CSS and SVG icons.
- **GAMBAR**: Hotlinking eliminated in favor of local `astro:assets` image processing.
- **AKSESIBILITAS**: Semantic HTML structure planned, WCAG 2.1 AA requirements integrated into verification.
- **MOBILE-FIRST & RESPONSIVE**: Maintained via Tailwind classes from prototype.
- **KODE BERSIH & TERSTRUKTUR**: TypeScript strict mode enabled, configuration centralized in `src/config/site.ts`.
- **HOSTING & DEPLOY**: `@astrojs/vercel` adapter configured.
- **TIDAK ADA AMBIGUITAS**: Implementation relies on Astro's modern standard ecosystem (2025-2026).

## Project Structure

### Documentation (this feature)

```text
specs/001-astro-landing/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit-tasks command)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── WhatsAppFloatingButton.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── SocialProofStrip.astro
│   │   ├── CategoryGrid.astro
│   │   ├── HowToOrder.astro
│   │   ├── Testimonials.astro
│   │   ├── LocationMap.astro
│   │   ├── GrabMartCallout.astro
│   │   └── PromoLeadForm.astro
│   └── seo/
│       ├── SEO.astro
│       └── JsonLd.astro
├── config/
│   └── site.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── promo.astro
│   └── kategori/
│       ├── sayur-segar.astro
│       ├── sembako.astro
│       └── buah.astro
├── assets/
│   └── images/
└── styles/
    └── global.css
```

**Structure Decision**: A single web application frontend structure exactly as mandated by the user specifications.
