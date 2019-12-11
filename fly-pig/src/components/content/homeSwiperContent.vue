<template>
  <div class="container">
    <van-swipe 
    :loop="false" 
    class="swiper"
    :show-indicators="false"
    @change="swiper"
    ref="swiperToIndex">
      <van-swipe-item v-for="(item, index) in homeSwiper" :key="index">
        <div v-for="(block, index) in item" :key="index">
          <img :src="block.imgUrl" alt="">
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "homeSwiperContent",
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
      'setHomeSwiperIndex'
    ])
  },
  computed: {
    ...mapGetters([
      'homeSwiperIndex'
    ])
  },
  watch: {
    homeSwiperIndex(val) {
      console.log(val)
      this.$refs.swiperToIndex.swipeTo(val)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  position relative
  top 110px
  .swiper
    width 95%
    margin 0 auto
    background-color #fff
</style>