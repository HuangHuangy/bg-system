// import
import Mock from 'mockjs'
import loginAPI from './login' // 调用api

// Mock.mock(url, post/get, 返回的数据
Mock.mock(/\/login\/login/, 'post', loginAPI.login)

export default Mock
