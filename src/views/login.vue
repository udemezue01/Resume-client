<template>
  <div id="landing">
  	<div class="uk-cover-container">
       


    <div class="uk-grid-collapse uk-child-width-1-2@m  uk-flex-middle" uk-grid>

    <!--   the large section banner -->
          <div class="uk-cover-container uk-visible@l uk-section" uk-height-viewport>
         
                    <img src="img/resume1.png" alt="" uk-cover uk-height-viewport style="height: 100%;" >

            </div>

       <!--    end of the large image section banner -->

    <!--    the user form and registration section -->
            <div class="uk-section-primary" uk-height-viewport >

              <div class="uk-margin-large-left uk-width-large web-intro " >
                
              <h3 style="font-family: 'Righteous', cursive;padding-top: 4px;" class="uk-text-left"> Resume.ly</h3>
              <!-- <h5 class="uk-text-left" style="font-family:  'Montserrat', sans-serif;">career social network</h5> -->
              </div>
                

        <!--   login form -->
            <div class="uk-width-large uk-align-center uk-padding-large"  id="login-form">


        <form action="" class=" uk-form-stacked">
          <fieldset class="uk-fieldset">
          <!--   <legend class="uk-legend"></legend> -->
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <div class="uk-margin">
            
            </div>
                
                <input class="uk-input uk-form-medium" required placeholder="E-mail" type="email" v-model="signIn.email">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                  <div class="uk-margin">
            </div>
                
                <input class="uk-input uk-form-medium" required placeholder="Password" type="password" v-model="signIn.password">
              </div>
            </div>
            
            
            <div class="uk-margin">
              <button type="submit" class="uk-button uk-button-primary uk-button-medium uk-width-1-1 uk-box-shadow-xlarge" v-on:click.prevent="userLogin()" >Sign In</button>
            </div>
            
          </fieldset>
        </form>
        <div class="uk-margin">
              <button type="submit" class="uk-button uk-button-danger uk-button-medium uk-width-1-1 uk-box-shadow-xlarge">Continue With Google</button>
            </div>
   

        <div class="uk-flex-center uk-align-center uk-width-large">
          <div class="uk-flex-center">
            <a class="uk-link-reset uk-text-small" data-uk-toggle="target: #recover;animation: uk-animation-slide-top-small">Forgot Your Password?</a>
          </div>

          <div class="uk-width-large" id="recover" hidden>
            <form action="">
              
              <div class="uk-margin">
                <div class="uk-inline uk-width-1-1">
                  <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
                  <input class="uk-input" placeholder="E-mail" required type="text">
                </div>
              </div>
              <div class="uk-margin">
                <button type="submit" class="uk-button uk-button-primary uk-button-medium uk-width-1-1 uk-box-shadow-xlarge">Send Password</button>
              </div>
              
            </form>
        </div>

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
  
 signIn:{
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
    'authenticating',
    'error',
    'success'

    ]),

},
  methods:{
    ...mapActions('auth', [

      'login',
    
      ]),
     ...mapActions('signup', [

      'createAccount',
 
      ]),



  userLogin(){
    

    this.login(this.signIn)
    .then(()=>  this.$Progress.finish())
    .then(()=> this.$router.push('/profile'))


    .catch((err)=> console.log(err.status_code))      

},
    },
    userRegister(){
      this.createAccount(this.register)
      .then(() => this.$router.push('/profile'))
      .catch((err) => console.log(error))
      
  
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
//   animation: example 5s infinite;

// @keyframes example {
//   from {background-image: linear-gradient(50deg,#744FFF,#21D397);}
//   to {background-image: linear-gradient(50deg,#21D397, #744FFF);}
// }
 }

 .hook-form() {
  border-radius: 10px;
  border:1px solid;
 }

 .hook-button(){
  border-radius: 10px;
 }


@form-width-large:                              300px;
@form-padding-vertical:                         1px;

.uk-input{
   font-family:   'Montserrat', sans-serif;
  font-weight: bolder;
}

.uk-input::placeholder { 

  color: @form-placeholder-color;
  font-family:  'Quicksand', sans-serif;
  

 }

@form-background:  transparent;
@form-color: white;
@form-placeholder-color: white;
@form-height:  40px;

@button-primary-background:                     #21D397!important; 
@button-primary-color:                          white!important;
@button-primary-hover-background:               darken(@button-primary-background, 5%);
@button-primary-hover-color:                    @global-inverse-color;
@button-primary-active-background:              darken(@button-primary-background, 10%);
@button-primary-active-color:                   @global-inverse-color;

.hook-button-primary(){

 


}
</style>

