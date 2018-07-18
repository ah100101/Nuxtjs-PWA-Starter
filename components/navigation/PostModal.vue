<template lang='pug'>
  .post-modal
    .modal(v-bind:class='{ "is-active": show }')
      .modal-background(v-on:click='close()')
      .modal-card
        section.modal-card-body.modal-form
          .field
            label.label Gift Url
            .control
              input.input.is-success(type="text" placeholder="")
          .field
            label.label Message
            .control
              textarea.textarea(placeholder="")
          button.button.is-primary.submit Post
      button.modal-close.is-large(aria-label="close" v-on:click='close()')
</template>

<script>
export default {
  data: () => {
    return {
      
    }
  },
  props: [
    'show'
  ],
  mounted: function () {
    
  },
  components: {

  },
  methods: {
    close: function () {
      this.$emit('close')
    }
  },
  computed: {
    
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.post-modal {
  button.submit {
    width: 100%;
  }

  .modal-card {
    border-radius: 3px;
  }
  
}

</style>
