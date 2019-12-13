<template>
    <img class="back" src="../../assets/icon/back.png" alt="" @click="back">
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name:'backIcon',
  data() {
    return {
      
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