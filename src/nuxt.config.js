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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900|Material+Icons' }

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
		  storageBucket: 'ul-backpacker.appspot.com',
		  messagingSenderId: '417461960380',
		  appId: '1:417461960380:web:24734b2e110edb54'
        },
        production: {
          apiKey: 'AIzaSyBRKVRN0Ic-D0gjXF110iYgiSV5yp2g5oA',
          authDomain: 'ul-backpacker.firebaseapp.com',
          databaseURL: 'https://ul-backpacker.firebaseio.com',
          projectId: 'ul-backpacker',
		  storageBucket: 'ul-backpacker.appspot.com',
		  messagingSenderId: '417461960380',
		  appId: '1:417461960380:web:24734b2e110edb54'
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
    treeShaking: true, // need to add dependencies
    theme: {
      primary: '#3aafa9'
    }
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
