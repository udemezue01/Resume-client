<template>
 <div class="container h-screen">

         <!--  The Profile UI section -->

    <div class="flex px-1 justify-between">

                 <!-- The first section -->

            <div class="w-2/12 bg-white rounded h-screen flex-none">

            	<div class="object-center align-center">
            		
            		<ul class="list-none space-y-3 p-4">


                
					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2 ">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6 text-gray-700 text-center hover:text-purple-600 mx-auto" ><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg><span class="font-body font-sans font-bold text-gray-700 ml-3 tracking-wider hidden lg:block cursor-default hover:text-purple-600"> Feeds</span></div> </li>



					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-purple-600 mx-auto"><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg><span class="font-body font-bold text-gray-700 ml-3 tracking-wider hidden lg:block cursor-default hover:text-purple-600"> Explore</span></div> </li>


					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-purple-600 mx-auto"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>  <span class="font-body font-bold text-gray-700 ml-3 tracking-wider hidden lg:block cursor-default hover:text-purple-600"> Messages</span></div> </li>



					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-purple-600"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <span class="font-body font-bold text-gray-700 ml-3 tracking-wider hidden lg:block cursor-default hover:text-purple-600"> Jobs</span></div> </li>



					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-purple-600"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> <span class="font-body font-bold text-gray-700 ml-3 tracking-wider hidden lg:block cursor-default hover:text-purple-600"> Application</span></div> </li>



					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-purple-600"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg> <span class="font-body font-bold text-gray-700 ml-3 tracking-wider hidden lg:block cursor-default hover:text-purple-600"> Archive</span></div> </li>


					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-purple-600"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="font-body font-bold text-gray-700 ml-3 tracking-wider hidden lg:block cursor-default hover:text-purple-600"> Schedule</span></div> </li>


					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2" @click = "components">   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 text-gray-700 hover:text-purple-600"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><span class=" font-body font-bold text-gray-700 ml-3 tracking-wider hidden lg:block cursor-default hover:text-purple-600"> Profile</span></div> </li>

					

					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2">   <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class = "w-6 h-6 text-gray-700 hover:text-purple-600"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="font-body font-bold text-gray-700 ml-3 tracking-wider hidden lg:block cursor-default hover:text-purple-600"> Insights</span></div> </li>

              </ul>


            	</div>

              
              

            </div>

                  <!-- End of the first section -->

                     <!--    The second section-->
            <div class="w-8/12 flex-none">

             

           <!-- The toggle section for the post, jobs and application -->

           <div class="mt-2">

             <keep-alive>

             	<component v-bind:is="dynamicComponent"> </component>

             </keep-alive>

           </div>

            <!-- End of the toggle section for the post, jobs and application -->


            </div>

                       <!--  End of the second section -->


                      <!--  The third section -->
            <div class="w-2/12 flex-none">

              
              

            </div>

                         <!--  End of the third section -->
    

      </div>

         <!--      End of the Profile section -->


 </div>


</template>

<script>

//Graphql import 


// import {USER_PROFILE} from '../constants/query.js';
  

import {  ContentLoader } from 'vue-content-loader'; 


//components import.

import Application from '../components/Application.vue';
import Archive from '../components/Archive.vue';
import Feeds from '../components/Feeds.vue';
import Footer from '../components/Footer.vue';
import Insights from '../components/Insights.vue';
import Jobs from '../components/Jobs.vue';
import Profile from '../components/Profile.vue';
import Schedule from '../components/Schedule.vue';

 
export default {

  components:{

   ContentLoader,
   Application,
   Archive,
   Feeds,
   Footer,
   Insights,
   Jobs,
   Profile,
   Schedule,
  

  },

  data(){
    return {
      dynamicComponent:"profile",

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