<template>
  <div class="container">
    <div class="top-bar" :style="{background: inputColor}">
      <div class="sweep">
        <img src="../assets/icon/saomawhite.png" alt="" class="sweep-icon">
      </div>
      <v-sreachBar color="yellow" :inputValue="inputValue"></v-sreachBar>
      <v-mesIcon></v-mesIcon>
    </div>
    <v-scroll class="scroll" ref="scroll" :listenScroll="true" @scroll="getScroll" :probeType="3">
    <!-- <div class="scroll" ref="scroll"> -->
      <div class="content">
        <div class="swipe">
          <v-swipe :img="img" @color="getColor"></v-swipe>
        </div>
        <div class="entry">
          <div class="entry-content">
            <router-link to="/" tag="div" class="entry-item" v-for="(item, index) in entry" :key="index">
              <img :src="item.imgUrl" alt="">
              <span>{{item.name}}</span>
            </router-link>
          </div>
        </div>
        <div class="subentry">
          <div class="subentry-content">
            <router-link to="/" tag="div" class="subentry-item" v-for="(item, index) in subentry" :key="index">
              <span class="subentry-name">{{item.name}}</span>
              <div class="subentry-desc" :class="item.mark ? 'color' : ''">
                <span>{{item.desc}}</span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="benefit">
          <div class="benefit-content">
            <router-link class="member" tag="div" to="/">
              <img src="https:////gw.alicdn.com/tfs/TB1M_pXdhv1gK0jSZFFXXb0sXXa-246-63.png_110x10000.jpg_.webp" alt="">
              <span>专属福利天天领</span>
            </router-link>
            <router-link class="sign" tag="div" to="/">
              <img src="http://gw.alicdn.com/tfs/TB1u.ladeL2gK0jSZFmXXc7iXXa-162-63.png_110x10000.jpg_.webp" alt="">
              <span>马上签到</span>
            </router-link>
          </div>
        </div>
        <v-swiperTabBar :swiperTab="swiperTabBar"></v-swiperTabBar>
        <v-homeSwiperContent :homeSwiper="homeSwiper"></v-homeSwiperContent>
      </div>
    <!-- </div> -->
    </v-scroll>
  </div>
</template>

<script>
import searchBar from '@/components/common/searchBar'
import mesIcon from '@/components/common/mesIcon'
import swipe from '@/components/common/swipe'
import scroll from '@/components/common/scroll'
import swiperTabBar from '@/components/content/swiperTabBar'
import homeSwiperContent from '@/components/content/homeSwiperContent'

