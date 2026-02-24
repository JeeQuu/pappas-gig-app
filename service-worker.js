const CACHE_NAME = 'pappas-gig-v2';

const ALL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './musik/Crazy.mp3',
  './musik/Ett%20av%20dom%20satt.mp3',
  './musik/For%20dina%20blaa%20ogons%20skull.mp3',
  './musik/Good%20Luck%20Charm.mp3',
  './musik/I%20mina%20skor.mp3',
  './musik/I%20Need%20More%20Of%20You.mp3',
  './musik/Jag%20har%20bott%20vid%20en%20landsvag.mp3',
  './musik/Leende%20guldbruna%20ogon.mp3',
  './musik/Living%20Doll.mp3',
  './musik/Minnen.mp3',
  './musik/Tro%20mig%20jag%20behover%20dig.mp3'
];

// Install: cache EVERYTHING including all mp3s
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ALL_FILES))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first, cache new requests too
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
