import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authors from '../views/Authors.vue'
import Favorites from '../views/Favorites.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/authors',
    name: 'Authors',
    component: Authors
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
