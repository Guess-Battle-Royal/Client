const firebase = require('firebase/app')
require('firebase/firestore')

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://guessbattleroyal.firebaseio.com',
  projectId: process.env.VUE_APP_CLOUD_FIRESTORE_PROJECT_ID,
  storageBucket: 'guessbattleroyal.appspot.com',
  messagingSenderId: '969038012594',
  appId: '1:969038012594:web:5f86ee39c5b312c8ee69ab'
})


var db = firebase.firestore()
module.exports = db
