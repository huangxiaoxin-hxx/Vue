<template>
  <div class="container">
    <div class="meNumber">
      <div class="meTopBar">
        <div class="meTopBar-left topItem">
        </div>
        <div class="meTopBar-center">
          <span>飞猪会员中心</span>
        </div>
        <div class="meTopBar-right topItem">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-more-outline el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-tickets">我的订单</el-dropdown-item>
              <el-dropdown-item icon="el-icon-suitcase-1">我的行程</el-dropdown-item>
              <el-dropdown-item icon="el-icon-star-off">我的收藏</el-dropdown-item>
              <el-dropdown-item icon="el-icon-coin">我的红包</el-dropdown-item>
              <el-dropdown-item icon="el-icon-stopwatch">浏览历史</el-dropdown-item>
              <el-dropdown-item icon="el-icon-shopping-cart-2">购物车</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="meData">
        <div class="meDataTop">
          <div class="meDataTopLeft">
            <img src="../assets/img/img.jpg" alt="">
          </div>
          <div class="meDataTopRight">
            <div class="meName">
              <span>{{nickname}}</span>
            </div>
            <div class="meExperienceBar">
              <div class="meExperienceBlank">
              </div>
              <div class="meExperienceBlack" :style="{width: EXBlackWidth + 'rem'}">
              </div>
            </div>
            <div class="meExperience">
              <span>{{experience}}/{{fullexperience}}  升级到F{{grade + 1}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="numberCard">
        <div class="equity">
          <span>全部权益</span><van-icon name="arrow" class="arrow" />
        </div>
        <div class="numberSwiper">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Me',
  data() {
    return {
      nickname: '',
      experience: 0,
      grade: 0,
      EXBlackWidth: 0,
      fullexperience: 1000
    }
  },
  created() {
    this.nickname = JSON.parse(sessionStorage.getItem('userInfo')).nickname
    this.experience = JSON.parse(sessionStorage.getItem('userInfo')).experience
    this.grade = JSON.parse(sessionStorage.getItem('userInfo')).grade
    this.gradeToEx()
    // console.log(this.nickname,this.experience,this.grade)
    this.EXBlackWidth = (this.experience/this.fullexperience) * 3
  },
  methods: {
    // 根据等级判断当前满级经验值
    gradeToEx() {
      if(this.grade === 0) {
        return
      } else if(this.grade === 1) {
        this.fullexperience = 6000
      } else if(this.grade === 2) {
        this.fullexperience = 12000
      } else {
        this.fullexperience = 20000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100%
  .meNumber
    background-color #fc373c
    .meTopBar
      display flex
      height 1rem
      .topItem
        flex 1
        img
          width 25px
          height 25px
      .meTopBar-center
        flex 8
        text-align center
        color #fff
        margin-top -0.1rem
        span
          font-size .5rem
          letter-spacing .1rem
      .meTopBar-right
        margin-top -0.2rem
        .el-icon-more-outline
          color #fff
    .meData
      width 90%
      margin 0 auto
      .meDataTop
        display flex
        .meDataTopLeft
          width 2rem
          height 2rem
          img
            height 100%
            width 100%
            border-radius 50%
        .meDataTopRight
          flex 1
          margin-left 0.3rem
          margin-top 0.3rem
          .meName
            white-space nowrap
            border 0px solid black
            position relative
            box-sizing border-box
            display block
            -webkit-box-orient vertical
            flex-direction column
            align-content flex-start
            flex-shrink 0
            font-size .5rem
            line-height 19.872px
            color #fff
            font-weight bold
            width 182.16px
            text-overflow ellipsis
            overflow hidden
          .meExperienceBar
            border 0px solid black
            position relative
            box-sizing border-box
            display flex
            -webkit-box-orient vertical
            flex-direction column
            align-content flex-start
            flex-shrink 0
            margin-top .2rem
            .meExperienceBlank
              border 0px solid black
              position relative
              box-sizing border-box
              display flex
              -webkit-box-orient vertical
              flex-direction column
              align-content flex-start
              flex-shrink 0
              background-color rgba(255, 255, 255, 0.2)
              width 3rem
              height 0.1rem
              border-radius 1.656px
            .meExperienceBlack
              border 0px solid black
              position absolute
              box-sizing border-box
              display flex
              -webkit-box-orient vertical
              flex-direction column
              align-content flex-start
              flex-shrink 0
              border-radius 1.656px
              height 0.1rem
              top 0px
              background-image linear-gradient(to right, rgb(159, 179, 220), rgb(77, 102, 153))
          .meExperience
            white-space pre-wrap
            border 0px solid black
            position relative
            box-sizing border-box
            display block
            -webkit-box-orient vertical
            flex-direction column
            align-content flex-start
            flex-shrink 0
            font-size 11.04px
            color #fff
    .numberCard
      width 90%
      height 3rem
      margin 0 auto
      margin-top .5rem
      background-image url('https://gw.alicdn.com/tfs/TB1pccPdbY1gK0jSZTEXXXDQVXa-981-405.png')
      background-size cover
      flex-flow column
      .equity
        position relative
        right -7rem
        font-size .3rem
        top .4rem
        .arrow
          position relative
          top .05rem
      .numberSwiper
        width 100%
        height 50%
        transform translateY(50%)
        background-color #fff
</style>