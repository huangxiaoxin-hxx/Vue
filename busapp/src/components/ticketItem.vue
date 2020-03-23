<template>
  <div class="ticketItemWrapper">
    <div class="place start">{{ticketItem.start}}</div>
    <div class="center">
      <div class="time">{{ticketItem.time}}</div>
      <div><img src="../assets/icon/jiantou.png" alt=""></div>
      <div>{{ticketItem.price}}</div>
    </div>
    <div class="place end">{{ticketItem.end}}</div>
    <van-button class="buy" round size="mini" type="info" @click="buyTicket(ticketItem.id)">购买</van-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    ticketItem: {
      type: Object,
      defualt: {}
    },
    currentDate: {
      type: String,
      defualt: ''
    }
  },
  methods: {
    ...mapActions([
      'addTicket'
    ]),
    buyTicket(id) {
      console.log(id)
      // console.log(this.currentDate)
      this.mergeObject()
      console.log(this.ticketItem)
      this.addTicket(this.ticketItem)

      this.$toast('购买成功')
    },
    mergeObject() {
      const date = {
        "date": this.currentDate
      }
      Object.assign(this.ticketItem, date);
    }
  }
}
</script>

<style scoped lang="stylus">
.ticketItemWrapper
  display flex
  box-sizing border-box
  padding 10px
  height 7rem
  border 1px solid #3c4043
  box-shadow: 10px 1px 5px #888888
  margin 10px 0
  .place
    flex 1
    text-align center
    line-height 5rem
  .center
    flex 1
    text-align center
  .buy
    position relative
    top 4.5rem
    right 1rem
</style>