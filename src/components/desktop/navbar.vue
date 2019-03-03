<template>
 
  <div id="navbar-desktop">

    <div uk-sticky="top: #navbar-desktop">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
   

        <div class="uk-navbar-left">
          <div>
            <a class="uk-navbar-item uk-logo" href="#"><img src="/img/icons/logo.png" height="20px" width="30px"></a>
        </div>


        <div class="uk-inline">
        
        <input class="uk-input" placeholder="search">
        <svgicon icon = "search" class = "uk-form-icon uk-form-icon-flip uk-margin-top" height = "20" width = "30" color ="grey">   </svgicon>
          </div>
      </div>
        
      

      <div class="uk-navbar-right">
          <div>
            

          
        <ul class="uk-navbar-nav">

             <li>  <a href="#">
                    <div>
                        <svgicon icon = "fire" height="20" width="19" color = "white">  </svgicon>
                        <div class="uk-navbar-subtitle">feeds</div>
                    </div>
                </a>
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
                            <li class=""><a href="#"><svgicon icon = "add" height="15" width = "15" color = "grey"> </svgicon> Post
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

            <li class="uk-active"><router-link to="/profile"> <img src="/img/udem.jpg" height="5opx" width="50px" class="uk-border-circle"> </router-link>
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


   </div>
  
  
  </div>
</template>


  
<script>

import {mapActions} from 'vuex';


export default {
  data(){
    return{
      brand:'Resume',
    }
  },
methods :{
  createPost(){

  }

},
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// @import '../theme/theme.less';
</style>
