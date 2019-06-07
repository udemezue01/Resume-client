<template>
   


  <!--  The navigational bar -->

  <div id="navbar-desktop" class="uk-position-top">

    <div uk-sticky="top: #navbar-desktop" >
    <nav class="uk-navbar-container uk-margin" uk-navbar>
   

        <div class="uk-navbar-left">
          <div>
            <a class="uk-navbar-item uk-logo" href="#"> Resume.ly</a>

        </div>

          <div class="uk-navbar-center">
         <div class="uk-inline">
        
        <input class="uk-input" placeholder="search">
        <svgicon icon = "search" class = "uk-form-icon uk-form-icon-flip uk-margin-small-top uk-padding-top" height = "25" width = "55" color ="#657786">   </svgicon>
          </div>
        
      </div>

   
      </div>



     

      <div class="uk-navbar-right">
          <div>
            

          
        <ul class="uk-navbar-nav">

             <li>  <router-link to="/feeds">
                   
                        <!-- <svgicon icon = "fire" height="20" width="30" color = "white">  </svgicon> -->
                        Feeds
              
                </router-link>
            </li>
              &nbsp;

                 <li><a href="#">
                 
                        
                        Discover
                  
                </a> </li>
                </li>
              &nbsp;

                 <li><a href="#">
                 
                        
                        Jobs
                  
                </a> </li>



              

           

           
                &nbsp;<li>

              <a href="">
              
                        <svgicon icon = "notification" height="35" width="40" color = "#657786">  </svgicon>
                        
                    
                </a>

            </li>
             &nbsp;
             <li class=""><router-link to="/"> <img src="/img/udem.jpg" height="4opx" width="50px" class="uk-border-circle" style="border:3px solid #21D397"> </router-link>
            </li>
             <li class="uk-button uk-button-default uk-button-small">

              <a href=""  v-on:click.prevent="userLogout()">
              
                        create
                  
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


 <!--  sign up modal for registration -->
  
  <div id="modal-full" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        
        </div>
      </div>
            </div>
        </div>

        <!-- end of the modal for registration -->


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


  post:{
    content: "",
    media : ""
  },

  vacancy:{

    title:"",
    

  },


  }
},
computed:{
  
},

methods:{

  ...mapActions('auth', [

    'logout'
    ]),

  userLogout(){
    this.logout()
    .then(() => this.$router.push('/'))
  
  }
}

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '../../theme/theme.less';

@button-line-height:  30px; 

.hook-navbar-nav-item-hover() {
  
}

@form-focus-background: transparent;
 @form-focus-color: #657786;

@form-height:  45px;
@form-padding-vertical:10px;


@form-background:  transparent;
@form-color: #d2d2d2;
@form-placeholder-color: #657786;
.uk-input::placeholder { 

  color: @form-placeholder-color;
  text-align: left;

   }


 .hook-form() {
  border-radius: 10px;
  border:1px solid;
  
 }

 // .hook-form-focus() {
 // //   color:#657786;
 // // }


</style>
