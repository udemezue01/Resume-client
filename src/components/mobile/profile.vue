<template>

  <div>
    
       <content-loader
    :height="475"
    :width="400"
    :speed="2"
    primaryColor="#dadada"
    secondaryColor="#ecebeb"
    v-if="$apollo.loading"
  >
    <rect x="-23.73" y="-1" rx="5" ry="5" width="484" height="236" /> 
    <circle cx="198.68" cy="228.94" r="88.54" /> 
    <rect x="35" y="335.67" rx="0" ry="0" width="330" height="9" /> 
    <rect x="84" y="381.67" rx="0" ry="0" width="0" height="0" /> 
    <rect x="53" y="357.67" rx="0" ry="0" width="286" height="9" /> 
    <rect x="34" y="378.67" rx="0" ry="0" width="325" height="13" />
  </content-loader>

 <!--  first content loader -->


  <content-loader
    :height="33"
    :width="406"
    :speed="2"
    primaryColor="#dadada"
    secondaryColor="#e9e9e9"
    v-if="$apollo.loading"
  >
    <rect x="23" y="20" rx="3" ry="3" width="85" height="8.0" /> 
    <rect x="140.55" y="19" rx="3" ry="3" width="85" height="8.0" /> 
    <rect x="265.55" y="18" rx="3" ry="3" width="85" height="8.0" />
  </content-loader>

 <!--  second content loader -->




         <content-loader
    :height="475"
    :width="400"
    :speed="2"
    primaryColor="#dadada"
    secondaryColor="#e9e9e9"
    v-if="$apollo.loading"
  >
    <circle cx="30" cy="30" r="30" /> 
    <rect x="75" y="13" rx="4" ry="4" width="100" height="13" /> 
    <rect x="75" y="37" rx="4" ry="4" width="50" height="8" /> 
    <rect x="0" y="70" rx="5" ry="5" width="400" height="250" /> 
    <rect x="-0.72" y="358.67" rx="0" ry="0" width="375.81" height="10" /> 
    <rect x="-3.44" y="388.67" rx="0" ry="0" width="311.84" height="10" /> 
    <rect x="-4.44" y="414.23" rx="0" ry="0" width="380.44" height="10" /> 
    <rect x="324" y="13" rx="4" ry="4" width="57" height="7.41" />
  </content-loader>


<!--   third content loader -->

  </div>
   



</template>


<script>


  import {  ContentLoader } from 'vue-content-loader'; 


export default {
  components:{
    ContentLoader,
  },

  data(){
    return{
      Profile:[],
    }
  },

 computed:{

  },

  methods:{
 

  },


}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">




</style>
