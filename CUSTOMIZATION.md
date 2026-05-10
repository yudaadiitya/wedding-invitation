# Panduan Kustomisasi

## Mengubah Data Mempelai

Edit file `src/components/Mempelai.jsx`:

```javascript
// Ubah nama, gelar, dan nama orang tua di sini
<h3 className="font-script...">Asri</h3>
<h4 className="font-serif...">Asri Aditya Lestari, M.Pd., Gr.</h4>
// dst...
```

## Mengubah Tanggal & Waktu

### 1. Countdown Timer
Edit `src/components/Countdown.jsx`:
```javascript
const weddingDate = new Date('2026-05-30T08:00:00').getTime()
```

### 2. Event Details
Edit `src/components/EventDetails.jsx`:
```javascript
const events = [
  {
    title: 'Akad Nikah',
    date: 'Sabtu, 30 Mei 2026',
    time: '08.00 - Selesai',
    // ...
  }
]
```

### 3. Hero Section
Edit `src/components/Hero.jsx`:
```javascript
<p className="font-serif...">30 MEI 2026</p>
<p className="font-sans...">Sabtu</p>
```

## Mengubah Lokasi

### 1. Alamat Text
Edit `src/components/Location.jsx`:
```javascript
const address = 'Dsn. Bojong Inong, RT 01 RW 03, Desa Jatimulya, Kab. Sumedang'
```

### 2. Google Maps
Untuk mendapatkan embed URL Google Maps:
1. Buka [Google Maps](https://maps.google.com)
2. Cari lokasi Anda
3. Klik "Share" > "Embed a map"
4. Copy iframe code
5. Paste di `src/components/Location.jsx` bagian iframe

Atau ubah URL search:
```javascript
const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=ALAMAT+ANDA'
```

## Mengubah Amplop Digital

Edit `src/components/DigitalEnvelope.jsx`:

```javascript
const accounts = [
  {
    bank: 'BCA',
    accountNumber: '1234567890',
    accountName: 'Nama Anda',
    // ...
  },
  {
    bank: 'Mandiri',
    accountNumber: '0987654321',
    accountName: 'Nama Pasangan',
    // ...
  }
]
```

Untuk menambah/mengurangi rekening, tambahkan/hapus object di array.

## Mengubah Daftar Turut Mengundang

Edit `src/components/TurutMengundang.jsx`:

```javascript
const brideFamily = [
  'Nama Keluarga 1',
  'Nama Keluarga 2',
  // tambahkan sesuai kebutuhan
]

const groomFamily = [
  'Nama Keluarga 1',
  'Nama Keluarga 2',
  // tambahkan sesuai kebutuhan
]
```

## Mengubah Warna Tema

Edit `tailwind.config.js`:

```javascript
colors: {
  'dusty-blue': {
    300: '#9BB5CE', // Ubah warna di sini
    500: '#5e7fa0',
    700: '#3a506b',
  },
  'gold': {
    500: '#D4AF37', // Ubah warna gold di sini
  },
}
```

Untuk mencari warna yang cocok, gunakan:
- [Coolors.co](https://coolors.co) - Color palette generator
- [Adobe Color](https://color.adobe.com)

## Mengubah Font

### 1. Pilih Font di Google Fonts
Kunjungi [Google Fonts](https://fonts.google.com) dan pilih font yang Anda suka.

### 2. Update di index.html
Ganti link Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet">
```

### 3. Update di tailwind.config.js
```javascript
fontFamily: {
  script: ['Your Script Font', 'cursive'],
  serif: ['Your Serif Font', 'serif'],
  sans: ['Your Sans Font', 'sans-serif'],
}
```

## Menambah/Menghapus Section

Untuk menambah section baru:

1. Buat component baru di `src/components/NamaSection.jsx`
2. Import di `src/App.jsx`:
   ```javascript
   import NamaSection from './components/NamaSection'
   ```
3. Tambahkan di render:
   ```javascript
   <NamaSection />
   ```

Untuk menghapus section, hapus import dan component di `App.jsx`.

## Mengubah Animasi

Edit di masing-masing component, cari bagian `motion.div`:

```javascript
// Ubah animasi entrance
initial={{ opacity: 0, y: 30 }}  // posisi awal
whileInView={{ opacity: 1, y: 0 }}  // posisi akhir
transition={{ duration: 1 }}  // durasi animasi
```

Tipe animasi yang bisa diubah:
- `y: 30` - slide dari bawah
- `y: -30` - slide dari atas
- `x: 30` - slide dari kanan
- `x: -30` - slide dari kiri
- `scale: 0.8` - zoom in effect
- `rotate: 180` - rotate effect

## Mengubah Meta Tags SEO

Edit `index.html`:

```html
<meta name="title" content="Judul Website Anda" />
<meta name="description" content="Deskripsi website Anda" />
<meta property="og:title" content="Judul untuk Social Media" />
```

## Tips Kustomisasi

1. **Backup dulu** sebelum mengubah
2. **Test** setelah setiap perubahan dengan `npm run dev`
3. **Commit** perubahan ke Git secara berkala
4. Gunakan **search** (Ctrl+F) untuk cari text yang ingin diubah
5. Jika error, lihat **console** di browser (F12)

## Troubleshooting

### Warna tidak berubah
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check CSS di browser DevTools

### Font tidak muncul
- Check internet connection (Google Fonts butuh internet)
- Verify link di index.html
- Check console untuk errors

### Data tidak update
- Hard refresh browser (Ctrl+Shift+R)
- Check localStorage di DevTools
- Clear localStorage jika perlu

---

**Butuh bantuan?** Check README.md atau buat issue di GitHub.
