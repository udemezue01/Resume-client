<template>
  <div id="app" class="bg-gray-100">
    
 <vue-progress-bar></vue-progress-bar>


   <navbar class = "sticky top-0" v-if ="token"> </navbar>
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

