export default {
  created: function () {
    this.setNavigation()
  },
  methods: {
    setNavigation: function () {
      this.$store.dispatch('navigation/setNavigation', 'authenticated')
    }
  }
}
