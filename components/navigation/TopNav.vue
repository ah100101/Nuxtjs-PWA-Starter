<template lang='pug'>
  .topnav
    nav.navbar.is-fixed-top.is-transparent
      .navbar-brand
        nuxt-link.navbar-item.brand-link(to='/') Better Gift
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
</template>

<script>
export default {
  data: () => {
    return {
      expanded: false
    }
  },
  props: [
    
  ],
  mounted: function() {

  },
  components: {

  },
  methods: {
    sendTo: function (route) {
      this.expanded = false
      this.$router.push({
        path: route
      })
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
}

.navbar-brand {
  font-family: $family-brand;
  
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
</style>
