<template>
 
<div class="relative min-h-screen">

    <!--  The Profile UI section -->

    <div class="flex">

                 <!-- The first section -->

            <div class="relative w-2/12 bg-white h-screen overflow-auto hidden lg:block ">

      
           
                
              <ul class="list-none space-y-2 mt-4  mx-auto lg:mt-1 sm:p-3 lg:p-3">

                 <li class="rounded-lg hover:bg-purple-200 hover:text-purple-600"> <div class="inline-flex  rounded-lg px-2 py-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg><span class="font-body font-extrabold text-gray-900 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Feeds</span></div> </li>



                <li class="rounded-lg hover:bg-purple-200 hover:text-purple-600"> <div class="inline-flex  rounded-lg px-2 py-2">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-900 hover:text-purple-600 mx-auto"><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg><span class="font-body font-extrabold text-gray-800 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Explore</span></div> </li>


                <li class="rounded-lg hover:bg-purple-200 hover:text-purple-600"> <router-link to = "messages"class="inline-flex justify-center rounded-lg items-center px-2 py-2">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-900 hover:text-purple-600 mx-auto"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>  <span class="font-body font-extrabold text-gray-900 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Messages</span></router-link> </li>


                <li class="rounded-lg hover:bg-purple-200 hover:text-purple-600 "> <router-link to="/jobs" class="inline-flex rounded-lg px-2 py-2">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-900 hover:text-purple-600"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <span class="font-body font-extrabold text-gray-900 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Companies</span></router-link> </li>





                <li class="rounded-lg hover:bg-purple-200 hover:text-purple-600 "> <router-link to="/jobs" class="inline-flex rounded-lg px-2 py-2">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-900 hover:text-purple-600"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <span class="font-body font-extrabold text-gray-900 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Jobs</span></router-link> </li>



                <li class="rounded-lg hover:bg-purple-200 hover:text-purple-600 "> <router-link to="/application" class="inline-flex rounded-lg px-2 py-2" >  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-900 hover:text-purple-600"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> <span class="font-body font-extrabold text-gray-900 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Interviews</span></router-link> </li>



                <li class="rounded-lg hover:bg-purple-200 hover:text-purple-600 "> <router-link to= "/" class="inline-flex rounded-lg px-2 py-2">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-900 hover:text-purple-600"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg> <span class="font-body font-extrabold text-gray-900 ml-3 tracking-wider text-sm  hidden lg:block cursor-default hover:text-purple-600"> Team</span></router-link> </li>

    

                <li class="rounded-lg hover:bg-purple-200 hover:text-purple-600"> <router-link to ="/profile" class="inline-flex rounded-lg px-2 py-2" >   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5 text-gray-900 hover:text-purple-600"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><span class=" font-body font-extrabold text-gray-900 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Profile</span></router-link> </li>

                 <li class="rounded-lg hover:bg-purple-200 hover:text-purple-600 "> <router-link to= "/archive" class="inline-flex rounded-lg px-2 py-2">  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <span class="font-body font-extrabold text-gray-900 ml-3 tracking-wider text-sm  hidden lg:block cursor-default hover:text-purple-600"> Insights</span></router-link> </li>

          

      

          <li>

      

        
            
            <button v-on:click="isOpen=!isOpen"type="button" class="font-body inline-flex justify-center px-4 py-2 border border-transparent text-md leading-5 font-medium rounded-md text-white bg-purple-700 rounded-lg w-full hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">


                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class = "w-6 h-6 text-white"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>

                <span class="text-sm font-extrabold font-body ml-2 tracking-wider hidden lg:block">
                   Create
                </span>
               
                </button>
          </li>

              </ul>


                <!-- The bottom footer of the first div -->

             <div class="absolute inset-x-0 bottom-0 h-12 w-full px-3 bg-gray-200 flex items-center justify-between shadow">

              <div>
                  <img src="/img/Ali-Baba.png" class="h-8 w-8 rounded-full object-center object-cover">

              </div>
                 <div class="hidden lg:block">
                <p class="font-display text-gray-800 font-medium tracking-wider text-md"> John Alibaba</p>
                
              </div>
          
             <div class="hidden lg:block">
                
                <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-down w-6 h-6 text-gray-800"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                
              </div>
          
                

        

            
                     

            
              
             
              

             </div>

            <!--  end of the bottom footer  -->
              
              

            </div>

                  <!-- End of the first section -->

                     <!--    The second section-->
            <div class="w-full lg:w-8/12">

            

                 <div class="mt-1 p-4">
                   <Feeds> </Feeds>

                 </div>

   


            </div>

                       <!--  End of the second section -->


                      <!--  The third section -->
            <div class="w-2/12 flex-none hidden lg:block">

              
              
                  <!-- The card section -->

                  <div class="bg-white rounded-lg shadow w-full">

                  <!-- The card header -->

                  <div class="flex px-24 mt-4 py-4 justify-between">

                  

                  </div>

                  <!-- End of the card header -->
                    <!-- The card body  -->
                  <div>
                    
                    
                  </div>

                    <!-- End of the card body -->

                  <!-- The card footer  -->

                  <div class="flex mt-4 py-8">
                    
                  
                  </div>

                <!--  End of the card footer -->
                  

                </div>

                <!-- End of the card section -->


            </div>

                         <!--  End of the third section -->
  

       
        </div>

        <!-- End of the flex section -->

         <!--     The pop up modal for creating a post. -->

              <transition>

                    <div v-if="isOpen" class="bg-white inset-0 absolute w-8 rounded-lg shadow w-5/12 h-64 mx-auto mt-16">

                      <!-- The modal Navbar -->

                      <div class="flex items-center justify-between px-4 shadow py-4">

                        <div>

                          <p class="text-gray-800 text-sm font-extrabold font-body"> Create Post  </p>
                          
                        </div>

                           <div>

                            <svg v-on:click="isOpen=!isOpen" class="w-6 h-6 text-md text-gray-800 py-1 px-1 hover:text-white hover:bg-purple-600 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                          
                        </div>
                        
                      </div>

                       <!-- End of the modal navbar -->

                      <div>

                          <h1 class="text-gray-800 text-center"> This is me</h1>
                        
                      </div>

                      <!-- The modal footer -->

                      <div class="flex justify-between">
                        
                      </div>

                    <!--   End of the modal footer -->
                      

                    </div>

                  </transition>

                      <!--   End of the pop of modal for creating a post -->

                   
    

      </div>

         <!--      End of the Profile section -->





</template>

<script>

//Graphql import 


// import {USER_PROFILE} from '../constants/query.js';
  

import {  ContentLoader } from 'vue-content-loader'; 


//components import.

// import Application from '../components/Application/Application.vue';
// import Archive from '../components/Archive/Archive.vue';
// import Feeds from '../components/Feeds/Feeds.vue';
// import Footer from '../components/Footer.vue';
// import Insights from '../components/Insights/Insights.vue';
// import Jobs from '../components/Jobs/Jobs.vue';
// import Profile from '../components/Profile/Profile.vue';
import Feeds from '../components/Feeds/Feed-List.vue';

 
export default {

  components:{

   ContentLoader,
   Feeds,

   // Application,
   // Archive,
   // Feeds,
   // Footer,
   // Insights,
   // Jobs,
   // Profile,
   // Schedule,
  

  },

  data(){

    return {

    dynamicComponent:"Feeds",

    isOpen:false, 

	  profile:""

    }

  },

  apollo:{
    // profile:USER_PROFILE
  },
  

  computed:{
    

  },

methods:{
  
  
  },
  
 



}
</script>

<style lang="less">
  
  
</style>