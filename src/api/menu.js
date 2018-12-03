// 接口统一放在api里
import request from '@/utils/request'

export function getMenuData (username) {
  return request({
    url: '/menu/menu',
    method: 'get',
    params: { username }
  })
}
