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
