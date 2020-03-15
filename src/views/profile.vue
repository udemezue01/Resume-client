<template>
 <div class="">

         <!--  The Profile UI section -->

    <div class="flex">

                 <!-- The first section -->

            <div class="w-2/7">
              

            </div>

                  <!-- End of the first section -->

                     <!--    The second section-->
            <div class="w-3/7">


              


            </div>

                       <!--  End of the second section -->


                      <!--  The third section -->
            <div class="w-2/7">
              

            </div>

                         <!--  End of the third section -->
    

      </div>

         <!--      End of the Profile section -->


 </div>


</template>

<script>
import {USER_PROFILE} from '../constants/query.js';
  

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