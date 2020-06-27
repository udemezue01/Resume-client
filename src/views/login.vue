<template>
	

<div>
	
  <div class="flex bg-white">

  <!--   The first flex -->

    <div class="w-full ">
      
<div class="flex items-center justify-center bg-gray-50 py-12 mt-2 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div>
      <img class="mx-auto h-8 w-auto" src="/img/logo2.svg" alt="Workflow" />
      <h2 class="mt-6 font-body text-center text-3xl leading-9 font-extrabold text-gray-800">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center font-body text-sm leading-5 text-gray-800 font-extrabold">
        Or
        <router-link to="/register" class="font-extrabold font-body tracking-wider text-purple-600 hover:text-purple-600 focus:outline-none focus:underline transition ease-in-out duration-150">
          create new account
        </router-link>
      </p>
    </div>
    <form class="mt-8" action="">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm">
        <div>
        	<label class="block text-gray-700 text-sm font-bold mb-2 font-body tracking-wider" for="email">
        Email*
      </label>
          <input aria-label="Email address" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 rounded-md shadow-md font-body focus:outline-none focus:shadow-outline-purple focus:border-purple-700 focus:z-10 sm:text-sm sm:leading-5" placeholder="" />
        </div>
        <div class="mt-6">
        	<label class="block text-gray-700 text-sm font-bold mb-2 font-body tracking-wider" for="password">
        Password*
      </label>
          <input aria-label="Password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 rounded-md shadow-md font-body focus:outline-none focus:shadow-outline-purple focus:border-purple-700 focus:z-10 sm:text-sm sm:leading-5" placeholder="" />
        </div>
      </div>

      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out rounded-md" />
          <label for="remember_me" class="font-extrabold ml-2 block text-sm leading-5 text-gray-700 font-body">
            Remember me
          </label>
        </div>

        <div class="text-sm leading-5">
          <a href="#" class="font-extrabold text-purple-600 hover:text-purple-600 focus:outline-none focus:underline transition ease-in-out duration-150">
            Forgot your password?
          </a>
        </div>
      </div>

      <div class="mt-6">
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-extrabold font-body tracking-wider rounded-lg text-white bg-purple-700 hover:bg-purple-600 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700 transition duration-150 ease-in-out">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-white group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
<!-- 
    The end of the first flex -->

    <div class=" hidden lg:block lg:w-full ">
      
      <img src="/img/fingerprint.svg" class=" object-cover object-center h-full w-full">

    </div>

  <!--   End of the second flex -->
    

  </div>
	
</div>


</template>




<script >

export default {



  data(){

    return{

      email:"",
      password:""

    }
  },

  methods:{

   userLogin(){

    this.apollo.mutate({



    })
   }

  },


  computed:{


  }
}
	



</script>