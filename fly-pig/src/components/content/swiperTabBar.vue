<template>
  <v-swiperScroll class="swiperScroll" ref="swiperScroll" :scrollX="true" direction="horizontal">
    <div class="swiperTabBar">
      <div class="swiperTabBar-item" v-for="(item, index) in swiperTab" :key="index" @click.stop="selectSwiperTabBar(index)">
        <div :class="[isSelect === index ? 'select': '']">
          <div class="swiperTabBar-title">{{item.title}}</div>
          <div class="swiperTabBar-content">{{item.content}}</div>
        </div>
      </div>
    </div>
  </v-swiperScroll>
</template>

<script>
import scroll from '@/components/common/scroll'
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'swiperScroll',
  components: {
  'v-swiperScroll': scroll
  },
  props: {
    swiperTab: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    selectSwiperTabBar (index) {
      // console.log('index',index)
      this.setHomeSwiperIndex(index)
      // console.log(this.homeSwiperIndex)
    },
    ...mapActions([
      'setHomeSwiperIndex'
    ])
  },
  computed:{
    isSelect() {
      return this.homeSwiperIndex
    },
    ...mapGetters([
      'homeSwiperIndex'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.swiperScroll
  position absolute
  left 0
  right 0
  top 400px
  bottom 0
  height 60px
  overflow hidden
  .swiperTabBar
    width 480px
    height 100%
    .swiperTabBar-item
      display inline-block
      width 80px
      height 100%
      background-color #fff
      .swiperTabBar-title
        text-align center
        font-weight bold
        font-size 18px
        margin-top 7px
      .swiperTabBar-content
        font-size 10px
        text-align center
        font-weight normal
    .select
      background-image url('../../assets/icon/xing.png')
      background-position center center
      background-repeat no-repeat
</style>