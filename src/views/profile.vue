<template>
 <div class="container px-16 py-4">

         <!--  The Profile UI section -->

    <div class="flex">

                 <!-- The first section -->

            <div class="w-2/6">


                <div class="overflow-hidden">
                  
                  <img src="/img/404.png" class="rounded-lg h-14 w-full">

                   <!--  <img src="/img/404.png" class="mx-auto -m-t-8"> -->

                    <div class="p-8">

                      <h2 class="mx-auto"> Resume.ly</h2>
                      


                    </div>



                </div>
              

            </div>

                  <!-- End of the first section -->

                     <!--    The second section-->
            <div class="w-3/6">


              


            </div>

                       <!--  End of the second section -->


                      <!--  The third section -->
            <div class="w-1/6">
              

            </div>

                         <!--  End of the third section -->
    

      </div>

         <!--      End of the Profile section -->


 </div>


</template>

<script>
// import {USER_PROFILE} from '../constants/query.js';
  

  import {  ContentLoader } from 'vue-content-loader'; 

 
export default {

  components:{

   ContentLoader,
  

  },
  data(){
    return {

      profile:""

    }

  },


  apollo:{
    // profile:USER_PROFILE
  },
  

  computed:{
    

  },

  methods:{
    


  },
  
  
 



}
</script>

<style lang="less">
  
  
</style>