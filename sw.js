// 아이사랑 관리자 앱 Service Worker
const VERSION = 'v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

// 네트워크 우선, 실패 시 캐시 (데이터가 항상 최신이어야 하므로)
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
