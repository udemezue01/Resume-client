  <template>
  
      
       <div class="relative min-h-screen bg-purple-200" id="Landing">

       <!--  The navigational bar -->
       <div class="flex justify-between items-center bg-transparent px-4 lg:px-6 py-3">

        <div>
          <img src="/img/logo2.svg" class="h-6 w-6"/>
        </div>

        <div class="flex items-center space-x-3">
          <router-link to ="register" class="text-white bg-purple-600 px-3 py-2 rounded-lg font-body text-sm font-extrabold"> Get started </router-link>
          <router-link to ="login" class="font-extrabold text-purple-600 font-body text-sm rounded-lg px-3 py-2 hover:bg-purple-200 hover:text-purple-600"> Login </router-link>

        </div>
         

       </div>


     <!--   end of the navigational bar -->


          <div class="justify-center p-8 leading-tight">

            <div class="  text-purple-700 cursor-pointer mt-24">
    
              <h1 class="text-purple-600 font-black text-center font-display text-4xl lg:text-6xl"> Resume.ly</h1>

            </div>


            <h2 class=" mt-2 text-center font-body font-black tracking-wider text-gray-900 cursor-pointer text-2xl lg:text-5xl lg:mt-6 hover:text-gray-800"> Career Social Network</h2>

            <p class="text-center mt-4 font-body font-bold tracking-wider text-gray-900 cursor-pointer text-md lg:text-lg lg:mt-6 hover:text-gray-900"> Connecting you with global  opportunities</p>

           <!--  The button flex -->

         <!--  
          <router-link to="/register" class="flex justify-center items-center mt-8">

              <button type="button" class="font-body justify-center align-center items-center ml-1 px-4 py-3  border border-transparent font-extrabold text-white rounded-lg m-2 tracking-wide bg-purple-600 text-xs lg:block hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
                Get Started
              </button>
              
          </router-link> -->

            
             <!--  End of the flex -->




             <div class="flex mt-12 justify-center items-center sm:grid-cols-1">

              <div>

                <img src="/img/google.png" class="h-20 w-auto object-cover object-center">
                
              </div>

                <div>
                  <img src="/img/ios.png" class="h-16 w-auto object-cover object-center rounded-lg">
              </div>
               
             </div>
            
          </div>

 <!--      The features Section -->

         <div class="mt-16">


          <div class="flex justify-between px-4 lg:px-16">

            <div class="p-4 w-1/2 w-full ">
              <h1 class="text-gray-900 text-4xl font-extrabold font-body tracking-wider"> Connect With Professionals</h1>

              <p class="text-gray-900 font-display font-medium text-2xl tracking-wider"> Get the Opportunity to connect with professionls from your favorite industry </p>

             <button type="button" class="mt-8 font-body justify-center align-center items-center ml-1 px-4 py-3  border border-transparent font-extrabold text-white rounded-lg m-2 tracking-wide bg-purple-800 text-xs lg:block hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
                Get Started
              </button>

            </div>

            <div class="hidden lg:block lg:w-1/2 lg:w-full">

              <img class="object-center object-cover h-full w-full" src="/img/cowork.svg">
              

            </div>
            

          </div>

         <!--  End of the first flex -->


          <div class="flex justify-between px-4 lg:px-16 mt-16">

             <div class="hidden lg:block lg:w-1/2 lg:w-full">

              <img class="object-center object-cover h-full w-full" src="/img/job.svg">
              

            </div>

            <div class="p-4 w-1/2 w-full ">
              <h1 class="text-gray-900 text-4xl font-extrabold font-body tracking-wider"> Get Access To Genuine Jobs</h1>

              <p class="text-gray-900 font-display font-medium text-2xl tracking-wider"> Get the Opportunity to connect with professionls from your favorite industry </p>

             <button type="button" class="mt-8 font-body justify-center align-center items-center ml-1 px-4 py-3  border border-transparent font-extrabold text-white rounded-lg m-2 tracking-wide bg-purple-800 text-xs lg:block hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
                Get Started
              </button>

            </div>



           
            

          </div>

           <!--  End of the second flex -->

            <div class="flex justify-between px-4 lg:px-16 mt-16">

            

            <div class="p-4 w-1/2 w-full ">
              <h1 class="text-gray-900 text-4xl font-extrabold font-body tracking-wider "> Recruits Talents Seamlessly</h1>

              <p class="text-gray-900 font-display font-medium text-2xl tracking-wider"> Get the Opportunity to connect with professionls from your favorite industry </p>

             <button type="button" class="mt-8 font-body justify-center align-center items-center ml-1 px-4 py-3  border border-transparent font-extrabold text-white rounded-lg m-2 tracking-wide bg-purple-800 text-xs lg:block hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple focus:border-purple-600 active:bg-purple-600 transition duration-150 ease-in-out">
                Get Started
              </button>

            </div>

             <div class="hidden lg:block lg:w-1/2 lg:w-full">

              <img class="object-center object-cover h-full w-full" src="/img/interview.svg">
              

            </div>



           
            

          </div>

           <!--  End of the second flex -->
           


         </div>


                <!-- End of the featured section -->
          
          
          


   <!--  The footer components -->

         <div class="mt-12 bg-transparent flex items-center justify-between py-2 px-4">

        
              <ul class="flex items-center text-gray-700 space-x-3 font-body text-md">
          

            <li class="rounded-lg px-3 py-2 tracking-wider hover:bg-purple-300 hover:text-purple-600 text-sm cursor-pointer"> Team</li>

            <li class="rounded-lg px-3 py-2 tracking-wider hover:bg-purple-300 hover:text-purple-600 text-sm cursor-pointer"> Legal</li>

    
          </ul>

       

       
              <ul class="flex items-center text-gray-700 space-x-3 font-display text-md">
            
            

            <li class="rounded-lg px-3 py-2 tracking-wider hover:bg-purple-400 hover:text-purple-600 text-sm cursor-pointer">Blog </li>
            <li class="rounded-lg px-3 py-2 tracking-wider hover:bg-purple-400 hover:text-purple-600 text-sm cursor-pointer">Medium </li>

            <li class="rounded-lg px-3 py-2 tracking-wider hover:bg-purple-400 hover:text-purple-600 text-sm cursor-pointer">Twitter</li>
          </ul>

    
        

  </div>

 <!--  End of the footer -->
  


  

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
        
        this.$router.push("/feeds")


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

