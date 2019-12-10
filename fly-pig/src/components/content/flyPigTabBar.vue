<template>
  <v-tabBar>
    <v-tabBarIcon></v-tabBarIcon>
  </v-tabBar>
</template>

<script>
import tabBar from '@/components/common/tabBar'
import tabBarIcon from '@/components/content/tabBarIcon'
export default {
  name: 'flyPigTabBar',
  components: {
    'v-tabBar': tabBar,
    'v-tabBarIcon': tabBarIcon
  }
}
</script>

<style>

</style>