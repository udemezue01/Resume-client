<template>
  <div id="app" class="bg-purple-100 min-h-full">
    
 	<vue-progress-bar></vue-progress-bar>


   <navbar class = "sticky top-0" v-if ="token"> </navbar>

   <navmobile >  </navmobile>
    <router-view/>

<!--     <footbar class = "absolute inset-x-0 bottom-0 mt-4 hidden lg:block"> </footbar> -->

  
   
  </div>
</template>


<script >
//navbar 
import navbar from '@/components/Navbar/Navbar.vue';
import navmobile from '@/components/Navbar/Navbar-mobile.vue';
import footbar from '@/components/Footer.vue';
 
export default {

components:{
  		
  	navbar,
    navmobile,
  	footbar,

},
  
computed:{
  token () {
        return localStorage.getItem('token');
      }
},

}

</script>

