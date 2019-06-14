import job from '../../api/backend/job';

import {
  
  JOB_GET_BEGIN,
  JOB_GET_SUCCESS,
  JOB_GET_FAILURE,

  JOB_CREATE_BEGIN,
  JOB_CREATE_SUCCESS,
  JOB_CREATE_FAILURE,

  JOB_UPDATE_BEGIN,
 JOB_UPDATE_SUCCESS,
 JOB_UPDATE_FAILURE,
  

JOB_DELETE_BEGIN,
JOB_DELETE_SUCCESS,
JOB_DELETE_FAILURE

  
} from './types';


 const state = {
    jobSuccess: false,
    jobFailure: false,
    jobLoading: false,
    jobs:[],
    
  };
  const actions =  {
    createJob({ commit }, { position, description, tags, image, location }) {
      commit(JOB_CREATE_BEGIN);
      return job.createJob(position, description,tags, image, location)
        .then(() => commit(JOB_CREATE_SUCCESS))
        .catch(() => commit(JOB_CREATE_FAILURE));
    },
    getJob({ commit }, { data }) {
      commit(JOB_GET_BEGIN);
      return job.getJob(data)
        .then((response) => commit(JOB_GET_SUCCESS, response))
        .catch((error) => commit(JOB_GET_FAILURE, error));
    },
    deleteJob({ commit }, { url }) {
      commit(PROFILE_DELETE_BEGIN);
      return job.deleteJob(data)
        .then(() => commit(JOB_DELETE_SUCCESS))
        .catch(() => commit(JOB_DELETE_FAILURE));
    },
    updateJob({ commit }, { data }) {
      commit(JOB_UPDATE_BEGIN);
      return job.updateJob(data)
        .then((response) => commit(JOB_UPDATE_SUCCESS, response))
        .catch((error) => commit(JOB_UPDATE_FAILURE, error));
    },
  
  };
// const getters = {

//   isCompany: state =>{
//     if (state.vacancy.user.account_type =="individual"){
//       return !!state.vacancy
//     }
//     else{
//       return state.vacancy
//     }
//   }

// };


  

  const mutations = {
     [JOB_CREATE_BEGIN](state) {
      state.jobLoading = true;
  
     
    },
    [JOB_CREATE_FAILURE](state) {
      state.jobError = true;

     
    },
    [JOB_CREATE_SUCCESS](state) {
      state.jobSuccess = true;
     
    },
      [JOB_GET_BEGIN](state) {
      state.jobLoading = true;
    
    },
      [JOB_GET_SUCCESS](state) {
      state.jobLoading = true;
      state.job = response.data
     
    },
    [JOB_GET_FAILURE](state) {
     
      state.jobError = true;
    },
    [JOB_UPDATE_BEGIN](state) {
      
      state.jobLoading = false;
      state.job = response.data

    },
    [JOB_UPDATE_FAILURE](state) {

      state.jobError = true;
   
    },
      [JOB_UPDATE_SUCCESS](state) {
      state.jobSuccess = true;
       state.job = response.data
 
    },
    
     [JOB_DELETE_FAILURE](state) {
      state.jobSuccess = true;
   
    },
    [JOB_DELETE_BEGIN](state){
      state.jobLoading = true;
    },
       [JOB_DELETE_SUCCESS](state){
      state.jobSuccess = true;
    },
   
   
    
  };
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  // getters

};