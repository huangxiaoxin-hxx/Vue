<template>
  <div class="ticketItemWrapper">
    <div class="place start">{{ticketItem.start}}</div>
    <div class="center">
      <div class="time">
        <span v-if="!isShowBuy">{{ticketItem.date}}</span>
        {{ticketItem.time}}
      </div>
      <div><img src="../assets/icon/jiantou.png" alt=""></div>
      <div>¥{{ticketItem.price}}</div>
    </div>
    <div class="place end">{{ticketItem.end}}</div>
    <div v-if="this.isShowBuy">
      <van-button class="buy" round size="mini" type="info" @click="buyTicket(ticketItem.id)">购买</van-button>
    </div>
    <div v-else>
      <van-button v-if="ticketItem.state" class="buy" round size="mini" type="danger" @click="refundTicket(ticketItem.id)">退票</van-button>
      <van-button v-else disabled class="buy" round size="mini" type="primary">正在退票</van-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ticketItem",
  created() {
    console.log(this.isShowBuy)
  },
  props: {
    isShowBuy: {
      type: Boolean,
      default: true
    },
    ticketItem: {
      type: Object,
      default: () => {}
    },
    currentDate: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters(["user", "tickets"])
  },
  inject: ['reload'],
  methods: {
    ...mapActions([
      'addTicket',
      'subBalance',
      'ticketState'
    ]),
    buyTicket(id) {
      if (!sessionStorage.getItem('userInfo')) {
        this.$toast('请登录再购买车票')
        return
      }
      if (this.user.wallet < this.ticketItem.price ) {
        this.$toast('余额不足，请充值')
        return
      }
      console.log(id)
      // console.log(this.currentDate)
      this.mergeObject()
      console.log(this.ticketItem)
      this.addTicket(this.ticketItem)
      this.subBalance(this.ticketItem.price)
      console.log(this.user.wallet)
      this.$toast('购买成功')
    },
    refundTicket(id) {
      console.log(id)
      this.tickets.map(item => {
        if(item.date == this.ticketItem.date && item.id == id) {
          const ticketMap = {
            "date": this.ticketItem.date,
            "id": id
          }
          this.ticketState(ticketMap)
          // console.log(item)
        }
      })
      this.reload();
      // console.log(this.ticketItem)
    },
    mergeObject() {
      const date = {
        "date": this.currentDate,
        "state": true
      }
      Object.assign(this.ticketItem, date);
    }
  },
  
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