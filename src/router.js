import Vue from 'vue'
import Router from 'vue-router'








// views
import home from './views/home.vue'
import profile from './views/profile.vue'
import feeds from './views/feeds.vue'





const requireAuthenticated = (to, from, next) => {
  store.dispatch('auth/initialize')
    .then(() => {
      if (!store.getters['auth/isAuthenticated']) {
        next('/login');
      } else {
        next();
      }
    });
};

const requireUnauthenticated = (to, from, next) => {
  store.dispatch('auth/initialize')
    .then(() => {
      if (store.getters['auth/isAuthenticated']) {
        next('/home');
      } else {
        next();
      }
    });
};

const redirectLogout = (to, from, next) => {
  store.dispatch('auth/logout')
    .then(() => next('/login'));
};


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
     
    },
     {
      path: '/profile',
      name: 'profile',
      component: profile
    },

     {
      path: '/feeds',
      name: 'feeds',
      component: feeds
    }
   
  ]
})
