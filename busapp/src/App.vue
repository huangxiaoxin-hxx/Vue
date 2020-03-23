<template>
  <div id="app">
    <div id="nav">
      <tabBar></tabBar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import tabBar from './components/tabBar'
export default {
  name: 'app',
  components: {
    tabBar
  }
}
</script>

<style lang="stylus">

</style>
