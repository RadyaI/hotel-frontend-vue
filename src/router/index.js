import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import indexhome from '../views/IndexHome.vue'
import room from '../views/RoomView.vue'
import notfound from '../views/NotFound.vue'
import admin from '../views/admin/AdminView.vue'
import manageroom from '../views/admin/ManageRoom.vue'
import cetakbukti from '../views/CetakBukti.vue'

// RESEPSIONIS
import resepsionis from '../views/resepsionis/ResepView.vue'
import managebooking from '../views/resepsionis/ManageBooking.vue'
import ongoing from '../views/resepsionis/OnGoing.vue'
import confirmed from '../views/resepsionis/ConfirmedView.vue'
import diproses from '../views/resepsionis/DiProses.vue'

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
    path: '/resepsionis',
    component: resepsionis
  },
  {
    path: '/ongoing',
    component: ongoing
  },
  {
    path: '/cleaned',
    component: diproses
  },
  {
    path:'/confirmed',
    component: confirmed
  },
  {
    path: '/managebooking',
    component: managebooking
  },
  {
    path: '/manageroom',
    component: manageroom
  },
  {
    path: '/room',
    component: room
  },
  {
    path: '/cetak/:id',
    component: cetakbukti
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
