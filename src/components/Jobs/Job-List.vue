<template>
 <div class=" h-screen mt-3">

  <div class="bg-gray-100 py-12 rounded-lg shadow w-full lg:w-11/12 lg:mx-auto ">


      <h1 class="font-body tracking-wider text-center text-lg font-medium text-gray-800 sm:text-sm"> Find your next Job</h1>
      
      <!-- The job search and filter section -->
  
    <div class="grid items-center mt-6 justify-center sm:grid-cols-1 lg:grid-cols-2 sm:px-1 lg:px-3 gap-4">

      <div>
        <input type="" name="" class="appearance-none rounded-full block w-full px-8 py-2 border border-gray-400 placeholder-gray-400 text-center text-gray-800 bg-white shadow-sm font-body tracking-wider font-small focus:outline-none focus:shadow-outline focus:z-10 sm:text-sm sm:leading-5" placeholder="search by skill or title">

      </div>
      <div>
        <input type="" name="" class="appearance-none rounded-full block w-full px-8 py-2 border border-gray-400 placeholder-gray-400 text-center text-gray-800 bg-white shadow-sm font-body tracking-wider font-small focus:outline-none focus:shadow-outline focus:z-10 sm:text-sm sm:leading-5" placeholder="search">
      </div>
     <!--  <div>
        <input type="" name="" class="appearance-none rounded-none block w-full px-12 py-2 border border-gray-400 placeholder-gray-400 text-center text-gray-800 bg-gray-200 rounded-md shadow-sm font-body tracking-wide font-small focus:outline-none focus:shadow-outline-purple focus:border-purple-700 focus:z-10 sm:text-sm sm:leading-5" placeholder="search">
      </div> -->
      
    </div>

  </div>

 <!--  End of the job filter section -->

<!--   The Job filter box -->

  <div class="flex">

    <div></div>

    <div></div>

    <div></div>
    

  </div>

  <!-- End of the job filter box -->
<!-- 
  The Job list and detail section -->

  <div class="mt-3 bg-white flex items-center lg:w-11/12 lg:mx-auto rounded-md shadow-md">
    
    <div class="p-2 w-full lg:w-1/2">

      <p class="font-medium font-body text-gray-700 p-2 text-sm prose tracking-wider"> Based on your profile</p>
      <ul class="list-none mt-1">
        <li class="bg-white p-3">  

          

            <!-- The jobs list navigational bar -->
            <div class="bg-white flex justify-between items-center w-full">
                <div class="flex items-center space-x-4">
                  <img src="/img/Ali-Baba.png" class="h-8 w-8 object-center rounded-full border-gray-300 border-3">

                  <div class="">

                    <ul class="list-none">
                        <li class="font-normal font-body text-sm tracking-wider"> Google Inc</li>
                        <li class="font-normal text-xs tracking-wide text-gray-700"> @ Google Inc</li>
                    </ul>

                  </div>


                </div>
                 <div>
                  <svg viewBox="0 0 20 20" fill="currentColor" class="dots-horizontal w-5 h-5 text-gray-600"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                </div>
               

            </div>

            <!-- The end of the job list navigational bar -->
            
            <!-- The job list footer -->

            <div class="flex justify-between items-center mt-1">

              <div class="flex items-center space-x-2">
          
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" class="users w-5 h-5 text-gray-700"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path> </svg>

                <span class="text-gray-700 font-body font-medium text-xs tracking-wider"> Applicants</span>
              </div>

              <div>
                
                <button class="font-body font-bold text-xs tracking-wider text-purple-600 bg-white border-purple-700 border-2 px-4 py-1 rounded-lg"> Details</button>
              </div>
              
            </div>

            <!-- End of the job list footer -->
            

        </li>

    <!--     <div class="border-t border-gray-400"></div> -->



      </ul>


    </div>

   <!--  End of the first flex -->

    <div class="hidden lg:block lg:w-1/2">

     
        

          <img src="/img/Ali-Baba.png" class="h-16 w-16 rounded-full border-gray-500 border-2 mt-2 mx-auto">

          <h1 class="text-center text-md font-body tracking-wider text-gray-900 mt-4"> Google</h1>
          <h1 class="text-center text-xs tracking-wider text-gray-600 mt-2"> @Google</h1>


          <ul class="list-none space-y-4 mt-3 p-3">

            <li class="text-xs tracking-wider text-gray-800"> Web developer</li>

            <li class="text-xs tracking-wider text-gray-800"> Web developer</li>

            <li class="text-xs tracking-wider text-gray-800"> Web developer</li>
            
          </ul>
    
    
    
    </div>

  </div>

 <!--  End of the job List and detail section -->


 </div>


</template>

<script>

//Graphql import 


// import {USER_PROFILE} from '../constants/query.js';
  

import {  ContentLoader } from 'vue-content-loader'; 


//components import.

 
export default {

  components:{

   ContentLoader,

  

  },

  data(){

    return {





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