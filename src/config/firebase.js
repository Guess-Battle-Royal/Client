const firebase = require('firebase/app')
require('firebase/firestore')


firebase.initializeApp({
  apiKey: "AIzaSyDQ02e8qFBW729yjq8uw2vUKrLgIYMOIus",
  authDomain: "guess-br-2a31c.firebaseapp.com",
  databaseURL: "https://guess-br-2a31c.firebaseio.com",
  projectId: "guess-br-2a31c",
  storageBucket: "guess-br-2a31c.appspot.com",
  messagingSenderId: "109327998465",
  appId: "1:109327998465:web:1ec91abbedc7e60b256a00"
})

var db = firebase.firestore()
module.exports = db