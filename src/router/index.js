import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/game/:room',
    name: 'game',
    component: Game
  },
  {
    path: '/about/:room',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/win',
    name: 'win',
    component: () => import(/* webpackChunkName: "winner" */ '../views/Win.vue')
  }, 
  {
    path: '/game',
    name: 'game',
    component: () => import(/* webpackChunkName: "game" */ '../views/Game.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
