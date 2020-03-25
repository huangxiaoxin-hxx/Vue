<template>
  <div class="loginWrapper">
    <van-icon name="arrow-left" @click="this.back" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="adminId"
        name="admin"
        label="管理员账号"
        placeholder="管理员账号"
        :rules="[{ required: true, message: '请输入管理员账号' }]"
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
  name: "adminLogin",
  data() {
    return {
      adminId: '',
      password: '',
      admin: []
    }
  },
  computed: {
    ...mapGetters(["fromPagePath"])
  },
  methods: {
    ...mapActions([
      'saveadmin'
    ]),
    back() {
      console.log(this.fromPagePath);
      this.$router.push({ path: `${this.fromPagePath}` });
    },
    onSubmit(values) {
      console.log('submit', values);
      axios.get('/api/admin.json').then((res) => {
        this.admin = res.data.data.admin
        console.log(this.admin)
      })
      this.admin.map((item) => {
        if(item.admin == this.adminId && item.password == this.password) {
          sessionStorage.setItem('adminInfo', JSON.stringify(item.admin))
          this.saveadmin(item)
          this.$router.push({
            path: '/admin'
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