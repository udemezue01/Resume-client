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
    vacancySuccess: false,
    vacancyFailure: false,
    vacancyLoading: false,
    vacancy:[],
    
  };
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
  
  };
  const getters  = {
    isCompany:state => {
      if(state.user.account_type =='company'){
        return !!state.vacancy
        else{
          return state.vacancy
        }
      }
    }
    },
    


  };

  const mutations = {
     [VACANCY_CREATE_BEGIN](state) {
      state.vacancyLoading = true;
  
     
    },
    [VACANCY_CREATE_FAILURE](state) {
      state.vacancyError = true;

     
    },
    [VACANCY_CREATE_SUCCESS](state) {
      state.vacancySuccess = true;
 
     
    },
      [VACANCY_GET_BEGIN](state) {
      state.vacancyLoading = true;
    
    },
      [VACANCY_GET_SUCCESS](state) {
      state.vacancyLoading = true;
      state.vacancy = response.data
     
    },
    [VACANCY_GET_FAILURE](state) {
     
      state.vacancyError = true;
    },
    [VACANCY_UPDATE_BEGIN](state) {
      
      state.vacancyLoading = false;
      state.vacancy = response.data

    },
    [VACANCY_UPDATE_FAILURE](state) {

      state.vacancyError = true;
   
    },
      [VACANCY_UPDATE_SUCCESS](state) {
      state.vacancySuccess = true;
       state.vacancy = response.data
 
    },
    
     [VACANCY_DELETE_FAILURE](state) {
      state.vacancySuccess = true;
   
    },
    [VACANCY_DELETE_BEGIN](state){
      state.vacancyLoading = true;
    },
       [VACANCY_DELETE_SUCCESS](state){
      state.vacancySuccess = true;
    },
   
   
    
  },
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};