<template>
  <div id="app">
    <div id="nav">
      <tabBar v-show="isShowBottomTabBar"></tabBar>
    </div>
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import tabBar from "./components/tabBar";
export default {
  name: "app",
  components: {
    tabBar
  },
  computed: {
    ...mapGetters(["isShowBottomTabBar"])
  },
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true //控制视图是否显示的变量
    };
  },
  methods: {
    ...mapActions([
      "saveAllUsualTicket",
      "saveAllHolidaysTicket"
    ]),
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function() {
        this.isRouterAlive = true; //再打开
      });
    }
  },
  created() {
    axios.get("/api/ticket.json").then(res => {
      this.usualTickets = res.data.data.usualTicket;
      this.saveAllUsualTicket(res.data.data.usualTicket);
    });
    axios.get("/api/ticket.json").then(res => {
      this.holidaysTickets = res.data.data.holidaysTickets;
      this.saveAllHolidaysTicket(res.data.data.holidaysTicket);
    });
  }
};
</script>

<style lang="stylus"></style>
