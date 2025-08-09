import { build, files, version } from '$service-worker';

// Create a unique cache name for this version of the app
const CACHE_NAME = `cache-${version}`;

// List all the files to be cached, including the build artifacts and static files.
const ASSETS_TO_CACHE = build.concat(files);

self.addEventListener('install', (event) => {
  // Pre-cache all essential assets.
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Caching all assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  // Clean up old caches to save space.
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // If the cache name is different from our current one, delete it.
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Serve from cache first, fall back to network.
  // This strategy is good for offline-first apps.
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If the request is in the cache, return the cached response.
      if (response) {
        return response;
      }
      // If the request is not in the cache, fetch it from the network.
      return fetch(event.request);
    })
  );
});
