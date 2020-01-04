<template>
  <div class="container">
    <v-scroll class="scroll" ref="scroll">
      <div class="content">
        <v-ticket v-for="item in ticketData" :key="item.id" :ticketItem="item"></v-ticket>
      </div>
    </v-scroll>
  </div>
</template>

<script>
import scroll from '@/components/common/scroll'
import ticket from '@/components/common/ticket'
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'orderContent',
  components: {
    'v-scroll': scroll,
    'v-ticket': ticket
  },
  created() {
    this.initDetail()
  },
  data() {
    return {
      // ticketData: []
    } 
  },
  methods: {
    ...mapActions([
      'saveAllTicket'
    ]),
    initDetail() {
      let username = JSON.parse(sessionStorage.getItem('userInfo')).username
      this.$http({
        method: 'post',
        url: 'http://localhost:3000/users/findAllTicket',
        data: {
          username: username
        }
      })
      .then((res) => {
        if(res.data.code === '200') {
          console.log(res.data.data)
          this.saveAllTicket(res.data.data)
          console.log(this.ticketData)
        } else {
          this.$toast(res.data.mess)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  computed: {
    ...mapGetters(["ticketData"])
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100%
  overflow hidden
  .scroll
    position absolute
    top 2rem
    left 0
    right 0
    bottom 0
    z-index -1
    overflow hidden
</style>