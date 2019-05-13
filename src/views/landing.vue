<template>
  <div id="landing">
  	<div class="uk-cover-container" uk-height-viewport>


    <div class="uk-grid-collapse uk-child-width-1-2@m uk-child-width-1-1@s uk-flex-middle" uk-grid>

    <!--   the large section banner -->
          <div class="uk-background-cover uk-visible@l uk-section" style="background-image: url('img/france.jpg');" uk-height-viewport></div>

       <!--    end of the large image section banner -->

    <!--    the user form and registration section -->
            <div class="uk-padding-large uk-flex-center uk-section-primary" uk-height-viewport >

              <div class="web-intro uk-margin-left" >
                
              <h2> Resume</h2>
              <p>Social Network for Proffesionals</p>
              </div>
                <div class="uk-margin-medium-top">
                        <ul class="uk-flex-center" uk-tab>
                           
                            <li><a href="#" toggle=">.register">LOGIN</a></li>
                            <li><a href="#" toggle=">.register">SIGN UP</a></li>
                        </ul>
                    </div>
            <div class="uk-width-large uk-padding-large uk-align-center" >


        <form action="" class="register uk-form-stacked">
          <fieldset class="uk-fieldset">
          <!--   <legend class="uk-legend"></legend> -->
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
                <input class="uk-input uk-form-xlarge" required placeholder="Email" type="email" v-model="resumeLogin.email">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                <input class="uk-input uk-form-xlarge" required placeholder="Password" type="password" v-model="resumeLogin.password">
              </div>
            </div>
            
            <div class="uk-margin">
              <label><input class="uk-checkbox" type="checkbox"> Keep me logged in</label>
            </div>
            <div class="uk-margin">
              <button type="submit" class="uk-button uk-button-primary uk-button-medium uk-width-1-1" v-on:click="userLogin" >Sign In</button>
            </div>
            
          </fieldset>
        </form>
        <div class="uk-margin">
              <button type="submit" class="uk-button uk-button-danger uk-button-medium uk-width-1-1">Login With Google</button>
            </div>
        <div>
          <div class="uk-text-center">
            <a class="uk-link-reset uk-text-small" data-uk-toggle="target: #recover;animation: uk-animation-slide-top-small">Forgot your password?</a>
          </div>
          <div class="uk-margin-small-top" id="recover" hidden>
            <form action="">
              
              <div class="uk-margin-small">
                <div class="uk-inline uk-width-1-1">
                  <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
                  <input class="uk-input" placeholder="E-mail" required type="text">
                </div>
              </div>
              <div class="uk-margin-small">
                <button type="submit" class="uk-button uk-button-primary uk-button-medium uk-width-1-1">SEND PASSWORD</button>
              </div>
              
            </form>
        </div>
          </div>
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
  
 resumeLogin:{
    email: "",
    password : ""
  },

  register:{
	full_name:"",
	email:"",
	account_type:["individual", "company"]
    

  },


  }
},
computed:{
  ...mapState('signup',[

    'registrationCompleted',
    'registrationError',
    'registrationLoading'
    ]),
  ...mapState('auth',[
    ''

    ]),

},
  methods:{
    ...mapActions('auth', [

      'login',
      'logout'
      ]),
  userLogin(){

    this.login(this.resumeLogin)
    .then(()=> this.$router.push('/feeds'))
    .catch((err)=> console.log(error))      

},
    },
    userRegister(register){
      this.$store.dispatch('signup/register', register)
      
  
    },
  }


  
</script>

<style scoped lang="less">

@import '../theme/theme.less';


.uk-section-primary {
    background: linear-gradient(45deg,#247CC4,#336BAE);
    .hook-section-primary;
}
 .hook-section-primary(){
  background-image:linear-gradient(45deg,#247CC4,#336BAE);
 }

 .hook-form() {
  border-radius: 20px;
  border:1px solid;
 }

 .hook-button(){
  border-radius: 20px;
 }


 @form-focus-background: #247CC4;
 @form-focus-color: white;


@form-background:  #247CC4;
@form-color: white;
@form-placeholder-color: white;


@button-default-background: #336BAE;
@button-default-active-background:  #336BAE;
</style>

