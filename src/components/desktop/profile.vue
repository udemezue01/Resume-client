<template>
 <div class="uk-container uk-padding-large">


   
    <div uk-grid class="uk-grid-medium uk-child-width-1-3@m">

     <!--  the first grid -->
    <div>
      
      <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="img/resume1.png" alt="">
                <div class="uk-overlay uk-position-center">
                  <!-- <img src="img/udem.jpg" alt="" class= "uk-border-circle" width="250" height="250"> -->
                </div>
            </div>
            <div class="uk-card-body uk-padding-large">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>

    <!-- end of the first grid -->
<!-- 
    the second grid -->
    <div>
       <div class="uk-margin uk-section-default uk-section-xsmall">
            <input class="uk-input uk-form-width-auto" type="text" placeholder="Say something...">
        </div>
      <div class="uk-card uk-card-default">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" width="40" height="40" src="img/udem.jpg">
            </div>
            <div class="uk-width-expand">
                <h6 class="uk-card-title uk-margin-remove-bottom">Resume</h6>
                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">@resume_john</time></p>
            </div>
        </div>
    </div>
     <div class="uk-card-media-top uk-width-auto">
        <img src="/img/udem.jpg" alt="">
    </div>
    <div class="uk-card-body ">
        
    </div>
    <div class="uk-card-footer">
        <div class="uk-margin">
            <input class="uk-input uk-width-1-1" type="text" placeholder="write a comment...">
        </div>
    </div>
</div>
    </div>

 <!--    end of the second of the second grid -->
    <div>
      
       <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
                <img src="img/resume-air.png" alt="">
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
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
         'getProfile',
      ])

  },

  methods:{
    ...mapActions('profile',[
      'createProfile',
      'updateProfile',
   
      'deleteProfile',

      ]),
    ...mapActions('Vacancy', [

          'createVacancy',
          'updateVacancy',
          'deleteVacancy',

      ]),
      ...mapActions('application', [
          'ceateApplication',
          'updateApplication',
          'deleteApplication',


        ])
  

  },
  created(){

   this.getProfile
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


@import '../../theme/theme.less';
@padding-large-padding: 90px;

@padding-large-padding-l:  100px;


@container-max-width:                   3500px;


@form-focus-background: transparent;
 @form-focus-color: #eee;;
@form-height:  40px;

@form-background:  transparent;
@form-color: #eee;
@form-placeholder-color: #657786;
 .hook-form() {
  border-radius: 10px;
  border:1px solid;
 }


.hook-section-default() {
  border-radius: 10px;

}

</style>
