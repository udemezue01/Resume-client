<template>
 <div class="uk-container uk-padding-large">
    <div>


    <div id="profile-image" class="uk-card-default uk-card-body uk-width-expanded uk-align-center">
            
                
           <div class="uk-card uk-card-default uk-card-body">

        
                 <img src="/img/udem.jpg" height="200px"  width="200px" class="uk-border-circle uk-align-center" />

               

                <div class="uk-card-footer uk-align-center uk-position-bottom-center uk-padding-large">
                    <a href="#" class="uk-button uk-button-text ">edit Profile</a>
                </div>
     
            </div>
      
</div>
</div>

<!-- end of the profile section -->
    <div class="uk-section">
       <div>
                
                  <ul class="uk-flex-center"  uk-tab="media: @s" >
                  <li class="uk-active"><a href="">  Feeds</a></li>
                  <li><a href=""> Posts</a> </li>
                  <li ><a> Application</a></li>
              </ul>

            </div>

    </div>

 </div>


</template>


<script>
import {mapState} from 'vuex';

export default {

  data(){
    return{
    
    }
  },
  computed:{
   
  }

}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">



</style>
