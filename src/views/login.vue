<template>
  <div id="landing">
    <div class="uk-cover-container">
       


    <div class="uk-grid-collapse uk-child-width-1-2@m uk-child-width-1-1@s uk-flex-middle" uk-grid>

    <!--   the large section banner -->
          <div class="uk-cover-container uk-visible@l uk-section" uk-height-viewport>
         
                    <img src="img/resume1.png" alt="" uk-cover uk-height-viewport style="height: 100%;" >

            </div>

       <!--    end of the large image section banner -->

    <!--    the user form and registration section -->
            <div class="uk-flex-center uk-section-primary" uk-height-viewport >

              <div class="uk-margin-xlarge-left web-intro " >
                
              <h2 style="font-family: 'Righteous', cursive;padding-top: 10px;" class="uk-text-center"> Resume</h2>
              <p class="uk-text-center">career social network</p>
              </div>
               

                  <!--   login form -->
            <div class="uk-width-large uk-padding-large uk-align-center login-form" >

                <!-- login -->
      <form class="toggle-class" action="">
        <fieldset class="uk-fieldset">
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
              <input class="uk-input uk-form-xlarge " required placeholder="Username" type="text">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
              <input class="uk-input uk-form-xlarge " required placeholder="Password" type="password">
            </div>
          </div>
          <div class="uk-margin">
            <label><input class="uk-checkbox" type="checkbox"> Keep me logged in</label>
          </div>
          <div class="uk-margin-bottom">
            <button type="submit" class="uk-button uk-button-primary uk-width-1-1">LOG IN</button>
          </div>
        </fieldset>
      </form>
      <!-- /login -->

      <!-- recover password -->
      <form class="toggle-class" action="" hidden>
        <div class="uk-margin">
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
            <input class="uk-input uk-border-pill" placeholder="E-mail" required type="text">
          </div>
        </div>
        <div class="uk-margin-bottom">
          <button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1">SEND PASSWORD</button>
        </div>
      </form>
      <!-- /recover password -->
      
      <!-- action buttons -->
      <div>
        <div class="uk-text-center">
          <a class="uk-link-reset uk-text-small toggle-class" data-uk-toggle="target: .toggle-class ;animation: uk-animation-fade">Forgot your password?</a>
          <div class="uk-margin">
              <button type="submit" class="uk-button uk-button-outline uk-button-medium uk-width-1-1 uk-box-shadow-xlarge">Create Account</button>
            </div>

          </div>
          <a class="uk-link-reset uk-text-small toggle-class" data-uk-toggle="target: .toggle-class ;animation: uk-animation-fade" hidden><span data-uk-icon="arrow-left"></span> Back to Login</a>
        </div>
      </div>


      </div> <br>
 
      
      </div>
  </div>
</div>
</div>
</div>
</template>

  
<script>

import {mapActions, mapGetters, mapState} from 'vuex';

export default {

data(){
  return {
  
 signIn:{
    email: "",
    password : ""
  },



  }
},
computed:{

  ...mapState('auth',[
    'authenticating',
    'error',
    'success'

    ]),

},
  methods:{
    ...mapActions('auth', [

      'login',
    
      ]),




  userLogin(){
    

    this.login(this.signIn)
    .then(()=>  this.$Progress.start())
    .then(()=> this.$router.push('/profile'))


    .catch((err)=> console.log(err.status_code))      

},
    },

  }


  
</script>

<style scoped lang="less">

@import '../theme/theme.less';


.uk-section-primary {
    background: linear-gradient(50deg,#744FFF,#21D397);
    .hook-section-primary;
}
 .hook-section-primary(){
  background-image: linear-gradient(50deg,#744FFF,#21D397);

 }

 .hook-form() {
  border-radius: 10px;
  border:1px solid;
 }

 .hook-button(){
  border-radius: 10px;
 }





@form-background:  transparent;
@form-color: white;
@form-placeholder-color: white;

@button-primary-background:                     #21D397!important; 
@button-primary-color:                          white!important;
@button-primary-hover-background:               darken(@button-primary-background, 5%);
@button-primary-hover-color:                    @global-inverse-color;
@button-primary-active-background:              darken(@button-primary-background, 10%);
@button-primary-active-color:                   @global-inverse-color;

.hook-button-primary(){

 


}
</style>
