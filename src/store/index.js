import { createStore } from 'vuex';

export default createStore({
  state: {
    loggedIn: false, // Track whether the user is logged in
  },
  mutations: {
    SET_LOGGED_IN(state, status) {
      state.loggedIn = status;
    },
  },
  actions: {
    logIn({ commit }) {
      commit('SET_LOGGED_IN', true);
    },
    logOut({ commit }) {
      commit('SET_LOGGED_IN', false);
    },
  },
  getters: {
    isLoggedIn: (state) => state.loggedIn,
  },
});
