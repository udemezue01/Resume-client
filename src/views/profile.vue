<template>
  <div id="profile">

  	<profile-d class = "uk-visible@l">  </profile-d>
  	<profile-m class = "uk-hidden@l">  </profile-m>
   
  </div>
</template>

<script >
import profile_d from '@/components/desktop/profile.vue';
import profile_m from '@/components/mobile/profile.vue';

export default{
	components:{
		'profile-d':profile_d,
		'profile-m':profile_m,
	}

}


</script>

<style scoped lang="less">
	

</style>