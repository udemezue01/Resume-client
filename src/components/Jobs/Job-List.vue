<template>
 <div class=" h-screen mt-3">

  <div class="bg-gray-100 py-12 rounded-lg shadow-md w-full lg:w-11/12 lg:mx-auto ">


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
    
    <div class="p-3 w-full lg:w-1/2">

      <p class="font-medium font-body text-gray-700 p-3 text-sm prose tracking-wider"> Based on your profile</p>
      <ul class="list-none mt-1">
        <li class="bg-white p-3">  

          

            <!-- The jobs list navigational bar -->
            <div class="bg-white flex justify-between items-center w-full">
                <div class="flex items-center space-x-3">
                  <img src="/img/Ali-Baba.png" class="h-12 w-12 object-center rounded-full border-gray-300 border-2">

                  <div class="">
                    <div class="block font-body font-medium text-sm tracking-wider prose text-gray-800"> Google Inc</div>
                    <div class="block font-body font-light text-xs tracking-wider prose text-gray-600"> @google </div>
                  </div>


                </div>
                 <div>
                  <svg viewBox="0 0 20 20" fill="currentColor" class="dots-horizontal w-5 h-5 text-gray-600"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                </div>
               

            </div>

            <!-- The end of the job list navigational bar -->
            <ul class="mt-3 px-16">
              <li class="font-normal text-xs tracking-wider"> Web developer</li>
            </ul>

            <div class="flex justify-between items-center mt-4">

              <div class="flex items-center">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="bookmark w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
              </div>

              <div>
                
                <button class="font-body font-bold text-xs tracking-wider text-purple-600 bg-white border-purple-700 border-2 px-4 py-1 rounded-lg"> Apply</button>
              </div>
              
            </div>
            

        </li>

        <div class="border-t border-gray-400"></div>



      </ul>

    </div>

   <!--  End of the first flex -->

    <div class="hidden lg:block">

     
        

          <img src="/img/Ali-Baba.png" class="h-24 w-24 rounded-full border-gray-500 border-2 object-center text-center mt-1 ml-24">
    


  
    
    
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