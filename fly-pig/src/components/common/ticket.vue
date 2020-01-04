<template>
  <div class="container">
    <div class="ticketBlock">
      <div class="content">
        <div class="top">
          <div class="topleft">
            <div class="icon">
              <img src="https://gw.alicdn.com/tfs/TB1XQXhdAP2gK0jSZPxXXacQpXa-72-72.png_36x36q90_.webp" alt="">
            </div>
            <div class="ticketType">
              <span>火车票</span>
            </div>
          </div>
          <div class="topright">
            <div class="ticketStatus">
              <span>{{ticketType[ticketItem.status-1]}}</span>
            </div>
          </div>
        </div>
        <div class="center">
          <div class="carId">
            <span>{{ticketItem.carid}}</span>
          </div>
          <div class="carInfo">
            <div class="departure infoBlock">
              <div class="address">
                <span>{{ticketItem.departureaddress}}</span>
              </div>
              <div class="time">
                <span>18:30</span>
              </div>
            </div>
            <div class="carInfoImg">
              <div class="img">
                <img src="https://gw.alicdn.com/tfs/TB1T7Qbc.T1gK0jSZFrXXcNCXXa-300-44.png_310x310q90_.webp" alt="">
              </div>
              <div class="date">
                <span>
                  {{this.departureMonth}}-{{this.departureDate}}
                </span>
              </div>
            </div>
            <div class="arrive infoBlock">
              <div class="address">
                <span>{{ticketItem.arriveaddress}}</span>
              </div>
              <div class="time">
                <span>18:30</span>
              </div>
            </div>
          </div>
          
        </div>
        <div class="price">
          <div class="blank"></div>
          <div class="count">
            <span>合计</span>
          </div>
          <div class="countPrice">
            <span>¥{{ticketItem.countcost}}</span>
          </div>
        </div>
        <div class="operation">
          <div class="expireY expire" v-if="isExpire" @click="deleteTicket(ticketItem.id)">
            <div class="deleteTicket">删除订单</div>
          </div>
          <div class="expireN expire" v-else>
            <div class="ticketChange">改签</div>
            <div class="refund">退票</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'ticket',
  props: {
    ticketItem: {
      type: Object,
      defualt: {}
    }
  },
  data () {
    return {
    //  1 为 出票成功
    // 2 为 改签完成
    // 3 为 已取消
    // 4 为 已退票
    // 5 为 有改签记录
    ticketType: ['出票成功','改签完成','已取消','已退票','有改签记录'],
    departureMonth: '',
    departureYear: '',
    departureDate: '',
    isExpire: false
    }
  },
  created() {
    this.date()
  },
  methods: {
    date() {
      this.departuredate = this.ticketItem.departuredate
      // console.log(this.departuredate)
      this.departureYear = parseInt(this.departuredate.substr(0,4)) 
      this.departureMonth = parseInt(this.departuredate.substr(5,2)) 
      this.departureDate = parseInt(this.departuredate.substr(8,2)) 
      
      // console.log(this.departuredate)

      // console.log(this.departureYear)
      let year = new Date().getFullYear()
      let month = new Date().getMonth()
      let date = new Date().getDate()
      // console.log(year,month+1)
      this.judgeExpire(year,month,date)
      // console.log(this.isExpire)
    },
    judgeExpire(year,month,date) {
      if(year > this.departureYear) {
        this.isExpire = true
      } else if(month > this.departureMonth) {
        this.isExpire = true
      } else if(date > this.departureDate) {
        this.isExpire = true
      } else {
        return
      }
    },
    ...mapActions(['deleteTicketById']),
    deleteMysqlTicket (id, username) {
      this.$http({
          method: 'post',
          url: 'http://localhost:3000/users/deleteTicketById',
          data: {
            id: id,
            username: username
          }
        })
        .then((res) => {
          if(res.data.code === '200') {
            this.$toast(res.data.mess)
          } else {
            this.$toast(res.data.mess)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteTicket(id) {
      console.log(id)
      let username = JSON.parse(sessionStorage.getItem('userInfo')).username
      this.$dialog.confirm({
        message: '是否删除订单'
      }).then(() => {
        this.deleteMysqlTicket(id, username)
        this.deleteTicketById(id)
      }).catch(() => {
        return
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position relative
  display flex
  overflow hidden
  width 100%
  height 6rem
  text-align center
  .ticketBlock
    position absolute
    display flex
    overflow hidden
    border-radius .28rem
    box-shadow .1px .1px 2px #aaa
    flex-direction column
    background-color rgb(255, 255, 255)
    visibility visible
    left 3%
    right 3%
    margin-top .25rem
    height auto
    .content
      position relative
      display flex
      flex-shrink 0
      flex-grow 0
      overflow hidden
      margin-right .28rem
      flex-direction column
      visibility visible
      margin-left .28rem
      width 100%
      margin-bottom .25rem
      height auto
      .top
        position relative
        display flex
        flex-shrink 0
        flex-grow 0
        overflow hidden
        flex-direction row
        width 100%
        height 1rem
        .topleft
          position relative
          display flex
          flex 1 1 0%
          overflow hidden
          flex-direction row
          width -webkit-fit-content
          height 100%
          font-size .32rem
          margin-top 0.3rem
          .icon
            width 0.4rem
            height 0.4rem
            img
              width 100%
              height 100%
          .ticketType
            margin-left .2rem
        .topright
          position relative
          display flex
          flex-shrink 0
          flex-grow 0
          align-items center
          justify-content center
          flex-direction row
          width -webkit-fit-content
          height 100%
          .ticketStatus
            position relative
            display flex
            flex-shrink 0
            flex-grow 0
            font-size .32rem
            place-self center flex-end
            margin-left 9px
            width -webkit-fit-content
            justify-content flex-end
            align-items center
            color rgb(255, 85, 0)
            max-width 4rem
            height auto
            overflow hidden
            transform translateX(-0.5rem)
      .center
        width 100%
        height auto
        line-height 1rem
        .carId
          font-size 0.2rem
          position relative
          left -4rem
          color #999
          font-weight bold
        .carInfo
          position relative
          display flex
          flex-shrink 0
          flex-grow 0
          overflow hidden
          flex-direction row
          width 100%
          height auto
          transform translateX(-0.2rem)
          .infoBlock
            position relative
            display flex
            flex-shrink 0
            flex-grow 0
            overflow hidden
            flex-direction column
            width 3rem
            height auto
            .address
              position relative
              display flex
              flex-shrink 0
              flex-grow 0
              font-size .4rem
              visibility visible
              place-self center
              width -webkit-fit-content
              color rgb(51, 51, 51)
              font-weight bold
              height auto
              justify-content flex-start
              align-items center
              overflow hidden
              max-width none
              span 
                line-height .4rem
            .time
              position relative
              display flex
              flex-shrink 0
              flex-grow 0
              font-size .3rem
              visibility visible
              place-self center
              width -webkit-fit-content
              color rgb(51, 51, 51)
              margin-top .2rem
              height auto
              justify-content flex-start
              align-items center
              overflow hidden
              span
                line-height 0.3rem
                font-weight bold
          .carInfoImg
            position relative
            display flex
            flex 1 1 0%
            overflow hidden
            margin-right .2rem
            flex-direction column
            margin-left .2rem
            width -webkit-fit-content
            height auto
            .img
              width 100%
              height .4rem
              position relative
              display flex
              flex-shrink 0
              flex-grow 0
              overflow hidden
              visibility visible
              place-self center
              img
                width 100%
                height 100%
            .date
              width 100%
              height 0.6rem
              font-size .2rem
              line-height .6rem
      .price
        display flex
        transform translate(-0.4rem)
        margin-top .5rem
        .blank
          flex 1
        .count
          width .6rem
          height 1rem
          font-size .2rem 
        .countPrice
          padding .1rem
          box-sizing border-box
          height 1rem
          font-size .4rem
          transform translateY(-.2rem)
          font-weight bold
      .operation
        width 100%
        .expire
          position relative
          left  70%
        .expireY
          .deleteTicket
            width 2rem
            font-size .4rem
            border 1px solid #000
            border-radius 50px
        .expireN
          display flex
          .ticketChange,.refund
            width 1rem
            font-size .4rem
            border-radius 50px
            border 1px solid #000
          .ticketChange
            transform translateX(-.2rem)
</style>