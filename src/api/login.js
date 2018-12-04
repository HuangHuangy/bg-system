// 接口统一放在api里
import request from '@/utils/request'

export function login (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}
export function getUserInfo (username) {
  return request({
    url: '/login/login',
    method: 'get',
    params: { username }
  })
}
