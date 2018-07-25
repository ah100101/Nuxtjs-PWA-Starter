import Vue from 'vue'

const workboxPlugin = {
  install: (Vue, options) => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.debug('SW registered: ', registration)
        }).catch(registrationError => {
          console.error('SW registration failed: ', registrationError)
        })
      })
    }
  }
}

Vue.use(workboxPlugin)
