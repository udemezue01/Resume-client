<template>
 <div class="uk-container uk-padding">
   <div uk-grid class="uk-grid-medium uk-child-width-1-3@m">
      <!--  the first grid -->
      <div>
        <content-loader
    :height="475"
    :width="400"
    :speed="2"
    primaryColor="#dadada"
    secondaryColor="#ecebeb"
    v-if="$apollo.loading"
  >
    <rect x="-23.73" y="-1" rx="5" ry="5" width="484" height="236" /> 
    <circle cx="198.68" cy="228.94" r="88.54" /> 
    <rect x="35" y="335.67" rx="0" ry="0" width="330" height="9" /> 
    <rect x="84" y="381.67" rx="0" ry="0" width="0" height="0" /> 
    <rect x="53" y="357.67" rx="0" ry="0" width="286" height="9" /> 
    <rect x="34" y="378.67" rx="0" ry="0" width="325" height="13" />
  </content-loader>
        
         <div class="uk-card uk-card-default" v-else>
            <div class="uk-card-media-top">
               <img src="img/cover.jpg" alt="" style="border-radius: 3px;">
               <div class="uk-overlay uk-position-center uk-padding-top" style="padding: 90px;">
                  <img src="img/udem.jpg" alt="" class= "uk-border-circle" width="200" height="200" style="z-index: 1;position: relative;border:3px solid #21D397; ">
               </div>
            </div>
            <div class="uk-card-body uk-padding-large ">
               <div class="uk-align-center">
                  <h4 class="uk-text-center"> {{account.fullName}}</h4> <br>
                
               </div>
            </div>
         </div>
      </div>
      <!-- end of the first grid -->
      <!-- 
         the second grid -->
      <div >
       

  <content-loader
    :height="33"
    :width="406"
    :speed="2"
    primaryColor="#dadada"
    secondaryColor="#e9e9e9"
    v-if="$apollo.loading"
  >
    <rect x="23" y="20" rx="3" ry="3" width="85" height="8.0" /> 
    <rect x="140.55" y="19" rx="3" ry="3" width="85" height="8.0" /> 
    <rect x="265.55" y="18" rx="3" ry="3" width="85" height="8.0" />
  </content-loader>
         <div class="uk-section-default" v-else>
            <ul class="uk-child-width-expand" uk-tab>
               <li class="uk-active"><a href="#">Feeds</a></li>
               
               <li><a href="#">Media</a></li>
               <li><a href="#">Bookmarks</a></li>
                <li><a href="#">Candidate</a></li>

            </ul>
         </div>
       
         <content-loader
    :height="475"
    :width="400"
    :speed="2"
    primaryColor="#dadada"
    secondaryColor="#e9e9e9"
    v-if="$apollo.loading"
  >
    <circle cx="30" cy="30" r="30" /> 
    <rect x="75" y="13" rx="4" ry="4" width="100" height="13" /> 
    <rect x="75" y="37" rx="4" ry="4" width="50" height="8" /> 
    <rect x="0" y="70" rx="5" ry="5" width="400" height="250" /> 
    <rect x="-0.72" y="358.67" rx="0" ry="0" width="375.81" height="10" /> 
    <rect x="-3.44" y="388.67" rx="0" ry="0" width="311.84" height="10" /> 
    <rect x="-4.44" y="414.23" rx="0" ry="0" width="380.44" height="10" /> 
    <rect x="324" y="13" rx="4" ry="4" width="57" height="7.41" />
  </content-loader>

         <div class="uk-card uk-card-default" v-else>
            <div class="uk-card-header" >
               <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <div class="uk-width-auto">
                     <img class="uk-border-circle" width="40" height="40" src="img/udem.jpg" style="border:2px solid #21D397">
                  </div>
                  <div class="uk-width-expand">
                     <h6 class="uk-card-title uk-margin-remove-bottom uk-text-small">{{account.fullName}}</h6>
                     <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">16m ago</time></p>
                  </div>
               </div>
            </div>
            <div class="uk-card-media-top uk-width-auto">
               <img src="/img/udem1.jpg" alt="">
            </div>
            <div style="padding: 10px;">
              <ul class="uk-iconnav">
                
                     <a href="">
                        <svgicon icon = "like" height="20" width="20" color = "#657786">  </svgicon>
                     </a>
                  </li>
                  <li>
                     <a href="">
                        <svgicon icon = "user" height="20" width="20" color = "#657786">  </svgicon>
                     </a>
                  </li>
           
            </ul>
            </div>
            <hr class="padding-small">
            <div class="uk-card-body " >

               <p> its a wonderful day in paris with co workers from naturally doing things in Nigeria and Afghanistan and making thig

                     to happend from Do you know that billions of search queries are made every minute to the search engine. 99% of these queries ends in one website or the other. 
                             What if these websites where owned by you.
                          Own a website Today for as low as 25k
              rollercoaster -bleachers....<span style="color:  #21D397;"> read more</span>

               </p>
            </div>

              <div class="uk-comment uk-padding uk-comment-primary">
                <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                        <img class="uk-comment-avatar uk-border-circle" src="img/udem.jpg" width="30" height="30" alt="">
                    </div>
                    <div class="uk-width-expand">
                        <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">Author</a></h4>
                        <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                            <li><a href="#">12 days ago</a></li>
                            <li><a href="#">Reply</a></li>
                        </ul>
                    </div>
                </header>
                <div class="uk-comment-body">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
