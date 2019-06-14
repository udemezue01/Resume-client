import Vue from 'vue'
import Vuex from 'vuex'

//in app modules
import auth from './modules/auth.js'
import comment from './modules/comment.js'
import password from './modules/password.js'
import post from './modules/post.js'
import profile from './modules/profile.js'
import signup from './modules/signup.js'
import job from './modules/job.js'
// import application from './modules/application.js'

//third party modules
// import news from '/modules/news.js'
// import stream from '/modules/stream.js'



Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
  		auth,
  		comment,
  		password,
  		post,
  		profile,
  		signup,
  		job,
  		// application
  		// stream,





  }
})
