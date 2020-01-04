<template>
  <div class="container">
    <div class="meOrderTop">
      <v-backIcon class="back" :white="true"></v-backIcon>
      <div class="meOrderTop-center">
        <span>我的订单</span>
      </div>
      <div class="blank"></div>
    </div>
    <div class="topBar">
      <div class="topBarBlock" :class="[active === index ? 'select': '']"  v-for="(item,index) in topBar" :key="index" @click="select(index)">
        <span>{{item}}</span>
      </div>
    </div>
    <v-orderContent></v-orderContent>
  </div>
</template>

<script>
import backIcon from '@/components/common/backIcon'
import orderContent from '@/components/content/orderContent'
export default {
  name: 'MeOrder',
  components: {
    'v-backIcon': backIcon,
    'v-orderContent': orderContent
  },
  data() {
    return {
      topBar: ['全部','代付款','处理中','待出行','待评价','退款/售后'],
      active: 0
    }
  },
  methods: {
    select(index) {
      console.log(index)
      this.active = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width: 100%;
  height: 100%;
  background-color #fafafa
  z-index 10
  .meOrderTop
    height 1.1rem
    display flex
    font-size .5rem
    background-color #fc373c
    .back
      width 0.7rem
      height 0.6rem
      transform translateY(.25rem)
    .meOrderTop-center
      flex 1
      text-align center
      margin-top 0.2rem
      color #fff
    .blank
      width 0.7rem
      height 0.6rem
  .topBar
    display flex
    .topBarBlock
      font-size 0.3rem
      flex 1
      text-align center
      padding .2rem .1rem
      box-sizing border-box
      &.select span
        box-sizing border-box
        padding .2rem 0
        border-bottom 1px solid #fd8b58
</style>