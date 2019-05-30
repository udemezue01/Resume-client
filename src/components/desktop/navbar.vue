<template>
   


  <!--  The navigational bar -->

  <div id="navbar-desktop" class="uk-position-top">

    <div uk-sticky="top: #navbar-desktop" >
    <nav class="uk-navbar-container uk-margin" uk-navbar>
   

        <div class="uk-navbar-left">
          <div>
            <a class="uk-navbar-item uk-logo" href="#"> Resume</a>

        </div>

          <div class="uk-navbar-center">
         <div class="uk-inline">
        
        <input class="uk-input" placeholder="search">
        <svgicon icon = "search" class = "uk-form-icon uk-form-icon-flip uk-margin-small-bottom" height = "20" width = "50" color ="grey">   </svgicon>
          </div>
        
      </div>

       
      </div>



     

      <div class="uk-navbar-right">
          <div>
            

          
        <ul class="uk-navbar-nav">

             <li>  <router-link to="/feeds">
                   
                        <!-- <svgicon icon = "fire" height="20" width="30" color = "white">  </svgicon> -->&nbsp;
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
                <!-- the navbar drop down -->

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

                  <!-- end of the navbar dropdown -->

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



}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '../../theme/theme.less';

.hook-navbar-nav-item-hover() {
  
}

 @form-focus-background: transparent;
 @form-focus-color: #eee;
@form-height:  40px;

@form-background:  transparent;
@form-color: #eee;
@form-placeholder-color: #657786;
 .hook-form() {
  border-radius: 10px;
  border:1px solid;
 }


</style>
