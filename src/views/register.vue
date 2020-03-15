<template>
 

 
</template>

  
<script>

import {mapActions, mapState} from 'vuex';

export default {

data(){
  return {
  
 

  register:{
	full_name:"",
	email:"",
	account_type:["Personal", "Business"]
    

  }


  }
},
computed:{
  ...mapState('signup',[

    'registrationLoading',
    'registrationCompleted',
    'registrationError',
    
    ]),
 


  methods:{

     ...mapActions('signup', [

      'createAccount',
 
      ]),


    userRegister(){
      this.createAccount(this.register)
      .then(() => this.$router.push('/profile'))
      .catch((err) => console.log(error))
      
  
    },
  }

}
}
</script>

<style scoped lang="less">



</style>

