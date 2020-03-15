<template>

  <div class="">
      <div class="flex flex-row justify-center p-40 m-auto items-center">
  <div class="w-1/3 bg-white-500 h-12 ">
   
    <div class="max-w-md rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/udem.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div>
</div>
  </div>
  <div class="w-1/3 bg-white-400 h-12 ">


    
    <div class="max-w-md rounded overflow-hidden shadow-lg" >
  <img class="w-full" src="/img/udem.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div>
</div>
  </div>
  <div class="w-1/3 bg-white-400-500 h-12">
    
    <div class="max-w-md rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/udem.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div>
</div>
  </div>
</div>


  </div>

</template>

<script>
  import {USER_PROFILE} from '../../constants/query.js';
 


  import {  ContentLoader } from 'vue-content-loader'; 
 
 
export default {
  components:{

   ContentLoader,
   

  },


data(){

    return{
      account:[],

 

    }
  },


  apollo: {

  	account:USER_PROFILE,
  


   },

  computed:{
    

  },

  methods:{
    


  },
  
  
 



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">



</style>
