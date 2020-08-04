<template>
 <div class=" h-screen mt-3">

  <div class="bg-purple-100 py-12 px-56 rounded-lg shadow-sm">


      <h1 class="font-body tracking-wider text-center"> Search for Jobs</h1>
      
  
    

  </div>

<!--   The Job filter box -->

  <div class="flex">

    <div></div>

    <div></div>

    <div></div>
    

  </div>

  <!-- End of the job filter box -->
<!-- 
  The Job list and detail section -->

  <div class="mt-3 bg-white flex">
    
    <div>
      <ul class="list-none mt-4">
        <li>  

            <div class="bg-white px-3 flex justify-between">
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