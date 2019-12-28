<template>
  <div class="input">
    <div class="input-content">
      <v-backIcon class="back"></v-backIcon>
      <!-- <img class="back" src="../../assets/icon/back.png" alt=""> -->
      <input :placeholder="inputValue" class="input" />
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
import backIcon from '@/components/common/backIcon'
export default {
  name: 'inputBar',
  props: {
    inputValue: {
      type: String,
      default: '请输入搜索内容'
    }
  },
  methods: {
  },
  components: {
    'v-backIcon': backIcon
  }
}
</script>

<style lang="stylus" scoped>
.input
  width 100%
  position relative
  .input-content
    width 100%
    height 50px
    background-color #fff
    display flex
    .back
      width 25px
      height 25px
      top 13px
      left 7px
      position relative
      margin-right 15px
    .input
      border 0px solid #000
      box-shadow .1px .1px .1px .1px #aaa
      border-radius 50px 0px 50px 50px
      position relative
      box-sizing border-box
      display flex
      cursor pointer 
      background-color #f8f8f8
      top 10px
      flex 7
      height 32px
      padding-left 12px
      caret-color #e7a431
      margin 0 auto
      font-size 0.4rem
    span
      display block
      width 60px
      text-align center
      line-height 50px
      font-size 0.4rem
</style>