</div>


            <div class="uk-card-footer" style="padding: 10px;">
               <div class="uk-inline uk-remove-margin">
                  <input class="uk-input uk-form-width-large" type="text" placeholder="write a comment...">
                  <a href="">
                    
                    <svgicon icon = "photo-camera" class = "uk-form-icon uk-form-icon-flip uk-margin-small-top uk-padding-top" height = "25" width = "55" color ="#657786">   </svgicon>
                  </a>
                  
               </div>
            </div>
         </div>
      </div>
      <!--    end of the second of the second grid -->
      <!--  the start of th third grid -->
      <div>
         <div class="uk-overflow-auto uk-height-max-large">

           <ul class="uk-list uk-list-divider" v-if="$apollo.loading">
            <li> 

               <content-loader  :height="160" :width="400" :speed="2" primaryColor="#dadada" secondaryColor="#e9e9e9" >
         
                <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" /> 
              <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" /> 
              <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" /> 
              <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" /> 
              <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" /> 
              <circle cx="30" cy="30" r="30" />
        
          
          
        </content-loader>

            </li>

            <li>
               <content-loader  :height="160" :width="400" :speed="2" primaryColor="#dadada" secondaryColor="#e9e9e9" >
         
                <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" /> 
              <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" /> 
              <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" /> 
              <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" /> 
              <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" /> 
              <circle cx="30" cy="30" r="30" />
        
          
          
        </content-loader>
            </li>
            

          </ul>
         
            <ul class="uk-list uk-list-divider" v-else>
               <li>
                  <div class="uk-card uk-card-small uk-card-default  uk-width-1-1@m">
                     <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                           <div class="uk-width-auto">
                              <img class="uk-border-circle" width="40" height="40" src="img/udem.jpg">
                           </div>
                           <div class="uk-width-expand">
                              <h3 class="uk-card-title uk-margin-remove-bottom uk-text-small">{{account.fullName}}</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">30m ago</time></p>
                           </div>
                        </div>
                     </div>
                     <div class="uk-card-body">
                        <p> If the browser isn't running wl.</p>
                     </div>
                     <div class="uk-card-footer ">
                        <a href="#" class="uk-button uk-button-default uk-align-right"> Details</a>
                     </div>
                  </div>
               </li>
              
               <li>
                  <div class="uk-card uk-card-small uk-card-default  uk-width-expand">
                     <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                           <div class="uk-width-auto">
                              <img class="uk-border-circle" width="40" height="40" src="img/udem.jpg">
                           </div>
                           <div class="uk-width-expand">
                              <h3 class="uk-card-title uk-margin-remove-bottom uk-text-small">{{account.fullName}}</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">30m ago</time></p>
                           </div>
                        </div>
                     </div>
                     <div class="uk-card-body">
                     </div>
                     <div class="uk-card-footer">
                        <a href="#" class="uk-button uk-button-default uk-align-right">Details</a>
                     </div>
                  </div>
               </li>
               <li>
                  <div class="uk-card uk-card-small uk-card-default  uk-width-1-1@m">
                     <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                           <div class="uk-width-auto">
                              <img class="uk-border-circle" width="40" height="40" src="img/udem.jpg">
                           </div>
                           <div class="uk-width-expand">
                              <h3 class="uk-card-title uk-margin-remove-bottom uk-text-small">{{account.fullName}}</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">30m ago</time></p>
                           </div>
                        </div>
                     </div>
                     <div class="uk-card-body">
                     </div>
                     <div class="uk-card-footer">
                        <a href="#" class="uk-button uk-button-default uk-align-right"> Details</a>
                     </div>
                  </div>
               </li>
               <li>
                  <div class="uk-card uk-card-small uk-card-default  uk-width-1-1@m">
                     <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                           <div class="uk-width-auto">
                              <img class="uk-border-circle" width="40" height="40" src="img/udem.jpg">
                           </div>
                           <div class="uk-width-expand">
                              <h3 class="uk-card-title uk-margin-remove-bottom uk-text-small">{{account.fullName}}</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">30m ago</time></p>
                           </div>
                        </div>
                     </div>
                     <div class="uk-card-body">
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </div>
      <!-- end of the third grid -->
   </div>
</div>
</div>

</template>

<script>
  import {USER_PROFILE} from '../../graph/query.js';
 


  import {  ContentLoader } from 'vue-content-loader'; 
 
 
export default {
  components:{

   ContentLoader,
   

  },


data(){

    return{
      account:[]
 

    }
  },


  apollo: {

  	account:USER_PROFILE,
  


   },

  computed:{
    

  },

  methods:{
    


  },
  
  
 



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


@import '../../theme/theme.less';
@padding-large-padding: 90px;

@padding-large-padding-l:  100px;


@container-max-width:                   3500px;


@form-focus-background: transparent;

@form-height:  43px;

@form-background:  transparent;
@form-color: #d2d2d2;
@form-placeholder-color: #657786;
 .hook-form() {
  border-radius: 5px;
  border:1px solid;
 }


.hook-section-default() {
  border-radius: 8px;

}
.uk-section-xsmall {
    padding-top:1px;
    padding-bottom:1px;
}

</style>
