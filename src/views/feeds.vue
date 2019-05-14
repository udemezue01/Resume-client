<template>
  <div class="feeds">
 	<feeds-d>  </feeds-d>
  </div>
</template>

<script>

import feeds_d from '@/components/desktop/feeds.vue';
import feeds_m from '@/components/mobile/feeds.vue';

export default {
  name: 'home',
components:{
		'feeds-d':feeds_d,
		'feeds-m':feeds_m,
	}
}
</script>
