import Cookies from 'js-cookie'

export default {

  async login ({dispatch, state}, user) {
    console.log('[STORE ACTIONS] - login')
    console.log(user)
    const token = await this.$fireAuth.currentUser.getIdToken(true)
    const userInfo = {
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL,
      uid: user.uid
    }

    Cookies.set('access_token', token) // saving token in cookie for server rendering
    await dispatch('setUSER', userInfo)
    await dispatch('saveUID', userInfo.uid)
    console.log('[STORE ACTIONS] - in login, response:', status)
  },

  async logout ({commit, dispatch}) {
    console.log('[STORE ACTIONS] - logout')
    await this.$fireAuth.signOut()

    Cookies.remove('access_token')
    commit('setUSER', null)
    commit('saveUID', null)
  },

  saveUID ({commit}, uid) {
    console.log('[STORE ACTIONS] - saveUID')
    commit('saveUID', uid)
  },

  setUSER ({commit}, user) {
    commit('setUSER', user)
  }

}
