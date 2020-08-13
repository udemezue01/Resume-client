<template>
 <div class=" h-screen">

         <!--  The Profile UI section -->

    <div class="flex">

                 <!-- The first section -->

            <div class="w-2/12 bg-white h-screen mx-auto items-center shadow-md ">

            	<div class="object-center items-center align-center overflow-auto">
            		
            		<ul class="list-none space-y-3 p-4 items-center">


                
					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2 content-center" v-on:click="dynamicComponent='Feeds'">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" class="w-5 h-5 text-gray-800 hover:text-purple-600 " ><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg><span class="font-body prose font-sans font-bold text-gray-800 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Feeds</span></div> </li>



					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2" v-on:click="dynamicComponent='Explore'">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-800 hover:text-purple-600 mx-auto"><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg><span class="font-body prose font-bold text-gray-800 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Explore</span></div> </li>


					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg items-center px-2 py-2" v-on:click="dynamicComponent='Messages'">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-800 hover:text-purple-600 mx-auto"><path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>  <span class="font-body font-bold text-gray-800 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Messages</span></div> </li>



					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <router-link to="jobs" class="inline-flex rounded-lg px-2 py-2" v-on:click="dynamicComponent='Jobs'">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-800 hover:text-purple-600"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <span class="font-body font-bold text-gray-800 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Jobs</span></router-link> </li>



					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <router-link to="application" class="inline-flex rounded-lg px-2 py-2" v-on:click="dynamicComponent='Application'">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-800 hover:text-purple-600"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> <span class="font-body font-bold text-gray-800 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Application</span></router-link> </li>



					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <router-link to= "archive" class="inline-flex rounded-lg px-2 py-2" v-on:click="dynamicComponent='Archive'">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-800 hover:text-purple-600"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg> <span class="font-body font-bold text-gray-800 ml-3 tracking-wider text-sm  hidden lg:block cursor-default hover:text-purple-600"> Archive</span></router-link> </li>


					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2" v-on:click="dynamicComponent='Schedule'">  <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-800 hover:text-purple-600"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="font-body font-bold text-gray-800 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Schedule</span></div> </li>


					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <router-link to ="/profile" class="inline-flex rounded-lg px-2 py-2" >   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5 text-gray-800 hover:text-purple-600"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><span class=" font-body font-bold text-gray-800 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Profile</span></router-link> </li>

					

					<li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2">   <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class = "w-5 h-5 text-gray-800 hover:text-purple-600 justify-center"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="font-body font-bold text-gray-800 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Insights</span></div> 

					</li>

            <li class="hover:bg-purple-200 hover:text-purple-600 rounded-lg"> <div class="inline-flex rounded-lg px-2 py-2">   <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class = "w-5 h-5 text-gray-800 hover:text-purple-600 justify-center"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg><span class="font-body font-bold text-gray-800 ml-3 tracking-wider text-sm hidden lg:block cursor-default hover:text-purple-600"> Support</span></div> 

          </li>

				
						
						<button type="button" class="font-body inline-flex justify-center px-4 py-2 border border-transparent text-sm leading-5 font-extrabold rounded-md text-white bg-purple-700 rounded-lg w-full hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">


					      <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class = "w-5 h-5 text-white"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>

					      <span class="text-sm font-body ml-2 tracking-wider hidden lg:block">
					      	 Create
					      </span>
					     
					      </button>
					</li>

              </ul>


            	</div>

              
              

            </div>

                  <!-- End of the first section -->

                     <!--    The second section-->
            <div class="w-full lg:w-8/12">

             

           <!-- The toggle section for the post, jobs and application -->

           <div class="mt-2">

             <!-- <keep-alive>

             	<component v-bind:is="dynamicComponent"> </component>

             </keep-alive> -->

             <div id="profile" class="px-2">

  <div class="bg-white rounded-lg shadow-sm w-full lg:w-8/12 lg:mx-auto">

    <!-- The card header -->

    <div class="flex px-3 mt-4 py-2 justify-between items-center">

      <div>
        <img src="/img/woman.jpg" class="w-8 h-8 rounded-full border-solid border-2 border-gray-600 object-cover object-center">

      </div>

        <div>
        <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-gray-800 hover:text-purple-600 "><path d="M19 9l-7 7-7-7"></path></svg>
        
        </div>
      

    </div>

    <!-- End of the card header -->
      <!-- The card body  -->
    <div>
      
      <img src="/img/woman.jpg" class="w-full h-full object-cover object-center">

    </div>

      <!-- End of the card body -->

    <!-- The card footer  -->

    <div class="flex mt-2 py-4 px-3 justify-between items-center">
      
      <div class="flex spacing-x-4 px-2 items-center">
        <div class="inline-flex spacing-x-3">
           <p class="font-body tracking-wider text-gray-700 text-sm font-medium"><span class="font-body tracking-wider text-gray-700 text-sm font-medium"> 12</span>&nbsp;Comments</p>
        </div>
        &nbsp;

           <div class="inline-flex spacing-x-3">
           <p class="font-body tracking-wider text-gray-700 text-sm font-medium"><span class="font-body tracking-wider text-gray-700 text-sm font-medium"> 7.4K</span>&nbsp;Likes</p>
        </div>

      </div>

      <div class="flex items-center spacing-x-8 px-2">

         <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700  hover:text-red-500 "><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
         <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-purple-600 "><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>

          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-purple-600 "><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
        
        <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-purple-600 "><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
      
        

      </div>
    </div>

  <!--  End of the card footer -->
    

  </div>
 
          <!--  End of the feeds section -->


</div>

           </div>

            <!-- End of the toggle section for the post, jobs and application -->


            </div>

                       <!--  End of the second section -->


                      <!--  The third section -->
            <div class="w-2/12 flex-none hidden lg:block">

              
              
		<!-- The card section -->

		<div class="bg-white rounded-lg shadow-sm w-full">

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
			
			<div>
				

			</div>

			<div>
				

			</div>
		</div>

	<!-- 	End of the card footer -->
		

	</div>

	<!-- End of the card section -->


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

// import Application from '../components/Application/Application.vue';
// import Archive from '../components/Archive/Archive.vue';
// import Feeds from '../components/Feeds/Feeds.vue';
// import Footer from '../components/Footer.vue';
// import Insights from '../components/Insights/Insights.vue';
// import Jobs from '../components/Jobs/Jobs.vue';
// import Profile from '../components/Profile/Profile.vue';
// import Schedule from '../components/Schedule/Schedule.vue';

 
export default {

  components:{

   ContentLoader,
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