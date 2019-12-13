<template>
  <div class="tab-flex">
    <router-link to="/home" tag="div" class="tab-item">
      <div class="tab-img">
        <img src="../../assets/icon/shouye.png" alt="">
      </div>
      <span class="tab-text">首页</span>
    </router-link>
    <router-link to="/find" tag="div" class="tab-item">
      <div class="tab-img">
        <img src="../../assets/icon/faxian.png" alt="">
      </div>
      <span class="tab-text">发现</span>
    </router-link>
    <router-link to="/strategy" tag="div" class="tab-item">
      <div class="tab-img">
        <img src="../../assets/icon/dujia.png" alt="">
      </div>
      <span class="tab-text">攻略</span>
    </router-link>
    <router-link to="/trip" tag="div" class="tab-item">
      <div class="tab-img">
        <img src="../../assets/icon/hangcheng.png" alt="">
      </div>
      <span class="tab-text">行程</span>
    </router-link>
    <router-link @click.native="goToMe" to="/me" tag="div" class="tab-item">
      <div class="tab-img">
        <img src="../../assets/icon/wode.png" alt="">
      </div>
      <span class="tab-text">我的</span>
    </router-link>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "tabBarIcon",
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'isLogin'
    ])
  },
  methods: {
    goToMe() {
      if(this.isLogin) {
        this.$router.push({path:'/me'})
      } else {
        this.$router.push({path:'/Login'})
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/fun"
.tab-flex
  display flex
  .tab-item
    flex 1
    text-align center
    width px2rem(80px)
    .tab-img
      display block
      width px2rem(80px)
      height px2rem(80px)
      line-height px2rem(80px)
      margin 0 auto
      border-radius 50%
      img
        width 80%
        height 80%
        display block
        margin 0 auto
    .tab-text
      display block
      font-size 0.2rem
      color #000
    &.router-link-active
      .tab-img
        background-color yellow
</style>