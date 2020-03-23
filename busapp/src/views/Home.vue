<template>
  <div class="home">
    <van-tabs v-model="activeName" @click="onClick" sticky>
      <van-tab title="平常日" name="usual">
        <Ticket :isShow="true" />
      </van-tab>
      <van-tab title="节假日" name="holidays">
        <Ticket :isShow="false" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Ticket from '../components/ticket'
export default {
  name: 'home',
  data() {
    return {
      activeName: ''
    };
  },
  methods: {
    onClick() {
      console.log(this.activeName)
    }
  },
  components: {
    Ticket
  }
};
</script>

<style scoped>
</style>
