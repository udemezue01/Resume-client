<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import navbar_d from '@/components/desktop/navbar.vue'

import navbar_m from '@/components/mobile/navbar.vue'

export default {
  name: 'home',
  components: {
    navbar
  }
}
</script>
