# Tasks: Astro Landing Page Rewrite

**Input**: Design documents from `/specs/001-astro-landing/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

## FASE 1 — SETUP PROJECT

**Purpose**: Inisialisasi project Astro dan dependensi
**Acceptance**: `npm run build` sukses tanpa error di project kosong dengan konfigurasi di atas.

- [x] T001 Initialize project Astro + TypeScript strict di root direktori.
- [x] T002 Install & konfigurasi `@astrojs/tailwind`, `@astrojs/sitemap`, `@astrojs/vercel`, ESLint, Prettier (update `astro.config.mjs` & `package.json`).
- [x] T003 Setup `src/config/site.ts` dengan semua data toko dari spec (nama toko, alamat, kontak, sosmed).

---

## FASE 2 — DESIGN SYSTEM & LAYOUT

**Purpose**: Foundational Layout and SEO components
**Acceptance**: Halaman kosong yang extend BaseLayout menghasilkan `<head>` lengkap dan valid (divalidasi dengan Google Rich Results Test format).

- [x] T004 Migrasikan Tailwind config (warna `sob-green`, `sob-orange`, font Poppins, shadow, breakpoint) dari prototype ke `tailwind.config.mjs`.
- [x] T005 Bangun `src/layouts/BaseLayout.astro` (head, meta dasar, slot SEO, import `src/styles/global.css`).
- [x] T006 [P] Bangun komponen `src/components/seo/SEO.astro` untuk handle meta tag (title, desc, OG, Twitter).
- [x] T007 [P] Bangun komponen `src/components/seo/JsonLd.astro` sesuai requirement schema GroceryStore / LocalBusiness.

---

## FASE 3 — KOMPONEN PER SECTION

**Purpose**: Membangun komponen UI secara modular sesuai arsitektur Astro (Terkait US1 & US2)
**Acceptance**: Setiap komponen di-review visual side-by-side dengan prototype asli — tidak ada regresi visual pada breakpoint 360px, 768px, dan 1280px.

- [x] T008 [US1] Bangun `src/components/layout/Navbar.astro` migrasi 1:1 dari prototype (markup + class + teks).
- [x] T009 [US1] Bangun `src/components/layout/Footer.astro` migrasi dari prototype.
- [x] T010 [US1] Bangun `src/components/layout/WhatsAppFloatingButton.astro` migrasi dari prototype.
- [x] T011 [P] [US1] Bangun `src/components/sections/Hero.astro` migrasi dari prototype.
- [x] T012 [P] [US1] Bangun `src/components/sections/SocialProofStrip.astro` migrasi dari prototype.
- [x] T013 [P] [US1] Bangun `src/components/sections/CategoryGrid.astro` migrasi dari prototype.
- [x] T014 [P] [US1] Bangun `src/components/sections/HowToOrder.astro` migrasi dari prototype.
- [x] T015 [P] [US1] Bangun `src/components/sections/Testimonials.astro` migrasi dari prototype.
- [x] T016 [P] [US1] Bangun `src/components/sections/LocationMap.astro` migrasi dari prototype.
- [x] T017 [P] [US1] Bangun `src/components/sections/GrabMartCallout.astro` migrasi dari prototype.
- [x] T018 [P] [US2] Bangun `src/components/sections/PromoLeadForm.astro` migrasi dari prototype.
- [x] T019 [US1] Ganti semua src gambar dengan komponen `<Image />` dari `astro:assets` + placeholder lokal di komponen-komponen di atas (misal di `src/assets/images/`).
- [x] T020 [US1] Ganti semua ikon Font Awesome dengan library ikon SVG ringan (misal `lucide`) di seluruh komponen.
- [x] T021 [US1] Rakit `src/pages/index.astro` menggunakan BaseLayout dan memanggil semua komponen section di atas.

---

## FASE 4 — INTERAKTIVITAS

**Purpose**: Menambahkan logic interaktif via Client-side JS ("Island architecture")
**Acceptance**: Seluruh interaksi berfungsi identik dengan prototype asli, dites manual di mobile viewport.

- [x] T022 [US2] Implementasi `src/lib/whatsapp.ts` (helper script untuk generate link WhatsApp dari template pesan).
- [x] T023 [US1] Tambahkan `<script>` di `src/components/sections/CategoryGrid.astro` untuk interaksi klik kategori → buka WhatsApp dengan pesan pre-filled.
- [x] T024 [US2] Tambahkan `<script>` di `src/components/sections/PromoLeadForm.astro` untuk validasi form client-side (nama, no HP, area) dan submit redirect ke WhatsApp.
- [x] T025 [US1] Tambahkan `<script>` di `src/components/layout/Navbar.astro` untuk implementasi shadow-on-scroll menggunakan `requestAnimationFrame`.

---

## FASE 5 — HALAMAN TAMBAHAN UNTUK SEO

**Purpose**: Ekspansi halaman untuk penargetan long-tail keywords dan dedicated promo landing. (Terkait US3 & US4)
**Acceptance**: Setiap halaman baru punya title & meta description unik, tidak ada duplicate content warning.

- [x] T026 [P] [US3] Buat halaman kategori `src/pages/kategori/sayur-segar.astro` dengan H1, meta unik, dan struktur SEO.
- [x] T027 [P] [US3] Buat halaman kategori `src/pages/kategori/sembako.astro` dengan H1, meta unik, dan struktur SEO.
- [x] T028 [P] [US3] Buat halaman kategori `src/pages/kategori/buah.astro` dengan H1, meta unik, dan struktur SEO.
- [x] T029 [P] [US4] Buat halaman promo `src/pages/promo.astro` dengan layout fokus promo form.
- [x] T030 [US3] Perbarui `src/components/sections/CategoryGrid.astro` dan Navbar untuk menyertakan internal link yang saling terhubung antara beranda dan halaman kategori.

---

## FASE 6 — QA & PERFORMA

**Purpose**: Verifikasi akhir performa dan kualitas kode
**Acceptance**: Skor Lighthouse Mobile ≥ 95/95/95/100 (Perf/A11y/BestPractices/SEO), 0 isu accessibility critical/serious, JSON-LD valid tanpa error.

- [x] T031 Jalankan Lighthouse (mobile) via `npm run preview` dan iterasi performa (optimasi fonts, LCP) sampai skor target tercapai.
- [x] T032 Cek aksesibilitas dengan axe atau Lighthouse Accessibility audit, perbaiki isu warna kontras / keyboard focus (focus-visible).
- [x] T033 Validasi JSON-LD schema di Schema Markup Validator untuk halaman beranda.
- [x] T034 Generate build (`npm run build`) dan verifikasi isi `sitemap-index.xml`, `sitemap-0.xml`, dan `robots.txt` di folder `dist/`.

---

## FASE 7 — DEPLOY

**Purpose**: Deployment ke Vercel dan finalisasi dokumentasi
**Acceptance**: `vercel --prod` (atau push ke branch) berhasil deploy tanpa error build, situs live di `*.vercel.app` dan bisa diverifikasi GSC.

- [x] T035 Konfigurasi `vercel.json` bila perlu (caching headers immutable untuk `/assets`).
- [x] T036 Siapkan instruksi deploy: connect repo ke Vercel, set output directory (`dist`), environment variables.
- [x] T037 Tambahkan slot / comment block TODO di `src/layouts/BaseLayout.astro` untuk meta tag verifikasi Google Search Console.
- [x] T038 Tulis `README.md` ringkas di root: cara run dev, build, cara update data di `site.ts`, dan petunjuk mengganti foto placeholder dengan aset asli.

---

## Dependencies & Execution Order

- **Fase 1 (Setup)** harus selesai sebelum Fase 2 dimulai.
- **Fase 2 (Foundational)** harus selesai sebelum UI per komponen (Fase 3) dapat dirakit dengan sempurna.
- Komponen di **Fase 3** dapat dikerjakan secara paralel (tandai dengan `[P]`).
- **Fase 4 (Interaktivitas)** sebaiknya dilakukan per-komponen atau setelah markup dasar selesai (Fase 3).
- **Fase 5 (SEO Pages)** membutuhkan Layout dan komponen SEO dari Fase 2.
- **Fase 6 & 7** dijalankan di akhir.

## Implementation Strategy

Proyek ini menggunakan pendekatan **Incremental Delivery**:
1. Mulai dengan kerangka dan pondasi dasar (Fase 1-2).
2. Konversi UI statis menjadi komponen Astro murni statis tanpa logika tambahan (Fase 3).
3. "Hydrate" interaktivitas dengan menyuntikkan script DOM (Fase 4).
4. Duplikasi halaman-halaman pendukung SEO (Fase 5).
5. Proses QA performa yang ketat sebelum mengakhiri milestone (Fase 6).
