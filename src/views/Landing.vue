  <template>
  
  <div>

      <!-- The navigational bar -->
    
    <nav class="flex justify-between px-8 py-2 bg-white shadow sticky top-0">
      
      <div>
        
        <img src="/img/logo1.svg" class="h-8 w-8">

      </div>

      <div>
        
        <router-link to = "login">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-700 rounded-lg hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
        
      
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 -ml-1 mr-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        Log In
      </button>


    </router-link>
    
        

      </div>


    </nav>

       <!--  End of the navigational bar -->

       <div class="flex">

     <!--    The first flex -->

        <div class="w-full">

          <div class="m-16">

            <h1 class="text-6xl text-purple-700 font-black cursor-pointer"> Career Social Network</h1>

            <h3 class="font-bold text-gray-800 text-2xl cursor-pointer hover:text-black"> Connecting You With Global <br>  Opportunities</h3>

            <button type="button" class="items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium text-white bg-purple-700 rounded-lg m-2 hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
        
      

        Get Started
      </button>
            
          </div>

       
          
        </div>

          <!-- End of the first flex -->


          <!-- The second flex -->

        <div class=" hidden md:block md:w-full">
          
          <img src="/img/landing.svg" class=" object-cover object-center h-full w-full">

        </div>
         
         <!--    End of the second flex -->

       </div>

       <!-- End of the flex component -->

      <!--  The footer section -->

     

        <div class="flex justify-around p-12 shadow-md">

          <div class=" ">
            
            <img src="/img/logo1.svg" class="block h-5 w-5"/>
            <p class="block font-bold py-2"> Career Social Network</p>
            
          </div>
          <div class="hidden lg:block">
            
            <a href="" class="block font-medium"> Help</a>
            <a href="" class="block"> Introduction</a>
            <a href="" class="block">Help Center</a>
          </div>
          <div class=" hidden lg:block">
            
            <a href="" class="block"> Company</a>
            <a href="" class="block"> Team</a>
            <a href="" class="block">press</a>
          </div>
          <div class=" hidden lg:block">
            
            <a href="" class="block"> Legal</a>
            <a href="" class="block"> Privacy Policy </a>
            <a href="" class="block">Terms Of Service</a>
          </div>
          <div class="">
            
            <h6  class="block"> Platform</h6>
            <a href="" class="block inline-flex"> Android</a>
            <a href="" class="block">IOS</a>
          </div>
          

      
        

      </div>


     <!--  End of the footer section -->


  </div>


</template>

  
<script>
import {SIGNIN_USER_MUTATION} from '../constants/mutation.js';




export default {

data(){
  return {
  
 signIn:{
    email: "",
    password : ""
  },


  }
},
computed:{
 

},

methods:{

 
    userLogin(){
      

      this.$apollo.mutate({

        mutation: SIGNIN_USER_MUTATION,

        variables:{
          email:this.signIn.email,
          password:this.signIn.password
        }

      }).then(resp => {

        const token = resp.data.tokenAuth.token

        localStorage.setItem( 'token' , token);
        
        this.$router.push("/profile")


    }).catch(err =>{

      localStorage.removeItem('token')

    
    })
  }

},

userSignup(){

  this.$apollo.mutate({

    mutation:SIGNUP_USER_MUTATION,

    variables:{

    
    }

  })
},

 

}




  
</script>

<style scoped lang="less">




</style>
