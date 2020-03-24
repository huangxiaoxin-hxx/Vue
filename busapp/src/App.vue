<template>
  <div id="app">
    <div id="nav">
      <tabBar v-show="isShowBottomTabBar"></tabBar>
    </div>
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function() {
        this.isRouterAlive = true; //再打开
      });
    }
  }
};
</script>

<style lang="stylus"></style>
