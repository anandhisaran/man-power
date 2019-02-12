import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
     
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/ourservices',
      name: 'ourservices',
      component: () => import(/* webpackChunkName: "about" */ './views/Ourservices.vue')
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: () => import(/* webpackChunkName: "about" */ './views/Contactus.vue')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import(/* webpackChunkName: "about" */ './views/Career.vue')
    }
  ]
})
