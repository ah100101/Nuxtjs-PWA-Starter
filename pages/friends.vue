<template lang='pug'>
section.container.friends
  .search
    .field
      p(class="control has-icons-left has-icons-right")
        input(class="input" type="text" placeholder="Search current friends")
        span(class="icon is-small is-left")
          i.material-icons search
  .columns.is-centered
    .column
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

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: $family-serif;
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
