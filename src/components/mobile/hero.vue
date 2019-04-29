<template>
  <div id="hero">

  		<div class="uk-width-large uk-flex uk-flex-center uk-padding-large">
				<form action="">
					<fieldset class="uk-fieldset">
						<legend class="uk-legend">Login</legend>
						<div class="uk-margin">
							<div class="uk-inline uk-width-1-1">
								<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
								<input class="uk-input uk-form-large" required placeholder="Username" type="text">
							</div>
						</div>
						<div class="uk-margin">
							<div class="uk-inline uk-width-1-1">
								<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
								<input class="uk-input uk-form-large" required placeholder="Password" type="password">
							</div>
						</div>
						
						<div class="uk-margin">
							<label><input class="uk-checkbox" type="checkbox"> Keep me logged in</label>
						</div>
						<div class="uk-margin">
							<button type="submit" class="uk-button uk-button-primary uk-button-primary uk-button-large uk-width-1-1">LOG IN</button>
						</div>
					</fieldset>
				</form>
				<div>
				</div>
			</div>
   
  </div>
</template>


<script>

export default {

}

</script>


<style lang="less" scoped>

</style>
