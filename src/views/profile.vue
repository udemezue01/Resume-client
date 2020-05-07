<template>
 <div class="container px-12 py-4 h-screen">

         <!--  The Profile UI section -->

    <div class="flex">

                 <!-- The first section -->

            <div class="w-2/6 content-center">

                <div class="bg-white border rounded-lg overflow-hidden ">
                  
                  <img src="/img/examples.jpg" class="w-full h-64 object-cover object-center">

                  <img src="/img/ali-baba.png" class="border mx-auto rounded-full h-32 w-32 -mt-16" />

                  <div class="p-6 ">
                    
                       <h4 class="font-semibold text-center text-gray-800"> Alibaba John</h4>
                       <p class="font-semibold text-center text-gray-600">@alibaba</p>

                       <div>
                         
                         

                       </div>

                       <div class="mt-12">
                        
                       </div>

                  </div>

                 

                
                </div>
               
                
              

            </div>

                  <!-- End of the first section -->

                     <!--    The second section-->
            <div class="w-3/6">

              <div>
                

              </div>

              <div>
                
                <ul class="flex">
                  <li class="flex-1 mr-2">
                    <a class="text-center block border border-purple-600 rounded py-2 px-4 bg-purple-600 hover:bg-blue-700 text-white" href="#">Active Item</a>
                  </li>
                  <li class="flex-1 mr-2">
                    <a class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Nav Item</a>
                  </li>
                  <li class="text-center flex-1">
                    <a class="block py-2 px-4 text-gray-400 cursor-not-allowed" href="#">Disabled Item</a>
                  </li>
                </ul>
              </div>


              


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