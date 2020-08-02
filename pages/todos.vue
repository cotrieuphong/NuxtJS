<template lang="pug">
  .nuxt-container
    BaseNavbar
    .nuxt-panel
      .nuxt-todo
        h1 Todos
        BaseInput(label='Name' v-model='event.name')
</template>
<script>
export default {
  data() {
    return {
      event: {
        name: '',
      },
    }
  },
  head() {
    return {
      title: 'NuxtJs Todos App',
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
<style lang="scss" scoped>
@import '../assets/scss/pages/todos';
</style>
