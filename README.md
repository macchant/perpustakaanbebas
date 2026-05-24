# Perpustakaan Bebas

<p align="center">
  <img src="https://img.shields.io/badge/Status-Beta-orange" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">
  <img src="https://img.shields.io/badge/Powered%20by-Netlify-00C7B7?style=flat&logo=netlify" alt="Powered by Netlify">
</p>

<p align="center">
  📚 Perpustakaan digital gratis untuk komunitas yang membutuhkan.<br>
  Dibuat dengan ❤️ untuk mereka yang sedang memulai kembali.
</p>

---

## 🎯 Tentang Project

**Perpustakaan Bebas** adalah perpustakaan digital gratis yang dirancang untuk membantu siapa saja yang sedang membangun kembali hidupnya — terutama mereka yang baru kembali ke masyarakat setelah masa hukuman.

Buku-buku di sini dipilih untuk memberikan pengetahuan praktis:
- 💼 Keterampilan Kerja
- 🚀 Kewirausahaan
- 🧠 Kesehatan Mental
- 👨‍👩‍👧 Keluarga & Hubungan
- 🙏 Spiritual
- ⚖️ Hukum & Hak
- 📖 Pendidikan
- ✨ Cerita & Inspirasi

### ✨ Fitur

| Fitur | Keterangan |
|-------|------------|
| 📖 Baca PDF Online | Viewer built-in, support zoom, swipe, keyboard navigation |
| 🌙 Dark Mode | Nyaman untuk membaca di malam hari |
| 📱 Mobile First | Dirancang untuk HP lawas sampai smartphone terbaru |
| 🔍 Pencarian Cepat | Cari buku berdasarkan judul atau penulis |
| 🏷️ Filter Kategori | Filter berdasarkan 8 kategori |
| 📴 Offline Reading | PDF yang sudah dibaca tersimpan untuk offline |
| ⭐ Reading Progress | Lanjut baca dari halaman terakhir |
| 🔒 Privacy First | Tanpa tracking, tanpa login untuk pembaca |

---

## 🖼️ Tampilan

### Homepage - Daftar Buku
```
┌─────────────────────────────────────────────────────┐
│  🏠 Perpustakaan Bebas                    [🌙] [Mulai Baca] │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📚 Perpustakaan Digital · Gratis                   │
│                                                     │
│  Pengetahuan untuk awal yang baru.                  │
│  Kumpulan buku-buku bermanfaat — keterampilan       │
│  kerja, kewirausahaan, kesehatan mental...          │
│                                                     │
│  [ Lihat semua buku → ]  [ Tentang program ]       │
│                                                     │
├─────────────────────────────────────────────────────┤
│  📚 Perpustakaan              🔍 [Cari...]         │
│  Semua Buku                                        │
│                                                     │
│  [Semua] [Keterampilan] [Kewirausahaan]...         │
│                                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐              │
│  │ 📖   │ │ 📖   │ │ 📖   │ │ 📖   │              │
│  │      │ │      │ │      │ │      │              │
│  │Judul │ │Judul │ │Judul │ │Judul │              │
│  │ Penulis│ │ Penulis│ │ Penulis│ │ Penulis│              │
│  └──────┘ └──────┘ └──────┘ └──────┘              │
└─────────────────────────────────────────────────────┘
```

