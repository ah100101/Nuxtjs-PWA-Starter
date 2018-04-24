importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js')

if (!workbox) {
  console.error('service worker failed to load')
} else {
  workbox.routing.registerRoute(
    new RegExp('/.*'),
    workbox.strategies.networkFirst()
  )

  workbox.routing.registerRoute(
    new RegExp('/_nuxt/.*'),
    workbox.strategies.staleWhileRevalidate()
  )
}
