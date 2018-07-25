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

// tits

// self.addEventListener('push', (event) => {
//   const title = 'Get Started With Workbox'
//   const options = {
//     body: event.data.text()
//   }
//   event.waitUntil(self.registration.showNotification(title, options))
// })

workbox.precaching.precacheAndRoute([
  {
    "url": "App.js",
    "revision": "168a3207b0c0f1686585ea26924278df"
  },
  {
    "url": "client.js",
    "revision": "5b66208875b5557f7b7195b6fa0afeb9"
  },
  {
    "url": "components/no-ssr.js",
    "revision": "a775ce7200a68c41e24d59d95d58e334"
  },
  {
    "url": "components/nuxt-child.js",
    "revision": "b8d4d90554625e3194c6a423d92c68ed"
  },
  {
    "url": "components/nuxt-link.js",
    "revision": "aff107e6a695ceae1fd1a0e3fd99dacb"
  },
  {
    "url": "components/nuxt.js",
    "revision": "80f71ce3df1f11aebcf884929047239a"
  },
  {
    "url": "dist/app.c2cb614e2e42cc10ae8f0bcb30367095.css",
    "revision": "c2cb614e2e42cc10ae8f0bcb30367095"
  },
  {
    "url": "dist/app.f7832f6368b47dbf1afb.js",
    "revision": "0495fdd9167083c12c37fbc1ece94988"
  },
  {
    "url": "dist/index.spa.html",
    "revision": "465c703a571e1e58a5916795adc3e21c"
  },
  {
    "url": "dist/index.ssr.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "dist/layouts_default.d2f6649f47e3d7857790.js",
    "revision": "5d2cba1187179ffe6b933ed7fe2fb919"
  },
  {
    "url": "dist/manifest.f2d1f3ac363c381bd066.js",
    "revision": "93d418456352cbb6261a80a207f678b2"
  },
  {
    "url": "dist/pages_account.571d673696081066b195.js",
    "revision": "fb3bb94659e13280a393acd283dd46ac"
  },
  {
    "url": "dist/pages_add.d341f6ce9574210004ee.js",
    "revision": "cde0efb667ee351c00e60756c181cd6e"
  },
  {
    "url": "dist/pages_change-password.99470d67aa63a9a94ad5.js",
    "revision": "c83e4685e0636fd02b6b55de40a06347"
  },
  {
    "url": "dist/pages_feed.36bc950b3b8798e97d30.js",
    "revision": "f8f8e9907804877b06326245f8c7c7ad"
  },
  {
    "url": "dist/pages_forgot-password.7ef52ea8ba98f7b60725.js",
    "revision": "1cec6a8d446b2e1af6d375f6558910cf"
  },
  {
    "url": "dist/pages_friends.e9b9acfe940fe4685305.js",
    "revision": "680c6ca4017902bd10b77118d8b20d19"
  },
  {
    "url": "dist/pages_index.f26f1dfc747e3ac49895.js",
    "revision": "dc073ba5c73a3fdb8f6ed2fb5f551d35"
  },
  {
    "url": "dist/pages_login.81e5199db2de66db8dbd.js",
    "revision": "68e549e520c5dbee19ed4adcaf94d086"
  },
  {
    "url": "dist/pages_post.76b2499c083b2d19a73d.js",
    "revision": "b316af0fbc9f4b12b4ba467156316cf0"
  },
  {
    "url": "dist/pages_search.1c3e0b71d22ef2ea88cf.js",
    "revision": "47bfee24e20ad974e8ff3f1ee6d37281"
  },
  {
    "url": "dist/pages_sign-up.be000a872bfe04d1583b.js",
    "revision": "7e44c3d91e799d200c1b409a8ef1cf7b"
  },
  {
    "url": "dist/pages_user__id.597803d42228c666d8fb.js",
    "revision": "5259095d2b2beb08dce30e99b04ed1c8"
  },
  {
    "url": "dist/vendor.c6696fb9f7f83562a954.js",
    "revision": "355c2bf1a06772a2d8c252ec823d1819"
  },
  {
    "url": "empty.js",
    "revision": "0b975041be133e77125d7d42d81e3e1c"
  },
  {
    "url": "index.js",
    "revision": "7ba16493c18fbf3a30438eb3ae8b0c47"
  },
  {
    "url": "loading.html",
    "revision": "9ffe5581801714f3b7aad37fad364010"
  },
  {
    "url": "middleware.js",
    "revision": "2a35b295e7da3bffd0644e0671972af6"
  },
  {
    "url": "router.js",
    "revision": "21b34261dcb2080f953d643782c0c08f"
  },
  {
    "url": "server.js",
    "revision": "124be7974c1eee46d7d81277a0e5aa8e"
  },
  {
    "url": "store.js",
    "revision": "58387b0919380e501f50e86adf0c2f36"
  },
  {
    "url": "utils.js",
    "revision": "17cb400669290453ba1c2ad8038b6ec2"
  },
  {
    "url": "views/app.template.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "views/error.html",
    "revision": "57cceec04c48a85d442105e00ccff251"
  }
])
