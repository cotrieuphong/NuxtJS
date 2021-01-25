<template lang="pug">
  .nuxt-container#nuxt-container
    ul.nuxt-list
      li.nuxt-item(v-for="item in items" :key="item.name") 
        nuxt-link(:to="item.link") {{ item.name }}
</template>
<script>
import { gsap } from 'gsap'
export default {
  pageTransition: 'page',
  data() {
    return {
      items: [
        {
          name: 'Hiragana',
          link: 'Hiragana',
        },
        {
          name: 'Katakana',
          link: 'Katakana',
        },
        {
          name: 'Kanji',
          link: 'Kanji',
        },
      ],
    }
  },
  mounted() {
    // gsap.from('.nuxt-item', {
    //   duration: 1,
    //   opacity: 0,
    //   scale: 0,
    //   stagger: {
    //     each: 0.2,
    //     from: 'center',
    //   },
    //   ease: 'back.out(1)',
    //   transformOrigin: '50% 50%',
    // })
  },
  methods: {
    animateBox(el) {
      const element = el.target
      const style = element.getBoundingClientRect()
      const top = style.top + 'px'
      const left = style.left + 'px'
      const width = style.width + 'px'
      const height = style.height + 'px'
      const clone = element.cloneNode(true)
      const container = document.getElementById('nuxt-container')
      clone.className = 'nuxt-clone'
      clone.style.position = 'fixed'
      clone.style.top = top
      clone.style.left = left
      clone.style.width = width
      clone.style.height = height
      container.appendChild(clone)

      gsap.to('.nuxt-clone', {
        duration: 0.6,
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        ease: 'back.out(1)',
        autoRound: false,
        borderRadius: 0,
        transformOrigin: '50% 50%',
        onComplete() {
          const cloneCard = document.getElementsByClassName('nuxt-clone')[0]
          cloneCard.addEventListener('click', function () {
            gsap.to(this, {
              duration: 0.4,
              width,
              height,
              top,
              left,
              autoRound: false,
              transformOrigin: '50% 50%',
              onComplete() {
                cloneCard.remove()
              },
            })
          })
        },
      })
    },
  },
}
</script>
<style lang="scss">
.card {
  width: 300px;
  height: 300px;
  margin: auto;
  background-color: $white;
}
</style>
