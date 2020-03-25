<template>
  <div class="adminWrapper">
    <div class="top">
      您好,
      <span>{{admin.name}}</span>
    </div>
    <van-tabs  sticky>
      <van-tab title="退票" :badge="returnTicket.length">
        <ul>
          <li v-for="(item, index) in returnTicket" :key="index">
            <reTicketItem :reTicketItem="item"/>
          </li>
        </ul>
      </van-tab>
      <van-tab title="路线">
        <ul>
          <li v-for="item in usualTicketData" :key="item.id">
            <itinerary :reTicketItem="item"/>
          </li>
        </ul>
        <ul>
          <li v-for="item in holidaysTicketData" :key="item.id">
            <itinerary :reTicketItem="item"/>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import itinerary from '../components/itinerary'
import { mapGetters } from "vuex";
import reTicketItem from '../components/returnTicketItem'
export default {
  name: "admin",
  computed: {
    ...mapGetters(["admin","returnTicket","usualTicketData","holidaysTicketData"])
  },
  components: {
    reTicketItem,
    itinerary
  },
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
.adminWrapper {
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom 2rem

  .top {
    span {
      color: #abfdfc;
    }
  }
}
</style>