<template>
  <div class="container">
    <div class="topbar">
      <v-backIcon class="topbar-left"></v-backIcon>
      <div class="topbar-center"></div>
      <span class="topbar-right" @click="isShow">更多</span>
    </div>
    <div class="grantLogin" v-if="switchLogin">
      <img class="flypig" src="https://gw.alicdn.com/tfs/TB1HQhMwtknBKNjSZKPXXX6OFXa-96-96.png_110x10000.jpg_.webp" alt="">
      <v-iButton text="手机淘宝登录" class="tao" :isImg="true">
        <img src="../assets/icon/taobao.png" alt="">
      </v-iButton>
      <v-iButton text="支付宝登录" class="zhi" :isImg="true">
        <img src="../assets/icon/zhifubao.png" alt="">
      </v-iButton>
      <div class="Other" @click="toSwitch">
        <span>账号密码登录</span>
      </div>
    </div>
    <div class="passwordLogin" v-if="!switchLogin">
      <img class="flypig" src="https://gw.alicdn.com/tfs/TB1HQhMwtknBKNjSZKPXXX6OFXa-96-96.png_110x10000.jpg_.webp" alt="">
      <van-cell-group>
        <van-field
          v-model="username"
          placeholder="请输入淘宝/支付宝账号"
        />
        <van-field
          v-model="password"
          :type="pwdType"
          placeholder="请输入密码"
        />
      </van-cell-group>
      <div class="eye" @click="isDisPassword">
        <img src="../assets/icon/zhenyan.png" alt="" v-if="disPassword">
        <img src="../assets/icon/biyan.png" alt="" v-if="!disPassword">
      </div>
      <v-iButton text="登录" class="login" textColor="black" @click.native="goRouter">
      </v-iButton>
      <div class="Other" @click="toSwitch">
        <span>授权登录</span>
      </div>
    </div>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      @cancel="onCancel"
      @select="select"
    />
  </div>
</template>

<script>
import backIcon from '@/components/common/backIcon'
import iButton from '@/components/common/iButton'
export default {
  name: 'Login',
  components: {
    'v-backIcon': backIcon,
    'v-iButton': iButton
  },
  data() {
    return {
      show: false,
      actions: [
        {name: '换个账户登录', color: '#93dbf9'},
        {name: '注册', color: '#93dbf9'},
        {name: '帮助', color: '#93dbf9'}
      ],
      switchLogin: true,
      username:'',
      password: '',
      pwdType: 'password',
      disPassword: false
    }
  },
  methods: {
    onCancel() {
      this.show = false;
    },
    isShow() {
      this.show = true
    },
    select(item,index) {
      console.log(item,index)
    },
    toSwitch() {
      this.switchLogin = !this.switchLogin
    },
    goRouter() {
      // console.log(this.username, this.password, 'true')
      if (this.username.trim() === '' || this.password.trim() === '') {
        this.$toast('账号或密码不能为空')
        return
      }
      this.$http({
        method: 'post',
        url: 'http://localhost:3000/users/userLogin',
        data: {
          username: this.username.trim(),
          userpwd: this.password.trim()
        }
      })
      .then((res) => {
        // console.log(res)
        if(res.data.code === '200') {
          console.log(res.data.data)
          sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
          this.$router.push({
            path: '/me'
          })
        } else {
          this.$toast(res.data.mess)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    },
    isDisPassword() {
      this.disPassword = !this.disPassword
      if(this.disPassword) {
        this.pwdType = 'text'
      } else {
        this.pwdType = 'password'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100%
  text-align center
  .topbar
    display flex
    .topbar-left
      width 25px
      height 25px
      flex 0 0 25px
      margin-top 10px
      margin-left 10px
    .topbar-center
      flex 1 1 auto
    .topbar-right
      flex 0 0 40px
      margin-top 10px
      margin-right 10px
      font-size 16px
  .tao
    position absolute
    top 50%
    left 50%
    transform translateX(-50%)
    background-color #fd7524
  .zhi
    position absolute
    top 60%
    left 50%
    transform translateX(-50%)
    background-color #1296db
  .login
    position absolute
    top 65%
    left 50%
    transform translateX(-50%)
    background-color #fec342
  .flypig
    position absolute
    top 20%
    transform translateX(-50%)
  .Other
    position absolute
    bottom 5%
    left 50%
    transform translateX(-50%)
    border-radius 50px
    width 40%
    background-color #f4f4f4
    height 1rem
    line-height .8rem
    span
      font-size .4rem
  .van-cell-group
    position absolute
    top 45%
    width 80%
    left 10%
    .van-cell
      padding-left 1.5rem
      font-size .4rem
  .eye
    width 0.5rem
    height 0.5rem
    position absolute
    top 50.5%
    left 15%
    img
      width 100%
      height 100%
</style>