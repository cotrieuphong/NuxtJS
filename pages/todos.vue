<template lang="pug">
  .nuxt-container
    BaseNavbar
    .nuxt-panel
      transition(name="todo" appear)
        .nuxt-todo
          h1 Todos
          BaseInput(label='Name' v-model='event.name')
      transition(name="test" appear)
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
  transition: {
    name: 'todo',
    mode: 'out-in',
    css: false,
    beforeEnter(el) {
      console.log('PAGE - Before Entering')
    },
    enter(el, done) {
      console.log('PAGE - Entering')
      done()
    },

    leave(el, done) {
      console.log('PAGE - Leaving')
      done()
    },
  },
}
</script>
<style lang="scss">
@import '../assets/scss/pages/todos';

.todo-enter-active,
.todo-leave-active {
  transition: all 0.5s ease;
  transform: translateX(0);
}
.todo-enter,
.todo-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.test-enter-active,
.test-leave-active {
  transition: all 0.5s ease;
  transform: translateX(0);
}
.test-enter,
.test-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
