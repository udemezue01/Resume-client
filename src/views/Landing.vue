  <template>
  
      
       <div class=" h-full bg-white " id="Landing">


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

// #Landing{
//   background-color: #ffffff;
// background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23553c9a' fill-opacity='0.11' fill-rule='evenodd'/%3E%3C/svg%3E");

// }


</style>
