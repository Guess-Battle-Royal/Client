import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import db from '../config/firebase'
import Swal from 'sweetalert2'
// const firebase = require('firebase/app')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objectData: {},
    username: '',
    wpm: 0,
    position: 0,
    linkroom: '',
    countPlayer: 0,
    master: false,
    winner: 'Player one',
  },
  mutations: {
    ADD_DATA (state, payload) {
      state.objectData = payload
    },
    CHANGE_NAME (state, payload) {
      state.username = payload
    },
    CHANGE_ROOM (state, payload) {
      state.linkroom = payload
    },
    CHANGE_MASTER (state) {
      state.master = true
    },
    CHANGE_COUNT_PLAYER (state, payload) {
      state.countPlayer = payload
    },
    CHANGE_PLAY_STATUS (state, payload) {
      state.playStatus = payload
    }
  },
  actions: {
    create ({ commit, state }, payload) {
      const index = Math.round(Math.random() * texts.length)
      Swal.fire({
        // imageUrl: 'https://static-steelkiwi-dev.s3.amazonaws.com/media/filer_public/4e/07/4e07eece-7c84-46e2-944d-1a6b856d7b5f/463ff844-6f36-4ffe-b051-fea983d39223.gif',
        imageUrl: 'https://i.giphy.com/media/8L0y42UA43AHTpJ9iM/giphy.webp',
        text: 'Creating your room...',
        mageWidth: 200,
        imageHeight: 200,
        showConfirmButton: false
      })
      db.collection('room').add(
        {
          count: 1,
          player1: {
            username: payload,
            wpm: 0,
            position: 0,
            playerOrder: 1
          },
          text: texts[index].text,
          playStatus: false
        }
      )
        .then((docRef) => {
          commit('CHANGE_ROOM', docRef.id)
          commit('CHANGE_COUNT_PLAYER', 1)
          commit('CHANGE_NAME', payload)
          commit('CHANGE_MASTER')
          router.push(`/about/${state.linkroom}`)
          console.log('Document written with ID: ', docRef.id)
          Swal.close()
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    fetchData ({ commit, state }, payload) {
      commit('CHANGE_ROOM', payload)
      db.collection('room').doc(`${payload}`)
        .onSnapshot(function (doc) {
          commit('ADD_DATA', doc.data())
          // console.log('data saat ini', doc.data())
        })
    },
    addPlayer ({ commit, state }, payload) {
      let countPlayer = state.objectData.count + 1
      commit('CHANGE_COUNT_PLAYER', countPlayer)
      db.collection('room').doc(`${payload.room}`).update({
        [`player${countPlayer}`]: {
          username: payload.newuser,
          wpm: 0,
          position: 0,
          playerOrder: countPlayer
        },
        count: state.objectData.count + 1
      })
        .then(function () {
          commit('CHANGE_NAME', payload.newuser)
          console.log()
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    updatePosition ({ commit, state }, payload) {
      return db.collection('room').doc(`${payload.room}`).update({
        [`player${state.countPlayer}.position`]: payload.position,
        [`player${state.countPlayer}.wpm`]: payload.wpm,
        [`player${state.countPlayer}.username`]: state.username
      })
    },
    playNow ({ commit, name }, roomlink) {
      db.collection('room').doc(`${roomlink}`).update({
        playStatus: true
      })
        .then(function () {
          console.log('GAME PLAY!')
        })
        .catch(function (err) {
          console.error('Error played game: ', err)
        })
    }
  }
})
