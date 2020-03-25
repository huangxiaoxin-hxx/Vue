<template>
  <div class="itineraryWrapper">
    <div class="wrapperTop">
      <div class="place start">{{reTicketItem.start}}</div>
      <div class="center">
        <div class="time">
          <span>{{reTicketItem.date}}</span>
          {{reTicketItem.time}}
        </div>
        <div>
          <img src="../assets/icon/jiantou.png" alt />
        </div>
        <div>¥{{reTicketItem.price}}</div>
      </div>
      <div class="place end">{{reTicketItem.end}}</div>
    </div>
    <div class="wrapperBottom">
      <van-button class="buy" round size="mini" type="info" @click="modItinerary">修改路线</van-button>
      <van-button class="buy" round size="mini" type="danger" @click="delItinerary">删除路线</van-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "itinerary",
  props: {
    reTicketItem: Object,
    default: () => {}
  },
  methods: {
    ...mapActions(["deleteTicket", "saveTicketId"]),
    delItinerary() {
      this.deleteTicket(this.reTicketItem.id);
    },
    modItinerary() {
      this.saveTicketId(this.reTicketItem.id);
      console.log(this.reTicketItem.id);
      this.$router.push({
        path: "/modifyItinerary"
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.itineraryWrapper {
  box-shadow: 10px 1px 5px #888888;
  border: 1px solid #3c4043;
  margin: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  height: 8rem;
  border-radius: 5px;

  .wrapperTop {
    display: flex;

    .place {
      flex: 1;
      text-align: center;
      line-height: 5rem;
    }

    .center {
      flex: 1;
      text-align: center;
    }
  }

  .wrapperBottom {
    display: flex;

    .buy {
      flex: 1;
    }
  }
}
</style>