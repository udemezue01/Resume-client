<template>
 
  <div id="navbar-desktop">

    <div uk-sticky="top: #navbar-desktop">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
   

        <div class="uk-navbar-left">
          <div>
            <a class="uk-navbar-item uk-logo" href="#"><img src="/img/icons/logo.png" height="20px" width="30px"></a>
        </div>


        <div class="uk-inline"  v-if="isAuthenticated">
        
        <input class="uk-input" placeholder="search">
        <svgicon icon = "search" class = "uk-form-icon uk-form-icon-flip uk-margin " height = "20" width = "50" color ="grey">   </svgicon>
          </div>
      </div>
        
      

      <div class="uk-navbar-right" v-if="isAuthenticated">
          <div>
            

          
        <ul class="uk-navbar-nav">

             <li>  <router-link to="/feeds">
                    <div>
                        <svgicon icon = "fire" height="20" width="19" color = "white">  </svgicon>
                        <div class="uk-navbar-subtitle">feeds</div>
                    </div>
                </router-link>
            </li>


                 <li><a href="#">
                    <div>
                        <svgicon icon = "compass" height="20" width="19" color = "white">  </svgicon>
                        <div class="uk-navbar-subtitle">discover</div>
                    </div>
                </a> </li>


              

           

            <li>

              <a href="">
               <div>
                        <svgicon icon = "add-button" height="20" width="19" color = "white">  </svgicon>
                        <div class="uk-navbar-subtitle" type = "button">create</div>
                       
                    </div>
                </a>
                 <div uk-dropdown="offset:3; mode:click">
                        <ul class="uk-nav uk-dropdown-nav">
                            <li class=""><a href="#" uk-toggle="target:#create"><svgicon icon = "add" height="15" width = "15" color = "grey"> </svgicon> Post
                                <div class="uk-navbar-subtitle">share your thoughts </div>
                            </a>

                            </li>
                            <li class=""><a href="#"><svgicon icon = "suitcase" height="15" width = "15" color = "grey"> </svgicon> Jobs

                                <div class="uk-navbar-subtitle">post a new job update </div>
                            </a></li>
                            <li class=""><a href="#"><svgicon icon = "wifi" height="15" width = "15" color = "grey"> </svgicon> Advertise

                                <div class="uk-navbar-subtitle">reach million adiences </div>
                            </a></li>
            
                        </ul>
                    </div>

            </li>

            <li class=""><router-link to="/"> <img src="/img/udem.jpg" height="5opx" width="50px" class="uk-border-circle"> </router-link>
            </li>
                <li>

              <a href="">
              
                        <svgicon icon = "notification" height="40" width="19" color = "white">  </svgicon>
                        
                    
                </a>

            </li>
             <li>

              <a href="">
               <div>
                        <svgicon icon = "settings" height="20" width="19" color = "white">  </svgicon>
                        <div class="uk-navbar-subtitle">more</div>
                    </div>
                </a>

            </li>
            
            
        </ul>

        </div>

    </div>
      


</nav>

<!-- This is the modal -->
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
  
  
  </div>
</template>


  
<script>

import {mapActions} from 'vuex';
import { mapGetters } from 'vuex';
export default {

data(){
  return {
  post:{
    content: "",
    media : ""
  },
  vacancy:{
    title:"",

  }

  }
},

methods:{
 creatPost:function(){

 },


},
computed: mapGetters('auth', [
    'isAuthenticated',
  ]),

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// @import '../theme/theme.less';
</style>
