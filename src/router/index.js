import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// login
const Login = resolve => require(['../views/login/'], resolve)
const dashboard = resolve => require(['../views/layout/Navbar'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
