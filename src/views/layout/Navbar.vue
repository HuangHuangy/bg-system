<template>
    <div class="Navbar">
      <div class="menu-control" @click="iconChange()" >
         <i class="iconfont icon-caidan-zhankai" v-show="isShow"></i>
         <i class="iconfont icon-caidan-shouqi" v-show="!isShow"></i>
         Dashboard
      </div>
      <el-dropdown trigger="click" class="user-info">
        <span class="el-dropdown-link">
          <img :src="imageUrl" alt=""><i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item class="back-home">Home</el-dropdown-item>
          </router-link>
          <el-dropdown-item @click.native="logOut()">LogOut</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<script>
import {getUserInfo, logout} from '@/api/login'
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
    if (this.email) {
      this.getlist()
    } else {
      // this.$router.push({path: '/'})
    }
  },
  computed: {
    // mapState工具函数会将store中的state映射到局部计算属性中
    ...mapState({
      'email': state => state.user.email
    })
  },
  methods: {
    iconChange (data) {
      setTimeout(() => {
        this.isShow = !this.isShow
        this.isCollapse = !this.isCollapse
        let data = {
          Collapse: this.isCollapse
        }
        this.$emit('changeCollapse', data)
      }, 300)
    },
    getlist () {
      getUserInfo(this.email).then((res) => {
        this.imageUrl = res.data.admin.avatar
      })
    },
    logOut () {
      logout().then((res) => {
        this.$store.commit('SET_EMAIL', '')
        this.$router.push({path: '/'})
        // location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style scoped>
  .Navbar{
    position: relative;
    height: 50px;
    line-height: 50px;
  }
  .Navbar .menu-control{
    display: inline-block;
    line-height: 50px;
  }
  .Navbar .menu-control i{
    padding-right: 10px;
  }
  .Navbar .user-info{
    position: absolute;
    right: 35px;
  }
  .user-info span img{
    margin-top: 5px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
</style>
