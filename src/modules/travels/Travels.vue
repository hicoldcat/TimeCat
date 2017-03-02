<template>
  <div class="travels">
    <v-header :nextTitle="nextTitle" :nextPage="nextPage"></v-header>
    <div class="trip-container" v-for="item in triplist">
      <trip :trip="item" class="trip"></trip>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Header from 'components/header/Header.vue'
import Trip from 'components/trip/Trip.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      nextTitle: "此处留白",
      nextPage:"home",
      triplist:[]
    }
  },
  created() {
    axios.get('/api/travels').then((res) => {
      res = res.data
      if (res.errno === ERR_OK) {
        this.triplist = res.data
      }
    }).catch((error) => {
      console.warn(error)
    })
  },
  components: {
    "v-header": Header,
    "trip": Trip
  }}
</script>

<style lang="less">
  .travels {
    .trip{
      margin: 20px 0;
    }
  }
</style>
