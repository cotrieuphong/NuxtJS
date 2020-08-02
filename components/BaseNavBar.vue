<template lang="pug">
  .nuxt-nav
    nuxt-link(v-for="item in items" :key="item.id" :to="item.url" class="nuxt-nav__link") {{item.context}}
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          context: 'NuxtJS App',
          url: '/',
        },
        {
          id: 2,
          context: 'Todos',
          url: '/todos',
        },
        {
          id: 3,
          context: 'Shop',
          url: '/shop',
        },
      ],
    }
  },
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
@import '../assets/scss/components/BaseNavbar';
</style>
