<!--子组件-->
<template>
  <el-menu class="el-menu-vertical-demo"
           @changeCollapse="updateCollapse"
           background-color="pink"
           :collapse="isCollapse"
           router>
        <template v-for="menu in menuData">
          <template v-if="menu.subs">
            <!--在vue2.0.0+的版本中，使用v-for时，key是必须的，否则会报错，el-submenu标签上报错-->
            <el-submenu :index="menu.index" :key="menu.index">
              <template slot="title">
                <i :class="menu.icon"></i>
                <span slot="title">{{menu.title}}</span>
              </template>
              <template v-for="sub in menu.subs">
                <template v-if="sub.subs">
                  <el-submenu :index="sub.index" :key="sub.index">
                    <span slot="title"><i :class="sub.icon"></i>{{sub.title}}</span>
                    <template v-for="childred in sub.subs">
                      <el-menu-item :index="childred.index" :key="childred.index">{{childred.title}}</el-menu-item>
                    </template>
                  </el-submenu>
                </template>
                <template v-else>
                  <el-menu-item :index="sub.index" :key="sub.index">
                    <i :class="sub.icon"></i>
                    {{sub.title}}
                  </el-menu-item>
                </template>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="menu.index" :key="menu.index">
              <i :class="menu.icon"></i>
              <span slot="title">{{menu.title}}</span>
            </el-menu-item>
          </template>
        </template>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
import { getMenuData } from '@/api/menu'
export default {
  name: 'SidebarItem',
  props: ['isCollapse'], // 1.子组件在props中创建一个属性，用以接收父组件传过来的值
  data () {
    return {
      // isCollapse: true,
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
    }
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 100vh;
  }
</style>
