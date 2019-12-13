import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import db from '../config/firebase'
import Swal from 'sweetalert2'
import { STATUS_CODES } from 'http'
// const firebase = require('firebase/app')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    master: false,
    expect: -1,
    real: -1,
    username: '',
    linkroom: '',
    isPlaying: false,
    objectData: {},
    playStatus: false,
    countPlayer: 0,
    position: 0,
  },
  mutations: {
    CHANGE_MASTER(state) {
      state.master = true
    },
    CHANGE_EXPECT(state, payload) {
      state.expect = payload
    },
    CHANGE_REAL(state, payload) {
      state.real = payload
    },
    CHANGE_USERNAME(state, payload) {
      state.username = payload
    },
    CHANGE_LINK_ROOM(state, payload) {
      state.linkroom = payload
    },
    CHANGE_IS_PLAYING(state, payload) {
      state.isPlaying = payload
    },
    ADD_DATA(state, payload) {
      state.objectData = payload
    },
    CHANGE_PLAY_STATUS(state, payload) {
      state.playStatus = payload
    }
  },
  actions: {
    create({ commit, state }, payload) {

      Swal.fire({
        // imageUrl: 'https://static-steelkiwi-dev.s3.amazonaws.com/media/filer_public/4e/07/4e07eece-7c84-46e2-944d-1a6b856d7b5f/463ff844-6f36-4ffe-b051-fea983d39223.gif',
        imageUrl: 'https://i.giphy.com/media/8L0y42UA43AHTpJ9iM/giphy.webp',
        text: 'Creating your room...',
        imageWidth: 200,
        imageHeight: 200,
        showConfirmButton: false
      })
      db.collection('mainRoom').add({
        count: 1,
        expect: -1,
        real: -1,
        player1: {
          bet: -1,
          position: 0,
          isPlaying: true,
          thumb: 2,
          username: payload,
          playerOrder: 1
        },
        playStatus: false
      })
        .then((docRef) => {
          commit('CHANGE_LINK_ROOM', docRef.id)
          commit('CHANGE_USERNAME', payload)
          commit('CHANGE_MASTER')
          commit('CHANGE_COUNT_PLAYER', 1)
          router.push(`/about/${state.linkroom}`)
          Swal.close()
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    fetchData({ commit, state }, payload) {
      commit('CHANGE_LINK_ROOM', payload)
      db.collection('mainRoom').doc(`${payload}`)
        .onSnapshot(function (doc) {
          commit('ADD_DATA', doc.data())
          // console.log('data saat ini', doc.data())
        })
    },
    addPlayer({ commit, state }, payload) {
      let countPlayer = state.objectData.count + 1
      console.log(state.objectData.count, "isi count apaaaaaaaaa");
      
      commit('CHANGE_COUNT_PLAYER', countPlayer)
      db.collection('mainRoom').doc(`${payload.room}`).update({
        [`player${countPlayer}`]: {
          username: payload.newuser,
          bet: -1,
          thumb: -1,
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
    playNow({ commit, name }, roomlink) {
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
