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


 const = state: {
    commentSuccess: false,
    commentError: false,
    commentLoading: false,
    comment:[],
    
  },
  const actions =  {
    createComment({ commit }, { content, created_at }) {
      commit(PROFILE_CREATE_BEGIN);
      return profile.createProfile(content, created_at)
        .then(() => commit(PROFILE_CREATE_SUCCESS))
        .catch(() => commit(PROFILE_CREATE_FAILURE));
    },
    getComment({ commit }, { data }) {
      commit(PROFILE_GET_BEGIN);
      return profile.getprofile(data)
        .then(() => commit(PROFILE_GET_SUCCESS))
        .catch(() => commit(PROFILE_GET_FAILURE));
    },
    deleteComment({ commit }, { url }) {
      commit(PROFILE_DELETE_BEGIN);
      return profile.deleteprofile(data)
        .then(() => commit(PROFILE_DELETE_SUCCESS))
        .catch(() => commit(PROFILE_DELETE_FAILURE));
    },
    updateComment({ commit }, { data }) {
      commit(PROFILE_UPDATE_BEGIN);
      return profile.updateProfile(data)
        .then(() => commit(PROFILE_UPDATE_SUCCESS))
        .catch(() => commit(PROFILE_UPDATE_FAILURE));
    },
  
  },
  const getters  = {
    getUserPost:(state, profile) =>{
      return 
    },
    


  },
  const mutations = {
     [PROFILE_CREATE_BEGIN](state) {
      state.createLoading = true;
  
     
    },
    [PROFILE_CREATE_FAILURE](state) {
      state.createError = true;
      state.createLoading = false;
     
    },
    [PROFILE_CREATE_SUCCESS](state) {
      state.createCompleted = true;
      state.createError = false;
      state.createLoading = false;
     
    },
      [PROFILE_GET_BEGIN](state) {
      state.activationLoading = true;
      state.createLoading = true;
    },
      [PROFILE_GET_SUCCESS](state) {
      state.activationLoading = true;
      state.profile = response.data();
    },
    [PROFILE_GET_FAILURE](state) {
      state.createLoading = false;
      state.createError = true;
    },
    [PROFILE_UPDATE_BEGIN](state) {
      
      state.createLoading = false;

    },
    [PROFILE_UPDATE_SUCCESS](state) {
      state.createCompleted = true;
      state.activationError = false;
      state.activationLoading = false;
    },
    
     [PROFILE_UPDATE_FAILURE](state) {
      state.activationCompleted = false;
      state.createError = true;
      state.activationLoading = false;
    },
    [PROFILE_DELETE_BEGIN](state){
      state.createLoading = true;
    },
   
    
  },
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};