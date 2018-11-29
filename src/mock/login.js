const loginData = {
  status: 1,
  admin: {
    introduction: '管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  }
}

export default {
  login: config => {
    // const { username } = JSON.parse(config.body)
    return loginData
  }
}
