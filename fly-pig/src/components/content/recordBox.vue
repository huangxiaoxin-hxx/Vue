<template>
  <div class="recordBox" v-if="block.length">
    <div class="recordBox-content">
      <div class="recordBox-title">
        <span>{{title}}</span>
      </div>
      <div class="recordBox-box">
        <div class="recordBox-box-content">
          <div class="recordBox-block" 
          v-for="(item, index) in block" :key="index"
          @click="select(item)">
            <img :src="item.imgUrl" alt="">
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    block: {
      type: Array,
      default: []
    }
  },
  methods: {
    select(data) {
      // console.log(data)
      this.$emit('select', data)
    }
  }
}
</script>

<style lang="stylus" scoped>
.recordBox
  border 0px solid black
  position relative
  box-sizing border-box
  display block
  -webkit-box-orient vertical
  flex-direction column
  align-content flex-start
  flex-shrink 0
  .recordBox-content
    border 0px solid black
    position relative
    box-sizing border-box
    display flex
    -webkit-box-orient vertical
    flex-direction column
    align-content flex-start
    flex-shrink 0
    padding 0px 12px
    margin-top 9px
    .recordBox-title
      border 0px solid black
      position relative
      box-sizing border-box
      display flex
      -webkit-box-orient horizontal
      flex-direction row
      place-content flex-start space-between
      flex-shrink 0
      padding 12px 0px
      -webkit-box-pack justify
      -webkit-box-align center
      align-items center
      height 41px
      span
        white-space nowrap
        border 0px solid black
        position relative
        box-sizing border-box
        display block
        -webkit-box-orient vertical
        flex-direction column
        align-content flex-start
        flex-shrink 0
        font-size 14px
        height 15px
        line-height 15px
        font-weight bold
        color rgb(41, 44, 51)
        max-width 300px
        overflow hidden
        text-overflow ellipsis
    .recordBox-box
      border 0px solid black
      position relative
      box-sizing border-box
      display flex
      -webkit-box-orient horizontal
      flex-flow row wrap
      place-content center flex-start
      flex 1 1 0%
      -webkit-box-flex 1
      width 100%
      -webkit-box-pack start
      -webkit-box-align center
      align-items center
      .recordBox-box-content
        border 0px solid black
        position relative
        box-sizing border-box
        display flex
        -webkit-box-orient horizontal
        flex-flow row wrap
        place-content center flex-start
        flex 1 1 0%
        -webkit-box-flex 1
        width 100%
        -webkit-box-pack start
        -webkit-box-align center
        align-items center
        .recordBox-block
          text-decoration none
          border 0px solid black
          position relative
          box-sizing border-box
          display flex
          -webkit-box-orient horizontal
          flex-direction row
          place-content flex-start
          flex-shrink 0
          cursor pointer
          -webkit-tap-highlight-color rgba(0, 0, 0, 0)
          margin-bottom 9px
          margin-right 9px
          -webkit-box-pack start
          -webkit-box-align center
          align-items center
          padding 7px 12px
          background-color rgb(247, 247, 247)
          border-radius 3px
          img
            display flex
            width 16px
            height 16px
            margin-right 6px
            object-fit contain
          span
            white-space pre-wrap
            border 0px solid black
            position relative
            box-sizing border-box
            display block
            -webkit-box-orient vertical
            flex-direction column
            align-content flex-start
            flex-shrink 0
            font-size 13px
            font-family PingFangSC
            color rgb(51, 51, 51)
            text-overflow ellipsis
            height 18px
            line-height 18px
</style>