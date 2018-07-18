<template lang='pug'>
section.container
  .user-info
    .card
      .card-content
        .media
          .media-left
            figure.image.is-48x48
              img(src='https://bulma.io/images/placeholders/96x96.png', alt='Placeholder image')
          .media-content
            p.title.is-4 John Smith
            p.subtitle.is-6 @johnsmith
        .content
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          | Phasellus nec iaculis mauris. 
          a @bulmaio
          | .
  .user-feed
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

.user-info {
  margin-top: 3.25rem;
}

.user-feed {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: $family-serif;
}

</style>
