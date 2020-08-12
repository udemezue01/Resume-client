import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store.js'



// router.beforeEach((to, from, next) => {

//   const token  = localStorage.getItem('token')

//   // ...
// })


import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue';
 import Landing from '@/views/Landing.vue';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile/Profile.vue';
import Job from '@/views/Jobs/Jobs.vue';
import Application from '@/views/Application/Application.vue';
// import notfound from '@/views/404.vue'



Vue.use(Router)




const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'Landing',
      component: Landing,
      
     
     
    },

      {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      
     
     
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
      
     
     
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      //beforeEnter: requireAuthenticated,

     
    },
        {
       path: '/jobs',
      name: 'Job',
      component: Job,
      //beforeEnter:requireUnauthenticated,
      
    }, 
         {
       path: '/application',
      name: 'Application',
      component: Application,
      //beforeEnter:requireUnauthenticated,
      
    }, 

          {
      path: '/register',
      name: 'Register',
      component: Register,
      //beforeEnter:requireUnauthenticated,
    },


    //  {
    //   path: '/feeds',
    //   name: 'Feeds',
    //   component: Feeds,
    //   //beforeEnter: requireAuthenticated,
    // },


    // {
    //    path: '*',
    //   name: 'notfound',
    //   component: notfound,
    //   //beforeEnter:requireUnauthenticated,
      
    // },
 
    //  {
    //   path: '/feeds',
    //   name: 'feeds',
    //   component: feeds
    // },
   
   
  ]
})


// router.beforeEach((to, from, next) => {
//   const token  = localStorage.getItem('token');
//   if (to.fullPath === '/home') {
//     if (!token) {
//       next('/');
//     }
//   }
//   if (to.fullPath ==='/login'){
//     if (!token){
//       next('/')
//     }

//   }
//   if (to.fullPath === '/') {
//     if (token) {
//       next('/home');
//     }
//   }
//   next();
// });

export default router