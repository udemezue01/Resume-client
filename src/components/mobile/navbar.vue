<template>
  <div class="nav">

     <nav class="uk-navbar-container"uk-navbar>
   

        <div class="uk-navbar-left"  v-if="isAuthenticated">
         <div>
          
        <ul class="uk-navbar-nav">
            <li><router-link to="/profile">  <svgicon icon = "compass" height="23" width = "30" color = "#657786">  </svgicon> </router-link> </li>
           
        </ul>

        </div>

      </div>


    
        
        <div class="uk-navbar-center">
    
        <div>
            <a class="uk-navbar-item uk-logo" href="#">{{brand}}</a>
        </div>

    


      </div>

      <div class="uk-navbar-right"  v-if="isAuthenticated">
          <div>
          
        <ul class="uk-navbar-nav">
            <li><router-link to="/">  <svgicon icon = "notification" height="23" width = "30" color = "#657786">  </svgicon> </router-link> </li>
           
        </ul>

        </div>

    </div>
      

</nav>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data(){
    return{
      brand:'Resume.Io',
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

@logo-font-size: 16px;


.hook-navbar-container() {
  padding-left:20px;
  padding-right:20px;
  margin-right: auto;
  margin-left: auto;

}

.hook-navbar-nav-item-hover() {
    border-bottom: none;

}
.hook-navbar-nav-item-active() {
    border-bottom: none;

}


</style>
