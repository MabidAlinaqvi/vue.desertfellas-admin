const adminModule = {
    state: {
      isAdmin: false
    },
    mutations: {
      setAdmin(state, isAdmin) {
        state.isAdmin = isAdmin
      }
    },
    actions: {
      login({ commit }, credentials) {
        // Perform login logic for admin user
        commit('setAdmin', true)
      },
      logout({ commit }) {
        // Perform logout logic for admin user
        commit('setAdmin', false)
      }
    },
    getters: {
      isAdmin: state => state.isAdmin
    }
  }
  
  const userModule = {
    state: {
      isUser: false,
      isManager: false
    },
    mutations: {
      setUser(state, isUser) {
        state.isUser = isUser
      },
      setManager(state, isManager) {
        state.isManager = isManager
      }
    },
    actions: {
      login({ commit }, credentials) {
        // Perform login logic for regular user
        commit('setUser', true)
      },
      logout({ commit }) {
        // Perform logout logic for regular user
        commit('setUser', false)
      }
    },
    getters: {
      isUser: state => state.isUser,
      isManager: state => state.isManager
    }
  }
  