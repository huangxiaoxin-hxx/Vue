<template>
  <div class="container">
    <van-swipe 
    :loop="false" 
    class="swiper"
    :show-indicators="false"
    @change="swiper"
    ref="swiperToIndex">
      <van-swipe-item v-for="(item, index) in homeSwiper" :key="index">
        <v-swiperScroll class="swiperScroll" ref="swiperScroll" :listenScroll="true" @scroll="getScroll" :probeType="3" :isScroll="!isScroll">
          <div class="indexContent">
            <div class="indexBlock" v-for="(block, blockIndex) in item" :key="blockIndex">
              <router-link to="/" tag="div" class="blockLink">
                <div class="img">
                  <img :src="block.imgUrl" alt="">
                </div>
                <div class="text">
                  <span class="place">{{block.place}}</span>
                  <div class="title">
                    <span class="titleSpan">{{block.title}}</span>
                  </div>
                  <div class="price">
                    <div class="priceLeft">
                      <span class="priceIcon">¥</span>
                      <span class="priceCount">{{block.price}}</span>
                      <span class="person">{{block.person}}人购买</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </v-swiperScroll>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import scroll from '@/components/common/scroll'
export default {
  name: "homeSwiperContent",
  components: {
    'v-swiperScroll': scroll
  },
  props: {
    homeSwiper: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
    }
  },
  methods: {
    swiper(index) {
      this.setHomeSwiperIndex(index)
    },
    ...mapActions([
      'setHomeSwiperIndex',
      'setScroll'
    ]),
    getScroll(data) {
      console.log(data.y)
      if(data.y >= 5) {
        this.setScroll(true)
        console.log('我是homeswiper',this.isScroll)
      }
    }
  },
  computed: {
    ...mapGetters([
      'homeSwiperIndex',
      'isScroll'
    ])
  },
  watch: {
    homeSwiperIndex(val) {
      // console.log(val)
      this.$refs.swiperToIndex.swipeTo(val)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  position relative
  top 96px
  .swiper
    width 95%
    margin 0 auto
    .swiperScroll
      width 100%
      height 670px
      overflow hidden
      .indexContent
        position relative
        box-sizing border-box
        .indexBlock
          width 45%
          display inline-block
          margin-left 14px
          margin-top 10px
          .blockLink
            .img
              height 177px
              img
                width 100%
                border-radius 10px 10px 0 0
            .text
              border 0px solid black
              position relative
              box-sizing border-box
              display flex
              -webkit-box-orient vertical
              flex-direction column
              align-content flex-start
              flex-shrink 0
              background-color rgb(255, 255, 255)
              border-bottom-left-radius 6px
              border-bottom-right-radius 6px
              height 104px
              width 100%
              .place
                white-space pre-wrap
                border 0px solid black
                position relative
                box-sizing border-box
                display block
                -webkit-box-orient vertical
                flex-direction column
                align-content flex-start
                flex-shrink 0
                font-size 12px
                margin-top 12px
                height 16.5px
                line-height 16.5px
                font-weight 600
                text-overflow ellipsis
                width 147px
                margin-left 12px
                color rgb(64, 97, 150)
              .title
                border 0px solid black
                position relative
                box-sizing border-box
                display flex
                -webkit-box-orient vertical
                flex-direction column
                align-content flex-start
                flex-shrink 0
                margin-top 3px
                margin-left 12px
                .titleSpan
                  white-space pre-wrap
                  border 0px solid black
                  position relative
                  box-sizing border-box
                  display -webkit-box
                  -webkit-box-orient vertical
                  flex-direction column
                  align-content flex-start
                  flex-shrink 0
                  font-size 13px
                  font-weight 600
                  color rgb(51, 51, 51)
                  height 36px
                  line-height 18.5px
                  overflow hidden
                  text-overflow ellipsis
                  width 147px
                  -webkit-line-clamp 2
              .price
                border 0px solid black
                position relative
                box-sizing border-box
                display flex
                -webkit-box-orient horizontal
                flex-direction row
                place-content flex-start space-between
                flex-shrink 0
                width 147px
                margin-left 12px
                margin-top 9px
                height 18px
                -webkit-box-align end
                align-items flex-end
                -webkit-box-pack justify
                .priceLeft
                  border 0px solid black
                  position relative
                  box-sizing border-box
                  display flex
                  -webkit-box-orient horizontal
                  flex-direction row
                  align-content flex-start
                  flex-shrink 0
                  -webkit-box-align end
                  align-items flex-end
                  width 125px
                  height 14px
                  overflow hidden
                  .priceIcon
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
                    color rgb(255, 80, 0)
                    line-height 11px
                    height 11px
                  .priceCount
                    white-space pre-wrap
                    border 0px solid black
                    position relative
                    box-sizing border-box
                    display block
                    -webkit-box-orient vertical
                    flex-direction column
                    align-content flex-start
                    flex-shrink 0
                    font-size 16px
                    color rgb(255, 80, 0)
                    line-height 15px
                    height 15px
                  .person
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
                    color rgb(153, 153, 153)
                    margin-left 4px
                    height 11px
                    line-height 11px
</style>