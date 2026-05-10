# 🎵 Background Music Setup

## Lagu yang Dipilih
**"Perfect" by Ed Sheeran**
- Spotify: https://open.spotify.com/track/28giUgzKrRWSDFweJbLS0v

## 📥 Cara Download dari Spotify

### Opsi 1: Spotify Premium (Legal)
Jika Anda punya Spotify Premium:
1. Buka Spotify Desktop App
2. Cari lagu "Perfect - Ed Sheeran"
3. Klik "..." (More) > Download
4. File akan tersimpan offline di Spotify (DRM protected)

**Note**: File Spotify Premium tetap DRM-protected dan tidak bisa digunakan di website.

### Opsi 2: Beli dari Platform Legal
Download lagu secara legal dari:
- **Apple Music / iTunes** - https://music.apple.com
- **Amazon Music** - https://music.amazon.com
- **Google Play Music** - https://play.google.com/store/music

### Opsi 3: YouTube to MP3 (Use with Caution)
**⚠️ Disclaimer**: Pastikan Anda punya hak untuk menggunakan lagu ini.

1. Cari "Perfect Ed Sheeran" di YouTube
2. Copy URL video
3. Gunakan converter legal (untuk personal use only):
   - https://ytmp3.nu
   - https://320ytmp3.com
   - https://y2mate.com

4. Download sebagai MP3
5. Rename file menjadi: `background-music.mp3`

### Opsi 4: Free Alternative Music (Royalty-Free)
Jika tidak mau repot dengan copyright, gunakan musik royalty-free:

**Romantic Instrumental (Gratis & Legal)**:
- [YouTube Audio Library](https://www.youtube.com/audiolibrary) - Filter: "Wedding", "Romantic"
- [Epidemic Sound](https://www.epidemicsound.com) - Trial available
- [AudioJungle](https://audiojungle.net) - Paid but affordable
- [Free Music Archive](https://freemusicarchive.org) - Completely free

**Rekomendasi lagu gratis yang bagus**:
- "Married Life" from UP (Piano Cover)
- "Canon in D" by Pachelbel
- "A Thousand Years" Instrumental Cover
- "All of Me" Instrumental Cover

## 📝 Setelah Download

1. **Rename file** menjadi `background-music.mp3`
2. **Pindahkan** ke folder: `public/assets/audio/`
3. **Check file size**: Maksimal 5MB
   - Jika lebih besar, compress dengan [Online Audio Converter](https://online-audio-converter.com)
   - Set bitrate ke 128kbps (balance antara quality & size)

4. **Test di website**:
   ```bash
   npm run dev
   # Buka http://localhost:5174
   # Click "Buka Undangan" dan cek musik play
   ```

## 🎛️ Settings Recommended

### File Specs:
- **Format**: MP3
- **Bitrate**: 128kbps (balance) atau 192kbps (better quality)
- **Sample Rate**: 44100 Hz
- **Duration**: 3-5 menit (akan loop otomatis)
- **File Size**: < 5MB (untuk fast loading)

### Compress Large Files:
Jika file > 5MB, compress dengan:
- [Online Audio Converter](https://online-audio-converter.com)
  1. Upload file
  2. Set format: MP3
  3. Set quality: 128 kbps
  4. Convert & download

## 🔊 Music Player Features

Website sudah punya music player dengan:
- ✅ Auto-play setelah user click "Buka Undangan"
- ✅ Play/Pause button
- ✅ Mute/Unmute button  
- ✅ Loop otomatis
- ✅ Floating controls (bottom right)

## ⚖️ Copyright Notice

**Penting**: 
- Untuk **website pribadi non-komersial** (undangan pernikahan), penggunaan musik biasanya termasuk "fair use"
- Namun, untuk **100% legal**, gunakan:
  1. Musik yang Anda beli (iTunes, Amazon Music)
  2. Royalty-free music dari YouTube Audio Library
  3. Creative Commons licensed music

- **Jangan monetize** website Anda jika pakai lagu copyrighted
- **Jangan share** file musiknya di public

## 🎵 Alternative: Embed Spotify Player

Jika mau embed Spotify langsung (memerlukan internet):

```javascript
// Di MusicPlayer.jsx, tambahkan:
<iframe 
  src="https://open.spotify.com/embed/track/28giUgzKrRWSDFweJbLS0v" 
  width="300" 
  height="80" 
  frameBorder="0" 
  allowtransparency="true" 
  allow="encrypted-media"
></iframe>
```

**Pros**: Legal, no download needed
**Cons**: 
- User harus punya internet
- Tidak auto-play
- Show Spotify branding

## ✅ Checklist

- [ ] Download lagu (legal method)
- [ ] Rename menjadi `background-music.mp3`
- [ ] Pindahkan ke `public/assets/audio/`
- [ ] Check file size (< 5MB)
- [ ] Test di browser
- [ ] Verify auto-play works
- [ ] Check loop works
- [ ] Test play/pause buttons
- [ ] Test mute button
- [ ] Test di mobile device

## 🚀 Quick Test

Setelah file di-place di `public/assets/audio/background-music.mp3`:

```bash
# Restart dev server
npm run dev

# Buka browser
# Click "Buka Undangan"
# Music should play automatically!
```

---

**Note**: File musik **tidak included** dalam repository ini. Anda perlu menambahkan sendiri sesuai panduan di atas.

**Lagu pilihan Anda**: "Perfect" by Ed Sheeran adalah pilihan yang sangat bagus dan romantis untuk undangan pernikahan! 💕🎵
