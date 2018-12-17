<template>
    <div>
      <div class="sidebar">
        <sidebar-item :isCollapse="isCollapse"></sidebar-item>
      </div>
        <div :class="{navbar: !isCollapse, hideNavbar: isCollapse}">
          <Navbar @changeCollapse="updateCollapse"></Navbar>
          <div class="content">
            <router-view></router-view>
          </div>
        </div>
    </div>
</template>

<script>
// import Sidebar from './Sidebar'
import Navbar from './Navbar'
import SidebarItem from './SidebarItem'
export default {
  name: 'index',
  // components: {SidebarItem, Sidebar, Navbar},
  components: {SidebarItem, Navbar},
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    updateCollapse (data) {
      console.log(data, 'Sidebar')
      this.isCollapse = data.Collapse
    }
  }
}
</script>

<style scoped>
  .navbar{
    margin-left: 220px;
  }
  .hideNavbar{
    margin-left: 84px;
    transition: margin-left .28s;
  }
  .sidebar{
    display: inline-block;
    max-width: 200px;
    position: fixed;
    left: 0;
    top: 0;
  }
  .el-menu--collapse{
    height: 100vh;
  }

</style>
