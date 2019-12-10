<template>
  <div id="app">
    <router-view/>
    <v-flyPigTabBar></v-flyPigTabBar>
    <!-- <v-search></v-search> -->
  </div>
</template>

<script>
import flyPigTabBar from '@/components/content/flyPigTabBar'
import Search from '@/pages/Search'
export default {
  name: 'App',
  components: {
    'v-flyPigTabBar': flyPigTabBar,
    'v-search': Search
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
