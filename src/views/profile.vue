<template>
 <div class="container  mt-6 h-screen">

         <!--  The Profile UI section -->

    <div class="flex px-5">

                 <!-- The first section -->

            <div class="w-2/6 ">

                <div class="bg-white border rounded-lg overflow-hidden shadow-sm ">
                  
                  <img src="/img/examples.jpg" class="w-full h-64 object-cover object-center">

                  <img src="/img/ali-baba.png" class="border mx-auto rounded-full h-32 w-32 -mt-16" />

                  <div class="p-6 ">
                    
                       <h4 class="font-semibold text-center text-gray-800"> Alibaba John</h4>
                       <p class="font-semibold text-center text-gray-600 tracking-wider">@alibaba</p>

                       <div>
                         
                         

                       </div>

                       <div class="mt-12 ">
                        
           
                       </div>

                  </div>

                 

                
                </div>

               <!--  End of the profile card -->

                <div class="bg-white border rounded-lg shadow-sm mt-6">

                  <div class="p-6">
                    
                    <h4 class="text-gray-800 text-center font-semibold rounded-lg hover:bg-purple-300 px-2 py-2"> Details</h4>
                  </div>
                  

                </div>

               <!--  End of the second card -->
               
                
              

            </div>

                  <!-- End of the first section -->

                     <!--    The second section-->
            <div class="w-3/6">

              <!-- start of the navbar -->

              <div class="flex justify-between bg-white px-10 py-3 ml-3 rounded-lg shadow-sm">

                <div >
                  <a href="" class="inline-flex   "> <span class="text-gray-800 font-semibold font-sans"> Post </span></a>
                </div>
                <div>
                   <a href="" class="inline-flex"> <span class="text-gray-800 font-semibold font-sans"> Media </span></a>
                </div>
                <div>
                   <a href="" class="inline-flex"> <span class="text-gray-800 font-semibold font-sans"> Jobs </span></a>
                </div>
                <div>
                   <a href="" class="inline-flex"> <span class="text-gray-800 font-semibold font-sans"> Archive </span></a>
                </div>
                

              </div>

           <!--    end of the navbar -->

           <!-- The toggle section for the post, jobs and application -->

           <div class="mt-6">
             

           </div>

            <!-- End of the toggle section for the post, jobs and application -->


            </div>

                       <!--  End of the second section -->


                      <!--  The third section -->
            <div class="w-2/6">

               <div class="bg-white border rounded-lg shadow-sm ml-4 w-full">

                  <div class="p-6">
                    
                    <h4 class="text-gray-800 text-center font-semibold rounded-lg hover:bg-purple-300 px-2 py-2"> Details</h4>
                  </div>
                  

                </div>
              

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