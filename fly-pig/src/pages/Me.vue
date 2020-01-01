<template>
  <div class="container">
    <div class="meNumber" ref="meNumber">
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
          <van-swipe vertical :show-indicators="false" class="Swiper" :autoplay="3000" :touchable="false">
            <van-swipe-item class="firstSwiper">
              <div class="firstSwiperBlock" v-for="(item, index) in firstSwiper" :key="index">
                <img :src="item.imgUrl" alt="">
                <span>{{item.name}}</span>
              </div>
            </van-swipe-item>
            <van-swipe-item v-for="(item, index) in swiper" :key="index" class="firstSwiper">
              <div class="swiperBlock">
                <div class="img">
                  <img :src="item.imgUrl" alt="">
                </div>
                <div class="text">
                  <span>{{item.name}} | {{item.content}}</span>
                  <router-link to="/" class="go">去参与>></router-link>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <v-meScroll class="meScroll" ref="meScroll" :click="true" :listenScroll="true" @scroll="getScroll" :probeType="3">
      <div class="scrollContent">
        <div class="topBlank"></div>
        <div class="bottomContent">
          <div class="content">
            <div class="contentBar">
              <div class="contentBarBlock" v-for="(item, index) in contentBarBlock" :key="index">
                <span class="name">{{item.name}}<van-icon class="play" name="play" /></span>
                <span class="content">{{item.content}} </span><span class="red">{{item.redText}}</span>
              </div>
            </div>
            <v-meCard class="myOrder" title="我的订单" more="全部订单">
              <div class="myOrderBar">
                <div class="myOrderBlock" v-for="(item,index) in myOrderBlock" :key="index" @click="goBlock(item.path)">
                  <van-icon class="icon" :name="item.icon" />
                  <span>{{item.name}}</span>
                </div>
              </div>
            </v-meCard>
            <v-meCard class="myTool" title="我的工具">
              <div class="myToolBar">
                <div class="myToolBlock" v-for="(item,index) in meTool1" :key="index">
                  <div class="icon">{{item.icon}}</div>
                  <span>{{item.name}}</span>
                </div>
              </div>
              <div class="myToolBar">
                <div class="myToolBlock" v-for="(item,index) in meTool2" :key="index">
                  <van-icon class="icon" :name="item.icon" />
                  <span>{{item.name}}</span>
                </div>
              </div>
            </v-meCard>
            <v-meCard class="myMileage" title="我的飞猪里程" more="更多兑换"></v-meCard>
          </div>
          <div class="bottomTips">
            已经到底啦！
          </div>
        </div> 
      </div>
    </v-meScroll>
  </div>
</template>

<script>
import meScroll from '@/components/common/scroll'
import meCard from '@/components/common/meCard'
export default {
  name: 'Me',
  components: {
    'v-meScroll': meScroll,
    'v-meCard': meCard
  },
  data() {
    return {
      nickname: '',
      experience: 0,
      grade: 0,
      EXBlackWidth: 0,
      fullexperience: 1000,
      firstSwiper: [],
      swiper: [],
      contentBarBlock: [],
      myOrderBlock: [],
      meTool1: [],
      meTool2: []
    }
  },
  created() {
    this.nickname = JSON.parse(sessionStorage.getItem('userInfo')).nickname
    this.experience = JSON.parse(sessionStorage.getItem('userInfo')).experience
    this.grade = JSON.parse(sessionStorage.getItem('userInfo')).grade
    this.gradeToEx()
    // console.log(this.nickname,this.experience,this.grade)
    this.EXBlackWidth = (this.experience/this.fullexperience) * 3
    this.$http
    .get("http://localhost:8080/static/data/me.json")
    .then(res => {
      // console.log(res)
      this.firstSwiper = res.data.firstSwiper;
      // console.log(this.findBlock)
      this.swiper = res.data.swiper
      this.contentBarBlock = res.data.contentBarBlock
      this.myOrderBlock = res.data.meOrder
      this.meTool1 = res.data.meTool1
      this.meTool2 = res.data.meTool2
    });
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
    },
    getScroll(data) {
      console.log(data)
      if(data.y !== 0) {
        this.$refs.meNumber.style.zIndex = 0
      } else{
        this.$refs.meNumber.style.zIndex = 5
      }
    },
    goBlock(path) {
      console.log(path)
      this.$router.push({
        path: path
      })
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
    position absolute
    z-index 5
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
          width 1.6rem
          height 1.6rem
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
        width 1.5rem
        .arrow
          position relative
          top .05rem
      .numberSwiper
        width 100%
        height 50%
        transform translateY(70%)
        .Swiper
          width 100%
          height 100%
          .firstSwiper
            border 0px solid black
            position relative
            box-sizing border-box
            display flex
            -webkit-box-orient horizontal
            flex-flow row wrap
            align-content flex-start
            flex-shrink 0
            overflow hidden
            width 100%
            height 100%
            .firstSwiperBlock
              border 0px solid black
              position relative
              box-sizing border-box
              display flex
              -webkit-box-orient vertical
              flex-direction column
              place-content flex-start flex-end
              flex-shrink 0
              cursor pointer
              -webkit-tap-highlight-color rgba(0, 0, 0, 0)
              margin-left 0px
              width 2.2rem
              height 1.8rem
              -webkit-box-align center
              align-items center
              -webkit-box-pack end
              img
                width 100%
                height 100%
              span
                font-size 0.3rem
                transform translateY(-0.7rem)
                color #777
            .swiperBlock
              width 90%
              height 100%
              display flex
              .img
                width 2rem
                height 1.2rem
                margin-left .5rem
                img
                  width 100%
                  height 100%
                  border-radius 5px
              .text
                font-size .35rem
                margin-left .3rem
                line-height .5rem
                transform translateY(.15rem)
              .go
                color #000
  .meScroll
    position absolute
    top 1rem
    bottom 1.5rem
    left 0
    right 0
    overflow hidden
    .scrollContent
      width 100%
      .topBlank
        width 100%
        height 5.15rem
      .bottomContent
        width 100%
        // height 30rem
        background-color #fdfbfc
        .content
          width 90%
          // background #fff
          margin 0 auto
          .contentBar
            display flex
            height 2rem
            .contentBarBlock
              height 80%
              flex 1
              margin auto 0
              border-right 1px solid #ddd
              text-align center
              box-sizing border-box
              font-size 0.3rem
              line-height .9rem
              span
                font-size 0.3rem
              .name
                display block
                font-size .4rem
                font-weight bold
                transform translateY(.2rem)
              .red
                color red
              .play
                font-size .2rem
          .myOrder,.myTool,.myMileage
            margin-top .5rem
            .myOrderBar,.myToolBar
              width 100%
              display flex
              .myOrderBlock,.myToolBlock
                font-size 1rem
                flex 1
                text-align center
                .icon
                  color #fcb530
                span
                  font-size .2rem
                  display block
                  margin-top -0.3rem
          .myTool
            height 4.5rem
            .myToolBar
              margin-bottom .2rem
              .icon
                font-size .8rem
                font-weight bold
                margin-bottom .2rem
        .bottomTips
          width 100%
          text-align center
          font-size .6rem
          height 4rem
          line-height 4rem
</style>