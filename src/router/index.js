import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import indexhome from '../views/IndexHome.vue'
import notfound from '../views/NotFound.vue'
import admin from '../views/admin/AdminView.vue'
import manageroom from '../views/admin/ManageRoom.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: indexhome
  },
  {
    path: '/admin',
    component: admin
  },
  {
    path: '/manageroom',
    component: manageroom
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
