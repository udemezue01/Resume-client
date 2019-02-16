import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

import VueSVGIcon from 'vue-svgicon'
import 'uikit/dist/js/uikit.js'
import './custom-icons'
//uikit css and javascript


import './theme/theme.less'

Vue.use(VueSVGIcon)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
