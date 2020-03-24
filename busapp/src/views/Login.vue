<template>
  <div class="loginWrapper">
    <van-icon name="arrow-left" @click="this.back" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="学号"
        placeholder="学号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from 'axios'
export default {
  name: "login",
  data() {
    return {
      username: '',
      password: '',
      users: []
    }
  },
  computed: {
    ...mapGetters(["fromPagePath"])
  },
  methods: {
    ...mapActions([
      'saveuser'
    ]),
    back() {
      console.log(this.fromPagePath);
      this.$router.push({ path: `${this.fromPagePath}` });
    },
    onSubmit(values) {
      console.log('submit', values);
      axios.get('/api/user.json').then((res) => {
        this.users = res.data.data.user
        console.log(this.users)
      })
      this.users.map((item) => {
        if(item.username == this.username && item.password == this.password) {
          sessionStorage.setItem('userInfo', JSON.stringify(item.username))
          this.saveuser(item)
          this.$router.push({
            path: '/me'
          })
        }
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
.loginWrapper
  font-size: 20px;

  .van-icon-arrow-left
    margin-top: 10px;
    margin-left: 10px;
  .van-form
    position relative
    top 1rem
</style>