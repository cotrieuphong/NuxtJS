<template lang="pug">
  .nuxt-container
    BaseNavbar
    .nuxt-panel.nuxt-dashboard
      h1 NuxtJS + Pug + SCSS
</template>
<script>
export default {
  head() {
    return {
      title: 'NuxtJs App',
      meta: [
        {
          hid: 'description',
          name: 'descscription',
          content: 'content',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
@import '../assets/scss/pages/index';
</style>
