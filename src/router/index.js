import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Technology from '../components/Technology.vue'
import Gamming from '../components/Gamming.vue'
import FashionAndDesigning from '../components/FashionAndDesigning.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/technology',
    name: 'technology',
    component: Technology
  },
  {
    path: '/gamming',
    name: 'gamming',
    component: Gamming
  },
  {
    path: '/fashion_Designing',
    name: 'fashion_Designing',
    component: FashionAndDesigning
  },
  {
    path: '/about',
    name: 'about',
  
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/contactUs',
    name: 'contactUs',
  
    component: function () {
      return import(/* webpackChunkName: "contactUs" */ '../views/ContactView.vue')
    }
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
