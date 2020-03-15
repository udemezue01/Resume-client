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
import navbar_d  from '@/components/desktop/Navbar.vue'
import navbar_m from '@/components/mobile/navbar.vue'




 
export default {

components:{
  'navbar-desktop':navbar_d,
  'navbar-mobile':navbar_m,
},
  
// computed:{
//   token () {
//         return localStorage.getItem('token');
//       }
// },

}
</script>


<style lang="less" scoped>




</style>
