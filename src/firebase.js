import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBRKVRN0Ic-D0gjXF110iYgiSV5yp2g5oA',
  authDomain: 'ul-backpacker.firebaseapp.com',
  databaseURL: 'https://ul-backpacker.firebaseio.com',
  projectId: 'ul-backpacker'
}

firebase.initializeApp(config)

const firestore = firebase.firestore()

export const firestoreDb = firestore
