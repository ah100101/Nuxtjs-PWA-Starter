<template lang='pug'>
section.container
  nav.panel.login-form
    p.panel-heading Login
    .panel-block.is-active
      label Username
      .control
        input.input(type="text" placeholder="")
    .panel-block
      label Password
      .control
        input.input(type="password" placeholder="")
    .panel-block
      button.button.is-primary.is-outlined.is-fullwidth Login
    .panel-block.transparent
      nuxt-link.button.is-small.is-info(to='/forgot-password') Forgot?

</template>

<script>
import unauthenticatedMixin from '~/mixins/unauthenticated.js'

export default {
  asyncData (context) {
    return 
    { 
      
    }
  },
  mixins: [
    unauthenticatedMixin
  ]
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: $family-serif;
}

.login-form {
  background: white;
}

.transparent {
  border: 0px;
  background-color: $light-shade;
}

label {
  margin-right: .5rem;
}

</style>
