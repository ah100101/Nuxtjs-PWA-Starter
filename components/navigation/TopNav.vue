<template lang='pug'>
  .topnav
    nav.navbar.is-fixed-top.is-transparent
      .navbar-overlay(v-show='expanded' v-on:click='expanded = false')
      .navbar-content
        .navbar-brand
          transition(name='bounce')
            nuxt-link.navbar-item.brand-link(
              to='/'
              v-if='!postDisplayed'
              ) Better Gift
            .navbar-item(v-else)
              button.button.is-primary.is-inverted.is-rounded.nav-post(
                v-on:click='showPostModal = true'
              ) Post
          .navbar-burger.burger(
            v-on:click='expanded = !expanded'
            v-bind:class='{ "is-active" : expanded }'
          )
            span
            span
            span
        .navbar-menu(
          v-bind:class='{ "is-active" : expanded }'
        )
          .navbar-start
            a.navbar-item(
              v-for='item in navItems'
              v-bind:key='item.url'
              v-html='item.title'
              v-on:click='sendTo(item.url)'
              )
          .navbar-end
            .navbar-item
    modal(
      v-on:close='showPostModal = false', 
      v-bind:show='showPostModal'
      )
</template>

<script>
import modal from './PostModal.vue'

const debounce = (fn, time) => {
  let timeout
  return function() {
    const functionCall = () => fn.apply(this, arguments)
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}

export default {
  data: () => {
    return {
      expanded: false,
      postDisplayed: false,
      showPostModal: false
    }
  },
  props: [
    
  ],
  mounted: function () {
    this.handleScroll()
    window.addEventListener('scroll', debounce(this.handleScroll, 500))
  },
  destroyed: function () {
    window.removeEventListener('scroll', debounce(this.handleScroll, 500))
  },
  components: {
    modal
  },
  methods: {
    sendTo: function (route) {
      this.expanded = false
      this.$router.push({
        path: route
      })
    },
    handleScroll: function () {
      if (window.scrollY !== 0) {
        this.postDisplayed = true
      } else if (this.postDisplayed) {
        this.postDisplayed = false
      }
    }
  },
  computed: {
    navItems: function () {
      return this.$store.getters['navigation/current']
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.topnav {
  font-family: $family-serif;

  .navbar {
    background-color: $brand;
  }

  .button.nav-post {
    font-family: $family-brand;
    background-color: $light-shade;
  }
}

.navbar-brand {
  font-family: $family-brand;
  background-color: $brand;

  .brand-link, .burger {
    color: $light-shade;
  }
  
  .brand-link:hover {
    color: $light-shade;
  }
}

.navbar-menu {
  background-color: $brand;

  .navbar-item {
    color: $light-shade;
  }

  .navbar-item:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: $light-shade;
  }
}

.navbar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.5);
  z-index: 0;
}

.navbar-content {
  z-index: 1;
  position: relative;
}

.modal-background {
  background-color: rgba(0, 0, 0, .5);
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in 0s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

</style>
