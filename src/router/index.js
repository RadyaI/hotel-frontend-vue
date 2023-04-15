import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import indexhome from '../views/IndexHome.vue'
import room from '../views/RoomView.vue'
import notfound from '../views/NotFound.vue'
import forbidden from '../views/ForbiddenView.vue'
import admin from '../views/admin/AdminView.vue'
import manageroom from '../views/admin/ManageRoom.vue'
import cetakbukti from '../views/CetakBukti.vue'

// RESEPSIONIS
import resepsionis from '../views/resepsionis/ResepView.vue'
import managebooking from '../views/resepsionis/ManageBooking.vue'
import ongoing from '../views/resepsionis/OnGoing.vue'
import confirmed from '../views/resepsionis/ConfirmedView.vue'
import diproses from '../views/resepsionis/DiProses.vue'
import history from '../views/resepsionis/HistoryView.vue'

import login from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: indexhome
  },
  {
    path: '/admin',
    component: admin,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/resepsionis',
    component: resepsionis,
    meta: {
      requiresAuth: true,
      allowedRoles: ['resepsionis']
    }
  },
  {
    path: '/ongoing',
    component: ongoing,
    meta: {
      requiresAuth: true,
      allowedRoles: ['resepsionis']
    }
  },
  {
    path: '/cleaned',
    component: diproses,
    meta: {
      requiresAuth: true,
      allowedRoles: ['resepsionis']
    }
  },
  {
    path:'/confirmed',
    component: confirmed,
    meta: {
      requiresAuth: true,
      allowedRoles: ['resepsionis']
    }
  },
  {
    path: '/history',
    component: history,
    meta: {
      requiresAuth: true,
      allowedRoles: ['resepsionis']
    }
  },
  {
    path: '/managebooking',
    component: managebooking,
    meta: {
      requiresAuth: true,
      allowedRoles: ['resepsionis']
    }
  },
  {
    path: '/manageroom',
    component: manageroom,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
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
    path: '/login',
    component: login
  },
  {
    path: '/forbidden',
    component: forbidden
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

router.beforeEach((to, form, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if(requiresAuth) {
    const userRole = localStorage.getItem("role")
    if(!userRole) {
      next({
        path: '/login'
      })
    } else {
      if(to.meta.allowedRoles.includes(userRole)) {
        next()
      } else {
        next({
          path: '/forbidden'
        })
      }
    }
  } else {
    next();
  }
})
