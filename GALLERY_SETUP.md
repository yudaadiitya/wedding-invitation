# 📸 Gallery Setup Guide

## Cara Menambahkan Foto ke Gallery

### 1. Siapkan Foto Anda
Pilih 4-6 foto terbaik Anda:
- Foto lamaran/engagement
- Foto pre-wedding
- Foto casual berdua
- Foto sweet moments

### 2. Optimize Foto
Sebelum upload, optimize dulu:
- **Resize**: 1200x1200px (square ratio)
- **Compress**: Gunakan [TinyPNG](https://tinypng.com) atau [Squoosh](https://squoosh.app)
- **Format**: JPG atau WebP
- **File size**: < 200KB per foto

### 3. Upload Foto
Taruh foto di folder:
```
public/assets/images/
├── gallery-1.jpg
├── gallery-2.jpg
├── gallery-3.jpg
└── gallery-4.jpg
```

### 4. Update Component
Edit `src/components/Gallery.jsx`:

**Uncomment baris ini** (hapus `{/* */}`):
```jsx
// Line ~43 - Uncomment untuk show real image:
<img 
  src={image.url} 
  alt={image.alt}
  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
/>

// Line ~102 - Uncomment untuk lightbox:
<img
  src={selectedImage.url}
  alt={selectedImage.alt}
  className="w-full h-full object-contain rounded-lg"
/>
```

**Comment atau delete placeholder** (tambahkan `{/* */}`):
```jsx
// Line ~35 - Comment placeholder ini:
{/* <div className="absolute inset-0 bg-gradient-to-br...">...</div> */}

// Line ~93 - Comment placeholder ini:
{/* <div className="bg-gradient-to-br...">...</div> */}
```

### 5. Tambah/Kurangi Foto
Edit array `galleryImages` di `Gallery.jsx`:

```jsx
const galleryImages = [
  {
    id: 1,
    url: '/assets/images/gallery-1.jpg',
    title: 'Engagement',
    alt: 'Foto Lamaran'
  },
  {
    id: 2,
    url: '/assets/images/gallery-2.jpg',
    title: 'Pre-Wedding',
    alt: 'Foto Pre-Wedding'
  },
  // Tambah foto lain di sini...
]
```

## Features Gallery

Gallery component punya fitur:
- ✅ Grid layout responsive (2 kolom mobile, 4 kolom desktop)
- ✅ Lightbox modal dengan navigasi
- ✅ Previous/Next navigation
- ✅ Click to enlarge
- ✅ Smooth animations
- ✅ Image counter
- ✅ Hover effects
- ✅ Touch-friendly

## Alternative: Video Embed

Jika ingin embed video YouTube/Vimeo instead of gallery:

### YouTube Embed:
```jsx
<div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Pre-Wedding Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full"
  ></iframe>
</div>
```

### Vimeo Embed:
```jsx
<div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
  <iframe
    src="https://player.vimeo.com/video/VIDEO_ID"
    title="Pre-Wedding Video"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    className="w-full h-full"
  ></iframe>
</div>
```

## Tips

1. **Foto Landscape**: Untuk hasil terbaik, gunakan foto landscape atau square
2. **Consistent Style**: Pilih foto dengan style/tone warna yang konsisten
3. **Face Visible**: Pastikan wajah terlihat jelas di foto
4. **Mix Formal & Casual**: Balance antara foto formal dan candid
5. **Quality**: Gunakan foto high quality, jangan blurry

## Troubleshooting

### Foto tidak muncul?
- Check path: `/assets/images/gallery-1.jpg` (huruf kecil!)
- Check file name exact match
- Clear browser cache (Ctrl+Shift+R)

### Foto terlalu besar (slow loading)?
- Compress dengan TinyPNG
- Target: < 200KB per foto
- Resize ke 1200x1200px

### Layout broken?
- Check aspect ratio foto (harus sama semua)
- Gunakan square ratio (1:1) untuk hasil terbaik

---

**Current Status**: Gallery component installed with placeholder.
**To activate**: Upload photos and uncomment image tags!
