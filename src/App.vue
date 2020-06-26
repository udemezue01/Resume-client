<template>
  <div id="app" class="bg-gray-200">
    
<!-- <vue-progress-bar></vue-progress-bar>
   <navbar-desktop class = "lg:visible" v-if="token"> </navbar-desktop>
   <navbar-mobile class= "md:hidden"  v-if="token"> </navbar-mobile> -->

   <navbar class = "sticky top-0"> </navbar>
    <router-view/>

    <footbar class = "p-6" v-if="!token"></footbar>
   
  </div>
</template>


<script >
//navbar 
import navbar from '@/components/Navbar.vue';
import footbar from '@/components/Footer.vue'; 




 
export default {

components:{
  		
  	navbar,
  	footbar,
},
  
computed:{
  token () {
        return localStorage.getItem('token');
      }
},

}

</script>

