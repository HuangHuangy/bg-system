<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /* 引入字体*/
  @font-face {
    font-family: 'iconfont';  /* project id 936206 */
    src: url('//at.alicdn.com/t/font_936206_oikvyv5xsno.eot');
    src: url('//at.alicdn.com/t/font_936206_oikvyv5xsno.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_936206_oikvyv5xsno.woff') format('woff'),
    url('//at.alicdn.com/t/font_936206_oikvyv5xsno.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_936206_oikvyv5xsno.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .login .el-input__inner{
    padding-left: 40px;
  }
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
