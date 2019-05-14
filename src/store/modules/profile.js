import profile from '../../api/backend/profile';

import {
  
     PROFILE_CREATE_BEGIN ,
     PROFILE_CREATE_SUCCESS,
     PROFILE_CREATE_FAILURE , 

     PROFILE_GET_BEGIN,  
     PROFILE_GET_SUCCESS,
     PROFILE_GET_FAILURE,

     PROFILE_DELETE_BEGIN,
     PROFILE_DELETE_SUCCESS,
     PROFILE_DELETE_FAILURE,

     PROFILE_UPDATE_BEGIN,
     PROFILE_UPDATE_SUCCESS,
     PROFILE_UPDATE_FAILURE




  
} from './types';


 const state =  {
    profileCompleted: false,
    profileError: false,
    profileLoading: false,
    profile:[],
    
  };
  const actions =  {
    createProfile({ commit }, { username, avatar, category, created_at }) {
      commit(PROFILE_CREATE_BEGIN);
      return profile.createProfile(username, avatar, category, created_at)
        .then(() => commit(PROFILE_CREATE_SUCCESS))
        .catch(() => commit(PROFILE_CREATE_FAILURE));
    },
    getProfile({ commit }, { data }) {
      commit(PROFILE_GET_BEGIN);
      return profile.getprofile(data)
        .then((response) => commit(PROFILE_GET_SUCCESS, response))
        .catch((error) => commit(PROFILE_GET_FAILURE, error));
    },
    deleteProfile({ commit }, { url }) {
      commit(PROFILE_DELETE_BEGIN);
      return profile.deleteprofile(data)
        .then((response) => commit(PROFILE_DELETE_SUCCESS, response))
        .catch((error) => commit(PROFILE_DELETE_FAILURE, error));
    },
    updateProfile({ commit }, { data }) {
      commit(PROFILE_UPDATE_BEGIN);
      return profile.updateProfile(data)
        .then((response) => commit(PROFILE_UPDATE_SUCCESS, response))
        .catch((error) => commit(PROFILE_UPDATE_FAILURE, error));
    },
  
  };
  const getters  = {
    getUserPost:(state, profile) =>{
      return 
    },
    


  };
  const mutations = {
     [PROFILE_CREATE_BEGIN](state) {
      state.profileLoading = true;
  
     
    },
    [PROFILE_CREATE_FAILURE](state) {
    state.profileError = true;
     
    },
    [PROFILE_CREATE_SUCCESS](state) {
      state.profileCompleted = true;
     
    },
      [PROFILE_GET_BEGIN](state) {
      state.profileLoading = true;
    },
      [PROFILE_GET_SUCCESS](state) {
      state.profileCompleted = true;
      state.profile = response.data();
    },
    [PROFILE_GET_FAILURE](state) {
      state.profileError = true;
    },
    [PROFILE_UPDATE_BEGIN](state) {
      
      state.profileLoading = false;

    },
    [PROFILE_UPDATE_SUCCESS](state) {
     state.profileCompleted = true;
    },
    
     [PROFILE_UPDATE_FAILURE](state) {
      state.profileError = true;
    },
    [PROFILE_DELETE_BEGIN](state){
      state.createLoading = true;
    },
   
    
  };
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};