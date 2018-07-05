<template lang='pug'>
.box.friend
  article.media
    .media-left
      figure.image.is-32x32
        img(src='https://bulma.io/images/placeholders/128x128.png', alt='Image')
    .media-content
      .content
        .name
          strong John Smith
        .name
          small @johnsmith
    .media-right
      button.button.is-primary.is-small Following
</template>  

<script>
import authenticatedMixin from '~/mixins/authenticated.js'

export default {
  asyncData (context) {
    return 
    { 
      
    }
  },
  mixins: [
    
  ],
  components: {
    
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.box.friend {
  border-radius: 0px;
  padding: .5rem;
  margin-bottom: 0px;

  img {
    border-radius: 5px;
  }

  .name {
    line-height: 1rem;
  }
  
  article {
    align-items: center;
  }
}
</style>
