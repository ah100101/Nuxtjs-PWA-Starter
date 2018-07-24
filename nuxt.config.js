const workboxPlugin = require('workbox-webpack-plugin')
const GoogleFontsPlugin = require('google-fonts-webpack-plugin')
const webpack = require('webpack')

const workbox = new workboxPlugin.InjectManifest({
  swSrc: './assets/custom-sw.js',
  swDest: 'sw.js'
})

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
    vendor: [
      'workbox-webpack-plugin',
      'google-fonts-webpack-plugin'
    ],
    extractCSS: true,
    postcss: { plugins: { 'postcss-custom-properties': false } },
    plugins: [
      workbox,
      googleFontsPlugin,
      new webpack.NormalModuleReplacementPlugin(
        /\/iconv-loader$/, 'node-noop',
      )
    ],
    extend (config, { isDev, isClient, isServer }) {
      config.node = {
        fs: 'empty',
        'fs-extra': 'empty',
        net: 'empty'
      }
      config.externals = {
        'fs-extra': '{}',
        'graceful-fs': '{}'
      }
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
