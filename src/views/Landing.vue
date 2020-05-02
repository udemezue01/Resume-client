  <template>
  
  <div>

      
       <div class="flex bg-white">

     <!--    The first flex -->

        <div class="w-full" id="landing">

          <div class="m-6 lg:m-16">

            <h1 class="text-6xl text-purple-700 font-black cursor-pointer leading-tight tracking-wide"> Resume.ly</h1>

            <h3 class=" mt-6 font-extrabold text-gray-800 text-5xl cursor-pointer hover:text-gray-900"> Connecting you with global  opportunities</h3>

            <router-link to="/register">

            <button type="button" class=" mt-6 hidden items-center -ml-1 px-4 py-2  border border-transparent text-sm  font-extrabold text-white bg-purple-700 rounded-lg m-2 lg:block hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
        
    
        Get Started
      </button>
    </router-link>

    <!--   <div class="flex justify-around">
        
        <div>
          <img src="/img/android.svg" class="block h-8 w-20">

        </div>

        <div>
           <img src="/img/ios.svg" class="block h-8 w-20">

        </div>

      </div> -->
            
          </div>

       
          
        </div>

          <!-- End of the first flex -->


          <!-- The second flex -->

        <div class=" hidden lg:block lg:w-full">
          
          <img src="/img/deal.svg" class=" object-cover object-center h-full w-full">

        </div>
         
         <!--    End of the second flex -->

       </div>

       <!-- End of the flex component -->

     


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
