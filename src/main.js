import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

import axios from 'axios'
import VueProgressBar from 'vue-progressbar'

import VueSVGIcon from 'vue-svgicon'
import 'uikit/dist/js/uikit.js'
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
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
