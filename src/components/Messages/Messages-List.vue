<template>
	<div class="h-screen">
		
		<!-- 
  The Job list and detail section -->

  <div class="mt-3 bg-white flex items-center lg:w-11/12 lg:mx-auto rounded-md shadow-md">
    
    <div class="p-2 w-full lg:w-1/2">

      <p class="font-medium font-body text-gray-700 p-2 text-sm prose tracking-wider"> Chats</p>
      <ul class="list-none mt-1">
        <li class="bg-white p-3">  

          

            <!-- The jobs list navigational bar -->
            <div class="bg-white flex justify-between items-center w-full">
                <div class="flex items-center space-x-3">
                  <img src="/img/Ali-Baba.png" class="h-12 w-12 object-center rounded-full border-gray-300 border-2">

                  <div class="">
                    <div class="block font-body font-medium text-sm tracking-wider prose text-gray-800"> Google Inc</div>
                    <div class="block font-body font-light text-xs tracking-wider prose text-gray-600"> @google </div>
                  </div>


                </div>
                 <div>
                  <span class="text-gray-800 tracking-wider text-xs"> 1d</span>
                </div>
               

            </div>

            <!-- The end of the job list navigational bar -->
            

         
            

        </li>

    <!--     <div class="border-t border-gray-400"></div> -->



      </ul>


    </div>

   <!--  End of the first flex -->

    <div class="hidden lg:block lg:w-1/2">

     
        

          <img src="/img/Ali-Baba.png" class="h-16 w-16 rounded-full border-gray-500 border-2 mt-1 mx-auto">
    
    
    
    </div>

  </div>

 <!--  End of the job List and detail section -->

	</div>

</template>

<script >


export default{

data(){

	return{

		
	}
}


}


</script>