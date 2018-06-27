<template lang='pug'>
section.container
  nav.panel.signup-form
    p.panel-heading Sign Up
    .panel-block.is-active
      label Username
      .control
        input.input(type="text" placeholder="")
    .panel-block
      label Email
      .control
        input.input(type="text" placeholder="")
    .panel-block
      label Password
      .control
        input.input(type="password" placeholder="")
    .panel-block
      button.button.is-primary.is-outlined.is-fullwidth Sign Up

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

.signup-form {
  background: white;
}

label {
  margin-right: .5rem;
}

</style>