### Halaman Baca Buku
```
┌─────────────────────────────────────────────────────┐
│  ← Kembali       [🌙] [Admin]                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│  KETERAMPILAN KERJA                                 │
│  Keterampilan Kerja Dasar                            │
│  Oleh: Pusat Pelatihan Mandiri                       │
│                                                     │
│  Buku panduan untuk mempersiapkan diri              │
│  memasuki dunia kerja...                            │
│                                                     │
│  [⬇ Unduh PDF]  [⛶ Layar Penuh]                   │
│                                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 45%                │
│                                                     │
│  ┌───────────────────────────────────────────┐     │
│  │  ←  [ Halaman  3 dari 42 ]  →            │     │
│  │           [−] 100% [+] [Sesuaikan]        │     │
│  └───────────────────────────────────────────┘     │
│                                                     │
│  ┌───────────────────────────────────────────┐     │
│  │                                           │     │
│  │          📄 Halaman PDF                   │     │
│  │          Tampilan buku nyata              │     │
│  │                                           │     │
│  └───────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| **Frontend** | Plain HTML + CSS |
| **Styling** | Tailwind CSS (via CDN) |
| **PDF Reader** | PDF.js v4 |
| **CMS** | Decap CMS (Git-based) |
| **Auth** | Netlify Identity |
| **Hosting** | Netlify (free tier) |
| **PDF Storage** | Google Drive / Internet Archive |

---

## 🚀 Cara Deploy

### 1. Push ke GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

### 2. Connect ke Netlify
1. Buka [app.netlify.com](https://app.netlify.com)
2. **Add new site** → **Import from Git** → **GitHub**
3. Pilih repo ini
4. Settings:
   - Build command: *(kosongkan)*
   - Publish directory: `.`
5. Click **Deploy site**

### 3. Aktifkan Admin
1. **Site settings** → **Identity** → **Enable Identity**
2. **Registration** → **Open**
3. **Services** → **Git Gateway** → **Enable**
4. **Identity** → **Invite users** → Masukkan email admin

### 4. Update Config
Edit `admin/config.yml`, ganti:
```yaml
site_url: https://YOUR-SITE.netlify.app
display_url: https://YOUR-SITE.netlify.app
```

---

## 📁 Struktur Project

```
perpustakaan-bebas/
├── index.html          # Homepage + daftar buku
├── book.html           # Halaman baca PDF
├── sw.js               # Service worker (offline)
├── netlify.toml        # Netlify config
├── admin/
│   ├── index.html      # Decap CMS entry
│   └── config.yml      # CMS schema
├── covers/             # Cover buku
├── data/
│   └── books.json      # Data buku
├── README.md           # Dokumentasi utama
└── PANDUAN-ADMIN.md    # Panduan admin (Bahasa)
```

---

## 📝 Cara Menambah Buku (via Admin Panel)

1. Login ke `/admin/`
2. Klik **Buku** → **Daftar Buku**
3. Klik **+ Add Buku**
4. Isi form:
   - **ID Unik:** slug tanpa spasi (contoh: `keterampilan-kerja-dasar`)
   - **Judul:** Judul buku
   - **Penulis:** Nama penulis
   - **Kategori:** Pilih dari dropdown
   - **Deskripsi:** 2-3 paragraf
   - **Cover:** Upload gambar (600×840px)
   - **URL PDF:** Link Google Drive/Internet Archive
5. Klik **Save** → **Publish now**
6. Tunggu 30 detik, buku muncul di website! ✅

📖 [Panduan lengkap dalam Bahasa Indonesia](./PANDUAN-ADMIN.md)

---

## 🔧 Development Lokal

```bash
# Clone repo
git clone https://github.com/USERNAME/perpustakaan-bebas.git
cd perpustakaan-bebas

# Jalankan local server (diperlukan untuk testing)
python -m http.server 8000
# Atau
npx serve .

# Buka http://localhost:8000
```

---

## 🎨 Customization

### Mengubah Warna / Tema
Edit CSS variables di `index.html` dan `book.html`:
```css
:root {
  --accent: #3F6B4D;        /* Warna utama (hijau) */
  --accent-deep: #2D5238;   /* Warna hover */
  --bg: #FAFAF7;            /* Background */
  --text: #1A1A1A;          /* Text */
}
```

### Menambah Kategori Baru
1. Edit `index.html` → `CATEGORIES` object
2. Edit `book.html` → `CATEGORIES` object
3. Edit `admin/config.yml` → `options` list

### Mengubah Font
Ganti Google Fonts link di `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR+FONT&display=swap" rel="stylesheet">
```

---

## 🔒 Privacy & Accessibility

- ✅ **Tanpa tracking** — Tidak ada Google Analytics, pixel, atau widget social
- ✅ **Tanpa login pembaca** — Siapa saja bisa baca langsung
- ✅ **WCAG AA compliant** — Kontras warna yang baik
- ✅ **Mobile-friendly** — Berfungsi di HP lawas
- ✅ **Low bandwidth** — PDF di bawah 5 MB, lazy loading

---

## 🤝 Kontribusi

Kontribusi diterima! Silakan:
1. Fork repo ini
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'Menambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

---

## 📜 License

MIT License — bebas digunakan untuk keperluan apapun.

---

## 🙏 Credits

- **Designed for:** Komunitas yang membutuhkan akses ke pengetahuan gratis
- **Icons:** Heroicons
- **Fonts:** Plus Jakarta Sans & Fraunces (Google Fonts)
- **PDF Viewer:** Mozilla PDF.js

---

<p align="center">
  Dibuat dengan ❤️ untuk dunia yang lebih baik
</p>
