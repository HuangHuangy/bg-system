import {login} from '@/api/login'

const user = {
  state: {
    email: localStorage.getItem('email')
  },
  mutations: {
    SET_EMAIL (state, email) {
      localStorage.setItem('email', email)
      state.email = email
    }
  },
  actions: {
    LoginByEmail ({commit}, userInfo) {
      const email = userInfo.email.trim()
      return new Promise((resolve, reject) => {
        login(email, userInfo.pass).then((response) => {
          if (response.data.status === 1) {
            commit('SET_EMAIL', email)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default user
