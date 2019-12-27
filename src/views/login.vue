  <template>
  <div id="landing" class="bg-gray-200">
   
 <div class="flex bg-gray-200">

  <div class="flex-auto">
 

  </div>

  <div class="flex-auto">
    

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
