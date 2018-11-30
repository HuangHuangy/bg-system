import {login} from '@/api/login'

const user = {
  state: {
    userName: ''
  },
  mutations: {
    setUserName (state, name) {
      state.userName = name
    }
  },
  actions: {
    LoginByEmail ({commit}, userInfo) {
      const email = userInfo.email.trim()
      return new Promise((resolve, reject) => {
        login(email, userInfo.pass).then((response) => {
          resolve()
        })
      })
    }
  }
}
export default user
