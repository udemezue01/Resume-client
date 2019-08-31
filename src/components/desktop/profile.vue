<template>
 <div class="uk-container uk-padding">
   <div uk-grid class="uk-grid-medium uk-child-width-1-3@m">
      <!--  the first grid -->
      <div>
         <content-loader :height="600" :width="400" :speed="1"  primaryColor="#dadada" secondaryColor="#e9e9e9" v-if="$apollo.loading">
            <rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
            <circle cx="201.77590591894563" cy="271.54590591894566" r="93.27590591894564" />
            <circle cx="227.5" cy="367.27" r="1" />
            <rect x="66.5" y="388.27" rx="0" ry="0" width="252" height="13" />
            <rect x="66.5" y="424.27" rx="0" ry="0" width="252" height="13" />
            <rect x="66.5" y="448.27" rx="0" ry="0" width="252" height="13" />
         </content-loader>
         <div class="uk-card uk-card-default" v-else>
            <div class="uk-card-media-top">
               <img src="img/cover.jpg" alt="" style="border-radius: 3px;">
               <div class="uk-overlay uk-position-center uk-padding-top">
                  <img src="img/udem.jpg" alt="" class= "uk-border-circle" width="200" height="200" style="z-index: 1;position: relative;border:3px solid #21D397; ">
               </div>
            </div>
            <div class="uk-card-body uk-padding-large ">
               <div class="uk-align-center">
                  <h3 class="uk-text-center">Udem Aramide </h3>
               </div>
            </div>
         </div>
      </div>
      <!-- end of the first grid -->
      <!-- 
         the second grid -->
      <div >
        <content-loader
    :height="30"
    :width="406"
    :speed="2"
    primaryColor="#dadada"
    secondaryColor="#e9e9e9"
    v-if="$apollo.loading"
  >
    <rect x="23" y="-8.75" rx="3" ry="3" width="415.65" height="31.3" />
  </content-loader>
         <div class="uk-margin uk-section-default uk-section-xsmall" v-else>
            <!--  <input class="uk-input uk-form-width-auto" type="text" placeholder="Say something..."> -->
            <div class="uk-inline">
            
                <textarea class="uk-form large uk-textarea uk-form-width-large" placeholder="Whats New ?"></textarea>
               <svgicon icon = "photo-camera" class = "uk-form-icon uk-form-icon-flip uk-margin-small-top uk-padding-top" height = "25" width = "55" color ="#657786">   </svgicon>
            </div>
         </div>

         <content-loader
    :height="33"
    :width="406"
    :speed="2"
    primaryColor="#dadada"
    secondaryColor="#e9e9e9"
    v-if="$apollo.loading"
  >
    <rect x="23" y="20" rx="3" ry="3" width="85" height="6.4" /> 
    <rect x="140.55" y="19" rx="3" ry="3" width="85" height="6.4" /> 
    <rect x="265.55" y="18" rx="3" ry="3" width="85" height="6.4" />
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
                     <h6 class="uk-card-title uk-margin-remove-bottom">Resume</h6>
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
            <div class="uk-card-footer" style="padding: 10px;">
               <div class="uk-inline uk-remove-margin">
                  <input class="uk-input uk-form-width-large" type="text" placeholder="write a comment...">
                  <svgicon icon = "photo-camera" class = "uk-form-icon uk-form-icon-flip uk-margin-small-top uk-padding-top" height = "25" width = "55" color ="#657786">   </svgicon>
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
                              <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                           </div>
                        </div>
                     </div>
                     <div class="uk-card-body">
                        <p> If the browser isn't running wl.</p>
                     </div>
                     <div class="uk-card-footer ">
                        <a href="#" class="uk-button uk-button-default uk-align-right">Read more</a>
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
                              <h5 class="uk-card-title uk-margin-remove-bottom">Title</h5>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                           </div>
                        </div>
                     </div>
                     <div class="uk-card-body">
                     </div>
                     <div class="uk-card-footer">
                        <a href="#" class="uk-button uk-button-default uk-align-right">Read more</a>
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
                              <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                           </div>
                        </div>
                     </div>
                     <div class="uk-card-body">
                     </div>
                     <div class="uk-card-footer">
                        <a href="#" class="uk-button uk-button-default uk-align-right">Read more</a>
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
                              <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                           </div>
                        </div>
                     </div>
                     <div class="uk-card-body">
                     </div>
                     <div class="uk-card-footer">
                        <a href="#" class="uk-button uk-button-default uk-align-right">Read more</a>
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
                              <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                              <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
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
      profile:[],
 

    }
  },


  apollo:{
  	Profile:USER_PROFILE,


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
