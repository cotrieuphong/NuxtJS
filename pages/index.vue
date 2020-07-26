<template lang="pug">
  .dashboard
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
.dashboard {
  @include flex-center;
  color: $white;
  padding: 100px 0;
}
</style>
