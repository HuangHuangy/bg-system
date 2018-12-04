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
import {getUserInfo} from '@/api/login'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      msg: 'Hello World',
      isShow: true,
      imageUrl: ''
    }
  },
  mounted () {
    console.log(this.email)
    this.getlist()
  },
  computed: {
    // mapState工具函数会将store中的state映射到局部计算属性中
    ...mapState({
      'email': state => state.user.email
    })
  },
  methods: {
    iconChange () {
      setTimeout(() => {
        this.isShow = !this.isShow
      }, 500)
    },
    getlist () {
      getUserInfo(this.email).then((res) => {
        console.log(res)
      })
    },
    logOut () {
    }
  }
}
</script>

<style scoped>
</style>
