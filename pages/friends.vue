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
      listItem
      listItem
      listItem
      listItem
      listItem
      .link-to-search
        nuxt-link.button.is-primary(to='/search') Find Friends
</template>  

<script>
import authenticatedMixin from '~/mixins/authenticated.js'
import listItem from '~/components/friends/ListItem.vue'

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
    listItem
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

  .link-to-search {
    padding: 1rem;
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
