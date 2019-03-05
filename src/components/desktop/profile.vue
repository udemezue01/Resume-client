<template>
 <div class="uk-container">


    <div class="uk-grid-match uk-padding-small" uk-grid>

     <!--  the profile image -->
          <div id="profile-image" class="uk-width-auto">

            <div class="uk-card-default uk-card-body">

        
                 <img src="/img/udem.jpg" height="200px"  width="200px" class="uk-border-circle uk-align-center" />

                 <button class="uk-button uk-button-default uk-button-small uk-align-center uk-padding uk-margin-left">edit profile</button>
     
            </div>
            
               
          </div>

        <!--   end of profile image -->
     <!--    profile-cover -->
          <div id="profile-cover" class="uk-width-3-4@l uk-border-circle">   
           <div class="uk-cover-container uk-height-medium uk-card-default uk-card-body" >
               <img src="/img/cover.jpg" alt="" uk-cover >

               <div class="uk-card-footer">
                 <button>hello</button>
               </div>
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
                         <div>
        <ul class="uk-tab-right" uk-tab>
            <li class="uk-active"><a href="#">Home</a> </li>
            <li><a href="#">Posts</a> </li>
            <li><a href="#"> Jobs</a> </li>
             <li><a href="#"> Application</a> </li>
              <li><a href="#"> jobs</a> </li>
        </ul>
    </div>
                  
                </div>
              <!--   end of the first section ofthe grid -->



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
