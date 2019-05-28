process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const serveStatic = require('serve-static')

const app = express()

// // Import and Set Nuxt.js options
// require('dotenv').config()

const config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start () {
  // set liveness endpoint for k8s, up right away
  // app.get('/.well-known/live', (req, res) => {
  //   res.send('ok')
  // })

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    // Give nuxt middleware to express
    app.use(nuxt.render)
    // Listen the server
    app.listen(port, host)

    const builder = new Builder(nuxt)
    const opener = require('opener')
    opener(`http://${host}:${port}`)
    const loadingScreen = require('@nuxt/loading-screen')
    loadingScreen(nuxt, false).catch(() => { /* Don't do anything with errors since we aren't using default nuxt server */ })
    await builder.build()
  } else {
    // Production

    // Give nuxt middleware to express
    await nuxt.ready()

    // app.get('/.well-known/ready', (req, res) => {
    //   res.send('ok')
    // })

    app.use(serveStatic('static', { index: false }))

    app.use(nuxt.render)
    // Listen the server
    console.log(`Listening on ${host}:${port}. Graphql endpoint ${process.env.GRAPHQL_API}`)
    app.listen(port, host)
  }
}
start()
