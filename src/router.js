import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store.js'



import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue';
 import Landing from '@/views/Landing.vue';
import Login from '@/views/Login.vue';

import Profile from '@/views/Profile/Profile.vue';
import profileCreate from '@/views/Profile/Create-Profile.vue';


import Job from '@/views/Jobs/Jobs.vue';
import Application from '@/views/Application/Application.vue';
import Archive from '@/views/Archive/Archive.vue';
import Messages from '@/views/Messages/Messages.vue';
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
      path: '/feeds',
      name: 'Home',
      component: Home,


     
    },

    {
      path: '/register',
      name: 'Register',
      component: Register,
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
       path: '/jobs',
      name: 'Job',
      component: Job,

      
    }, 
    {
       path: '/application',
      name: 'Application',
      component: Application,
  
      
    }, 

    {
       path: '/archive',
      name: 'Archive',
      component: Archive,

      
    }, 
    {
       path: '/messages',
      name: 'Messages',
      component: Messages,

      
    }, 

      {
       path: '/profile-create',
      name: 'profileCreate',
      component: profileCreate,

      
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