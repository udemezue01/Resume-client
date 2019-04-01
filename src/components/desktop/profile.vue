<template>
 <div class="uk-container">


    <div class="uk-grid-match uk-padding-small" uk-grid>

     <!--  the profile image -->
          <div id="profile-image" class="uk-width-1-4@l">

            <div class="uk-card uk-card-default uk-card-body">

        
                 <img src="/img/udem.jpg" height="200px"  width="200px" class="uk-border-circle uk-align-center" />

                <!--  <button class="uk-button uk-button-default uk-button-small uk-align-center uk-padding uk-margin-left">edit profile</button> -->

                <div class="uk-card-footer uk-align-center uk-position-bottom-center uk-padding-large">
                    <a href="#" class="uk-button uk-button-text ">edit Profile</a>
                </div>
     
            </div>
            
               
          </div>

        <!--   end of profile image -->
     <!--    profile-cover -->
          <div id="profile-cover" class="uk-width-3-4@l">   
           <div class="uk-cover-container uk-height-medium uk-card uk-card-default uk-card-media-top" >
               <img src="/img/cover.jpg" alt="" uk-cover >

               <div class="uk-card-footer">
                
            </div>
          </div>
        </div>

       <!--  end of profile cover -->
      

         <!--    end of the second section of thr grid -->
              </div>
              
              


                <div class="uk-section">
            <div class="uk-container">

              <div class="uk-grid-match uk-padding" uk-grid>
              <!--   the firstsection of the grid -->

                <div class="uk-width-1-4@l">
                   
                  
                </div>
              <!--   end of the first section ofthe grid -->

              <div class="uk-width-3-4@l">
                   <div class="uk-card uk-card-default uk-align-center">
                      <ul class="uk-flex-center" uk-tab>
                          <li class="uk-active"><a href="#">Home</a> </li>
                          <li><a href="#">Posts</a> </li>
                          <li><a href="#"> Jobs</a> </li>
                           <li><a href="#"> Application</a> </li>
                            <li><a href="#"> jobs</a> </li>
                      </ul>
                  </div>

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

      ])
  },

  methods:{
    ...mapActions('profile',[
      'createProfile',
      'updateProfile',
      'getProfile',
      'deleteProfile'

      ]),

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">



</style>
