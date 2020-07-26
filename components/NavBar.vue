<template lang="pug">
  .nav
    nuxt-link(v-for="item in items" :key="item.id" :to="item.url" class="nav__link") {{item.context}}
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
.nav {
  @include size(100%, 50px);
  display: flex;
  align-items: center;
  padding: 20px;

  &__link {
    text-decoration: none;
    color: $white;
    padding: 5px 10px;
    transition: all 0.3s ease;
    border-radius: $border-radius-base;

    &:hover {
      background-color: rgba($white, 0.4);
    }
  }
}
</style>
