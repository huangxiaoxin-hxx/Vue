<template>
  <div class="modifyItWrapper">
    <van-icon name="arrow-left" @click="this.back" />
    <pickerItem :columns="this.Places" label="起始站" placeholder="点击选择起始学校" id="start" />
    <pickerItem :columns="this.Places" label="终点站" placeholder="点击选择终点学校" id="end" />
    <van-button type="primary" @click="updateTicket">修改</van-button>
  </div>
</template>

<script>
import pickerItem from "../components/pickerItem";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "modifyItinerary",
  data() {
    return {
      startPlace: "",
      Places: [
        "东华理工",
        "江西财大",
        "华东交通",
        "南昌大学",
        "南昌西",
        "南昌站"
      ],
      endPlace: "",
      showStart: false
    };
  },
  components: {
    pickerItem
  },
  computed: {
    ...mapGetters(["fromPagePath", "ticketStart", "ticketEnd"])
  },
  methods: {
    ...mapActions(["updateTicketById"]),
    back() {
      console.log(this.fromPagePath);
      this.$router.push({ path: `${this.fromPagePath}` });
    },
    updateTicket() {
      if (this.ticketStart == this.ticketEnd) {
        this.$toast("起始站不能和终点站相同");
      } else if(this.ticketStart == '' || this.ticketEnd == '') {
        this.$toast("起始站和终点站不能为空");
      }
      else {
        this.updateTicketById();
        this.$router.push({
          path: "/admin"
        });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.modifyItWrapper {
  font-size: 1.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
}
</style>