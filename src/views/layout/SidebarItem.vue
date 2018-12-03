<!--子组件-->
<template>
    <div>
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <template v-for="menu in menuData">
          <template v-if="menu.subs">
            <!--在vue2.0.0+的版本中，使用v-for时，key是必须的，否则会报错，el-submenu标签上报错-->
            <el-submenu :index="menu.index" :key="menu.index">
              <template slot="title">
                <i :class="menu.icon"></i>
                <span>{{menu.title}}</span>
              </template>
              <template v-for="sub in subs">
                <el-munu-item-group :index="sub.index" :key="sub.index">
                  <span slot="title">sub.title</span>
                </el-munu-item-group>
              </template>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { getMenuData } from '@/api/menu'
export default {
  name: 'SidebarItem',
  // props: { // 1.子组件在props中创建一个属性，用以接收父组件传过来的值
  //   sidebarData: {
  //     type: Array
  //   }
  // },
  data () {
    return {
      isCollapse: true,
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
  },
  methods: {
    getlist () {
      getMenuData(this.email).then((res) => {
        console.log(res, 'menu')
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
    min-height: 400px;
  }
</style>
