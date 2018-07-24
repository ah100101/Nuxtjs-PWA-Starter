workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
  new RegExp('/.*'),
  workbox.strategies.staleWhileRevalidate()
)

// workbox.routing.registerRoute(
//   new RegExp('/_nuxt/.*'),
//   workbox.strategies.staleWhileRevalidate()
// )

// self.addEventListener('push', (event) => {
//   const title = 'Get Started With Workbox';
//   const options = {
//     body: event.data.text()
//   };
//   event.waitUntil(self.registration.showNotification(title, options));
// });

workbox.precaching.precacheAndRoute(self.__precacheManifest)
