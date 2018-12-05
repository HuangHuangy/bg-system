<template>
    <div>
        <div class="navbar">
          <Navbar></Navbar>
        </div>
        <div class="sidebar">
          <sidebar></sidebar>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'
export default {
  components: {Sidebar, Navbar},
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<style scoped>
  .navbar{
    margin-left: 200px;
  }
  .sidebar{
    display: inline-block;
    max-width: 200px;
    position: fixed;
    left: 0;
    top: 0;
  }
</style>
