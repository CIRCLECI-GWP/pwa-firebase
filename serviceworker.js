var cacheName = "sw-v1";
var filesToCache = [
    "./",
    "./index.html",
    "./styles.css",
    "./app.js",
    "./images/dog1.jpg",
    "./images/dog2.jpg",
    "./images/dog3.jpg",
    "./images/dog4.jpg",
];

self.addEventListener("install", function (e) {
    console.log("<ServiceWorker> ---- Install v1");
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log("<ServiceWorker> --- Caching app shell");
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});