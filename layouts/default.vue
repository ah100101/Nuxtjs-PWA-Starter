<template lang='pug'>
  div
    topnav
    nuxt
</template>

<script>
import topnav from '~/components/navigation/TopNav.vue'

export default {
  data: () => {
    return {
      
    }
  },
  props: [
    
  ],
  mounted: function() {

  },
  components: {
    topnav
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

html {
  font-family: "Source Sans Pro";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
  
body {
  background-color: $light-shade;
}
</style>
