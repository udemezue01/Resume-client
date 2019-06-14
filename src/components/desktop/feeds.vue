<template>
  <div id="feeds" class="uk-container">

  	<div class="uk-padding" uk-grid>
  			<!-- the first grid -->
  		<div class="uk-width-1-4@l">
  			<img src="/img/udem.jpg" height="300px" width="600px">

  		</div>
  		<!-- end of the first grid -->
  			<!-- the second grid -->
  		<div class="uk-width-2-4@l">
  			

  		</div>
  		<!-- end of the second grid -->
  			<!-- the third grid -->
  		<div class="uk-width-1-4@l">
  			

  		</div>
  		<!-- end of the third grid -->
  		

  	</div>
   
  </div>
</template>


<script>
import {mapState, mapActions} from 'vuex';
export default {

data(){
	return {
    comment:{

      content:'',
      media:''
    },

     stream:{


    },
     reactions:{

    },



	}
},

computed:{
  ...mapState('stream', [
    


    ]),
 
},
methods:{
   ...mapActions('comment', [
      'createComment',
      'updateComment',
      'deleteComment',

    ]),


},
created(){
  this.getFeed

}


}


</script>


<style lang="less" scoped>

</style>