export default {
  name:'home',
  components: {
    'v-sreachBar': searchBar,
    'v-mesIcon': mesIcon,
    'v-swipe': swipe,
    'v-scroll': scroll,
    'v-swiperTabBar': swiperTabBar,
    'v-homeSwiperContent': homeSwiperContent
  },
  data () {
    return {
      inputValue: '北京',
      img: [],
      inputColor: '',
      entry: [],
      subentry: [],
      swiperTabBar: [],
      homeSwiper: [],
      isInputYellow: false
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/data/home.json')
      .then((res) => {
        // console.log(res)
        this.img = res.data.data.swiperImgUrl
        this.entry = res.data.data.entry
        this.subentry = res.data.data.subentry
        this.swiperTabBar = res.data.data.swiperTabBar
        this.homeSwiper = res.data.data.homeSwiperContent
        // console.log(this.homeSwiperContent)
      })
  },
  mounted () {
  },
  methods: {
    getColor(data) {
      if(this.isInputYellow) {
        return
      }
      this.inputColor = data
      console.log(data)
    },
    getScroll(data) {
      // console.log(data)
      if(data.y != 0){
        this.isInputYellow = true
        this.inputColor = '#fed030'
      } else {
        this.isInputYellow = false
      }
      // console.log(this.isInputYellow)
      if(data.y <= -400) {
        console.log(data.y)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100%
  .top-bar
    background-color #fed030
    display flex
    height 50px
    z-index 100
    .sweep
      flex 1
      z-index 1000
      img
        display block
        position relative
        width 25px
        height 25px
        top 50%
        left 50%
        transform translate(-50%,-50%)
  .scroll
    top 50px
    left 0
    bottom 50px
    right 0
    position absolute
    overflow hidden
    background-color #fafafa
    .entry
      position relative
      box-sizing border-box
      display flex
      -webkit-box-orient vertical
      flex-direction column
      align-content flex-start
      flex-shrink 0
      background-color transparent
      overflow hidden
      width 100%
      top 0px
      left 0px
      .entry-content
        position relative
        box-sizing border-box
        display flex
        -webkit-box-orient horizontal
        flex-direction row
        align-content flex-start
        flex-shrink 0
        width 94%
        height 80px
        align-self center
        .entry-item
          position relative
          box-sizing border-box
          display flex
          -webkit-box-orient vertical
          flex-direction column 
          place-content flex-start center
          flex-shrink 0
          cursor pointer
          -webkit-tap-highlight-color rgba(0, 0, 0, 0)
          -webkit-box-align center
          align-items center
          -webkit-box-pack center
          flex 1
          img
            display flex
            width 70px
            height 57px
            margin-top 6px
            margin-bottom 5px
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
            font-size 12px
            line-height 12px
            height 12px
            text-align center
            text-overflow ellipsis
            color rgb(51, 51, 51)
            overflow hidden
    .subentry
      border: 0px solid black
      position relative
      box-sizing border-box
      display flex
      -webkit-box-orient vertical
      flex-direction column
      align-content flex-start
      flex-shrink 0
      background-color transparent
      overflow hidden
      width 100%
      top 20px
      left 0px
      .subentry-content
        position relative
        box-sizing border-box
        display flex
        -webkit-box-orient horizontal
        flex-flow row wrap
        align-content flex-start
        flex-shrink 0
        width 94%
        height 118px
        align-self center
        border-top-left-radius 6px
        border-top-right-radius 6px
        background-color rgb(255, 255, 255)
        .subentry-item
          text-decoration none
          border-width 0px 0.5px 0.5px 0px
          border-style solid
          border-color rgb(244, 244, 244)
          border-image initial
          position relative
          box-sizing border-box
          display flex
          -webkit-box-orient vertical
          flex-direction column
          align-content flex-start
          flex-shrink 0
          cursor pointer
          -webkit-tap-highlight-color rgba(0, 0, 0, 0)
          width 25%
          height 59px
          background-color rgb(255, 255, 255)
          border-top-left-radius 6px
          border-top-right-radius 0px
          .subentry-name
            white-space pre-wrap
            border 0px solid black
            position relative
            box-sizing border-box
            display block
            -webkit-box-orient vertical
            flex-direction column
            align-content flex-start
            flex-shrink 0
            font-size 14px
            font-weight 500
            margin-top 9.5px
            height 25px
            line-height 25px
            text-align center
            color rgb(51, 51, 51)
          .subentry-desc
            border 0px solid black
            position relative
            box-sizing border-box
            display flex
            -webkit-box-orient horizontal
            flex-direction row
            place-content flex-start center
            flex-shrink 0
            -webkit-box-pack center
            border-radius 50px
            width 90%
            margin 0 auto
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
              font-size 11px
              color rgb(102, 102, 102)
              text-align center
              height 18px
              line-height 18px
              border-radius 9px
              padding-left 8px
              padding-right 8px
              background-color transparent
          .subentry-desc.color
            background-color #efce2e
    .benefit
      border 0px solid black
      position relative
      box-sizing border-box
      display flex
      -webkit-box-orient vertical
      flex-direction column
      align-content flex-start
      flex-shrink 0
      background-color transparent
      overflow hidden
      width 100%
      top 20px
      left 0px
      .benefit-content
        border 0px solid black
        position relative
        box-sizing border-box
        display flex
        -webkit-box-orient horizontal
        flex-direction row
        align-content flex-start
        flex-shrink 0
        width 94%
        height 49.5px
        align-self center
        border-bottom-left-radius 6px
        border-bottom-right-radius 6px
        -webkit-box-align center
        align-items center
        overflow hidden
        background-color rgb(255, 255, 255)
        .member
          border-width 0px 0.5px 0px 0px
          border-style solid
          border-color rgb(244, 244, 244)
          border-image initial
          position relative
          box-sizing border-box
          display flex
          -webkit-box-orient horizontal
          flex-direction row
          align-content flex-start
          flex-shrink 0
          cursor pointer
          -webkit-tap-highlight-color rgba(0, 0, 0, 0)
          flex 6
          height 30px
          -webkit-box-align center
          align-items center
          img
            display flex
            width 77px
            height 25px
            margin-left 12px
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
            font-size 13px
            height 30px
            line-height 30px
            text-overflow ellipsis
            margin-left 11px
            width 110px
            color rgb(51, 51, 51)
            overflow hidden
        .sign
          position relative
          box-sizing border-box
          display flex
          -webkit-box-orient horizontal
          flex-direction row
          align-content flex-start
          flex-shrink 0
          cursor pointer
          -webkit-tap-highlight-color rgba(0, 0, 0, 0)
          flex 4
          height 30px
          -webkit-box-align center
          align-items center
          img
            display flex
            width 56px
            height 25px
            margin-left 11px
          span
            position relative
            box-sizing border-box
            display block
            -webkit-box-orient vertical
            flex-direction column
            align-content flex-start
            flex-shrink 0
            font-size 13px
            height 30px
            line-height 30px
            text-overflow ellipsis
            margin-left 11px
            width 53px
            color rgb(51, 51, 51)
            overflow hidden
    .van-tabs
      position relative
      top 40px
</style>