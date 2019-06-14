<template>
  <div id="landing">
  	<div class="uk-cover-container">
       


    <div class="uk-grid-collapse uk-child-width-1-2@m uk-child-width-1-1@s uk-flex-middle" uk-grid>

    <!--   the large section banner -->
          <div class="uk-cover-container uk-visible@l uk-section" uk-height-viewport>
         
                    <img src="img/work.png" alt="" uk-cover uk-height-viewport style="height: 100%;" >

            </div>

       <!--    end of the large image section banner -->

    <!--    the user form and registration section -->
            <div class="uk-flex-center uk-section-primary" uk-height-viewport >

              <div class="uk-margin-xlarge-left web-intro " >
                
              <h2 style="font-family: 'Righteous', cursive;padding-top: 10px;" class="uk-text-left"> Resume.ly</h2>
              <p class="uk-text-left">Register</p>
              </div>
             
                

  
  
          <div class="uk-width-large uk-padding-large" id="register-form" >


        <form action="" class=" uk-form-stacked">
          <fieldset class="uk-fieldset">
         
            <div class="uk-margin">
            
              <div class="uk-inline uk-width-1-1">
                <div class="uk-margin">
              <label> Full Name / Organisation</label>
            </div>
                
                <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
                <input class="uk-input uk-form-medium" required placeholder="" type="text">
              </div>
            </div>
            <div class="uk-margin">
            
              <div class="uk-inline uk-width-1-1">
                <div class="uk-margin">
              <label> Email</label>
            </div>
                
                <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                <input class="uk-input uk-form-medium" required placeholder="" type="email" >
              </div>
            </div>
             <div class="uk-margin uk-width-1-1">
             <div class="uk-margin">
              <label> Account Type</label>
            </div>
                
            <select class="uk-select uk-form-medium">
                <option> business</option>
                <option> Personal</option>
            </select>
        </div>

           
            <div class="uk-margin">
              <button type="submit" class="uk-button uk-button-primary uk-button-medium uk-width-1-1 uk-box-shadow-xlarge" v-on:click.prevent="userRegister()" >register</button>
            </div>
            
          </fieldset>
        </form>
        <div class="uk-margin">
              <button type="submit" class="uk-button uk-button-danger uk-button-medium uk-width-1-1 uk-box-shadow-xlarge">Register With Google</button>
            </div>
        <div>
        
      </div>

    <!-- end of register form -->
          </div>
      </div>
  </div>
</div>
</div>
</div>
</template>

  
<script>

import {mapActions, mapState} from 'vuex';

export default {

data(){
  return {
  
 

  register:{
	full_name:"",
	email:"",
	account_type:["Personal", "Business"]
    

  }


  }
},
computed:{
  ...mapState('signup',[

    'registrationLoading',
    'registrationCompleted',
    'registrationError',
    
    ]),
 


  methods:{

     ...mapActions('signup', [

      'createAccount',
 
      ]),


    userRegister(){
      this.createAccount(this.register)
      .then(() => this.$router.push('/profile'))
      .catch((err) => console.log(error))
      
  
    },
  }

}
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


@form-width-large:                              690px;
@form-padding-vertical:                         2px;

.uk-input{
   font-family:   'Montserrat', sans-serif;
  font-weight: bolder;
}

.uk-input::placeholder { 

  color: @form-placeholder-color;
  font-family:  'Quicksand', sans-serif;
  font-weight: bold;

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

