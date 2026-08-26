# Phase 1: Data Model

## Store Metadata (`src/config/site.ts`)
Centralized configuration to avoid magic strings.
- **name**: string (e.g., "Sayur Online Bantul (SOB)")
- **address**: string (e.g., "Jogonalan Kidul, Tirtonirmolo, Kec. Kasihan, Kabupaten Bantul, DIY 55184")
- **coordinates**: { lat: string, lng: string } (for JSON-LD and maps)
- **whatsapp**: string (e.g., "62895804069320")
- **hours**: string (e.g., "04.30–22.00 WIB")
- **socials**: Array of objects containing platform name and URL.

## Product Category
Static data representing product categories for the homepage grid and dedicated SEO pages.
- **id**: string (e.g., "sayur-segar")
- **title**: string
- **description**: string
- **whatsappTemplate**: string (e.g., "Halo SOB, saya mau pesan sayur segar...")

## Promo Lead (Client-side Form)
Data submitted by the user on the promo page. Handled entirely client-side via JavaScript.
- **name**: string (required)
- **phone**: string (required, numeric validation)
- **area**: string (required)
