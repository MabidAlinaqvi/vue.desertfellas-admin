const store = createStore({
    modules: {
      admin: adminModule,
      user: userModule
    },
    actions: {
      login({ dispatch }, credentials) {
        // Perform login logic for all user roles
        if (credentials.role === USER_ROLES.ADMIN) {
          dispatch('admin/login', credentials)
        } else {
          dispatch('user/login', credentials)
        }
      },
      logout({ dispatch }) {
        // Perform logout logic for all user roles
        dispatch('admin/logout')
        dispatch('user/logout')
      }
    }
  })
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const roles = to.meta.roles
  
    if (requiresAuth) {
      if (!store.getters.isAuthenticated) {
        next('/login')
      } else if (roles && !roles.includes(store.getters.userRole)) {
        next('/403')

      } else {
        next()
      }
    } else {
      next()
    }
  })  