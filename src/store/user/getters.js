export default {

  uid (state) {
    if (state.user && state.user.uid) return state.user.uid
    else return null
  },

  user (state) {
    return state.user
  },

  isAuthenticated (state) {
    return !!state.user && !!state.user.uid
  }
}
