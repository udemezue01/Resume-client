  <template>
  
  <div>

      <!-- The navigational bar -->
    
    <nav class="flex justify-between px-6 py-5 bg-white shadow">
      
      <div>
        
        <img src="/img/logo1.svg" class="h-8 w-8">

      </div>

      <div>
        

        

      </div>


    </nav>

       <!--  End of the navigational bar -->


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
