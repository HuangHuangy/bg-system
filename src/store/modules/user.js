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
      // const email = userInfo.email.trim()
      return new Promise((resolve, reject) => {
        resolve()
      })
    }
  }
}
export default user
