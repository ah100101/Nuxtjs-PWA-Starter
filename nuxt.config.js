const workboxPlugin = require('workbox-webpack-plugin')
const GoogleFontsPlugin = require('google-fonts-webpack-plugin')

const googleFontsPlugin = new GoogleFontsPlugin({
  fonts: [
    {family: 'Pacifico'},
    {family: 'Source Sans Pro'}
  ]
})

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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },
  css: [
    '~/assets/scss/main.scss'
  ],
  loading: { color: '#3B8070' },
  build: {
    extractCSS: true,
    postcss: { plugins: { 'postcss-custom-properties': false } },
    plugins: [
      new workboxPlugin.InjectManifest({
        swSrc: './assets/custom-sw.js',
        swDest: 'sw.js'
      }),
      googleFontsPlugin
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  mode: 'spa',
  plugins: [
    '~/plugins/workbox-plugin.js'
  ]
}
