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

</template>

<script>
export default {
  asyncData (context) {
    return 
    { 
      name: 'World' 
    }
  }
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
}

.login-form {
  background: white;
}

label {
  margin-right: .5rem;
}

</style>
