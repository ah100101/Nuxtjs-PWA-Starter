<template lang='pug'>
section.container.feed
  .columns.is-centered
    .column
      card
      card
      card
</template>  

<script>
import authenticatedMixin from '~/mixins/authenticated.js'
import card from '~/components/feed/Card.vue'

export default {
  asyncData (context) {
    return 
    { 
      
    }
  },
  mixins: [
    authenticatedMixin
  ],
  components: {
    card
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.feed {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: $family-serif;
  margin-top: 3.25rem;
}

</style>
