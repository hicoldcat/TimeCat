<template>
  <div class="daily">
    <div class="info-container" v-for="item in dailylist">
      <info :info="item" class="info"></info>
    </div>
    <switch-button></switch-button>
  </div>
</template>

<script>
import axios from 'axios'

import Info from 'components/info/Info.vue'
import SwitchButton from 'components/switchbutton/SwitchButton.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      dailylist:[]
    }
  },
  created() {
    axios.get('/api/daily').then((res) => {
      res = res.data
      if (res.errno === ERR_OK) {
        this.dailylist = res.data
      }
    }).catch((error) => {
      console.warn(error)
    })
  },
  components: {
    "info": Info,
    "switch-button": SwitchButton
  }}
</script>

<style lang="less">
  .daily {
    .info{
      margin: 20px 0;
    }
  }
</style>
