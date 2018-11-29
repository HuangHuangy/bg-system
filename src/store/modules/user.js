const user = {
  state: {
    userName: ''
  },
  mutations: {
    setUserName (state, name) {
      state.userName = name
    }
  },
  action: {
    LoginByEmail ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
      })
    }
  }
}
export default user
