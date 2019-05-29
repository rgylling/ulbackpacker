importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c56c8aa4fe9ab9e1c1e.js",
    "revision": "4e0bd8ce0513f8c5186b87e70fec9dd7"
  },
  {
    "url": "/_nuxt/1c2525f4cd3c1414bc8c.js",
    "revision": "3d937eca09cfb7eb68253b7eb37ba7bc"
  },
  {
    "url": "/_nuxt/325b37722d4050bbb1cb.js",
    "revision": "3f4bbdcb68acd740fe3511734f92ca9d"
  },
  {
    "url": "/_nuxt/3687a24690680ea3ab48.js",
    "revision": "c1043ac4c921c75fe50e7b95648206a3"
  },
  {
    "url": "/_nuxt/7343714e9e893b748487.js",
    "revision": "59db4bcdbcd795ee90feadfe799bde38"
  },
  {
    "url": "/_nuxt/815372b951e2468df534.js",
    "revision": "e9693906008c64af5194df41ff6d9af6"
  },
  {
    "url": "/_nuxt/873bfe91d596d8e2ac3f.js",
    "revision": "a8465d114ec06a65a483c278c191b414"
  },
  {
    "url": "/_nuxt/b966dab0662f530b908b.js",
    "revision": "6163b634cb3c309ce32a524dea97f8d7"
  }
], {
  "cacheId": "ulbackpacker",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
