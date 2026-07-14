/* Mon Hub — Service Worker
   Rôle : permettre l'installation PWA + recevoir les notifications push
   (nécessaire pour que le push fonctionne, y compris téléphone verrouillé). */

const CACHE = 'hub-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Réseau d'abord, cache en secours (permet un usage hors-ligne basique). */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return r;
    }).catch(() => caches.match(e.request).then(m => m || caches.match('./index.html')))
  );
});

/* Réception d'un push envoyé par le serveur (send-hub.js). */
self.addEventListener('push', e => {
  let data = { title: 'Mon Hub', body: 'Tu as un rappel.', url: './' };
  try { if (e.data) data = Object.assign(data, e.data.json()); }
  catch (_) { if (e.data) data.body = e.data.text(); }
  e.waitUntil(self.registration.showNotification(data.title, {
    body: data.body,
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: data.tag || undefined,
    data: { url: data.url || './' }
  }));
});

/* Clic sur la notification : ouvre/focus l'app. */
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const c of list) { if ('focus' in c) return c.focus(); }
      if (clients.openWindow) return clients.openWindow(e.notification.data && e.notification.data.url || './');
    })
  );
});
