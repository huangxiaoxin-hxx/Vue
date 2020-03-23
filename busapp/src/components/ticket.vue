<template>
  <div>
    <div v-if="this.isShow">
      <van-cell title="日期" :value="this.currentDate" icon="label" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm" />
    </div>
    <div v-else>
      <van-tabs v-model="activeName" @click="onClick">
        <van-tab :name="item" v-for="(item, index) in this.holidays" :key="index" :title="item"></van-tab>
      </van-tabs>
    </div>
    <ul class="ticket-list" v-if="this.isShow">
      <li v-for="(item, index) in this.usualTicketData" :key="index">
        <TicketItem :currentDate="currentDate" :ticketItem="item" />
      </li>
    </ul>
    <ul class="ticket-list" v-else>
      <li v-for="(item, index) in this.holidaysTicketData" :key="index">
        <TicketItem :currentDate="currentDate" :ticketItem="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import TicketItem from "../components/ticketItem";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ticket",
  data() {
    return {
      currentDate: "元旦节",
      show: false,
      ticketLists: [],
      holidays: ["元旦节", "清明节", "劳动节", "端午节", "中秋节", "国庆节"],
      activeName: 0,
      usualTickets: [],
      holidaysTickets: []
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  created() {
    if (this.isShow) {
      this.getCurrentDate();
      axios.get("/api/ticket.json").then(res => {
        this.usualTickets = res.data.data.usualTicket
        this.saveAllUsualTicket(res.data.data.usualTicket);
        // this.ticketLists = res.data.data.usualTicket
        // console.log(this.ticketLists)
      });
    } else {
      axios.get("/api/ticket.json").then(res => {
        this.holidaysTickets = res.data.data.holidaysTickets
        this.saveAllHolidaysTicket(res.data.data.holidaysTicket);
        // this.ticketLists = res.data.data.usualTicket
        // console.log(this.ticketLists)
      });
    }
  },
  // watch:{
  //   isShow(newVal) {
  //     if(newVal) {
  //       this.saveAllUsualTicket(this.usualTickets);
  //     } else {
  //       this.saveAllHolidaysTicket(this.holidaysTickets);
  //     }
  //   }
  // },
  methods: {
    ...mapActions(["saveAllUsualTicket","saveAllHolidaysTicket"]),
    onClick() {
      this.currentDate = this.activeName
    },
    getCurrentDate() {
      const date = new Date();
      this.currentDate = `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()}`;
    },
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      // console.log(date)
      this.currentDate = this.formatDate(date);
    }
  },
  components: {
    TicketItem
  },
  computed: {
    ...mapGetters(["usualTicketData", "holidaysTicketData"])
  }
};
</script>

<style scoped lang="stylus">
.van-cell {
  position: fixed;
  z-index: 100;
  top: 2.75rem;
}

.ticket-list {
  position: relative;
  top: 3rem;
  margin-bottom: 5rem;
}
</style>