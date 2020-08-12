<template>
 <div class=" h-screen mt-3">

  <div class="bg-gray-200 py-12 rounded-lg shadow-md w-full lg:w-11/12 lg:mx-auto ">


      <h1 class="font-body tracking-wider text-center text-lg font-medium text-gray-800"> Find your next Job</h1>
      
      <!-- The job search and filter section -->
  
    <div class="flex space-x-8 items-center mt-6 mx-auto justify-center">

      <div>
        <input type="" name="" class="appearance-none rounded-md block w-full px-24 py-2 border border-gray-400 placeholder-gray-400 text-center text-gray-800 bg-white  shadow-sm font-body tracking-wide font-small focus:outline-none focus:shadow-outline-purple focus:border-purple-700 focus:z-10 sm:text-sm sm:leading-5" placeholder="search by skill or title">
      </div>
      <div>
        <input type="" name="" class="appearance-none rounded-md block w-full px-24 py-2 border border-gray-400 placeholder-gray-400 text-center text-gray-800 bg-white shadow-sm font-body tracking-wide font-small focus:outline-none focus:shadow-outline-purple focus:border-purple-700 focus:z-10 sm:text-sm sm:leading-5" placeholder="search">
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

  <div class="mt-3 bg-white flex lg:w-11/12 lg:mx-auto rounded-md shadow-md">
    
    <div class="p-3">

      <p class="font-medium font-body text-gray-700 p-3 text-sm prose tracking-wider"> Based on your profile</p>
      <ul class="list-none mt-4">
        <li>  

            <div class="bg-white px-3 flex justify-between items-center">
                <div>
                  <img src="/img/Ali-Baba.png" class="h-12 w-12 rounded-full">
                </div>
                 <div>
                  <img src="/img/Ali-Baba.png" class="h-12 w-12 rounded-full">
                </div>
                 <div>
                  <img src="/img/Ali-Baba.png" class="h-12 w-12 rounded-full">
                </div>

            </div>

        </li>

      </ul>

    </div>

    <div>
      

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