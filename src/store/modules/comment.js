import profile from '../../api/backend/profile';

import {
  
  COMMENT_GET_BEGIN,
  COMMENT_GET_SUCCESS,
  COMMENT_GET_FAILURE,

  COMMENT_CREATE_BEGIN,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAILURE,

  COMMENT_UPDATE_BEGIN,
  COMMENT_UPDATE_SUCCESS,
  COMMENT_UPDATE_FAILURE,

  COMMENT_DELETE_BEGIN,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DELETE_FAILURE,



  
} from './types';


const state = {
    commentSuccess: false,
    commentError: false,
    commentLoading: false,
    comment:[],
    
  };

  const actions =  {
    createComment({ commit }, { content, created_at }) {
      commit(COMMENT_CREATE_BEGIN);
      return comment.createProfile(content, created_at)
        .then(() => commit(COMMENT_CREATE_SUCCESS))
        .catch(() => commit(COMMENT_CREATE_FAILURE));
    },
    getComment({ commit }, { data }) {
      commit(COMMENT_GET_BEGIN);
      return profile.getprofile(data)
        .then(() => commit(COMMENT_GET_SUCCESS, data))
        .catch(() => commit(COMMENT_GET_FAILURE));
    },
    deleteComment({ commit }, { url }) {
      commit(COMMENT_DELETE_BEGIN);
      return profile.deleteprofile(data)
        .then(() => commit(COMMENT_DELETE_SUCCESS))
        .catch(() => commit(COMMENT_DELETE_FAILURE));
    },
    updateComment({ commit }, { data }) {
      commit(COMMENT_UPDATE_BEGIN);
      return profile.updateProfile(data)
        .then(() => commit(COMMENT_UPDATE_SUCCESS))
        .catch(() => commit(COMMENT_UPDATE_FAILURE));
    },
  
  };

  const mutations = {
     [COMMENT_CREATE_BEGIN](state) {
      state.commentLoading = true;
  
     
    },
    [COMMENT_CREATE_FAILURE](state) {
      state.commentError = true;
      state.createLoading = false;
     
    },
    [COMMENT_CREATE_SUCCESS](state, data) {
      state.createCompleted = true;
      state.comment = data;
     
    },
    
      [COMMENT_GET_BEGIN](state) {
      state.activationLoading = true;
      state.createLoading = true;
    },
      [COMMENT_GET_SUCCESS](state) {
      state.activationLoading = true;
      state.profile = response.data();
    },
    [COMMENT_GET_FAILURE](state) {
      state.createLoading = false;
      state.createError = true;
    },
    [COMMENT_UPDATE_BEGIN](state) {
      
      state.createLoading = false;

    },
    [COMMENT_UPDATE_SUCCESS](state) {
      state.createCompleted = true;
      state.activationError = false;
      state.activationLoading = false;
    },
    
     [COMMENT_UPDATE_FAILURE](state) {
      state.activationCompleted = false;
      state.createError = true;
      state.activationLoading = false;
    },
   
    
  };
export default {
  namespaced: true,
  state,
  mutations,
  actions,

};