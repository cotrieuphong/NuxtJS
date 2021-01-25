<template lang="pug">
  .nuxt
    transition(appear @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false")
      BaseNavbar.nuxt-nav
    transition(name='slide' mode='out-in' appear)
      Nuxt
</template>
<script>
import { gsap } from 'gsap'
export default {
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0,0)'
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1.6,
        opacity: 1,
        scale: 1,
        ease: 'back.out(1)',
        onComplete: done,
      })
    },
    beforeLeave() {
      console.log('before leave')
    },
    leave() {
      console.log('leave')
    },
  },
}
</script>
