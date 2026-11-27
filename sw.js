// Offline cache for Kairos. Change V to force an update after you edit index.html.
const V = 'kairos-v10';
const SHELL = ['./', 'index.html', 'core.js', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Signed-in API calls (GitHub gist sync, Google Calendar) always go to the network:
  // a cached copy would hide every change made on another device.
  if (e.request.method !== 'GET' || e.request.headers.has('Authorization')) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      // Keep good answers only. Opaque answers (the Google Fonts style sheet) cannot be read, so keep them too.
      if (res.ok || res.type === 'opaque') {
        const copy = res.clone();
        caches.open(V).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match('index.html')))
  );
});
