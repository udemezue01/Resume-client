import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'




// desktop components
import Navbar_d from './components/desktop/navbar.vue'
import Footer_d from './components/desktop/footer.vue'
import Profile_d from './components/desktop/profile.vue'




// mobile components
import Navbar_m from './components/mobile/navbar.vue'


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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
