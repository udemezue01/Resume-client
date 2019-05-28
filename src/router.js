import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store.js'







const requireAuthenticated = (to, from, next) => {
  store.dispatch('auth/initialize')
    .then(() => {
      if (!store.getters['auth/isAuthenticated']) {
        next('/');
      } else {
        next();
      }
    });
};

const requireUnauthenticated = (to, from, next) => {
  store.dispatch('auth/initialize')
    .then(() => {
      if (store.getters['auth/isAuthenticated']) {
        next('/profile');
      } else {
        next();
      }
    });
};

const redirectLogout = (to, from, next) => {
  store.dispatch('auth/logout')
    .then(() => next('/login'));
};


// views

import profile from '@/views/profile.vue'
import feeds from '@/views/feeds.vue'
import login from '@/views/login.vue'
import landing from '@/views/landing.vue'
import notfound from '@/views/404.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'landing',
      component: landing,
      beforeEnterEnter:requireUnauthenticated,
     
     
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      beforeEnter: requireAuthenticated,

     
    },


     {
      path: '/feeds',
      name: 'feeds',
      component: feeds,
      beforeEnter: requireAuthenticated,
    },
      {
      path: '/login',
      name: 'login',
      component: login
    },

    {
       path: '*',
      name: 'notfound',
      component: notfound
    }
    //  {
    //   path: '/feeds',
    //   name: 'feeds',
    //   component: feeds
    // },
   
   
  ]
})
