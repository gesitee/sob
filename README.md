# Sayur Online Bantul (SOB) - Landing Page

Proyek *rewrite* landing page Sayur Online Bantul (SOB) menggunakan [Astro](https://astro.build) dan Tailwind CSS. 
Situs ini dirancang untuk mencapai skor Lighthouse maksimal (Performance-First) dengan implementasi SEO dan schema JSON-LD untuk Local Business.

## Persyaratan
- Node.js versi 18+
- npm (atau pnpm/yarn)

## Panduan Menjalankan Project

1. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Menjalankan Development Server**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:4321` di browser Anda.

3. **Membangun untuk Produksi (Build)**
   ```bash
   npm run build
   ```
   Astro akan men-generate file HTML statis ke folder `dist/`.

4. **Preview Hasil Build**
   ```bash
   npm run preview
   ```

## Cara Update Data (Single Source of Truth)

Seluruh informasi utama toko, meta data, kontak, dan tautan sosial media disimpan di satu tempat untuk mempermudah pembaruan. 
Anda hanya perlu mengedit file berikut:

**`src/config/site.ts`**

Jika Anda mengubah nomor WhatsApp, alamat, atau link media sosial di dalam file tersebut, perubahannya akan otomatis diterapkan di seluruh halaman dan komponen website (termasuk tombol WhatsApp floating dan footer).

## Cara Mengganti Gambar Placeholder

Aset gambar (termasuk foto *hero* dan logo) berada pada folder `src/assets/images/`.

1. Siapkan foto asli Anda dalam resolusi yang memadai. Sangat disarankan untuk mengoptimalkannya dalam format WebP, namun format JPEG atau PNG juga bisa digunakan.
2. Ganti file `src/assets/images/logo.jpg` dengan logo toko yang baru (gunakan nama file yang sama atau ubah referensinya di dalam komponen).
3. Ganti file `src/assets/images/hero.jpg` dengan foto banner utama yang baru.
4. Komponen `<Image />` bawaan Astro secara otomatis akan melakukan optimasi ukuran dan format (menjadi WebP/AVIF) pada saat proses *build*.

## Deployment (Vercel)

Website ini dikonfigurasi untuk *static deployment*. 
1. Push proyek ini ke repository GitHub.
2. Hubungkan repository ke akun [Vercel](https://vercel.com).
3. Vercel akan otomatis mengenali ini sebagai proyek Astro. 
4. Klik **Deploy**. Tidak diperlukan pengaturan *environment variables* tambahan kecuali jika Anda menambah fitur baru.

---
*Dibuat menggunakan Astro 5.*
