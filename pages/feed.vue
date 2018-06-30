<template lang='pug'>
section.container
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

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: $family-serif;
}

.tags {
  margin: 0px 5px;
  
  .tag-icon {
    background-color: $light-shade;
  }

  .tag-amount {
    background-color: $light-accent;
    color: white;
  }

  .material-icons {
    font-size: 1rem;
    height: 1.5rem;
    padding-left: .5rem;
    padding-right: .5rem;
  }
}

</style>
