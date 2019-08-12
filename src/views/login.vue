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
            <div class="uk-flex-center uk-section-default" uk-height-viewport >

              <div class="uk-margin-xlarge-left web-intro " >
                
              <h2 style="font-family: 'Righteous', cursive;padding-top: 10px; color:#21D397;" class="uk-text-center"> Resume</h2>
              <p class="uk-text-center" style="color: #21D397;">career social network</p>
              </div>
               

                  <!--   login form -->
            <div class="uk-width-large uk-padding-large uk-align-center login-form" >

                <!-- login -->
      <form class="toggle-class" action="">
        <fieldset class="uk-fieldset">
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
              <input class="uk-input uk-form-xlarge " required placeholder="Email" type="text" v-model= "signIn.email"  style="color: #d2d2d2;">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
              <input class="uk-input uk-form-xlarge " required placeholder="Password" type="password" v-model= "signIn.password"  style="color: #d2d2d2;">
            </div>
          </div>
          <div class="uk-margin">
            <label><input class="uk-checkbox" type="checkbox"> Keep me logged in</label>
          </div>
          <div class="uk-margin-bottom">
            <button type="submit" class="uk-button uk-button-primary uk-width-1-1 uk-box-shadow-xlarge" v-on:click ="userLogin()">LOG IN</button>
          </div>

         
        </fieldset>
      </form>

        <div class="uk-margin-bottom">
            <button type="submit" class="uk-button uk-button-danger uk-width-1-1 uk-box-shadow-xlarge">CONTINUE WITH GOOGLE</button>
          </div>
           <div class="uk-margin-bottom">
            <button type="submit" class="uk-button uk-button-facebook uk-width-1-1 uk-box-shadow-xlarge">CONTINUE WITH FACEBOOK</button>
          </div>
      <!-- /login -->

    
     
      
      <!-- action buttons -->
      <div>
        <div class="uk-text-center">
          <a class="uk-link-reset uk-text-small toggle-class" data-uk-toggle="target: .toggle-class ;animation: uk-animation-fade" style="color:#0000;">Forgot your password?</a>
          
          </div>
            <!-- recover password -->
           <form class="toggle-class" action="" hidden>
        <div class="uk-margin">
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
            <input class="uk-input" placeholder="E-mail" required type="text"  style="color: #d2d2d2;">
          </div>
        </div>
        <div class="uk-margin-bottom">
          <button type="submit" class="uk-button uk-button-primary uk-width-1-1">SEND PASSWORD</button>
        </div>
      </form>
      <!-- /recover password -->

          <a class="uk-link-reset uk-text-small toggle-class" data-uk-toggle="target: .toggle-class ;animation: uk-animation-fade" hidden><span data-uk-icon="arrow-left"></span> Back to Login</a>
        </div>
          <div class="uk-margin toggle-class">
              <button type="submit" class="uk-button uk-button-outline uk-button-medium uk-width-1-1 uk-box-shadow-xlarge" href="#modal-center" uk-toggle>CREATE ACCOUNT</button>
            </div>
      </div>

<!-- the modal for creating account -->

<div id="modal-center" class="uk-flex-top" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

        <button class="uk-modal-close-default" type="button" uk-close></button>

           <div class="uk-width-large uk-padding-large uk-align-center login-form" >

                <!-- login -->
      <form class="toggle-class" action="">
        <fieldset class="uk-fieldset">
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
              <input class="uk-input uk-form-xlarge " required placeholder="Full Name" type="text" style="color: #d2d2d2;"  >
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
              <input class="uk-input uk-form-xlarge " required placeholder="Email" type="email"  style="color: #d2d2d2;">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
              <input class="uk-input uk-form-xlarge " required placeholder="Password" type="password"  style="color: #d2d2d2;">
            </div>
          </div>
         
          <div class="uk-margin-bottom">
            <button type="submit" class="uk-button uk-button-primary uk-width-1-1 uk-box-shadow-xlarge">REGISTER</button>
          </div>

         
        </fieldset>
      </form>
      <div class="uk-margin-bottom">
            <button type="submit" class="uk-button uk-button-facebook uk-width-1-1 uk-box-shadow-xlarge">SIGN UP WITH FACEBOOK</button>
          </div>

         <div class="uk-margin-bottom">
            <button type="submit" class="uk-button uk-button-danger uk-width-1-1 uk-box-shadow-xlarge">SIGN UP WITH GOOGLE</button>
          </div>
</div>

    </div>
</div>

<!-- end of the modal for creating account -->
      </div> 
       
      
      </div>
  </div>
</div>
</div>
</div>
</template>

  
<script>


// import {USER_LOGIN} from '../graph/mutation.js';
import gql from 'graphql-tag'



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
    account_type:""

  }

  }
},
computed:{


},
  methods:{
    userLogin(){
      

      this.$apollo.mutate({

        mutation: USER_LOGIN,

        variables:{
          email:signIn.email,
          password:signIn.password
        }

      }).then((data) => {
      // Result
      console.log(data)

    }).catch((error)=>{

      console.log(error)
    })
  },
  userRegister(){
    const{full_name, email, account_type, password} = this.data
    this.$apollo.mutate({

      mutation:gql`

          mutation{
        
            tokenAuth(email:$email, password:$password){
                  token

            }
          }

          `,
      variables:{
        full_name:signIn.full_name,
        
      }
    })

  },

}

  }


  
</script>

<style scoped lang="less">

@import '../theme/theme.less';


.uk-section-default {
    background: white;
    .hook-section-default;
}
 .hook-section-default(){
  //background-image: linear-gradient(50deg,#744FFF,#21D397);

  color: #333;


 }

 .hook-form() {
  border-radius: 12px;
  border:1px solid;
  color: black;
 }

 .hook-button(){
  border-radius: 10px;
 }





@form-background:  transparent;
@form-color: black;
@form-placeholder-color: black;

@button-primary-background:                     #21D397!important; 
@button-primary-color:                          white!important;
@button-primary-hover-background:               darken(@button-primary-background, 5%);
@button-primary-hover-color:                    @global-inverse-color;
@button-primary-active-background:              darken(@button-primary-background, 10%);
@button-primary-active-color:                   @global-inverse-color;

.hook-button-primary(){

 font-size: 12px;

}
.hook-button-danger(){

 font-size: 12px;

}


</style>
