<template>
  <div id="app" class="bg-gray-100">
    
<!-- <vue-progress-bar></vue-progress-bar>
   <navbar-desktop class = "lg:visible" v-if="token"> </navbar-desktop>
   <navbar-mobile class= "md:hidden"  v-if="token"> </navbar-mobile> -->

   <navbar class = "sticky top-0" v-if ="!token"> </navbar>
    <router-view/>

  
   
  </div>
</template>


<script >
//navbar 
import navbar from '@/components/Navbar.vue';




 
export default {

components:{
  		
  	navbar,
},
  
computed:{
  token () {
        return localStorage.getItem('token');
      }
},

}

</script>

