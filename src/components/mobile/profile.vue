<template>
 <div class="uk-container uk-padding-large">
    <div>


    <div id="profile-image" class="uk-card-default uk-card-body uk-width-expanded uk-align-center">
            
                
            <img src="/img/udem.jpg" height="150px"  width="150px" class="uk-border-circle uk-align-center" />

            <button class="uk-align-center@m uk-button uk-button-default uk-button-small uk-padding-top"> edit profile</button>
    </div>
          
      
</div>

<!-- end of the profile section -->
    <div class="uk-section">
       <div>
                
                  <ul class="uk-flex-center"  uk-tab >
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
