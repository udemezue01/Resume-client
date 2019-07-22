<template>
  <div id="app">
    
<vue-progress-bar></vue-progress-bar>
   <navbar-desktop class = "uk-visible@l" v-if="userId"> </navbar-desktop>
   <navbar-mobile class= "uk-hidden@l"  v-if="userId"> </navbar-mobile>
    <router-view/>
   
<!-- 
    <footer-mobile class= "uk-hidden@l">  </footer-mobile> -->
  </div>
</template>


<script >
//navbar 
import navbar_d  from '@/components/desktop/navbar.vue'
import navbar_m from '@/components/mobile/navbar.vue'


//footer
import footer_m from '@/components/mobile/footer.vue'
import footer_d from '@/components/desktop/footer.vue'


 
export default {

components:{
  'navbar-desktop':navbar_d,
  'navbar-mobile':navbar_m,
  'footer-mobile':footer_m
},



computed:{
  userId () {
        return this.$root.$data.userId
      }
},






}
</script>


<style lang="less" scoped>




</style>
