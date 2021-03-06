import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

import axios from 'axios'
import VueProgressBar from 'vue-progressbar'


import VueContentPlaceholders from 'vue-content-placeholders'

import '@/assets/css/tailwind.css'


Vue.prototype.$http = axios

Vue.use(VueContentPlaceholders)

const options = {
  color: '#21D397',
  failedColor: '#874b4b',
  thickness: '8px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'


// Cache implementation
const cache = new InMemoryCache()


// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1:8000/graphql/',
  credentials: 'same-origin'
 

})


// Create a new Middleware Link using setContext

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
     
    },
    
  }
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
 
})



Vue.use(VueApollo)
Vue.use(VueProgressBar, options)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
