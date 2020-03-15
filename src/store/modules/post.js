import post from '../../api/backend/post';

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
    postCompleted: false,
    postError: false,
    postLoading: false,
    post:[],
    
  },

   mutations: {
  
    [POST_CREATE_BEGIN](state) {
      state.registrationError = true;
      state.registrationLoading = false;
    },
    [POST_CREATE_SUCCESS](state, data) {
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
    [POST_GET_SUCCESS](state, data) {
      state.postCompleted = true;
      state.post = data;
    },
    [POST_GET_FAILURE](state) {
      state.postError = true;
    },
    
     [POST_UPDATE_BEGIN](state) {
     state.postLoading = true;
    },
    [POST_UPDATE_SUCCESS](state) {
     state.postCompleted = true;
    },
       [POST_UPDATE_FAILURE](state) {
      state.postError = true;
    },
       [POST_DELETE_BEGIN](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
    [POST_DELETE_SUCCESS](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
   [POST_DELETE_FAILURE](state) {
      state.activationCompleted = false;
      state.activationError = false;
      state.activationLoading = false;
    },
  },
  actions: {

    createPost({ commit }, { user, content, media, created_at }) {
      commit(POST_CREATE_BEGIN);
      return post.createPost(user, content, media, created_at)
        .then((response) => commit(POST_CREATE_SUCCESS, response.data))
        .catch((error) => commit(POST_CREATE_FAILURE, error.data));
    },


    getPost({ commit }, { data }) {
      commit(POST_GET_BEGIN);
      return post.readPost(data)
        .then(({data}) => commit(POST_GET_SUCCESS, data))
        .catch((error) => commit(POST_GET_FAILURE, error.data));
    },


      deletePost({ commit }, { data }) {
      commit(POST_DELETE_BEGIN);
      return post.deletePost(key)
        .then(() => commit(POST_DELETE_SUCCESS))
        .catch(() => commit(POST_DELETE_FAILURE));
    },


      updatePost({ commit }, { data }) {
      commit(POST_UPDATE_BEGIN);
      return post.updatePost(data)
        .then(() => commit(POST_UPDATE_SUCCESS))
        .catch(() => commit(POST_UPDATE_FAILURE));
    },
  


  },

 
};