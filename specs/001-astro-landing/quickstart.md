# Quickstart & Validation Guide

## Prerequisites
- Node.js (v18+)
- npm or pnpm

## Setup
1. Run `npm install` to install dependencies.
2. (For testing) Replace placeholder images in `src/assets/images/` with real images when available.

## Development
To run the local development server:
```bash
npm run dev
```
Visit `http://localhost:4321` to verify the site renders correctly.

## Validation Scenarios

### 1. Build and Preview
Verify the production build works without errors:
```bash
npm run build
npm run preview
```
Ensure no errors or warnings appear during the build step, confirming that TypeScript strict mode and Astro constraints are met.

### 2. Lighthouse & Web Vitals
Run Google Lighthouse against the local preview server (`http://localhost:4321` or the specified preview port) using Chrome DevTools or CLI:
- **Target**: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100.
- Verify "zero JS by default" implementation by checking the network tab for minimal JS payload.

### 3. Interactive Elements (Client-side JS)
- Test the navbar scroll effect.
- Test the promo form validation by entering valid/invalid data and verifying the generated WhatsApp URL format.
- Click category items on the homepage to ensure they trigger the correct WhatsApp redirect.

### 4. SEO & Metadata
- Inspect the generated `sitemap.xml` and `robots.txt` at the root URL (e.g. `http://localhost:4321/sitemap-index.xml`).
- Check `<head>` of the Homepage and Category pages for unique Title, Meta Description, JSON-LD `GroceryStore` schema, and Open Graph/Twitter Card tags.
