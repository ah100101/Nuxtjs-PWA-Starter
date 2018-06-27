<template lang='pug'>
  section.container
    applogo
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import unauthenticatedMixin from '~/mixins/unauthenticated.js'

export default {
  components: {
    applogo: AppLogo
  },
  mixins: [
    unauthenticatedMixin
  ]
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

</style>
