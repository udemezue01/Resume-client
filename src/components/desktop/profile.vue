<template>
 <div class="uk-container">


    <div class="uk-grid-match uk-padding-small" uk-grid>

     <!--  the profile image -->
          <div id="profile-image" class="uk-width-1-4@l">

            <div class="uk-card-default uk-card-body">

              <content-placeholders>
  <content-placeholders-heading :img="true" />
  <content-placeholders-text :lines="3" />
</content-placeholders>

        
                 <img src="/img/udem.jpg" height="200px"  width="200px" class="uk-border-circle uk-align-center" />

                 <button class="uk-button uk-button-default uk-button-small uk-align-center uk-padding uk-margin-left">edit profile</button>
     
            </div>
            
               
          </div>

        <!--   end of profile image -->
     <!--    profile-cover -->
          <div id="profile-cover" class="uk-width-3-4@l uk-border-circle">   
           <div class="uk-cover-container uk-height-medium" >
               <img src="/img/cover.jpg" alt="" uk-cover  >
            </div>
          </div>

       <!--  end of profile cover -->
      

         <!--    end of the second section of thr grid -->
              </div>
              
              


                <div class="uk-section">
            <div class="uk-container">

              <div class="uk-grid-match uk-padding-small" uk-grid>
              <!--   the firstsection of the grid -->

                <div class="uk-width-1-4@l">

                  
                </div>
              <!--   end of the first section ofthe grid -->


            <div class="uk-width-3-4@l">
              <div>
                
                  <ul class="uk-flex-center"  uk-tab >
                  <li class="uk-active"><a href="">  Feeds</a></li>
                  <li><a href=""> Posts</a> </li>
                  <li ><a> Application</a></li>
              </ul>

            </div>
            
            </div>

            </div>
          </div>


      
</div>



 </div>


</template>

<script>
 
export default {

  data(){
    return{
      
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">



</style>
