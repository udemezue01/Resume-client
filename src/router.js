import Vue from 'vue'
import Router from 'vue-router'





// views
import Home from './views/home.vue'
import Profile from './views/profile.vue'
import feeds from './views/feeds.vue'






Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
     {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

     {
      path: '/feeds',
      name: 'feeds',
      component: Feeds
    }
    // {
    //   path: '/feeds',
    //   name: 'feeds',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
