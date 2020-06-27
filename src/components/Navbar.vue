<template>
	
<div id="navbar">


	<!-- The navigational bar -->
    
<nav class="flex justify-between items-center px-6 py-3 bg-white shadow sticky top-0 lg:px-6">

  <div class="">

      <img src="/img/logo2.svg" class="h-5 w-5"/>

  </div>

      <div class="flex px-2 py-2 space-x-2" v-if ="token">


      <a href="">


      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-gray-800"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
      </a>



      <img src="/img/Ali-baba.png" class="h-6 w-6 rounded-full " />

      </div>

  <div v-if ="!token">

      <router-link to = "login">
      <button type="button" class="font-body inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-extrabold rounded-md text-white bg-purple-700 rounded-lg hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">


      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 -ml-1 mr-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      Log In
      </button>


      </router-link>



  </div>


</nav>

       <!--  End of the navigational bar -->



	</div>
	


</div>



</template>


<script >

export default{


computed:{
  token () {
        return localStorage.getItem('token');
      }
},



}
	


</script>