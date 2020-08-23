<template>
	
<div id="navbar">


	<!-- The navigational bar -->
    
<nav class="flex justify-between items-center  px-6 py-2 bg-white shadow sticky top-0 lg:px-6">

  <div class="">

      <router-link to = "/home"> <img src="/img/logo2.svg" class="h-6 w-6"/> </router-link>

  </div>

      <div class="flex px-2 py-2  items-center space-x-2" v-if ="!token">

       <!--  The form section of the navbar -->

        <div class=" relative">

          <ul class="list-none flex items-center space-x-2 ">

            <li>

               <input type="" name="search " class="appearance-none rounded-none block w-full px-2 py-1 border border-gray-400 placeholder-gray-400 text-center text-gray-800 bg-white rounded-full shadow-sm font-body tracking-wide text-xs focus:outline-none focus:shadow-outline focus:z-10 sm:text-sm sm:leading-5" placeholder="search">
             </li>

            <li> 

              <router-link to = "home">


          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700" ><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
      </router-link>


            </li>

            <li> <a href="">


      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-6 h-6 text-gray-700"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
      </a>
 </li>

 <li>   <img v-on:click = "isOpen = !isOpen" src="/img/Ali-baba.png" class="h-8 w-8 rounded-full overflow-hidden border-solid border-2 border-gray-300" />
 </li>
   
      
          <!-- The drop down section -->

      <div v-if = "isOpen" class="bg-white rounded-lg p-4 w-32 absolute right-0 top-0 mt-6 bg-white shadow-md">
        <ul class="list-none space-y-2">

          <li class="font-body tracking-wider text-xs font-normal text-gray-700 "> Profile</li>
          <li class="font-body tracking-wider text-xs font-normal text-gray-700 mt-2"> Edit</li>
          <li class="font-body tracking-wider text-xs font-normal text-gray-700 mt-2"> Logout</li>
      
          
        </ul>  
  
    </div>
      <!-- End of the dropdown section -->
            

          </ul>
          
         
        </div>

      

      </div>
    
   
        
     

  <div v-if ="!token">

      <router-link to = "login">
      <button type="button" class="font-body inline-flex items-center px-4 py-2 border border-transparent  leading-5 font-bold rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out sm:text-xs">


      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 -ml-1 mr-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
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

  data(){

    return {
        isOpen:false

    }
  },

computed:{
 token () {
        return localStorage.getItem('token')
      }
},



}
	


</script>