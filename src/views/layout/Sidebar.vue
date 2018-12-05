<!--父组件-->
<template>
  <!--:default-active="activeMenu"-->
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="pink" :collapse="isCollapse" router>
      <!--3.在子组件标签中添加子组件props中创建的属性  4.把需要传给子组件的值赋值给该属性-->
      <sidebar-item :menuData="menuData"></sidebar-item>
    </el-menu>
</template>

<script>
import { mapState } from 'vuex'
import { getMenuData } from '@/api/menu'
import SidebarItem from '.././layout/SidebarItem'
export default {
  components: { SidebarItem }, // 2.在父组件中注册子组件
  data () {
    return {
      isCollapse: false,
      menuData: []
    }
  },
  mounted () {
    this.getlist()
  },
  computed: {
    // mapState工具函数会将store中的state映射到局部计算属性中
    ...mapState({
      'email': state => state.user.email
    })
    // activeMenu () {
    //   return this.$route.path.slice(1)
    // }
  },
  methods: {
    getlist () {
      getMenuData(this.email).then((res) => {
        this.menuData = res.data
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100vh;
    min-height: 400px;
  }
</style>
