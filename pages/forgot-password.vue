<template lang='pug'>
section.container
  nav.panel.reset-form
    p.panel-heading Reset Email
    .panel-block.is-active
      label Email
      .control
        input.input(type="text" placeholder="")
    .panel-block
      button.button.is-primary.is-outlined.is-fullwidth Send Reset Link

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

.reset-form {
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