//  #Landing{
// background-color: #faf8fd;
// background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1179%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(254%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M26.62 338.83a5.6 5.6 0 1 0-7.56-8.25 5.6 5.6 0 1 0 7.56 8.25zM15.82 327.04a5.6 5.6 0 1 0-7.57-8.26 5.6 5.6 0 1 0 7.57 8.26zM5.01 315.24a5.6 5.6 0 1 0-7.57-8.26 5.6 5.6 0 1 0 7.57 8.26zM-5.8 303.44a5.6 5.6 0 1 0-7.56-8.26 5.6 5.6 0 1 0 7.56 8.26zM60.04 351.62a5.6 5.6 0 1 0-7.57-8.25 5.6 5.6 0 1 0 7.57 8.25zM49.23 339.83a5.6 5.6 0 1 0-7.57-8.26 5.6 5.6 0 1 0 7.57 8.26zM38.42 328.03a5.6 5.6 0 1 0-7.56-8.26 5.6 5.6 0 1 0 7.56 8.26zM27.61 316.23a5.6 5.6 0 1 0-7.56-8.26 5.6 5.6 0 1 0 7.56 8.26zM93.45 364.41a5.6 5.6 0 1 0-7.57-8.26 5.6 5.6 0 1 0 7.57 8.26zM82.64 352.62a5.6 5.6 0 1 0-7.56-8.26 5.6 5.6 0 1 0 7.56 8.26zM71.83 340.82a5.6 5.6 0 1 0-7.56-8.26 5.6 5.6 0 1 0 7.56 8.26zM61.03 329.02a5.6 5.6 0 1 0-7.57-8.26 5.6 5.6 0 1 0 7.57 8.26z' stroke='rgba(107%2c 70%2c 193%2c 1)' stroke-width='1'%3e%3c/path%3e%3cpath d='M1407.51 400.29 L1379.9299999999998 377.38L1376.8774783993408 405.677521600659z' fill='rgba(107%2c 70%2c 193%2c 1)'%3e%3c/path%3e%3cpath d='M1356.02 58.11L1355.92 45.3 1368.39 42.39 1368.28 29.58 1380.75 26.67 1380.64 13.86 1393.11 10.94M1362.31 63.05L1362.21 50.25 1374.68 47.33 1374.57 34.53 1387.04 31.61 1386.93 18.81 1399.4 15.89M1368.6 68L1368.49 55.19 1380.96 52.28 1380.86 39.47 1393.33 36.56 1393.22 23.75 1405.69 20.83' stroke='rgba(107%2c 70%2c 193%2c 1)' stroke-width='1' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='338.96' height='338.96' clip-path='url(%26quot%3b%23SvgjsClipPath1180%26quot%3b)' x='-89.32' y='-13.25' fill='url(%23SvgjsPattern1181)' transform='rotate(292.91%2c 80.16%2c 156.23)'%3e%3c/rect%3e%3cpath d='M24.74 269.24L36.12 263.36 44.35 273.17 55.73 267.29 63.96 277.1 75.34 271.22 83.57 281.03' stroke='rgba(107%2c 70%2c 193%2c 1)' stroke-width='2.35' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3cpath d='M1377.8600000000001 224.03 L1409.5900000000001 332.47L1349.6847868033155 322.2902131966845z' stroke='rgba(107%2c 70%2c 193%2c 1)' stroke-width='2.59'%3e%3c/path%3e%3cpath d='M117.15 391.47L125.08 381.42 136.63 386.95 144.56 376.9 156.11 382.43 164.05 372.38 175.6 377.92M118.95 399.26L126.89 389.21 138.44 394.74 146.37 384.69 157.92 390.23 165.85 380.18 177.4 385.71' stroke='rgba(107%2c 70%2c 193%2c 1)' stroke-width='1' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='198.4' height='198.4' clip-path='url(%26quot%3b%23SvgjsClipPath1182%26quot%3b)' x='820.51' y='385.16' fill='url(%23SvgjsPattern1183)' transform='rotate(309.84%2c 919.71%2c 484.36)'%3e%3c/rect%3e%3crect width='235.08' height='235.08' clip-path='url(%26quot%3b%23SvgjsClipPath1184%26quot%3b)' x='100.53' y='267.13' fill='url(%23SvgjsPattern1185)' transform='rotate(113.67%2c 218.07%2c 384.67)'%3e%3c/rect%3e%3crect width='354.96' height='354.96' clip-path='url(%26quot%3b%23SvgjsClipPath1186%26quot%3b)' x='-89.86' y='241.6' fill='url(%23SvgjsPattern1187)' transform='rotate(52.74%2c 87.62%2c 419.08)'%3e%3c/rect%3e%3cpath d='M847.14 546.19a5.6 5.6 0 1 0-7.02 8.73 5.6 5.6 0 1 0 7.02-8.73zM837.12 558.66a5.6 5.6 0 1 0-7.02 8.72 5.6 5.6 0 1 0 7.02-8.72zM827.09 571.12a5.6 5.6 0 1 0-7.02 8.73 5.6 5.6 0 1 0 7.02-8.73zM817.06 583.59a5.6 5.6 0 1 0-7.02 8.73 5.6 5.6 0 1 0 7.02-8.73z' stroke='rgba(107%2c 70%2c 193%2c 1)' stroke-width='1.23' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3cpath d='M859.64 541.3199999999999 L830.8 543.87L831.9448753483051 529.3198753483051z' stroke='rgba(107%2c 70%2c 193%2c 1)' stroke-width='2.78'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1179'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='8.92' height='8.92' patternUnits='userSpaceOnUse' id='SvgjsPattern1181'%3e%3cpath d='M4.46 1L4.46 7.92M1 4.46L7.92 4.46' stroke='rgba(107%2c 70%2c 193%2c 1)' fill='none' stroke-width='2.23'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1180'%3e%3ccircle r='84.74' cx='80.16' cy='156.23'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='12.4' height='12.4' patternUnits='userSpaceOnUse' id='SvgjsPattern1183'%3e%3cpath d='M6.2 1L6.2 11.4M1 6.2L11.4 6.2' stroke='rgba(107%2c 70%2c 193%2c 1)' fill='none' stroke-width='2.62'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1182'%3e%3ccircle r='49.6' cx='919.71' cy='484.36'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='235.08' height='13.06' patternUnits='userSpaceOnUse' id='SvgjsPattern1185'%3e%3crect width='235.08' height='6.53' x='0' y='0' fill='rgba(107%2c 70%2c 193%2c 1)'%3e%3c/rect%3e%3crect width='235.08' height='6.53' x='0' y='6.53' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1184'%3e%3ccircle r='58.77' cx='218.07' cy='384.67'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.86' height='9.86' patternUnits='userSpaceOnUse' id='SvgjsPattern1187'%3e%3cpath d='M0 9.86L4.93 0L9.86 9.86' stroke='rgba(107%2c 70%2c 193%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1186'%3e%3ccircle r='88.74' cx='87.62' cy='419.08'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");

// }


</style>
