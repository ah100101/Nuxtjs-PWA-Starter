<template lang='pug'>
section.container
  .user-info
    .card
      .card-content
        .media
          .media-left
            figure.image.is-64x64
              img(src='https://bulma.io/images/placeholders/96x96.png', alt='Placeholder image')
          .media-content.profile-name
            p.title.is-4 John Smith
            p.subtitle @johnsmith
        .content
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          | Phasellus nec iaculis mauris. 
        nav.level.is-mobile
          .level-item.has-text-centered
              div
                p.heading Following
                p.title 38
          .level-item.has-text-centered
              div
                p.heading Followers
                p.title 10
          .level-item.has-text-centered
            div
              p.heading Gifts Posted
              p.title 138
          .level-item.has-text-centered
            div
              p.heading Gifts Given
              p.title 83
        a.button.is-primary.follow-button Follow
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
  font-family: $family-serif;

  .level {
    .title {
      font-size: 1.5rem;
    }
  }

  .follow-button {
    width: 100%;
    border-radius: 3px;
  }
}

.user-feed {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: $family-serif;
}

.profile-name {
  font-size: 1.15rem;
}

</style>
