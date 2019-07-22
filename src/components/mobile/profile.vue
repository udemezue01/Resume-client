<template>
 <div class="uk-container-xsmall uk-padding">

      <content-loader :height="600" :width="400" :speed="1"  primaryColor="#dadada" secondaryColor="#e9e9e9" v-if="!profile">
          <rect x="0" y="70" rx="5" ry="5" width="400" height="200" /> 
          <circle cx="201.77590591894563" cy="271.54590591894566" r="93.27590591894564" /> 
          <circle cx="227.5" cy="367.27" r="1" />
          <rect x="66.5" y="388.27" rx="0" ry="0" width="252" height="24" /> 
          <rect x="79.5" y="424.27" rx="0" ry="0" width="228" height="13" />
          <rect x="100.5" y="448.27" rx="0" ry="0" width="183" height="12" />
      </content-loader>

     <div class="uk-card uk-card-default uk-width-1-1" v-else>
            <div class="uk-card-media-top">
                <img src="img/cover.jpg" alt="">
                <div class="uk-overlay uk-position-bottom-center">
                  <img src="img/udem.jpg" alt="" class= "uk-border-circle" width="150" height="150" style="border:3px solid #21D397">
                </div>
            </div>
            <div class="uk-card-body uk-padding-large">
                
            </div>
        </div>
    </div>
    
 </div>


</template>


<script>
import {mapState, mapActions} from 'vuex';

import {  ContentLoader } from 'vue-content-loader'; 


export default {
  components:{
    ContentLoader,
  },

  data(){
    return{
      profile:"",
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

@import '../../theme/theme.less';

.uk-card(){
  border-radius:5px;
}



</style>
