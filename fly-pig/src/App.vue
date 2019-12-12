<template>
  <div id="app">
    <router-view/>
    <v-flyPigTabBar v-if="isShowBottomTabBar"></v-flyPigTabBar>
    <!-- <v-search></v-search> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import flyPigTabBar from '@/components/content/flyPigTabBar'
import Search from '@/pages/Search'
export default {
  name: 'App',
  components: {
    'v-flyPigTabBar': flyPigTabBar,
    'v-search': Search
  },
  computed: {
    ...mapGetters([
      'isShowBottomTabBar'
    ])
  },
  // computed: mapState(['isShowBottomTabBar']),
  mounted () {
    console.log(this.isShowBottomTabBar)
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
