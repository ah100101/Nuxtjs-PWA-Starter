<template lang='pug'>
  div
    h1.title Better Gift
</template>

<style lang='scss'>
@import '~/assets/scss/variables.scss';

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: $family-brand;
  color: $brand;
  display: block;
  font-weight: 300;
  font-size: 100px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  padding-bottom: 15px;
}
</style>
