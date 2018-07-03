<template lang='pug'>
.control
  .tags.has-addons
    span.tag.tag-icon.material-icons(v-html='iconName')
    span.tag.tag-amount(v-html='score')
</template>

<script>
const iconNames = {
  starEmpty: 'star_border',
  starZero: 'star_border',
  starBorder: 'star_border',
  bookmarkEmpty: 'bookmark_border',
  bookmarkBorder: 'bookmark_border',
  bookmarkZero: 'bookmark_border',
  chatEmpty: 'chat_bubble_outline',
  chatBorder: 'chat_bubble_outline',
  chatZero: 'chat_bubble_outline'
}

export default {
  asyncData (context) {
    return { 
      
    }
  },
  props: [
    'icon',
    'score'
  ],
  computed: {
    iconName: function () {
      if (this.icon) {
        return iconNames[this.icon]
      } else {
        console.error('icon name not provided')
      }
    }  
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.tags {
  margin: 0px 5px;
  
  .tag-icon {
    background-color: $light-shade;
    font-size: 1rem;
    height: 1.5rem;
    padding-left: .5rem;
    padding-right: .5rem;
  }

  .tag-amount {
    background-color: $light-accent;
    color: white;
    font-size: .85rem;
    height: 1.5rem;
  }

  .material-icons {
    
  }
}
</style>