# Feature Specification: Astro Landing Page Rewrite

**Feature Branch**: `[001-astro-landing]`

**Created**: 2026-08-26

**Status**: Draft

**Input**: User description: "Bangun ulang website landing page Sayur Online Bantul (SOB) dari prototype HTML statis..."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Home Page Exploration & Navigation (Priority: P1)

As a potential customer from Bantul or Yogyakarta, I want to explore the homepage so that I can see the available product categories, read testimonials, find the physical store location, and understand how to order via WhatsApp or GrabMart.

**Why this priority**: The homepage is the primary entry point and conversion funnel. If it doesn't convey trust and provide clear CTA paths, all other pages will have low conversion.

**Independent Test**: Can be tested by visiting the homepage, verifying the layout matches the prototype, all sections (Hero, Categories, Testimonials, Map, Footer) are present, and clicking the WhatsApp/GrabMart links opens the correct destinations.

**Acceptance Scenarios**:

1. **Given** I am on the homepage, **When** I click a product category, **Then** my WhatsApp opens with a pre-filled message according to that category.
2. **Given** I am on the homepage, **When** I click the floating WhatsApp button, **Then** my WhatsApp opens with the default order message.
3. **Given** I am browsing the homepage, **When** I scroll through the page, **Then** the navbar remains sticky at the top for easy navigation.

---

### User Story 2 - Form Leads/Promo Submission (Priority: P1)

As a user interested in a promo, I want to fill out a simple form with my name, phone number, and area, so that my order is pre-formatted and sent to SOB's WhatsApp.

**Why this priority**: Capturing leads through promotions is a key marketing channel that directly impacts sales.

**Independent Test**: Can be tested by filling the form with valid and invalid data, verifying validation errors, and confirming that successful submission formats the WhatsApp URL correctly.

**Acceptance Scenarios**:

1. **Given** I am on the promo form, **When** I submit with empty fields, **Then** I see validation errors preventing submission.
2. **Given** I am on the promo form, **When** I submit with valid name, phone, and area, **Then** my WhatsApp opens with a message containing my submitted details.

---

### User Story 3 - Category Pages for SEO (Priority: P2)

As a search engine user looking for specific items (e.g., "sayur segar bantul"), I want to land on a dedicated category page so that I can find exactly what I'm looking for and easily navigate to the main site to order.

**Why this priority**: Expanding SEO footprint through long-tail keywords is crucial for organic growth.

**Independent Test**: Can be tested by visiting `/kategori/sayur-segar` (or similar), verifying the presence of a unique H1, unique description, internal link to the homepage, and correct SEO meta tags.

**Acceptance Scenarios**:

1. **Given** I am on a category page, **When** I read the content, **Then** I see a unique H1 and description specific to that category.
2. **Given** I am on a category page, **When** I want to order or see more, **Then** I can use a clear internal link to return to the homepage.

---

### User Story 4 - Dedicated Promo Landing Page (Priority: P2)

As a user clicking an ad, I want to land on a dedicated promo page without distraction so that I can immediately claim the offer.

**Why this priority**: Useful for targeted marketing campaigns separate from the main homepage traffic.

**Independent Test**: Can be tested by navigating to `/promo` and verifying the presence of the promo form and relevant messaging.

**Acceptance Scenarios**:

1. **Given** I visit `/promo`, **When** the page loads, **Then** I see the dedicated promo content and the lead form.

### Edge Cases

- What happens when JavaScript is disabled? (The site should still render text and images correctly; form submission gracefully degrades or fails with clear info).
- What happens when a user submits the promo form with an unusually long name or special characters?
- What happens when the user clicks a WhatsApp link but doesn't have WhatsApp installed? (The browser handles this via the wa.me fallback page).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST render a multi-page website using Astro, preserving the existing HTML prototype's visual design, content, and copy.
- **FR-002**: System MUST include a Homepage (`/`) with sticky navbar, Hero, Categories grid, "Cara Pesan", Testimonials (Google Review), Location/Maps, GrabMart callout, Footer, and floating WA button.
- **FR-003**: System MUST include a Promo Lead Form that validates Name, Phone, and Area, and upon submission, redirects to WhatsApp with a pre-filled formatted message.
- **FR-004**: System MUST include dedicated SEO Category pages (e.g., `/kategori/sayur-segar`, `/kategori/sembako`, `/kategori/buah`) each with a unique H1, unique description, and internal links back to the homepage.
- **FR-005**: System MUST include a dedicated Promo Landing Page (`/promo`).
- **FR-006**: System MUST generate valid `sitemap.xml` and `robots.txt` at build time.
- **FR-007**: System MUST provide comprehensive SEO metadata per page (unique `<title>`, unique meta description, canonical tag, Open Graph, Twitter Card with local images, `lang="id"`).
- **FR-008**: System MUST include JSON-LD structured data (schema.org `GroceryStore` or `LocalBusiness`) on the homepage containing name, local image, PostalAddress, telephone, openingHoursSpecification, geo coordinates, aggregateRating (4.9/5), and priceRange.
- **FR-009**: System MUST use Semantic HTML5 elements (`nav`, `main`, `section`, `article`, `footer`) and enforce a strict heading hierarchy (one `<h1>` per page).
- **FR-010**: System MUST process all images as local assets via the framework's image pipeline (WebP/AVIF, responsive srcset, lazy loading, explicit sizing) and replace prototype images with placeholders noting TODOs.
- **FR-011**: System MUST NOT use heavy runtime dependencies, CDN Tailwind scripts, or render-blocking scripts. CSS must be built via the official framework plugin. Fonts must use `font-display: swap`.
- **FR-012**: System MUST be deployable to Vercel with zero configuration changes required from the user (`vercel.json`/adapter pre-configured).

### Key Entities

- **Product Category**: Represents a category (e.g., Sayur Segar) containing a title, description, and specific WhatsApp pre-filled message template.
- **Promo Lead**: Represents the data submitted in the promo form (Name, Phone, Area).
- **Store Metadata**: Centralized configuration data (Business Name, Address, WhatsApp Number, Coordinates, Hours) to avoid magic strings.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Build process completes successfully with 0 warnings and 0 errors.
- **SC-002**: Lighthouse Mobile scores are ≥ 95 for Performance, Accessibility, Best Practices, and 100 for SEO.
- **SC-003**: Core Web Vitals on 4G simulation achieve "Good" status: LCP < 2.5s, INP < 200ms, CLS < 0.1.
- **SC-004**: 100% of external links (WhatsApp, GrabMart, Maps, Social Media) function identically to the original prototype.
- **SC-005**: Google Search Console ownership verification meta tag is present and valid.

## Assumptions

- No backend database or CMS is required for this phase; data remains hardcoded but structured cleanly.
- Target audience primarily uses mobile devices, enforcing a mobile-first design approach.
- Only Bahasa Indonesia is supported.
- Cart/Checkout and payment gateways are completely out of scope.
