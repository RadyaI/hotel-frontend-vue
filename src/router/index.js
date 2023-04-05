import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import indexhome from '../views/IndexHome.vue'
import notfound from '../views/NotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: indexhome
  },
  {
    path: '*',
    component: notfound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
