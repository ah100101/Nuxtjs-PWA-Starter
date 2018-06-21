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
          nuxt-link.navbar-item(
            v-for='item in navItems'
            v-html='item.title'
            v-bind:to='item.url'
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
