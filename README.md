# 💒 Undangan Pernikahan — Maudya & Rama

Undangan pernikahan digital, tema burgundy & gold. Sabtu, 5 September 2026 di Mepro Hall, Cinambo, Kota Bandung.

## 🎨 Fitur

- ✅ Desain responsif (mobile, tablet, desktop)
- ✅ Cover modal yang membuka ke undangan, dengan nama tamu dari URL
- ✅ Navbar sticky dengan penanda section aktif
- ✅ Countdown ke hari pernikahan
- ✅ Profil mempelai, doa, detail akad & resepsi
- ✅ Google Maps lokasi acara
- ✅ Buku tamu + konfirmasi kehadiran (Supabase, fallback localStorage)
- ✅ Amplop digital (transfer bank & alamat kado)
- ✅ Music player dengan kontrol dan visualizer

## 🧱 Stack

| | |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS (di-build lokal, bukan CDN) |
| Animasi scroll | AOS |
| Ikon | Font Awesome Free (bundled) |
| Backend buku tamu | Supabase |
| Deploy | Vercel |

Seluruh dependency di-bundle — tidak ada `<script>` CDN — supaya lolos CSP ketat di [`vercel.json`](vercel.json).

## 🚀 Quick Start

```bash
npm install
cp .env.example .env   # isi kredensial Supabase (opsional)
npm run dev
```

Tanpa `.env`, buku tamu otomatis jatuh ke `localStorage` dan tetap bisa dipakai.

## 🔗 Nama tamu di URL

Tambahkan `?untuk=` (atau `?to=`) pada tautan undangan:

```
https://contoh.com/?untuk=Budi-Santoso
```

Tanda hubung diubah jadi spasi dan tiap kata dikapitalisasi.

## 📝 Mengubah isi undangan

Seluruh teks, tanggal, lokasi, rekening, dan lagu ada di satu berkas:

```
src/data/wedding.js
```

Komponen membaca dari sana — hindari menulis ulang data langsung di JSX.

Struktur berkas lain:

```
src/
├── WeddingInvitation.jsx   # seluruh tampilan undangan
├── data/wedding.js         # sumber tunggal data undangan
├── lib/supabase.js         # klien Supabase
├── assets/                 # ornamen bunga lily, daun emas, rose emas
└── index.css               # base style + utility kustom
public/assets/audio/        # lagu latar
supabase/seed-wishes.sql    # seed ucapan awal buku tamu
```

## 🎵 Mengganti lagu

Taruh berkas MP3 di `public/assets/audio/`, lalu ubah `music.src` di `src/data/wedding.js`. Pastikan Anda punya hak pakai atas lagunya.

## 🗄️ Buku tamu

Lihat [SUPABASE_SETUP.md](SUPABASE_SETUP.md) untuk membuat tabel `guestbook`, mengatur RLS, dan mengisi ucapan awal lewat `supabase/seed-wishes.sql`.

## 📦 Build & Deploy

```bash
npm run build
```

Lihat [DEPLOYMENT.md](DEPLOYMENT.md).

---

> ⚠️ Nomor rekening di `src/data/wedding.js` masih menyalin undangan referensi — ganti sebelum undangan dipakai sungguhan.
