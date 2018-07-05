<template lang='pug'>
a.gotopurchase.tag.material-icons(v-html='iconNames')
</template>  

<script>
export default {
  asyncData (context) {
    return { 
      
    }
  },
  components: {
      
  },
  props: [
    'purchased',
    'stolen'
  ],
  computed: {
    iconNames: function () {
      let icons = 'shopping_basket '
      
      if (this.purchased) {
        if (this.stolen) {
          icons += 'how_to_reg'
        } else {
          icons += 'done'
        }
      } else {
        icons += 'chevron_right'
      }

      return icons
    }  
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

a.gotopurchase {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  font-size: 1rem;
  opacity: .75;
  cursor: pointer;
}

a.gotopurchase:hover {
  opacity: 1;
  text-decoration: none;
}
</style>
