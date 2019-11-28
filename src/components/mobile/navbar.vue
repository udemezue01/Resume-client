<template>
 
  <div id="landing">
   
      <div class="bg-gray-200" style="min-height: 640px;">
  <div id="nav" class="bg-white shadow">
    <div class="md:px-8">
      <nav class="relative flex flex-wrap items-center justify-between md:py-4">
        <div class="relative z-10 flex-shrink-0 pl-4 py-4 md:p-0">
          <img class="h-8 w-8" src="/img/icons/logo.png" alt="">
        </div>
       
        <div class="md:block md:ml-10 md:flex md:items-baseline md:justify-between md:bg-transparent">
          <div class="md:absolute inset-0 flex items-center justify-center">
            <a href="#" class="text-sm font-medium text-gray-900 hover:text-gray-700">Resume.ly</a>
            <!-- <a href="#" class="ml-10 text-sm font-medium text-gray-900 hover:text-gray-700">Marketplace</a>
            <a href="#" class="ml-10 text-sm font-medium text-gray-900 hover:text-gray-700">Partners</a>
            <a href="#" class="ml-10 text-sm font-medium text-gray-900 hover:text-gray-700">About</a> -->
          </div>
          <div class="ml-10 relative flex items-baseline">
            <a href="#" class="text-sm font-medium text-gray-900 hover:text-gray-700">Log in</a>
            <a href="#" class="ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Create Account</a>
          </div>
        </div>
      </nav>
    </div>

   
  </div>
</div>

</div>

</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data(){
    return{
      brand:'Resume.Io',
    }
  },
  computed: mapGetters('auth', [
    'isAuthenticated',
  ]),

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">



</style>
