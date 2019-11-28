import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store.js'



// router.beforeEach((to, from, next) => {

//   const token  = localStorage.getItem('token')

//   // ...
// })

import profile from '@/views/profile.vue'
import feeds from '@/views/feeds.vue'
import register from '@/views/register.vue'
import login from '@/views/login.vue'
import notfound from '@/views/404.vue'
import job from '@/views/jobs.vue'


Vue.use(Router)




const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'login',
      component: login,
      
     
     
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      //beforeEnter: requireAuthenticated,

     
    },


     {
      path: '/feeds',
      name: 'feeds',
      component: feeds,
      //beforeEnter: requireAuthenticated,
    },
      {
      path: '/register',
      name: 'register',
      component: register,
      //beforeEnter:requireUnauthenticated,
    },

    {
       path: '*',
      name: 'notfound',
      component: notfound,
      //beforeEnter:requireUnauthenticated,
      
    },
     {
       path: '/jobs',
      name: 'job',
      component: job,
      //beforeEnter:requireUnauthenticated,
      
    }
    //  {
    //   path: '/feeds',
    //   name: 'feeds',
    //   component: feeds
    // },
   
   
  ]
})


router.beforeEach((to, from, next) => {
  const token  = localStorage.getItem('token');
  if (to.fullPath === '/profile') {
    if (!token) {
      next('/');
    }
  }
  if (to.fullPath ==='/feeds'){
    if (!token){
      next('/')
    }
  }
  if (to.fullPath === '/') {
    if (token) {
      next('/profile');
    }
  }
  next();
});

export default router