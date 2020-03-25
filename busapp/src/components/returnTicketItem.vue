<template>
  <div class="reTicketWrapper">
    <div class="place start">
      <span class="username">{{reTicketItem.username}}的退票</span>
      {{reTicketItem.start}}
      </div>
    <div class="center">
      <div class="time">
        <span>{{reTicketItem.date}}</span>
        {{reTicketItem.time}}
      </div>
      <div><img src="../assets/icon/jiantou.png" alt=""></div>
      <div>¥{{reTicketItem.price}}</div>
    </div>
    <div class="place end">{{reTicketItem.end}}</div>
    <div>
      <van-button class="buy" round size="mini" type="info" @click="reTicket()">同意</van-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'reTicketItem',
  props: {
    reTicketItem: Object,
    default: () => {}
  },
  methods: {
    ...mapActions(["delUserTicket","delAdminTicket"]),
    reTicket() {
      console.log(this.reTicketItem)
      this.delUserTicket(this.reTicketItem)
      this.delAdminTicket(this.reTicketItem)
    }
  }
}
</script>

<style lang="stylus" scoped>
.reTicketWrapper
  display flex
  box-sizing border-box
  padding 10px
  height 7rem
  border 1px solid #3c4043
  box-shadow: 10px 1px 5px #888888
  margin 10px 0
  border-radius 5px
  .place
    flex 1
    text-align center
    line-height 5rem
    .username
      font-size .5rem
      display block
      height .5rem
      position relative
      top -.5rem
  .center
    flex 1
    text-align center
  .buy
    position relative
    top 4.5rem
    right 1rem
</style>