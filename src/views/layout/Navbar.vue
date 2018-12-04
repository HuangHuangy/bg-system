<template>
    <div>
      <div @click="iconChange">
         <i class="iconfont icon-caidan-zhankai" v-show="isShow"></i>
         <i class="iconfont icon-caidan-shouqi" v-show="!isShow"></i>
         Dashboard
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="imageUrl" alt=""><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>Home</el-dropdown-item>
          </router-link>
          <el-dropdown-item @click="logOut">LogOut</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World',
      isShow: true,
      imageUrl: ''
    }
  },
  methods: {
    iconChange () {
      setTimeout(() => {
        this.isShow = !this.isShow
      }, 500)
    }
  }
}
</script>

<style scoped>
</style>
