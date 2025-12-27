const cacheName = 'pody-chat-v1';
const assets = [
  '/',
  '/index.html',
  '/login.html',
  '/users.html',
  '/chat.html',
  '/style.css',
  '/button-7.mp3',
  '/welcome.mp3'
];

// تثبيت ملفات التطبيق في الذاكرة
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق من الذاكرة حتى لو مفيش نت
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
