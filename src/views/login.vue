<template>
  <div id="landing">
   
      <div class="bg-gray-200" style="min-height: 640px;">
  <div id="nav" class="bg-white shadow">
    <div class="md:px-8">
      <nav class="relative flex flex-wrap items-center justify-between md:py-4">
        <div class="relative z-10 flex-shrink-0 pl-4 py-4 md:p-0">
          <img class="h-8 w-8" src="/img/icons/logo.png" alt="">
        </div>
       
        <div class="hidden md:block md:ml-10 md:flex md:items-baseline md:justify-between md:bg-transparent">
          <div class="lg:absolute inset-0 flex items-center justify-center">
            <a href="#" class="text-sm font-medium text-gray-900 hover:text-gray-700">Home</a>
            <a href="#" class="ml-10 text-sm font-medium text-gray-900 hover:text-gray-700">Profile</a>
            <a href="#" class="ml-10 text-sm font-medium text-gray-900 hover:text-gray-700">Partners</a>
            <a href="#" class="ml-10 text-sm font-medium text-gray-900 hover:text-gray-700">About</a>
          </div>
          <div class="ml-10 relative flex items-baseline">
            <a href="#" class="text-sm font-medium text-gray-900 hover:text-gray-700">Log in</a>
            <a href="#" class="ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Create Account</a>
          </div>
        </div>
      </nav>
    </div>

   
  </div>
</div>

</div>
</template>

  
<script>
import {SIGNIN_USER_MUTATION} from '../graph/mutation.js';




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
 

}




  
</script>

<style scoped lang="less">




</style>
