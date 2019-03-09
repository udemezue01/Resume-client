import post from '../api/backend/post';

import  {
      POST_CREATE_BEGIN ,
     POST_CREATE_SUCCESS,
     POST_CREATE_FAILURE , 

     POST_GET_BEGIN,  
     POST_GET_SUCCESS,
     POST_GET_FAILURE,

     POST_DELETE_BEGIN,
     POST_DELETE_SUCCESS,
     POST_DELETE_FAILURE,

     POST_UPDATE_BEGIN,
     POST_UPDATE_SUCCESS,
     POST_UPDATE_FAILURE
  } from './types';

export default {
  namespaced: true,
  state: {
    createCompleted: false,
    createError: false,
    createLoading: false,
    post:[],
    
  },
  actions: {

    createPost({ commit }, { user, content, media, created_at }) {
      commit(POST_CREATE_BEGIN);
      return post.createPost(user, content, media, created_at)
        .then(() => commit(POST_CREATE_SUCCESS))
        .catch(() => commit(POST_CREATE_FAILURE));
    },


    getPost({ commit }, { data }) {
      commit(POST_GET_BEGIN);
      return auth.readPost(data)
        .then(() => commit(POST_GET_SUCCESS))
        .catch(() => commit(POST_GET_FAILURE));
    },


      deletePost({ commit }, { data }) {
      commit(POST_DELETE_BEGIN);
      return auth.verifyAccountEmail(key)
        .then(() => commit(POST_DELETE_SUCCESS))
        .catch(() => commit(POST_DELETE_FAILURE));
    },


      updatePost({ commit }, { key }) {
      commit(POST_UPDATE_BEGIN);
      return auth.verifyAccountEmail(key)
        .then(() => commit(POST_UPDATE_SUCCESS))
        .catch(() => commit(POST_UPDATE_FAILURE));
    },
  


  },
  mutations: {
  
    [POST_CREATE_BEGIN](state) {
      state.registrationError = true;
      state.registrationLoading = false;
    },
    [POST_CREATE_SUCCESS](state) {
      state.registrationCompleted = true;
      state.registrationError = false;
      state.registrationLoading = false;
    },
      [POST_CREATE_FAILURE](state) {
      state.activationLoading = true;
     
    },
    [POST_GET_BEGIN](state) {
      state.activationLoading = true;
    },
    [POST_GET_SUCCESS](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
    [POST_GET_FAILURE](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
    
     [POST_UPDATE_BEGIN](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
    [POST_UPDATE_SUCCESS](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
       [POST_UPDATE_FAILURE](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
       [POST_UPDATE_BEGIN](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
    [POST_UPDATE_SUCCESS](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
   [POST_UPDATE_FAILURE](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
  },
};