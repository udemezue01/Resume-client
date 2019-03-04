<template>
  <div class="feeds">
 	<feeds-d>  </feeds-d>
  </div>
</template>

<script>

import feeds_d from '@/components/desktop/feeds.vue';
import profile_m from '@/components/mobile/profile.vue';

export default {
  name: 'home',
components:{
		'feeds-d':feeds_d,
		'profile-m':profile_m,
	}
}
</script>
