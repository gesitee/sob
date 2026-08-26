<!--
Sync Impact Report:
- Version change: 0.0.0 -> 1.0.0
- Modified principles: N/A (Initial creation)
- Added sections:
  - 1. PERFORMANCE-FIRST
  - 2. SEO & LOCAL DISCOVERABILITY FIRST
  - 3. NO HEAVY RUNTIME DEPENDENCIES
  - 4. IMAGES
  - 5. ACCESSIBILITY
  - 6. MOBILE-FIRST & RESPONSIVE
  - 7. CLEAN & STRUCTURED CODE
  - 8. HOSTING & DEPLOY
  - 9. NO AMBIGUITY
- Removed sections: N/A
- Templates requiring updates: N/A (Abstract templates are already aligned)
- Follow-up TODOs: N/A
-->

# Sayur Online Bantul (SOB) Constitution

## Core Principles

### 1. PERFORMANCE-FIRST
Target Core Web Vitals "Good" di semua metrik (LCP < 2.5s, INP < 200ms, CLS < 0.1) pada koneksi 4G simulasi. Skor Lighthouse Mobile wajib ≥ 95 di keempat kategori (Performance, Accessibility, Best Practices, SEO). JavaScript yang dikirim ke client harus seminimal mungkin — gunakan pendekatan "zero JS by default, hydrate hanya jika perlu interaktivitas".

### 2. SEO & LOCAL DISCOVERABILITY FIRST
Setiap halaman wajib punya metadata lengkap (title unik, meta description unik, canonical URL, Open Graph, Twitter Card), structured data JSON-LD sesuai skema schema.org yang relevan (GroceryStore/LocalBusiness untuk beranda), sitemap.xml otomatis, dan robots.txt yang benar. Semua konten harus siap diverifikasi di Google Search Console.

### 3. TIDAK ADA DEPENDENSI RUNTIME YANG BERAT
Dilarang menggunakan CDN script Tailwind (cdn.tailwindcss.com) atau library CSS/JS besar yang dimuat penuh dari CDN pihak ketiga tanpa build step. Semua CSS wajib di-build dan di-purge saat build time.

### 4. GAMBAR
Dilarang hotlink gambar dari domain pihak ketiga (Google thumbnail cache, Unsplash, dsb). Semua gambar wajib berupa aset lokal di dalam project, diproses lewat pipeline optimasi gambar bawaan framework (format modern WebP/AVIF, responsive srcset, lazy loading, ukuran eksplisit untuk mencegah layout shift).

### 5. AKSESIBILITAS
Wajib memenuhi WCAG 2.1 level AA — kontras warna cukup, semua elemen interaktif bisa diakses keyboard, ada focus-visible state, alt text deskriptif di semua gambar, struktur heading semantik (satu `<h1>` per halaman, hierarki `<h2>`/`<h3>` logis).

### 6. MOBILE-FIRST & RESPONSIVE
70%+ traffic diasumsikan dari mobile. Semua breakpoint dan komponen wajib didesain mobile-first, diuji di lebar 360px sampai 1536px+.

### 7. KODE BERSIH & TERSTRUKTUR
TypeScript strict mode aktif. Struktur komponen modular (satu tanggung jawab per komponen). ESLint + Prettier wajib dikonfigurasi dan lulus tanpa error sebelum dianggap selesai. Tidak ada "magic string" berulang — gunakan konstanta/config terpusat (contoh: nomor WhatsApp, alamat, jam operasional harus ada di SATU sumber data).

### 8. HOSTING & DEPLOY
Target deploy adalah Vercel, domain sementara `*.vercel.app` (gratis), dengan arsitektur yang tetap kompatibel untuk migrasi ke custom domain di masa depan tanpa refactor.

### 9. TIDAK ADA AMBIGUITAS
Setiap keputusan implementasi yang tidak dijelaskan secara eksplisit dalam spec harus diselesaikan dengan memilih opsi yang PALING ringan, PALING sesuai standar industri modern (2025-2026), dan PALING mudah dipelihara — bukan opsi yang paling cepat ditulis.

## Governance

- **Amandemen**: Setiap perubahan pada Constitution ini harus melalui persetujuan bersama dan didokumentasikan di `Sync Impact Report`. Perubahan besar (misal: penggantian framework, penurunan standar Core Web Vitals) wajib menaikkan versi MAJOR.
- **Review Kepatuhan**: Setiap Pull Request / tugas implementasi wajib divalidasi terhadap 9 Core Principles di atas. Fitur yang gagal mencapai skor Lighthouse 95+ atau gagal memenuhi kriteria aksesibilitas akan ditolak.

**Version**: 1.0.0 | **Ratified**: 2026-08-26 | **Last Amended**: 2026-08-26
