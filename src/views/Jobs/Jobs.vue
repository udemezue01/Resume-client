<template>
	
<div id="jobs" class="h-screen">

	<!-- The job navigational bar -->

	<div class="flex justify-between px-6 py-3 bg-white shadow-none items-center">

		<!-- The first flex -->

		<div class="flex space-x-3">
			
			<a href="" class="font-body font-bold tracking-wider text-gray-700">Jobs</a>
			<a href="" class="font-body font-bold tracking-wider text-gray-700">My Jobs</a>


		</div>

	<!-- 	End of the first flex -->

	<!-- The second flex -->



	<!-- 	End of the second flex -->

			<!-- The third flex -->

		<div class="flex space-x-3">

			
	

			<button type="button" class="font-body inline-flex items-center px-3 py-2 border text-sm leading-5 font-bold rounded-sm text-purple-600 bg-white rounded-lg border-purple-600 tracking-wider hover:bg-white focus:outline-none focus:shadow-outline-white focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">


	     <!--  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3 -ml-1 mr-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> -->
	     <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class = "w-5 h-5 -ml-1 mr-2 text-purple-600"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
	       Post a Job
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

import JobList from '../../components/Jobs/Job-List.vue';

export default{


components:{

JobList,
},

data(){

	return {

		dynamicComponent:"JobList",


	}
}



}
	


</script>