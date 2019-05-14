// import auth from '../../api/news/news.js';


// import {



// } from './types';



// const state = {
//   newsLoading: false,
//   newsSuccess: false,
//   newsError: false,
//   news:[]
// };


// const actions = {
//   getNews({ commit }, { email, password }) {
//     commit(LOGIN_BEGIN);
//     return auth.login(email, password)
//       .then(({ data }) => commit(SET_TOKEN, data.key))
//       .then(() => commit(LOGIN_SUCCESS))
//       .catch(() => commit(LOGIN_FAILURE));
//   },
 

// const mutations = {

//   [GET_NEWS_BEGIN](state) {
//     state.getStarted = true;
//     state.error = false;
//     state.news = response.data
//   },
//   [LOGIN_FAILURE](state) {
//     state.authenticating = false;
//     state.error = true;
//   },
//   [LOGIN_SUCCESS](state) {
//     state.authenticating = false;
//     state.error = false;
//   },
//   [LOGOUT](state) {
//     state.authenticating = false;
//     state.error = false;
//   },
  
// };

// export default {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations,
// };