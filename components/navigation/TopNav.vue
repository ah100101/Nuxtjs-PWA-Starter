<template lang='pug'>
  .topnav
    nav.navbar.is-fixed-top.is-transparent
      .navbar-brand
        a.navbar-item.brand-text(href='#') Better Gift
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
          a.navbar-item(href='#') Login
          a.navbar-item(href='#') Signup
          a.navbar-item(href='#') About Us
          a.navbar-item(href='#') Contact Us
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

  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.topnav {
  font-family: $family-serif;

  .navbar {
    background-color: $light-shade;
  }
}

.navbar-brand {
  font-family: $family-brand;
}

.brand-text {
  color: $brand;
}

</style>
