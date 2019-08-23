import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

import axios from 'axios'
import VueProgressBar from 'vue-progressbar'

import VueSVGIcon from 'vue-svgicon'
import 'uikit/dist/js/uikit.js'
import 'uikit/dist/js/uikit-icons.js'
import './custom-icons'
//uikit css and javascript

import VueContentPlaceholders from 'vue-content-placeholders'

Vue.use(VueContentPlaceholders)
import './theme/theme.less'

Vue.use(VueSVGIcon)
Vue.prototype.$http = axios

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
import { setContext } from 'apollo-link-context';


// Cache implementation
const cache = new InMemoryCache()


// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1:8000/',
 
 
})


// Create a new Middleware Link using setContext

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,

      authorization: token ? `Bearer ${token}` : null,
    }
  }
});
//  const token = localStorage.getItem('token');
// const authLink = setContext(() => ({
//   headers: {
//     authorization: `Bearer ${token}`
//   }
// }));


// Change your link assignment from
// const link = httpLink;
// to

const link = authLink.concat(httpLink);
// Create the apollo client
const apolloClient = new ApolloClient({
  link,
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
