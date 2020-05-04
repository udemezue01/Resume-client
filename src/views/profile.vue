<template>
 <div class="container px-12 py-4 h-screen">

         <!--  The Profile UI section -->

    <div class="flex">

                 <!-- The first section -->

            <div class="w-2/6">

                <div class="bg-white border rounded-lg overflow-hidden ">
                  
                  <img src="/img/examples.jpg" class="w-full h-64 object-cover object-center">

                  <img src="/img/ali-baba.png" class="border mx-auto rounded-full h-32 w-32 -mt-16" />

                  <div class="p-6 ">
                    
                       <h4 class="font-semibold text-center text-gray-800"> Alibaba John</h4>
                       <p class="font-semibold text-center text-gray-600">@alibaba</p>

                       <div>
                         

                       </div>

                       <div class="align-center justify-center content-center mt-12">
                         
                         <button type="button" class="mt-6 hidden -ml-1 px-4 py-2  border border-transparent text-sm  font-extrabold text-white bg-purple-700 rounded-md m-2 tracking-wide lg:block hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
        
    
                            Edit Profile
      </button>
                       </div>

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