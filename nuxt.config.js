module.exports = {
  head: {
    title: 'vue-client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Give better gifts' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Pacifico|Source+Sans+Pro' }
    ]
  },
  css: [
    '~/assets/scss/main.scss'
  ],
  loading: { color: '#3B8070' },
  build: {
    vendor: [

    ],
    extractCSS: true,
    postcss: { plugins: { 'postcss-custom-properties': false } },
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isServer) {

      }
    }
  },
  plugins: [
    { src: '~/plugins/workbox-plugin.js', ssr: false }
  ]
}
