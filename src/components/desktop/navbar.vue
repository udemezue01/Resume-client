<template>


<div>
  
       <!--  The navigational bar -->

    <div class="flex justify-between bg-gray-100 px-12 py-5">


      <div>
        
          <a href="" class="font-bolder"> Resume.ly</a>

      </div>


      <div>
        
           <a href="" class="font-bolder"> Feeds</a>

            <a href="" class="font-bolder"> Profile</a>

             <a href="" class="font-bolder"> Notification</a>

      </div>
      

    </div>



      <!--  End of the navigational bar -->


</div>

 

</template>




  
<script>

import {mapActions, mapGetters} from 'vuex';
 import {  ContentLoader } from 'vue-content-loader'; 

export default {
   components:{

   ContentLoader


  },

data(){
  return {
  
  post:{
    text : "",
    photo:"",
    video:""

  },



  }
},


methods:{
  postCreate(){
  

  },


  userLogout(){
    localStorage.removeItem('token')
    .then(() => this.$router.push('/'))
    .catch((err) =>{
      console.log(err)
    })
  
  }
}

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
