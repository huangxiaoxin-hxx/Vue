<template>
    <img v-if="white" class="back" src="../../assets/icon/backwhite.png" alt="" @click="back">
    <img v-else class="back" src="../../assets/icon/back.png" alt="" @click="back">
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name:'backIcon',
  data() {
    return {
      
    }
  },
  props:{
    white: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters([
      'fromPagePath'
    ])
  },
  methods: {
    back () {
      console.log(this.fromPagePath)
      this.$router.push({path:`${this.fromPagePath}`})
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>