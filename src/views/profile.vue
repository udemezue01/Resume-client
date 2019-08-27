<template>
 <div class="uk-container uk-padding">


   <profile-d class= "uk-visible@l">  </profile-d>
   <profile-m class= "uk-hidden@l">  </profile-m>


 </div>


</template>

<script>
import {USER_PROFILE} from '../graph/query.js';
  

  import {  ContentLoader } from 'vue-content-loader'; 
  import profile_d from '@/components/desktop/profile.vue';
  import profile_m from '@/components/mobile/profile.vue';
 
export default {

  components:{

   ContentLoader,
   "profile-d":profile_d,
   "profile-m":profile_m,

  },
  data(){
    return {

      profile:""

    }

  },


  apollo:{
    profile:USER_PROFILE
  },
  

  computed:{
    

  },

  methods:{
    


  },
  
  
 



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


@import '../theme/theme.less';
@padding-large-padding: 90px;

@padding-large-padding-l:  100px;


@container-max-width:                   3500px;




@form-focus-background: transparent;
@form-focus-color: #21D397;
@form-color: #21D397;
@form-height:  43px;

@form-background:  transparent;
@form-color: #d2d2d2;
@form-placeholder-color: #657786;
 .hook-form() {
  border-radius: 5px;
  border:1px solid;
 }


.hook-section-default() {
  border-radius: 8px;

}
.uk-section-xsmall {
    padding-top:1px;
    padding-bottom:1px;
}

</style>
