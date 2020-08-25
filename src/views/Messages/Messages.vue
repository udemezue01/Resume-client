<template>
	
<div id="jobs" class="h-screen">

	<!-- The job navigational bar -->

	<div class="flex justify-between px-3 py-2 bg-white shadow rounded-md mx-auto mt-3 items-center lg:w-11/12 ">

		<!-- The first flex -->

		<div>

			<ul class="flex space-x-3 items-center">
				
				<li> 	<a href="" class="inline-flex space-x-1 items-center">

				<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="chat w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>

			<span class="font-body font-medium text-sm tracking-wider text-gray-700"> Chat </span>
			</a>

			</li>

				<li>
					<a href="" class="inline-flex space-x-1 items-center">
				<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="chat-alt2 text-gray-800 font-medium w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>

			<span class="font-body font-medium text-sm tracking-wider text-gray-700"> Groups</span>

			</a>

				</li>
				<li>
					<a href="" class="inline-flex space-x-1 items-center">
				<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="ban w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>

			<span class="font-body font-medium text-sm tracking-wider text-gray-700"> Spam </span>

			</a>
					
				</li>
			</ul>
			
		
			
			


		</div>

	<!-- 	End of the first flex -->

	<!-- The second flex -->



	<!-- 	End of the second flex -->

			<!-- The third flex -->

		<div class="flex space-x-3">

			
	

			<button type="button" class="font-body inline-flex items-center px-3 py-2 border text-sm leading-5 font-bold rounded-sm text-purple-600 bg-white rounded-lg border-purple-600 tracking-wider hover:bg-white focus:outline-none focus:shadow-outline-white focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">


	     <!--  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3 -ml-1 mr-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> -->
	     <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class = "w-4 h-4 -ml-1 mr-2 text-purple-600"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
	       Send Message
	      </button>
			
		</div>

		<!-- End of the Third flex -->
		

	</div>

	<!-- End of the Job navigational bar -->


	<div class="">

		<keep-alive>
				<component v-bind:is="dynamicComponent"> </component>

		</keep-alive>
		

	</div>



</div>



</template>


<script >

import MessagesList from '../../components/Messages/Messages-List.vue';

export default{


components:{

MessagesList,
},

data(){

	return {

		dynamicComponent:"MessagesList",


	}
}



}
	


</script>