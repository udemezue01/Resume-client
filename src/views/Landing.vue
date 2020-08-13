  <template>
  
      
       <div class="bg-white h-screen">


          <div class="p-8 justify-center position-center content-center">

            <h1 class="font-body text-6xl text-purple-700 font-black cursor-pointer leading-tight tracking-wider text-center mt-24"> Resume.ly</h1>

            <h2 class=" mt-24 text-center font-body font-extrabold tracking-wider text-gray-800 cursor-pointer text-5xl lg:mt-6 hover:text-gray-900"> Connecting you with global  opportunities</h2>

           <!--  The button flex -->

              <div class="flex justify-center items-center mt-8">

                <div>
                   <router-link to="/register">

              <button type="button" class="mt-12 font-body justify-center align-center items-center ml-1 px-6 py-2  border border-transparent text-md  font-extrabold text-white bg-purple-700 rounded-lg m-2 tracking-wide lg:mt-6 lg:block hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
                Get Started
              </button>
              
          </router-link>

                </div>

                <div>
                  
                     <button type="button" class="mt-12 font-body justify-center align-center items-center ml-1 px-6 py-2  border border-transparent text-md  font-extrabold text-gray-900 bg-transparent rounded-lg m-2 tracking-wide lg:mt-6 lg:block hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
                Android
              </button>
                </div>


                <div>
                  
                     <button type="button" class="mt-12 font-body justify-center align-center items-center ml-1 px-6 py-2  border border-transparent text-md  font-extrabold text-gray-800 bg-transparent rounded-lg m-2 tracking-wide lg:mt-6 lg:block hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
                Ios
              </button>
                </div>

                

              </div>

             <!--  End of the flex -->
  
           

            
          </div>

       
          

       </div>

       <!-- End of the flex component -->

     


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
