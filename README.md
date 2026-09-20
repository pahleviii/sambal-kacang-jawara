# 🌶️ Sambal Kacang Jawara

Website resmi **Sambal Kacang Jawara** — sambal kacang istimewa dari Desa Cerme, Nganjuk, Jawa Timur. Dibuat sejak 1998 dengan resep turun-temurun, digiling lambat untuk tekstur sempurna.

---

## 📋 Daftar Isi

- [Tech Stack](#tech-stack)
- [Struktur Project](#struktur-project)
- [Halaman Website](#halaman-website)
- [Cara Menjalankan](#cara-menjalankan)
- [Panduan Kustomisasi](#panduan-kustomisasi)
- [Fitur SEO & Sharing](#fitur-seo--sharing)
- [Deployment](#deployment)
- [Checklist Sebelum Launch](#checklist-sebelum-launch)

---

## Tech Stack

| Teknologi | Fungsi |
|-----------|--------|
| HTML5 | Struktur halaman |
| CSS3 Kustom | Desain, animasi, responsive |
| Tailwind CSS (CDN) | Utility classes tambahan |
| Vanilla JavaScript | Interaktivitas (menu, scroll, WhatsApp) |
| Google Fonts | Playfair Display + Plus Jakarta Sans |
| Google Maps Embed | Lokasi bisnis |

---

## Struktur Project

```
Sambal kacang jawara/
├── index.html                 # Homepage
├── tentang-kami.html          # Halaman Tentang Kami
├── produk.html                # Katalog Produk
├── promo.html                 # Halaman Promo
├── artikel.html               # Daftar Artikel
├── detail-artikel.html        # Detail Artikel (Tips)
├── detail-artikel-resep.html  # Detail Artikel (Resep)
├── detail-artikel-tips.html   # Detail Artikel (Tips Memilih)
├── kontak.html                # Halaman Kontak
├── 404.html                   # Halaman Error
├── sitemap.xml                # Sitemap untuk SEO
├── robots.txt                 # Robots untuk crawler
├── server.js                  # Local server (testing)
└── assets/
    ├── css/
    │   └── styles.css         # CSS kustom (utama)
    ├── js/
    │   └── main.js            # JavaScript utama
    └── images/
        └── favicon.svg        # Icon website (huruf J)
```

---

## Halaman Website

| Halaman | URL | Deskripsi |
|---------|-----|-----------|
| **Beranda** | `/index.html` | Hero, filosofi, produk unggulan, testimoni |
| **Tentang Kami** | `/tentang-kami.html` | Cerita brand, nilai, proses pembuatan, lokasi |
| **Produk** | `/produk.html` | 3 varian produk (Original, Pedas, Extra Pedas) |
| **Promo** | `/promo.html` | Bundling hemat, promo pesanan perdana |
| **Artikel** | `/artikel.html` | Jurnal rasa — resep, tips, tren |
| **Detail Artikel** | `/detail-artikel*.html` | 3 artikel detail berbeda |
| **Kontak** | `/kontak.html` | Form kontak, WhatsApp, email, Google Maps |
| **404** | `/404.html` | Halaman error jika URL tidak ditemukan |

---

## Cara Menjalankan

### 1. Buka Langsung (File)
```
Klik ganda index.html
```

### 2. Menggunakan Local Server (Disarankan)
```bash
# Menggunakan Node.js
node server.js

# Buka browser
# http://localhost:8080
```

### 3. Menggunakan Python
```bash
python -m http.server 8080
```

---

## Panduan Kustomisasi

### Mengganti Warna

Edit variabel di `assets/css/styles.css` bagian `:root`:

```css
:root {
  --cream: #faf6ee;      /* Warna latar utama */
  --ivory: #f2ece1;      /* Warna latar alternatif */
  --maroon: #5b0e11;     /* Warna aksen utama */
  --maroon-dark: #450a0d; /* Warna aksen gelap (hover) */
  --charcoal: #2c221e;   /* Warna teks utama */
  --muted: #7a6e67;      /* Warna teks sekunder */
  --line: #e5ddd0;       /* Warna border */
}
```

Juga update Tailwind config di setiap HTML (`<script>` di `<head>`):

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EE',
        maroon: '#5B0E11',
        charcoal: '#2C221E',
        muted: '#7A6E67'
      }
    }
  }
};
```

### Mengganti Font

1. Ganti link Google Fonts di `<head>` setiap HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=NAMA_FONT:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

2. Update di CSS:
```css
body {
  font-family: 'Nama Font Baru', sans-serif;
}
```

3. Update Tailwind config:
```javascript
fontFamily: {
  serif: ['Nama Serif Baru', 'serif'],
  sans: ['Nama Sans Baru', 'sans-serif']
}
```

### Mengganti Nomor WhatsApp

Cari dan ganti semua placeholder nomor WhatsApp:

```bash
# Cari semua file yang berisi nomor
6281234567890
```

Ganti dengan nomor Anda (format internasional tanpa +):
```
62812XXXXXXX
```

Tempat yang perlu diupdate:
- `assets/js/main.js` → variabel `waConfig.phone`
- Setiap HTML → link `wa.me/` di floating button
- Setiap HTML → atribut `data-wa` di tombol "Pesan Sekarang"

### Mengganti Gambar Produk

1. Simpan gambar produk ke `assets/images/`
2. Ganti URL Unsplash di HTML dengan path lokal:
```html
<!-- Sebelum -->
<img src="https://images.unsplash.com/..." alt="Jawara Original" />

<!-- Sesudah -->
<img src="assets/images/produk-original.jpg" alt="Jawara Original" />
```

### Mengganti Harga

Cari dan ganti harga di dua file:
- `index.html` → bagian product cards
- `produk.html` → bagian product cards

```html
<span class="price">Rp 45.000</span>
```

> **Penting:** Pastikan harga konsisten di kedua file!

---

## Fitur SEO & Sharing

### Sudah Terpasang

| Fitur | Keterangan |
|-------|------------|
| **Open Graph** | `og:title`, `og:description`, `og:image`, `og:url` di semua halaman |
| **Twitter Card** | `summary_large_image` di semua halaman |
| **Canonical URL** | URL resmi di setiap halaman |
| **Meta Robots** | `index, follow` di semua halaman |
| **Meta Description** | Deskripsi unik per halaman |
| **JSON-LD** | Structured Data untuk Organization, WebSite, Product, Article |
| **Sitemap XML** | Daftar semua halaman untuk search engine |
| **Robots.txt** | Konfigurasi crawler |
| **Lazy Loading** | `loading="lazy"` di semua gambar (kecuali hero) |
| **Google Analytics** | GA4 placeholder (ganti ID) |

### Yang Perlu Dilakukan Sebelum Launch

1. **Ganti domain** di semua file:
   - Cari: `sambalkacangjawara.com`
   - Ganti dengan domain Anda

2. **Buat gambar OG Cover** (1200×630px):
   - Simpan sebagai `assets/images/og-cover.jpg`
   - Ini adalah gambar yang muncul saat link dishare

3. **Ganti Google Analytics ID**:
   - Cari: `G-XXXXXXXXXX`
   - Ganti dengan Measurement ID dari Google Analytics

---

## Deployment

### Netlify (Gratis)
1. Push project ke GitHub
2. Login ke [netlify.com](https://netlify.com)
3. Drag & drop folder project
4. Setup custom domain

### Vercel (Gratis)
```bash
npm i -g vercel
vercel
```

### GitHub Pages
1. Push ke repository GitHub
2. Settings → Pages → Source: `main branch`
3. Website akan live di `username.github.io/repo-name`

###traditional Hosting (cPanel, dll)
1. Upload semua file ke `public_html` atau `htdocs`
2. Pastikan `index.html` berada di root

---

## Checklist Sebelum Launch

### Konten
- [ ] Ganti semua gambar Unsplash dengan foto asli produk
- [ ] Ganti nomor WhatsApp placeholder dengan nomor bisnis
- [ ] Ganti email placeholder dengan email aktif
- [ ] Update link Instagram & TikTok dengan akun resmi
- [ ] Pastikan harga konsisten di semua halaman
- [ ] Review semua konten teks

### Teknis
- [ ] Ganti domain di semua file (OG tags, canonical, sitemap)
- [ ] Buat & upload gambar OG Cover (1200×630px)
- [ ] Ganti Google Analytics ID
- [ ] Test semua link navigasi
- [ ] Test form kontak
- [ ] Test tombol WhatsApp
- [ ] Test di mobile (iOS & Android)
- [ ] Test di berbagai browser (Chrome, Firefox, Safari, Edge)
- [ ] Hapus `server.js` dari production

### SEO
- [ ] Submit sitemap ke Google Search Console
- [ ] Submit sitemap ke Bing Webmaster Tools
- [ ] Test URL di [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test URL di [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Setup Google Business Profile

---

## Lisensi

© 2025 Sambal Kacang Jawara. All rights reserved.

---

*Dibuat dengan dedikasi untuk melestarikan rasa tradisi Indonesia.*
