const CACHE_NAME = 'pappas-gig-v10';

const ALL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './musik/Alska%20glomma%20och%20forlata.mp3',
  './musik/Blue%20Hawaii.mp3',
  './musik/Crazy.mp3',
  './musik/Ett%20av%20dom%20satt.mp3',
  './musik/For%20dina%20blaa%20ogons%20skull.mp3',
  './musik/Good%20Luck%20Charm.mp3',
  './musik/I%20mina%20skor.mp3',
  './musik/I%20Need%20More%20Of%20You.mp3',
  './musik/Inga%20stora%20bevingade%20ord.mp3',
  './musik/Jag%20har%20bott%20vid%20en%20landsvag.mp3',
  './musik/Leende%20guldbruna%20ogon.mp3',
  './musik/Living%20Doll.mp3',
  './musik/Ljus%20och%20varme.mp3',
  './musik/Men%20bara%20om%20min%20alskade.mp3',
  './musik/Mini%20Gitarr.mp3',
  './musik/Minnen.mp3',
  './musik/Natten%20har%20tusen%20ogon.mp3',
  './musik/Teddy%20Bear.mp3',
  './musik/The%20Great%20Snowman.mp3',
  './musik/Travellin%20Light.mp3',
  './musik/Tro%20mig%20jag%20behover%20dig.mp3',
  './musik/Vi%20har%20sa%20mycket%20att%20saga%20varann.mp3'
];

// Install: cache EVERYTHING including all mp3s
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ALL_FILES))
  );
  self.skipWaiting();
});

// Activate: clean old caches + force reload all open tabs
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
      .then(() => self.clients.matchAll())
      .then(clients => {
        clients.forEach(client => client.navigate(client.url));
      })
  );
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
