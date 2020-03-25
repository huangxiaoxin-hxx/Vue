<template>
  <div>
    <van-field
      readonly
      clickable
      name="picker"
      :value="value"
      :label="this.label"
      :placeholder="this.placeholder"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showPicker: false,
      value: ''
    }
  },
  methods: {
    ...mapActions([
      "setTicketStart","setTicketEnd"
    ]),
    onConfirm(value) {
      this.value = value
      if(this.id == 'start') {
        this.setTicketStart(value)
      } else if (this.id == 'end') {
        this.setTicketEnd(value)
      }
      this.showPicker = false
    }
  }
};
</script>

<style>
</style>