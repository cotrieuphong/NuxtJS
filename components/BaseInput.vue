<template lang="pug">
  .form-group
    label(v-if='label') {{label}}
    .input-group
      input(:value='value' @input='updateValue' v-bind='$attrs')
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped></style>
