# Nuxt.js PWA Starter

Sample Nuxt.js PWA project utilizing:
 - Server Side Rendering
 - Service workers for offline access
 - Workbox for Service Worker generation (https://developers.google.com/web/tools/workbox/)
 - Bulma for CSS

## Description

This sample app only provides scaffolding for extension and further use. There is no database, authentication, or functionality offered outside of what's displayed.

The application provides an Instagram-like "clone" as a starting point for development.

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# generate service worker (sw.js) file
$ npm run generate:sw

# build SSR app and generate sw.js
$ npm run generate:pwa

# build SSR app, generate sw.js, and run app
$ npm run start:pwa
```