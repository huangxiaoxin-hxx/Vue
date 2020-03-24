<template>
  <div class="meWrapper">
    <div class="welcome">
      欢迎您，<span>{{user.name}}</span>
    </div>
    <div class="wallet">
      钱包余额<span>{{user.wallet}}</span>
    </div>
    <div class="ticketList">
      <div class="title">我的车票</div>
      <ul>
        <li v-for="(item, index) in tickets" :key="index">
          <ticketItem :ticketItem="item" :isShowBuy="false" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import ticketItem from '../components/ticketItem'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'me',
  computed: {
    ...mapGetters(["user", "tickets"])
  },
  methods: {
    ...mapActions([
      'saveuser'
    ])
  },
  components: {
    ticketItem
  }
}
</script>

<style lang="stylus" scoped>
.meWrapper
  width 100%
  .welcome
    width 100%
    span
      color red
  .wallet
    width 100%
    span 
      color red
  .ticketList
    margin-top 1rem
    margin-bottom 3rem
    .title
      background-color #eddff0
      height 3rem
      line-height 3rem
      text-align center
      font-weight bold
      color #fff
</style>