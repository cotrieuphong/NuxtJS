<template lang="pug">
  .todo
    h1 Todos
    BaseInput(label='Name')
</template>
<script>
export default {
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
