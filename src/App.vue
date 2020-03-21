<template>
  <div id="app" class="">
    
<!-- <vue-progress-bar></vue-progress-bar>
   <navbar-desktop class = "lg:visible" v-if="token"> </navbar-desktop>
   <navbar-mobile class= "md:hidden"  v-if="token"> </navbar-mobile> -->
    <router-view/>
   
  </div>
</template>


<script >
//navbar 
import navbar from './components/Navbar.vue'




 
export default {

components:{
  		
  	'navbar':navbar,
},
  
// computed:{
//   token () {
//         return localStorage.getItem('token');
//       }
// },

}

</script>

