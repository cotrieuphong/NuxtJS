<template lang="pug">
  #app
    .container
      NavBar
      Nuxt
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Open Sans', sans-serif;
}

#app {
  @include square(100%);
  min-height: 100vh;
  background: linear-gradient(to left, #ad5389, #3c1053);
  padding: 30px;
}

.container {
  display: flex;
  background-color: rgba($blue, 0.8);
  border-radius: $border-radius-base;
  flex-direction: column;
  min-height: calc(100vh - 60px);
}
</style>
