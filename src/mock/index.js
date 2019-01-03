// import
import Mock from 'mockjs'
import loginAPI from './login' // 调用login的数据
import getMenuDataAPI from './menu' // 调用login的数据

// Mock.mock(url, post/get, 返回的数据
// login
Mock.mock(/\/login\/login/, 'post', loginAPI.login)
// logout
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)

// gitUserInfo
Mock.mock(/\/login\/login/, 'get', loginAPI.getUserInfo)
// 主菜单数据
Mock.mock(/\/menu\/menu/, 'get', getMenuDataAPI.getMenuData)

export default Mock
