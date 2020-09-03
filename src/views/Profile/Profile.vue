<template>
	
<div id="profile" class="p-2 h-full w-full mx-auto lg:w-6/12">

<!-- 	The user profile card section -->
	<div class="bg-white rounded-lg overflow-hidden mx-auto shadow">
		
		<img src="/img/woman.jpg" class="w-full h-64 object-center object-cover">

			<div class="flex justify-between mt-6 px-8">

			<!-- 	The profile photo section -->

				<ul class="flex items-center space-x-1">
					
					<li> <img src="/img/Ali-baba.png" class="w-24 h-24 rounded-full -mt-20 object-cover object-center border-solid border-4 border-white"> </li>

				

					<li> <h2 class="font-body tracking-wider font-bold text-gray-800"> John Alibaba </h2> </li>	
						

					<li> <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-8 text-gray-700 ml-2"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg> </li>	

			

				</ul>

				<!-- End of the profile photo section -->

				

				<!-- The last menu Icon section -->


				<div>
					 <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-8 text-gray-800" ><path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>

					 </svg>
				</div>

				<!-- End of the last menu Icon -->
	
			</div>
			<!-- The profile navigational bar section -->

			<div class="py-3 bg-white flex justify-between px-4 mt-12">


				<div  class="font-body text-md font-bold tracking-wider text-gray-700 hover:text-gray-800"> About </div>

				<div  class="font-body text-md font-bold tracking-wider text-gray-700 hover:text-gray-800"> Post</div>
			
				<div  class="font-body text-md font-bold tracking-wider text-gray-700 hover:text-gray-800"> Photos</div>


				<div href="" class="font-body text-md font-bold tracking-wider text-gray-800 hover:text-gray-700"> Videos</div>

				<div class="font-body text-md font-bold tracking-wider text-gray-700 hover:text-gray-800"> Collection</div>
			


	

			</div>

	<!-- End of the profile navigational bar section -->

	</div>

	<!-- End of the user profile card section -->

	      <div class="mt-2">

             <keep-alive>

             	<component v-bind:is="dynamicComponent"> </component>

             </keep-alive>

         </div>

	




</div>



</template>


<script >

import About from '../../components/Profile/About.vue'
import Photos from '../../components/Profile/Photos.vue'
import Videos from '../../components/Profile/Videos.vue'
import Post from '../../components/Profile/Post.vue'
import Collections from '../../components/Profile/Collections.vue'

export default{

components:{

	About,

},

data(){

	return {

		dynamicComponent:'About'

	}
},





}
	


</script>