# Wedding Invitation Assets

## ✅ SVG Assets Included

Website ini sudah dilengkapi dengan custom SVG floral decorations dengan tema maroon & rose gold:

1. **floral-left.svg** - Dekorasi floral untuk sisi kiri dengan rose blooms maroon dan dedaunan
2. **floral-right.svg** - Dekorasi floral untuk sisi kanan (mirrored dari left)
3. **decorative-border.svg** - Border frame elegan untuk card atau section khusus
4. **divider.svg** - Elegant divider untuk memisahkan sections

Semua asset SVG ini:
- ✨ Sudah terintegrasi dalam komponen (Hero, Mempelai, Footer, dan Divider)
- 🎨 Match dengan tema maroon (#714646) dan rose gold (#C4A17E)
- 📦 Lightweight (vector format)
- 🔧 Mudah di-customize (edit SVG code jika perlu)

## 📸 Optional: Images Tambahan

Jika Anda ingin menambahkan foto atau gambar lain:

### 1. Foto Mempelai (Optional)
- Tambahkan foto ke folder ini
- Nama file: `bride.jpg`, `groom.jpg`, atau `couple.jpg`
- Ukuran recommended: 500x500px (square), max 200KB
- Edit di `src/components/Mempelai.jsx` untuk mengganti emoji dengan foto:
  ```jsx
  <img src="/assets/images/bride.jpg" alt="Bride" className="w-40 h-40 rounded-full object-cover" />
  ```

### 2. Background Pattern (Optional)
- Tambahkan pattern subtle untuk background
- Format: PNG dengan transparansi atau SVG
- Ukuran: 1920x1080, max 100KB
- Gunakan di Hero section

## 🎨 Customizing SVG Assets

SVG files bisa di-edit langsung! Contoh:

### Mengubah Warna:
Buka file SVG dan ubah nilai color:
- `#D9BFBF` → rose muda
- `#C4A17E` → rose gold
- `#88a68e` → eucalyptus green

### Mengubah Ukuran:
Di komponen, ubah className:
```jsx
<img src="/assets/images/floral-left.svg" className="w-64 h-48" />
```

### Mengubah Opacity:
```jsx
<div className="opacity-60">
  <img src="/assets/images/floral-left.svg" />
</div>
```

## 🆓 Free Image Resources

Jika ingin menambah gambar lain, download gratis dari:
- [Freepik](https://www.freepik.com) - Search: "blue floral watercolor"
- [Pexels](https://www.pexels.com) - Search: "blue roses illustration"
- [Unsplash](https://unsplash.com) - Search: "maroon floral"
- [Pixabay](https://pixabay.com) - Free images & illustrations

## 📏 Image Optimization Tips

Sebelum upload gambar:
1. Compress dengan [TinyPNG](https://tinypng.com) atau [Squoosh](https://squoosh.app)
2. Convert ke WebP untuk better compression
3. Target: < 200KB per image
4. Resize ke ukuran yang dibutuhkan (jangan upload 4K image!)

## ✨ Current Asset Status

- ✅ Floral decorations (SVG)
- ✅ Divider elements (SVG)  
- ✅ Border frame (SVG)
- ✅ Favicon (SVG)
- ⏳ Background music (silahkan tambahkan)
- ⏳ Couple photos (optional)
