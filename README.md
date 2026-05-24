# Perpustakaan Bebas

A free digital library of PDF books, designed for ex-incarcerated communities seeking practical knowledge for reentry. Static site + admin panel, free to host, easy to maintain by a non-technical user.

## Stack

- **Frontend:** Plain HTML + Tailwind (via CDN) + PDF.js
- **CMS:** Decap CMS (with Netlify Identity for auth)
- **Hosting:** Netlify free tier
- **Storage:** PDFs hosted externally (Google Drive, Internet Archive, or any direct URL). Cover images stored in repo under `/covers/`.

## Project structure

```
library/
├── index.html              ← landing + library grid + filter + search
├── book.html               ← book detail + embedded PDF reader
├── admin/
│   ├── index.html          ← Decap CMS entry
│   └── config.yml          ← Decap collection schema
├── covers/                 ← cover images (managed by CMS)
├── data/
│   └── books.json          ← book metadata (managed by CMS)
├── netlify.toml            ← Netlify config + headers
├── README.md               ← this file (dev docs)
└── PANDUAN-ADMIN.md        ← admin guide for the friend (Bahasa Indonesia)
```

## Deployment to Netlify

### 1. Push to GitHub

Create a new GitHub repo and push the `library/` folder contents to its root.

### 2. Connect to Netlify

1. Sign in to [netlify.com](https://app.netlify.com) (free account)
2. **Add new site → Import an existing project → GitHub**
3. Select the repo
4. Build settings:
   - Build command: *(leave empty)*
   - Publish directory: `.`
5. Click **Deploy site**

### 3. Enable Netlify Identity (for the admin login)

1. In the Netlify dashboard → **Site configuration → Identity → Enable Identity**
2. Under **Registration preferences → Open** (or Invite-only if you want stricter control)
3. Under **Services → Git Gateway → Enable Git Gateway**

### 4. Invite the admin user (your friend)

1. **Identity → Invite users**
2. Enter the friend's email
3. He'll receive an email, set his password, then can log in at `[your-site].netlify.app/admin/`

### 5. Update `admin/config.yml`

Replace `YOUR-SITE.netlify.app` with the actual deployed domain in two places (`site_url` and `display_url`).

## Adding the first batch of books

You (the developer) seed the initial books by editing `data/books.json` directly. After that, your friend manages everything through `/admin/`.

Each book object:

```json
{
  "id": "unique-slug-no-spaces",
  "title": "Judul Buku",
  "author": "Nama Penulis",
  "category": "keterampilan",
  "description": "Deskripsi singkat...",
  "cover": "covers/filename.jpg",
  "pdf_url": "https://drive.google.com/file/d/FILE_ID/view"
}
```

Valid `category` values:
- `keterampilan` — Keterampilan Kerja
- `kewirausahaan` — Kewirausahaan
- `kesehatan-mental` — Kesehatan Mental
- `keluarga` — Keluarga & Hubungan
- `spiritual` — Spiritual
- `hukum` — Hukum & Hak
- `pendidikan` — Pendidikan
- `inspirasi` — Cerita & Inspirasi

To add or rename a category: edit the `CATEGORIES` object in `index.html` and `book.html`, plus the `options` list in `admin/config.yml`.

## PDF storage strategy

The `pdf_url` field accepts any direct PDF URL. The book reader (`book.html`) automatically converts Google Drive share URLs to direct-download URLs.

**Current Setup: Google Drive** (easiest for non-technical admins)
- Upload PDF → Set "Anyone with link can view" → Copy share link → Paste in admin panel
- System auto-converts to download URL
- ⚠️ **Limit:** ~100 downloads/day per file. Keep PDFs under 2 MB to reduce hit count.
- 📖 [Full Google Drive guide in PANDUAN-ADMIN.md](./PANDUAN-ADMIN.md#11-batasan-google-drive--solusi)

**More durable alternatives:**

1. **Internet Archive (archive.org)** — permanent, free, no download limits. Best for mission-critical books.
2. **Cloudflare R2** — 10 GB free, fast CDN, no egress fees. Good for scaling.
3. **Firebase Storage** — 5 GB free, simple setup with this stack.

The system is **storage-agnostic** — switching providers means just changing URLs in the CMS, no code changes.

## PDF compression (important)

A4 illustrated PDFs from InDesign/Word often export at 20-80 MB. Compress aggressively before uploading:

- **Web tools:** [smallpdf.com](https://smallpdf.com/compress-pdf), [ilovepdf.com](https://www.ilovepdf.com/compress_pdf)
- **Desktop:** Adobe Acrobat → Save As Other → Reduced Size PDF
- **CLI (batch):** `ghostscript -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -o output.pdf input.pdf`

**Target: under 5 MB per book.** This is critical for users on mobile data plans.

## Local development

The site is plain HTML — just open `index.html` in a browser. For testing fetch behavior (which requires a server, not file://), use any static server:

```bash
# Python 3
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Privacy & accessibility commitments

This site deliberately:

- Does **NOT** include Google Analytics or any tracking pixels
- Does **NOT** require login or email capture for readers
- Does **NOT** include social share widgets that track
- **DOES** use minimum 16-18px body text (large for accessibility)
- **DOES** maintain WCAG AA color contrast
- **DOES** work on low-end devices (no React/Vue, minimal JS)
- **DOES** lazy-load images and the PDF viewer

If you add features, preserve these commitments. The audience deserves dignity and privacy.

## Future enhancements (ideas, not required)

- Service worker for offline reading after first visit
- Reading progress bar at the top of book pages
- "Continue reading" widget on the homepage (using localStorage)
- Multi-language toggle (Bahasa / English)
- Audio narration links (TTS or recorded)
- Print-friendly book detail pages
- Dark mode toggle
- RSS feed for new books

## Maintenance contract with your friend

Hand him `PANDUAN-ADMIN.md` (Bahasa Indonesia) — that's all he needs to manage books on his own.

For anything beyond content management (design changes, new features, category additions), he comes to you.

## License

The website code is yours/your friend's to license as you see fit. The book content is each respective author's — make sure your friend has rights to redistribute each PDF before adding it.

For the books themselves, consider a Creative Commons declaration in the footer if appropriate.
