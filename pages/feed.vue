<template lang='pug'>
section.container  
  .card
    .card-image
      figure.image.is-4by3
        img(src='https://bulma.io/images/placeholders/1280x960.png', alt='Placeholder image')
    .card-content
      .post-tags.field
        .control
          .tags.has-addons
            span.tag.tag-icon S
            span.tag.tag-amount 20
        .control
          .tags.has-addons
            span.tag.tag-icon B
            span.tag.tag-amount 1
        .control
          .tags.has-addons
            span.tag.tag-icon C
            span.tag.tag-amount 13
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
import authenticatedMixin from '~/mixins/authenticated.js'

export default {
  asyncData (context) {
    return 
    { 
      
    }
  },
  mixins: [
    authenticatedMixin
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

.tags {
  margin: 0px 5px;
  
  .tag-icon {
    background-color: $light-shade;
  }

  .tag-amount {
    background-color: $light-accent;
    color: white;
  }
}


</style>
