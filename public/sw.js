let version = "v3";

//Cache Files
let cacheFiles = [
  "https://expense-tracker-pwa-cb63c.web.app/static/js/bundle.js",
  "https://expense-tracker-pwa-cb63c.web.app/static/js/0.chunk.js",
  "https://expense-tracker-pwa-cb63c.web.app/static/js/main.chunk.js",
  "https://expense-tracker-pwa-cb63c.web.app/",
  "https://expense-tracker-pwa-cb63c.web.app/index.html",
  "https://fonts.googleapis.com/css?family=Lato&display=swap"
];

// Install Service Woker
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(version).then((cache) => {
      console.log("cacheFiles", cacheFiles);
      return cache.addAll(cacheFiles);
    })
  );
});

// Activate Service Worker
self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
});

const options = {
  ignoreSearch: true,
  ignoreMethod: true,
  ignoreVary: true,
};
// Fetch Service Worker
self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request, options)
        .then((response) => {
          if (response) {
            // console.log(response);
            return response || fetch.response;
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
    );
  }
});