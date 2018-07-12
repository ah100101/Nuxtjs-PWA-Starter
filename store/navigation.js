export const state = () => ({
  current: [],
  unauthenticated: [
    {
      title: 'Login',
      url: '/login',
      active: false
    },
    {
      title: 'Sign Up',
      url: '/sign-up',
      active: false
    },
    {
      title: 'About Us',
      url: '/about-us',
      active: false
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      active: false
    }
  ],
  authenticated: [
    {
      title: 'Feed',
      url: '/feed',
      active: false
    },
    {
      title: 'Post',
      url: '/post',
      active: false
    },
    {
      title: 'Friends',
      url: '/friends',
      active: false
    },
    {
      title: 'Find',
      url: '/search',
      active: false
    },
    {
      title: 'Logout',
      url: '/logout',
      active: false
    }
  ]
})

export const getters = {
  current: state => {
    return state.current
  }
}

export const actions = {
  setNavigation (context, navigation) {
    context.commit('setNavigation', navigation)
  }
}

export const mutations = {
  setNavigation (state, navigation) {
    if (state[navigation]) {
      state.current = state[navigation]
    } else {
      console.error('invalid navigation key provided: ' + navigation)
    }
  }
}
