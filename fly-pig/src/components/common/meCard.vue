<template>
  <div class="meCard">
    <div class="meCardTop">
      <div class="title" v-if="title">
      <span>{{title}}</span>
    </div>
    <div class="blank"></div>
    <div class="more" v-if="more">
      <span>{{more}}</span><van-icon class="arrow" name="arrow" />
    </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'meCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    more: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.meCard
  width 100%
  min-height 3rem
  box-sizing border-box
  border-radius 10px
  box-shadow .1px .1px 2px #aaa
  background-color #fff
  .meCardTop
    width 100%
    display flex
  .title
    span
      font-size .5rem
      font-weight bold
      margin-left 0.3rem
  .blank
    flex 1
  .more
    margin-top .3rem
    font-size 0.35rem
    font-weight lighter
    margin-right 0.2rem
    .arrow
      transform translateY(.05rem)
</style>