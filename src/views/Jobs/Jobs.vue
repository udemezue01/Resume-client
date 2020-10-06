<template>
	
<div id="jobs" class="min-h-screen p-2">

	<!-- The job navigational bar -->

	<div class="flex justify-between px-3 py-2 bg-white shadow rounded-md mx-auto mt-3 items-center lg:w-11/12 ">

		<!-- The first flex -->

		<div class="">

			<ul class="flex items-center sm:space-x-1 lg:space-x-3 ">

				<li class=" rounded-lg hover:bg-purple-200 px-3 py-2">  

					<a href="" class="inline-flex space-x-1 items-center hover:text-white ">

				<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="briefcase w-4 h-4 text-gray-800 font-medium"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>

				<span class="font-body font-bold text-sm tracking-wider text-gray-700 sm:text-xs"> Jobs </span>
					</a>

				</li>

				<li class=" rounded-lg hover:bg-purple-200 px-3 py-2">	

					<a href="" class="inline-flex space-x-1 items-center">
				<svg viewBox="0 0 20 20" stroke="currentColor" fill="none" class="check-circle w-4 h-4 text-gray-800 font-medium"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>

				<span class="font-body font-bold text-sm tracking-wider text-gray-700 sm:text-xs"> My Jobs</span>

				</a>

			</li>

			<li class=" rounded-lg hover:bg-purple-200 px-3 py-2">
				<a href="" class="inline-flex space-x-1 items-center">
				<svg viewBox="0 0 20 20" stroke="currentColor" fill="none" class="bookmark-alt w-4 h-4 text-gray-800 font-medium"><path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clip-rule="evenodd"></path></svg>

			<span class="font-body font-bold text-sm tracking-wider text-gray-700 sm:text-xs"> Saved Jobs </span>

				</a>

			</li>
				

			</ul>
			

		</div>

	<!-- 	End of the first flex -->

	<!-- The second flex -->



	<!-- 	End of the second flex -->

			<!-- The third flex -->

		<div class="flex space-x-3">

			
	

			<button type="button" class="font-body inline-flex items-center px-3 py-2 border text-sm leading-5 font-bold rounded-sm text-purple-600 bg-white rounded-lg border-purple-600 tracking-wide hover:bg-white focus:outline-none focus:shadow-outline-white focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">


	     <!--  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3 -ml-1 mr-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> -->
	     <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class = "w-4 h-4 -ml-1 mr-2 text-purple-600 sm:text-xs"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
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