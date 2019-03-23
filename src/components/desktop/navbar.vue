<template>
 
  <div id="navbar-desktop">

    <div uk-sticky="top: #navbar-desktop">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
   

        <div class="uk-navbar-left">
          <div>
            <a class="uk-navbar-item uk-logo" href="#"><img src="/img/icons/logo.png" height="20px" width="30px"/> Resume</a>

        </div>


        <div class="uk-inline"  v-if="isAuthenticated">
        
        <input class="uk-input" placeholder="search">
        <svgicon icon = "search" class = "uk-form-icon uk-form-icon-flip uk-margin " height = "20" width = "50" color ="grey">   </svgicon>
          </div>
      </div>
       <!--  the navigational part for the getstarted button -->
      <div class="uk-navbar-right" v-if="!isAuthenticated">
        <div>
          <ul class="uk-navbar-nav">
            <li>  <a class="uk-button uk-button-default" href="#modal-full" uk-toggle>Get Started</a></li>
          </ul>

        </div>
        
      </div>
     <!--  end of the navigational for the getstarted button -->

      <div class="uk-navbar-right" v-if="!isAuthenticated">
          <div>
            

          
        <ul class="uk-navbar-nav">

             <li>  <router-link to="/feeds">
                   
                        <svgicon icon = "fire" height="20" width="30" color = "white">  </svgicon>&nbsp;
                        feeds
              
                </router-link>
            </li>


                 <li><a href="#">
                 
                        <svgicon icon = "compass" height="20" width="30" color = "white">  </svgicon>&nbsp;
                        discover
                  
                </a> </li>


              

           

            <li>

              <a href="">
        
                        <svgicon icon = "add-button" height="20" width="30" color = "white">  </svgicon>&nbsp;
                        create
                       
               
                </a>
                 <div uk-dropdown="offset:8; mode:click">
                        <ul class="uk-nav uk-dropdown-nav">
                            <li class=""><a href="#" uk-toggle="target:#create"><svgicon icon = "add" height="13" width = "15" color = "grey"> </svgicon> Post
                                <div class="uk-navbar-subtitle">share your thoughts </div>
                            </a>

                            </li>
                            <li class=""><a href="#"><svgicon icon = "suitcase" height="13" width = "15" color = "grey"> </svgicon> Jobs

                                <div class="uk-navbar-subtitle">post a new job update </div>
                            </a></li>
                            <li class=""><a href="#"><svgicon icon = "wifi" height="13" width = "15" color = "grey"> </svgicon> Advertise

                                <div class="uk-navbar-subtitle">reach million adiences </div>
                            </a></li>
            
                        </ul>
                    </div>

            </li>

            <li class=""><router-link to="/"> <img src="/img/udem.jpg" height="5opx" width="50px" class="uk-border-circle"> </router-link>
            </li>
                <li>

              <a href="">
              
                        <svgicon icon = "notification" height="20" width="20" color = "white">  </svgicon>
                        
                    
                </a>

            </li>
             <li>

              <a href="">
              
                        <svgicon icon = "settings" height="20" width="20" color = "white">  </svgicon>&nbsp;
                        more
                  
                </a>

            </li>
            
            
        </ul>

        </div>

    </div>
      


</nav>

<!-- This is the modal  for the create button-->
   <div id="create" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
       <!--  <div class="uk-modal-header">
            <h2 class="uk-modal-title"></h2>
        </div> -->
        <div class="uk-modal-body">
             <form>
      
         <div class="uk-width-1-1">
          <label class="uk-form-label" for="form-stacked-text">Whats Happening ?</label>
        <input class="uk-input" type="text" placeholder="Whats happening">
            </div>
            </form>
        </div>
        <div class="uk-modal-footer">
          
        </div>
    </div>
</div>
   </div>

  <!--  end of the modal for the create button -->
  
  <div id="modal-full" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
            <div class="uk-background-cover" style="background-image: url('img/france.jpg');" uk-height-viewport></div>
            <div class="uk-padding-large">
                <div class="uk-margin-medium-top">
                        <ul class="uk-flex-center" uk-tab>
                           
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                    </div>
                <form class="uk-align-center">
    <fieldset class="uk-fieldset">

        <legend class="uk-legend"> Register </legend>

        <div class="uk-margin">
          <div class="uk-inline">
            
       
         <svgicon class="uk-form-icon" icon="notification" color="blue">   </svgicon>
            <input class="uk-input uk-form-width-large uk-form-large" type="text" placeholder="Input">
               </div>
        </div>

        <div class="uk-margin">
            <input class="uk-input uk-form-width-large uk-form-large" type="text" placeholder="Input">
        </div>

        <div class="uk-margin">
            <input class="uk-input uk-form-width-large uk-form-large" type="text" placeholder="Input">
        </div>

    </fieldset>
</form>
            </div>
        </div>
    </div>
</div>
  </div>
</template>


  
<script>

import {mapActions, mapGetters} from 'vuex';

export default {

data(){
  return {
    brand:"Resume",

  login:{
    email:"",
    password:""
  },

  register:{
    email:"",
    full_name:"",
    account_type:['Individual', 'Company' ],
    password:""
  },

  post:{
    content: "",
    media : ""
  },

  vacancy:{

    title:"",
    

  },


  }
},

methods:{
  registeration( {email, full_name, account_type, password}){

  },
  userLogin(){


  },
  createPost(){


  },
  createVacancy(){


  }




},
computed: mapGetters('auth', [
    'isAuthenticated',
  ]),

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '../../theme/theme.less';


@button-text-color: white;
@button-font-size:8px;
@button-line-height: 2px;

.uk-button {
    /* 1 */
    margin: 0;
    /* 2 */
    border: 1px solid white ;
    /* 3 */
    overflow: visible;
    /* 4 */
    font: inherit;
    color: inherit;
    /* 5 */
    text-transform: capitalize;
    /* 6 */
    display: inline-block;
    box-sizing: border-box;
    padding: 0 @button-padding-horizontal;
    vertical-align: middle;
    font-size: @button-font-size;
    /* 7 */
    line-height:8px;
    /* 8 */
    text-align: center;
    /* 9 */
    text-decoration: none;
   
}

 .hook-button(){

    border-radius:30px;
    padding-left:20px;
 }
.uk-button-default {
    background-color:#247CC4;
    color: white;
    .hook-button-default;
}
.uk-button-default:hover,
.uk-button-default:focus {
    background-color: #247CC4;
    color: white;
   
}
 .hook-button-default-hover(){
  background-color:#247CC4;
  color:white;
 }


</style>
