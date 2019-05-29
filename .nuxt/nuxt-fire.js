import firebase from 'firebase/app'
import 'firebase/auth'

import 'firebase/firestore'

import 'firebase/functions'

export default (ctx, inject) => {
  const options = {"useOnly":["auth","firestore","functions"],"functionsLocation":"us-central1","config":{"development":{"apiKey":"AIzaSyBRKVRN0Ic-D0gjXF110iYgiSV5yp2g5oA","authDomain":"ul-backpacker.firebaseapp.com","databaseURL":"https:\u002F\u002Ful-backpacker.firebaseio.com","projectId":"ul-backpacker","storageBucket":"\u003CstorageBucket\u003E","messagingSenderId":"\u003CmessagingSenderId\u003E"},"production":{"apiKey":"AIzaSyBRKVRN0Ic-D0gjXF110iYgiSV5yp2g5oA","authDomain":"ul-backpacker.firebaseapp.com","databaseURL":"https:\u002F\u002Ful-backpacker.firebaseio.com","projectId":"ul-backpacker","storageBucket":"\u003CstorageBucket\u003E","messagingSenderId":"\u003CmessagingSenderId\u003E"}},"currentEnv":"production"}

  // Don't include when Firebase is already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(options.config[options.currentEnv])
  }

  if (options.useOnly.includes('auth')) {
    const fireAuth = firebase.auth()
    const fireAuthObj = firebase.auth
    inject('fireAuth', fireAuth)
    inject('fireAuthObj', fireAuthObj)
  }

  if (options.useOnly.includes('realtimeDb')) {
    const fireDb = firebase.database()
    const fireDbObj = firebase.database
    inject('fireDb', fireDb)
    inject('fireDbObj', fireDbObj)
  }

  if (options.useOnly.includes('firestore')) {
    const fireStore = firebase.firestore()
    const fireStoreObj = firebase.firestore
    inject('fireStore', fireStore)
    inject('fireStoreObj', fireStoreObj)
  }

  if (options.useOnly.includes('storage')) {
    const fireStorage = firebase.storage()
    const fireStorageObj = firebase.storage
    inject('fireStorage', fireStorage)
    inject('fireStorageObj', fireStorageObj)
  }

  if (options.useOnly.includes('functions')) {
    const fireFunc = firebase.app().functions(options.functionsLocation)
    const fireFuncObj = firebase.functions
    inject('fireFunc', fireFunc)
    inject('fireFuncObj', fireFuncObj)
  }

  // Firebase Messaging can only be initiated on client side
  if (process.browser && options.useOnly.includes('messaging')) {
    const fireMess = firebase.messaging()
    const fireMessObj = firebase.messaging
    inject('fireMess', fireMess)
    inject('fireMessObj', fireMessObj)
  }
}
