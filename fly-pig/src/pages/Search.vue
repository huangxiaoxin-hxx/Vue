<template>
  <div class="container">
    <v-inputBar :inputValue="inputValue"></v-inputBar>
    <v-recordBox title="历史记录" :block="searchHistory" @select="savaSearch"></v-recordBox>
    <div class="delete-icon" v-if="searchHistory.length" @click="deleteHistory">
      <img src="../assets/icon/delete.png">
    </div>
    <v-recordBox title="搜索·发现" :block="findBlock" @select="savaSearch"></v-recordBox>
    <!-- <van-dialog v-model="deleteTips" title="" >
      <span>确定删除历史记录吗?</span>
    </van-dialog> -->
  </div>
</template>

<script>
import inputBar from "@/components/common/inputBar";
import recordBox from "@/components/content/recordBox";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Search",
  components: {
    "v-inputBar": inputBar,
    "v-recordBox": recordBox
  },
  data() {
    return {
      inputValue: "故宫",
      findBlock: [],
      deleteTips: false
    };
  },
  created() {
    this.$http
      .get("http://localhost:8080/static/data/search.json")
      .then(res => {
        // console.log(res)
        this.findBlock = res.data.findBlock;
        // console.log(this.findBlock)
      });
  },
  methods: {
    savaSearch(query) {
      this.saveSearchHistory(query);
    },
    ...mapActions([
      "saveSearchHistory",
      "deleteAllSearchHistory"
    ]),
    deleteHistory() {
      console.log('1')
      this.$dialog.confirm({
        message: '是否删除历史记录'
      }).then(() => {
        this.deleteAllSearchHistory()
      }).catch(() => {
        return
      })
    },
    
  },
  computed: {
    ...mapGetters(["searchHistory"])
  },
};
</script>

<style lang="stylus" scoped>
.container
  z-index 10000
  // position absolute
  // left 0
  // right 0
  // top 0
  // bottom 0
  background-color #fff
  .delete-icon
    position absolute
    top 60px
    right 10px
    img
      width 20px
      height 20px
</style>