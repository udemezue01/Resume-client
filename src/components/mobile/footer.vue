<template>
  <div id="footer-d">

  
    
<nav class="uk-navbar-container uk-position-bottom  uk-position-fixed" uk-navbar>
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
           <li><router-link to="/profile">  <svgicon icon = "home" height="45" width = "30" color = "black">  </svgicon> </router-link> </li>
            
          
        </ul>

    </div>

     <div class="uk-navbar-center">

        <ul class="uk-navbar-nav">
           <li><router-link to="/profile">  <svgicon icon = "add-button" height="45" width = "30" color = "black">  </svgicon> </router-link> </li>
        </ul>

    </div>

    <div class="uk-navbar-right">

        <ul class="uk-navbar-nav">
           <li><router-link to="/profile">  <svgicon icon = "inbox" height="45" width = "30" color = "black">  </svgicon> </router-link> </li>
        </ul>

    </div>
</nav>
    
  
   
  </div>
</template>


<script>

export default {

data(){
  return {

  }
},



}


</script>


<style lang="less" scoped>

@import '../../theme/theme.less';


@navbar-background:   #eee;
@navbar-nav-item-color:black;
@navbar-item-color: black;
@navbar-nav-item-active-color: black;
@navbar-nav-item-hover-color:  black;
@navbar-nav-item-onclick-color:  white;
@navbar-toggle-color:  white;
@navbar-toggle-hover-color: white;
@navbar-nav-item-padding-horizontal: 9px;
@navbar-nav-item-font-size: 17px;
@navbar-nav-item-height: 90px;

.hook-navbar-container() {
  padding-left:10px;
  padding-right:10px;
  margin-right: auto;
  margin-left: auto;

}

</style>
