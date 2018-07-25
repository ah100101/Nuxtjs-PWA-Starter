importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
  new RegExp('/.*'),
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  new RegExp('https://fonts.googleapis.com/css?family=Pacifico|Source+Sans+Pro'),
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  new RegExp('https://fonts.googleapis.com/icon?family=Material+Icons'),
  workbox.strategies.staleWhileRevalidate()
)

// self.addEventListener('push', (event) => {
//   const title = 'Get Started With Workbox'
//   const options = {
//     body: event.data.text()
//   }
//   event.waitUntil(self.registration.showNotification(title, options))
// })

workbox.precaching.precacheAndRoute([])
