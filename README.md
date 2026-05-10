# 💒 Website Undangan Pernikahan - Asri & Ayuda

Website undangan pernikahan modern dengan tema floral dusty blue yang elegan.

## 🎨 Fitur

- ✅ Desain responsif (mobile, tablet, desktop)
- ✅ Tema dusty blue dengan aksen gold
- ✅ Animasi smooth dengan Framer Motion
- ✅ Countdown timer ke hari pernikahan
- ✅ Informasi mempelai dan acara
- ✅ Google Maps lokasi acara
- ✅ Buku tamu digital dengan localStorage
- ✅ Amplop digital (transfer bank)
- ✅ Music player dengan kontrol
- ✅ Daftar turut mengundang

## 🚀 Quick Start

### Prerequisites
- Node.js v18 atau lebih tinggi
- npm atau yarn

### Installation

1. Clone atau download project ini
2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

## 📁 Struktur Project

```
wedding-invitation/
├── public/
│   └── assets/
│       ├── images/     # Tambahkan gambar floral di sini
│       └── audio/      # Tambahkan musik background di sini
├── src/
│   ├── components/     # Semua komponen React
│   │   ├── Hero.jsx
│   │   ├── Mempelai.jsx
│   │   ├── Countdown.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Location.jsx
│   │   ├── GuestBook.jsx
│   │   ├── DigitalEnvelope.jsx
│   │   ├── TurutMengundang.jsx
│   │   ├── MusicPlayer.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

## 🎵 Menambahkan Musik Background

1. Siapkan file musik dalam format MP3 (instrumental/acoustic)
2. Simpan file sebagai `background-music.mp3` di folder `public/assets/audio/`
3. Musik akan otomatis diputar saat tombol "Buka Undangan" diklik

**Rekomendasi:**
- Format: MP3
- Durasi: 3-5 menit (akan loop otomatis)
- Ukuran: < 5MB
- Contoh lagu: "A Thousand Years" instrumental, "Perfect" instrumental

## 🖼️ Menambahkan Gambar

Tambahkan gambar dekorasi floral ke folder `public/assets/images/`:
- Format: PNG (dengan transparansi) atau WebP
- Ukuran maksimal: 500KB per gambar
- Sumber gratis: Freepik, Pexels, Unsplash

## 🎨 Kustomisasi

### Mengubah Warna
Edit file `tailwind.config.js` untuk mengubah palet warna:
```javascript
colors: {
  'dusty-blue': {...},
  'gold': {...}
}
```

### Mengubah Font
Edit file `index.html` untuk mengganti Google Fonts yang digunakan.

### Mengubah Data
Semua data (nama, tanggal, lokasi, dll) ada di dalam masing-masing komponen di folder `src/components/`.

## 📱 Testing Responsiveness

Website sudah dioptimasi untuk:
- Mobile (320px - 767px)
- Tablet (768px - 1023px)
- Desktop (1024px+)

Untuk test di berbagai device:
1. Buka browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test di berbagai ukuran layar

## 🏗️ Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/` dan siap untuk di-deploy.

## 🌐 Deployment

### Deploy ke Vercel (Gratis & Mudah)

1. Push code ke GitHub
2. Kunjungi [vercel.com](https://vercel.com)
3. Import repository GitHub Anda
4. Vercel akan otomatis detect Vite dan deploy
5. Website langsung online dengan domain gratis!

### Deploy ke Netlify

1. Push code ke GitHub
2. Kunjungi [netlify.com](https://netlify.com)
3. Connect GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## 📝 Data Pernikahan

### Mempelai
- **Wanita**: Asri Aditya Lestari, M.Pd., Gr.
- **Pria**: Ayuda Noveliana Megus, S.Par.

### Acara
- **Tanggal**: Sabtu, 30 Mei 2026
- **Akad**: 08:00 - Selesai
- **Resepsi**: 10:30 - Selesai
- **Lokasi**: Dsn. Bojong Inong, RT 01 RW 03, Desa Jatimulya, Kab. Sumedang

### Amplop Digital
- **BCA**: 2330905878 a/n Ayuda Noveliana Megus
- **Mandiri**: 1310018040537 a/n Asri Aditya Lestari

## 🛠️ Teknologi

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animasi
- **Lucide React** - Icons

## 📄 License

Free to use untuk keperluan pribadi.

## 🤝 Support

Jika ada pertanyaan atau butuh bantuan, silakan buka issue di repository ini.

---

**Selamat Menikah Asri & Ayuda! 💙💛**

*Made with ❤️ for a special day*
