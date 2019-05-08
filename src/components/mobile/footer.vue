<template>
  <div class="footer" >

    <div class="uk-section uk-section-xsmall uk-section-default uk-position-bottom uk-position-fixed" style="border-top: 1px solid #f2f2f2">
      <div class="uk-container uk-container-small uk-text-small">
        <div class="uk-grid" data-uk-grid>
          <div class="uk-width-expand">
            <a href="#" class="uk-link-reset"><span data-uk-icon="icon: arrow-right"></span> <strong>Next article</strong>
            <span class="uk-visible@s">- Vivamus hendrerit tristique tortor vel ultricies</span></a>
          </div>
          <div class="uk-width-auto uk-text-right">
            <a href="#" class="uk-icon-link" data-uk-icon="icon: facebook"></a>
            <a href="#" class="uk-icon-link" data-uk-icon="icon: twitter"></a>
            <a href="#" class="uk-icon-link" data-uk-icon="icon: instagram"></a>
          </div>
        </div>
      </div>
    </div>

    

  </div>
</template>

<script>


export default {
  data(){
    return{
      brand:'Resume.Io',
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '../../theme/theme.less';




.hook-navbar-container() {
  padding-left:20px;
  padding-right:20px;
  margin-right: auto;
  margin-left: auto;

}


</style>
