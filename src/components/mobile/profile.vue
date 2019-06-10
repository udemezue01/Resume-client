<template>
 <div class="uk-container-small uk-padding-large">

     <div class="uk-card uk-card-default uk-width-1-1">
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

export default {

 computed:{
    ...mapState('profile',[

      'createCompleted',
      'createError',
      'createLoading',
      'profile'

      ]),
    ...mapActions('profile', [
      'getProfile'


      ])
  },

  methods:{
    ...mapActions('profile',[
      'createProfile',
      'updateProfile',
      'deleteProfile'

      ]),

  },
  created(){
    this.getProfile
  }

}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '../../theme/theme.less';

.uk-card(){
  border-radius:5px;
}



</style>
