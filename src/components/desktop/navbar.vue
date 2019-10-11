<template>
 <!--  The navigational bar -->
 
   
  <nav class="flex items-center justify-center flex-wrap bg-white-800 p-6 fixed w-full z-10 top-0 shadow">
    <div class="flex items-center flex-shrink-0 text-gray-500 mr-6">
      <a class="text-black no-underline hover:text-black hover:no-underline" href="#">
        <span class="text-2xl pl-2"><i class="em em-grinning"></i> Brand McBrandface</span>
      </a>
    </div>

   

    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <a class="inline-block py-2 px-4 text-black no-underline" href="#">Active</a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zM9.56 8.93l6.37-2.12a1 1 0 011.26 1.26l-2.12 6.37a1 1 0 01-.63.63l-6.37 2.12a1 1 0 01-1.26-1.26l2.12-6.37a1 1 0 01.63-.63zm-.22 5.73l4-1.33 1.32-4-4 1.34-1.32 4z"/></svg></a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M15 19a3 3 0 01-6 0H4a1 1 0 010-2h1v-6a7 7 0 014.02-6.34 3 3 0 015.96 0A7 7 0 0119 11v6h1a1 1 0 010 2h-5zm-4 0a1 1 0 002 0h-2zm0-12.9A5 5 0 007 11v6h10v-6a5 5 0 00-4-4.9V5a1 1 0 00-2 0v1.1z"/></svg></a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
        </li>
      </ul>
    </div>
  </nav>

 

</template>




  
<script>

import {mapActions, mapGetters} from 'vuex';
 import {  ContentLoader } from 'vue-content-loader'; 

export default {
   components:{

   ContentLoader


  },

data(){
  return {
  
  post:{
    text : "",
    photo:"",
    video:""

  },



  }
},


methods:{
  postCreate(){
  

  },


  userLogout(){
    localStorage.removeItem('token')
    .then(() => this.$router.push('/'))
    .catch((err) =>{
      console.log(err)
    })
  
  }
}

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
