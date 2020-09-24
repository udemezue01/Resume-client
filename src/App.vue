<template>
  <div id="app" class="bg-purple-100 min-h-full">
    
 	<vue-progress-bar></vue-progress-bar>


   <navbar class = "sticky top-0" v-if ="token"> </navbar>
    <router-view/>

<!--     <footbar class = "absolute inset-x-0 bottom-0 mt-4 hidden lg:block"> </footbar> -->

  
   
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

