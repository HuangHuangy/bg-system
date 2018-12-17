import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// login
const Login = resolve => require(['../views/login/'], resolve)
const dashboard = resolve => require(['../views/layout/index'], resolve)
const form = resolve => require(['../views/form/index'], resolve)
const table = resolve => require(['../views/table/index'], resolve)
const tree = resolve => require(['../views/tree/index'], resolve)
const menu1 = resolve => require(['../views/nested/menu1/menu1-1'], resolve)
const menu2 = resolve => require(['../views/nested/menu1/menu1-2'], resolve)
const menu3 = resolve => require(['../views/nested/menu1/menu1-3'], resolve)
const menu4 = resolve => require(['../views/nested/menu2/index'], resolve)

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
      component: dashboard,
      children: [
        {
          path: '/form',
          name: 'form',
          component: form
        },
        {
          path: '/table',
          name: 'table',
          component: table
        },
        {
          path: '/tree',
          name: 'tree',
          component: tree
        },
        {
          path: '/menu1-1',
          name: 'menu1-1',
          component: menu1
        },
        {
          path: '/menu1-2',
          name: 'menu1-2',
          component: menu2
        },
        {
          path: '/menu1-3',
          name: 'menu1-3',
          component: menu3
        },
        {
          path: '/menu2',
          name: 'menu2',
          component: menu4
        }
      ]
    }
  ]
})
