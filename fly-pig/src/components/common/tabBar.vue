<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style lang="stylus" scoped>
.tabbar
  width 100%
  height auto
  bottom 0
  left 0
  right 0
  background-color #fff
  position absolute
</style>