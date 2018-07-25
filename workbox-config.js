module.exports = {
  runtimeCaching: [{
    urlPattern: new RegExp('/.*'),
    handler: 'staleWhileRevalidate'
  }],
  globDirectory: './.nuxt/',
  globPatterns: [
    '**/*.{html,js,css}'
  ],
  swDest: './static/sw.js',
  clientsClaim: true,
  skipWaiting: true
}
