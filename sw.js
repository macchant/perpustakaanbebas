const CACHE_NAME = 'perpustakaan-v1';
const PDF_CACHE_NAME = 'pdf-cache-v1';
const recentPdfs = [];

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/book.html',
  '/data/books.json'
];

const CDN_HOSTS = [
  'cdn.tailwindcss.com',
  'cdnjs.cloudflare.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'unpkg.com',
  'cdn.jsdelivr.net',
  'identity.netlify.com'
];

// Install: cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME && k !== PDF_CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: unified handler
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and non-http
  if (request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  const isCdn = CDN_HOSTS.some((host) => request.url.includes(host));
  const isPdf = url.pathname.endsWith('.pdf');

  // PDFs: network with offline cache (max 5MB, max 5 files)
  if (isPdf) {
    event.respondWith(
      caches.open(PDF_CACHE_NAME).then((cache) =>
        cache.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request).then((response) => {
            if (response.ok) {
              const cl = response.headers.get('content-length');
              if (!cl || parseInt(cl) < 5 * 1024 * 1024) {
                cache.put(request, response.clone());
                recentPdfs.push(request.url);
                if (recentPdfs.length > 5) {
                  const old = recentPdfs.shift();
                  cache.delete(old);
                }
              }
            }
            return response;
          }).catch(() => new Response('PDF tidak tersedia offline.', { status: 503 }))
        })
      )
    );
    return;
  }

  // CDNs: stale-while-revalidate
  if (isCdn) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const fetchPromise = fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((c) => c.put(request, clone));
          }
          return response;
        });
        return cached || fetchPromise;
      })
    );
    return;
  }

  // HTML & root: network-first with cache fallback
  if (url.pathname.endsWith('.html') || url.pathname === '/') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((c) => c.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // JSON: stale-while-revalidate
  if (url.pathname.endsWith('.json')) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const fetchPromise = fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((c) => c.put(request, clone));
          }
          return response;
        });
        return cached || fetchPromise;
      }).catch(() => caches.match(request))
    );
    return;
  }

  // Everything else: cache-first
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).catch(() => cached))
  );
});