import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers} from './router/index'
import Accueil from './components/Accueil'
import Navigation from './components/Navigation'
import Panier from './components/Panier'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: routers,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    Accueil,
    Navigation,
    Panier
  }
})
