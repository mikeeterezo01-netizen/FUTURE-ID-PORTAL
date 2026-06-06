const CACHE_NAME = "id-portal-cache-v1";
const ASSETS = [
  "dashboard.html",
  "style.css",
  "manifest.json"
];

// I-install ang Service Worker sa Mobile Device
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Patakbuhin ang Fetch para mabilis mag-load ang app
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});