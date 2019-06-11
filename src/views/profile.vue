<template>
 <div class="uk-container uk-padding-large">


   
    <div uk-grid class="uk-grid-medium uk-child-width-1-3@m">

     <!--  the first grid -->
    <div>
      
      <div class="uk-card uk-card-default uk-card-hover">
            <div class="uk-card-media-top">
                <img src="img/cover.jpg" alt="">
                 <div class="uk-overlay uk-position-center">
                  <img src="img/udem.jpg" alt="" class= "uk-border-circle" width="200" height="200" style="border:3px solid #21D397">
                </div>
            </div>
            <div class="uk-card-body uk-padding-large ">

              <div class="uk-align-center">
                <h3 class="uk-text-center">Udem Aramide </h3>
                
              </div>

               
            </div>
        </div>
    </div>

    <!-- end of the first grid -->
<!-- 
    the second grid -->
    <div>
       <div class="uk-margin uk-section-default uk-section-xsmall uk-box-shadow-xlarge">
           <!--  <input class="uk-input uk-form-width-auto" type="text" placeholder="Say something..."> -->
           <div class="uk-inline">
        
        <input class="uk-input uk-form-width-large" placeholder="What's new?">
        <svgicon icon = "photo-camera" class = "uk-form-icon uk-form-icon-flip uk-margin-small-top uk-padding-top" height = "25" width = "55" color ="#657786">   </svgicon>

          </div>
        </div>
      <div class="uk-card uk-card-default uk-card-hover">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" width="40" height="40" src="img/udem.jpg" style="border:2px solid #21D397">
            </div>
            <div class="uk-width-expand">
                <h6 class="uk-card-title uk-margin-remove-bottom">Resume</h6>
                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">16m ago</time></p>
            </div>
        </div>
    </div>
     <div class="uk-card-media-top uk-width-auto">
        <img src="/img/udem1.jpg" alt="">
    </div>
    <div class="uk-card-body uk-remove-margin">
      <p> its a wonderful day in paris with co workers</p>
        
    </div>
    <div class="uk-card-footer uk-remove-margin">
        <div class="uk-inline uk-remove-margin">
            <input class="uk-input uk-form-width-large" type="text" placeholder="write a comment...">
             <svgicon icon = "photo-camera" class = "uk-form-icon uk-form-icon-flip uk-margin-small-top uk-padding-top" height = "25" width = "55" color ="#657786">   </svgicon>

        </div>
    </div>
</div>
    </div>

 <!--    end of the second of the second grid -->


<!--  the start of th third grid -->
 <div>
   <div class="uk-card uk-card-default">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" width="40" height="40" src="img/udem.jpg" style="border:2px solid #21D397">
            </div>
              <div class="uk-width-expand">
                  <h6 class="uk-card-title uk-margin-remove-bottom">Resume</h6>
                  <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">16m ago</time></p>
              </div>
        </div>
    </div>
     <div class="uk-card-media-top uk-width-auto">
        <img src="/img/udem2.jpg" alt="" height="150">
    </div>
      <div class="uk-card-body ">
        <h5> Web developer </h5><hr>
        <p>  a very sofisticated web developer is needed </p>
          
      </div>
      <div class="uk-card-footer">
              <div class="uk-margin-small uk-inline">
                  <button class="uk-button uk-button-primary uk-button-medium"> Apply Now</button>

              </div>
      </div>
</div>
    </div>
    <!-- end of the third grid -->


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
 @form-focus-color: #657786;
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
