import { createStore } from 'vuex';

export default createStore({
  state: {
    loggedIn: localStorage.getItem('loggedIn') === 'true', // Load state from localStorage
  },
  mutations: {
    SET_LOGGED_IN(state, status) {
      state.loggedIn = status;
      localStorage.setItem('loggedIn', status); // Save state to localStorage
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
