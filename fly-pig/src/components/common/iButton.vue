<template>
  <div class="iButton">
    <div class="img" v-if="isImg">
      <slot></slot>
    </div>
    <span :class="textColor">{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'iButton',
  props: {
    text: {
      type: String,
      default: '按钮'
    },
    isImg: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: 'white'
    }
  },
}
</script>

<style lang="stylus" scoped>
.iButton
  width 80%
  margin 0 auto
  height 1.2rem
  border-radius 50px
  background-color #aaa
  // line-height 1.2rem
  .img
    position relative
    width 0.8rem
    height 0.8rem
    background-color #fff
    display inline-block
    border-radius 10px
    top 50%
    transform translateY(-50%)
    img
      height 100%
      width 100%
  .white
    font-size .6rem
    display inline-block
    height 1.2rem
    color #fff
    font-weight bold
  .black
    font-size .6rem
    display inline-block
    height 1.2rem
    color #000
    font-weight bold
</style>