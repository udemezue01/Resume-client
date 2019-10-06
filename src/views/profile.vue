<template>
 <div class="uk-container uk-padding">


   <profile-d class= "uk-visible@l">  </profile-d>
   <profile-m class= "uk-hidden@l">  </profile-m>


 </div>


</template>

<script>
import {USER_PROFILE} from '../graph/query.js';
  

  import {  ContentLoader } from 'vue-content-loader'; 
  import profile_d from '@/components/desktop/profile.vue';
  import profile_m from '@/components/mobile/profile.vue';
 
export default {

  components:{

   ContentLoader,
   "profile-d":profile_d,
   "profile-m":profile_m,

  },
  data(){
    return {

      profile:""

    }

  },


  apollo:{
    profile:USER_PROFILE
  },
  

  computed:{
    

  },

  methods:{
    


  },
  
  
 



}
</script>

<style lang="less">
  
  
</style>