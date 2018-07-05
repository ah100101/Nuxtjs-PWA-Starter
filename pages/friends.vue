<template lang='pug'>
section.friends
  .columns.is-centered
    .column
      .search
        .field
          p(class="control has-icons-left has-icons-right")
            input(class="input" type="text" placeholder="Search current friends")
            span(class="icon is-small is-left")
              i.material-icons search
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
            div sup
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
  ],
  components: {
    
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.friends {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: $family-serif;

  .columns {
    margin: 0;
    width: 100%;
  }

  .column {
    padding: 0;
  }

  .box.friend {
    border-radius: 0px;
    padding: .5rem;

    img {
      border-radius: 5px;
    }

    .name {
      line-height: 1rem;
    }
  }
}

.search {
  margin-top: 3.25rem;
  width: 100%;

  input {
    border-radius: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
  }
}

</style>
