const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

// Install SW
self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll(urlsToCache);
		})
	);
});

// Listen for requests
self.addEventListener("fetch", async function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return (
				response ||
				fetch(event.request).catch(function () {
					return caches.match("offline.html");
				})
			);
		})
	);
});

// Activate the SW
self.addEventListener("activate", function (event) {
	const cacheWhitelist = [CACHE_NAME];

	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (!cacheWhitelist.includes(cacheName)) {
						return caches.delete(cacheName);
					}
					// Ensure a value is returned in all cases
					return null; // or any other appropriate value
				})
			);
		})
	);
});
