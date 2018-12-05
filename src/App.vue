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
  .login .el-input__inner{
    padding-left: 40px;
  }
  body{
    margin: 0;
  }
  .router-link-active{
    text-decoration: none;
  }
</style>
