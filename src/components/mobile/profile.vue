<template>
 <div class="uk-container-small uk-padding-large">

     <div class="uk-card uk-card-default uk-width-1-1">
            <div class="uk-card-media-top">
                <img src="img/resume1.png" alt="">
                <div class="uk-overlay uk-position-center">
                  <img src="img/udem.jpg" alt="" class= "uk-border-circle" width="250" height="250" style="border:3px solid #21D397">
                </div>
            </div>
            <div class="uk-card-body uk-padding-large">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
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
