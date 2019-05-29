module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ultralight backpacking',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@assets/main.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/vuetify',
    ['nuxt-fire', {
      useOnly: ['auth', 'firestore' ],
      config: {
        development: {
          apiKey: 'AIzaSyBRKVRN0Ic-D0gjXF110iYgiSV5yp2g5oA',
          authDomain: 'ul-backpacker.firebaseapp.com',
          databaseURL: 'https://ul-backpacker.firebaseio.com',
          projectId: 'ul-backpacker',
          storageBucket: '<storageBucket>',
          messagingSenderId: '<messagingSenderId>'
        },
        production: {
          apiKey: 'AIzaSyBRKVRN0Ic-D0gjXF110iYgiSV5yp2g5oA',
          authDomain: 'ul-backpacker.firebaseapp.com',
          databaseURL: 'https://ul-backpacker.firebaseio.com',
          projectId: 'ul-backpacker',
          storageBucket: '<storageBucket>',
          messagingSenderId: '<messagingSenderId>'
        }
      }
    }]
  ],
  router: {
    middleware: 'test'
  },

// Vuetify options
  vuetify: {
    materialIcons: true,
    css: true,
    treeShaking: true // need to add dependencies
  //  theme: { }
  },
  /*
  ** Build configuration
  */
  buildDir: 'nuxt',
  build: {
    extractCSS: true,
    babel: {
      presets: ({ isServer }) => [
        [
          '@nuxt/babel-preset-app',
          {
            targets: isServer
              ? { node: '8.11.1' }
              : { browsers: ['defaults'] }
          }
        ]
      ]
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
		  options: {
  	  		fix: true
  }
        })
      }
    }
  }
}
