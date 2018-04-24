import Vue from 'vue'

const workboxPlugin = {
  install: (Vue, options) => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
      })
    }
  }
}

Vue.use(workboxPlugin)
