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
          <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
        </li>
        <li class="mr-3">
          <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
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
