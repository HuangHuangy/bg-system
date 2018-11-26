<template>
  <div class="login">
    <el-form class="login-form" :rules = rules :model="loginForm" ref="loginForm" label-width="100px">
      <h3>后台系统登录</h3>
      <el-form-item
        class="login-input"
        prop="email">
        <span class="iconfont">&#xe608;</span>
        <el-input class="" v-model="loginForm.email" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item
        class="login-input"
        prop="pass">
        <span class="iconfont">&#xe603;</span>
        <el-input type="password" v-model="loginForm.pass" placeholder="密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        email: '',
        pass: ''
      },
      rules: {
        email: [
          {validator: validateEmail, trigger: 'blur'}
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
  }
  .login h3{
    margin-left: 100px;
    text-align: center;
  }
  .login .login-form{
    position: absolute;
    /*z-index: 999;*/
    left: 50%;
    margin-left: -200px;
    margin-top: -188px;
    top: 50%;
    width: 400px;
  }
  .login .login-btn{
    width: 100%;
  }
  .login .login-input{
    position: relative;
  }
  .login .login-input .iconfont{
    position: absolute;
    left: 15px;
    top: 0;
    z-index: 1;
  }
</style>
