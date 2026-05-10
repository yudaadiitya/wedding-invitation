# Deployment Guide

## Deploy ke Vercel (Recommended)

### Method 1: Via Website (Paling Mudah)

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Wedding invitation website"
   git branch -M main
   git remote add origin https://github.com/username/wedding-invitation.git
   git push -u origin main
   ```

2. **Deploy di Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan GitHub
   - Klik "New Project"
   - Import repository Anda
   - Vercel akan auto-detect Vite settings
   - Klik "Deploy"
   - Tunggu 1-2 menit, website sudah online!

3. **Custom Domain (Optional)**
   - Di Vercel dashboard, pilih project Anda
   - Masuk ke Settings > Domains
   - Tambahkan domain custom Anda
   - Follow instruksi untuk setup DNS

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Deploy ke Netlify

### Method 1: Via Website

1. **Push ke GitHub** (sama seperti di atas)

2. **Deploy di Netlify**
   - Kunjungi [netlify.com](https://netlify.com)
   - Login dengan GitHub
   - Klik "Add new site" > "Import an existing project"
   - Choose GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Klik "Deploy site"
   - Website online dalam 1-2 menit!

### Method 2: Drag & Drop

1. Build project locally:
   ```bash
   npm run build
   ```

2. Kunjungi [app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag & drop folder `dist` ke website

4. Selesai! Instant deploy.

## Deploy ke GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Tambahkan scripts di `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/wedding-invitation/', // nama repo Anda
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages di repository settings

## Custom Domain Setup

### Untuk Vercel:
1. Beli domain di Namecheap, GoDaddy, atau Niagahoster
2. Di Vercel dashboard > Settings > Domains
3. Add domain Anda
4. Update DNS records di domain provider:
   - Type: CNAME
   - Name: @
   - Value: cname.vercel-dns.com

### Untuk Netlify:
1. Di Netlify dashboard > Domain settings
2. Add custom domain
3. Update DNS records:
   - Type: A
   - Name: @
   - Value: IP yang diberikan Netlify

## Environment Variables (Jika Diperlukan)

Jika nanti Anda tambahkan fitur yang butuh API keys:

### Vercel:
1. Dashboard > Settings > Environment Variables
2. Add variable
3. Redeploy

### Netlify:
1. Site settings > Build & deploy > Environment
2. Add variable
3. Trigger deploy

## Tips Performance

Sebelum deploy, pastikan:

1. ✅ Compress images (gunakan TinyPNG atau Squoosh)
2. ✅ Audio file tidak lebih dari 5MB
3. ✅ Test di berbagai browser dan device
4. ✅ Check Lighthouse score (aim for >90)

## Post-Deployment Checklist

- [ ] Test website di mobile
- [ ] Test semua link dan button
- [ ] Test form guest book
- [ ] Test copy rekening
- [ ] Test music player
- [ ] Test Google Maps
- [ ] Share link dengan teman untuk feedback

## URL Gratis yang Akan Anda Dapat

- **Vercel**: `your-project.vercel.app`
- **Netlify**: `your-project.netlify.app`
- **GitHub Pages**: `username.github.io/wedding-invitation`

Semua sudah HTTPS dan CDN global otomatis!

## Troubleshooting

### Audio tidak play otomatis
- Ini normal behavior browser modern
- User harus interact dulu (click button "Buka Undangan")
- Sudah handled di code

### Images tidak muncul
- Check path di public/assets/
- Case-sensitive di production
- Pastikan images sudah di-commit ke Git

### Form tidak simpan
- localStorage hanya lokal per device
- Tidak shared antar user
- Ini by design (no backend)

---

**Selamat! Website undangan Anda siap online! 🎉**
