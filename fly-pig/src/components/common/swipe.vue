<template>
  <van-swipe :autoplay="3000"  @change="change">
    <van-swipe-item v-for="(item, index) in img" :key="index">
      <img :src="item.imgUrl" class="img">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    img: {
      type: Array,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    change(index) {
      // console.log(this.img[index].color)
      this.$emit('color', this.img[index].color)
    }
  }
}
</script>

<style lang="stylus">
.img
  width 100% 
  height 109.5px
</style>