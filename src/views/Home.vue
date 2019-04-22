<template>
  <div class="home">

  	<hero-d> </hero-d>
 
  </div>
</template>

<script>


import hero_d from '@/components/desktop/hero.vue';

export default {
  name: 'home',
  components: {
  	'hero-d': hero_d,
    
  }
}
</script>
