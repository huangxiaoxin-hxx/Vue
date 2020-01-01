<template>
  <div class="container">
    <v-scroll class="scroll" ref="scroll">
      <div class="content">

      </div>
    </v-scroll>
  </div>
</template>

<script>
import scroll from '@/components/common/scroll'
export default {
  name: 'orderContent',
  components: {
    'v-scroll': scroll
  },
  created() {

  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100vh
  height 100vh
  .scroll
    position absolute
    top 2rem
    left 0
    right 0
    bottom 0
</style>