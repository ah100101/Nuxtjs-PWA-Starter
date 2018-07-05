<template lang='pug'>
.card
  .card-image
    figure.image.is-1by1
      img(src='https://bulma.io/images/placeholders/1280x960.png', alt='Placeholder image')
      basket(purchased='true' stolen='true')
  .card-content
    .post-tags.field
      badge(icon='starEmpty', score='21')
      badge(icon='bookmarkBorder', score='9')
      badge(icon='chatZero', score='13')
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
      a(href='#') #css
      a(href='#') #responsive
      br
      time(datetime='2016-1-1') Jan 1st 2016 @ 11:09 PM
</template>  

<script>
import badge from '~/components/feed/Badge.vue'
import basket from '~/components/feed/Basket.vue'

export default {
  asyncData (context) {
    return { 
      
    }
  },
  components: {
      badge,
      basket
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.content {
  text-align: left;
}

.post-tags {
  display: flex;
  justify-content: flex-end;

  .control {
    box-shadow: 0 5px 6px -6px;
  }
}

</style>
