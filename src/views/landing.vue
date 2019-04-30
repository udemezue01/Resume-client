<template>
  <div id="landing">
  	<div class="uk-cover-container" uk-height-viewport>
    <div class="uk-grid-collapse uk-child-width-1-2@m uk-child-width-1-1@s uk-flex-middle" uk-grid>
            <div class="uk-background-cover uk-visible@l" style="background-image: url('img/france.jpg');" uk-height-viewport></div>
            <div class="uk-padding-large uk-flex-center">
                <div class="uk-margin-medium-top">
                        <ul class="uk-flex-center" uk-tab>
                           
                            <li><a href="#">LOGIN</a></li>
                            <li><a href="#">SIGN UP</a></li>
                        </ul>
                    </div>
            <div class="uk-width-large uk-padding-large" >


        <form action="">
          <fieldset class="uk-fieldset">
          <!--   <legend class="uk-legend"></legend> -->
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
                <input class="uk-input uk-form-xlarge" required placeholder="Email" type="email">
              </div>
            </div>
            <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                <input class="uk-input uk-form-xlarge" required placeholder="Password" type="password">
              </div>
            </div>
            
            <div class="uk-margin">
              <label><input class="uk-checkbox" type="checkbox"> Keep me logged in</label>
            </div>
            <div class="uk-margin">
              <button type="submit" class="uk-button uk-button-primary uk-button-large uk-width-1-1">LOG IN</button>
            </div>
            
          </fieldset>
        </form>
        <div class="uk-margin">
              <button type="submit" class="uk-button uk-button-danger uk-button-large uk-width-1-1">LOGIN WITH GOOGLE</button>
            </div>
        <div>
          <div class="uk-text-center">
            <a class="uk-link-reset uk-text-small" data-uk-toggle="target: #recover;animation: uk-animation-slide-top-small">Forgot your password?</a>
          </div>
          <div class="uk-margin-small-top" id="recover" hidden>
            <form action="">
              
              <div class="uk-margin-small">
                <div class="uk-inline uk-width-1-1">
                  <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
                  <input class="uk-input" placeholder="E-mail" required type="text">
                </div>
              </div>
              <div class="uk-margin-small">
                <button type="submit" class="uk-button uk-button-primary uk-button-large uk-width-1-1">SEND PASSWORD</button>
              </div>
              
            </form>
        </div>
          </div>
      </div>
  </div>
</div>
</div>
</div>
</template>

<script>

export default {
  name: 'home',
   
}
</script>
