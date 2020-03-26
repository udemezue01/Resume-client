  <template>
  
  <div>

      <!-- The navigational bar -->
    
    <nav class="flex justify-between px-6 py-5 bg-white shadow sticky top-0">
      
      <div>
        
        <img src="/img/logo1.svg" class="h-8 w-8">

      </div>

      <div>
        

      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-700 rounded-lg hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
        
      
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 -ml-1 mr-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        Get Started
      </button>
    
        

      </div>


    </nav>

       <!--  End of the navigational bar -->

       <div class="flex">

     <!--    The first flex -->

        <div class="w-1/2">

          <div class="m-16 flex-none">

            <h1 class="text-6xl text-purple-700 font-black"> Career Social Network</h1>

            <p> </p>

            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-700 rounded-lg m-4 hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
        
      
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 -ml-1 mr-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        Get Started
      </button>
            
          </div>

       
          
        </div>

          <!-- End of the first flex -->


          <!-- The second flex -->

        <div class="w-1/2">
          
          <img src="/img/landing.svg" class="object-cover object-center h-full w-full">

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
          <div class="">
            
            <a href="" class="block"> Company</a>
            <a href="" class="block"> About</a>
            <a href="" class="block">press</a>
          </div>
          <div class="">
            
            <a href="" class="block"> Company</a>
            <a href="" class="block"> About</a>
            <a href="" class="block">press</a>
          </div>
          <div class="">
            
            <a href="" class="block"> Company</a>
            <a href="" class="block"> About</a>
            <a href="" class="block">press</a>
          </div>
          <div class="">
            
            <h6  class="block"> Platform</h6>
            <a href="" class="block"> About</a>
            <a href="" class="block">press</a>
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

  register:{
    full_name:"",
    email:"",
    account_type:""

  }

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
