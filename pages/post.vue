<template lang='pug'>
section.container.post
  .columns.is-centered
    .column
      .post-form
        .field
          label.label Gift Url
          .control
            input.input.is-success(type="text" placeholder="")
        .field
          label.label Message
          .control
            textarea.textarea(placeholder="")
        .field.is-grouped
          .control.submit
            button.button.is-primary Post
  
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

.post {
  min-height: 100vh;
  display: flex;
  font-family: $family-serif;

  .columns {
    margin: 0;
    width: 100%;
  }

  .column {
    padding: 1rem;
  }

  .post-form {
    margin-top: 3.25rem;
    font-weight: initial;
  }

  .submit {
    width: 100%;

    .button {
      width: inherit;
    }
  }
}

</style>
