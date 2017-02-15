<template>
  <div class="daily">
    <v-header :nextTitle="nextTitle" :nextPage="nextPage"></v-header>
    <h1>daily Modules</h1>
    <h1>片刻留白 生活状态！</h1>
  </div>
</template>

<script>
import axios from 'axios'

import Header from 'components/header/Header.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      nextTitle: "回音留白",
      nextPage:"hearsensation"
    }
  },
  created() {
    // axios.get('/api/daily').then((res) => {
    //   res = res.data
    //   if (res.errno === ERR_OK) {
    //     this.daily = res.data
    //   }
    // }).catch((error) => {
    //   console.warn(error)
    // })
  },
  components: {
    "v-header": Header
  }}
</script>

<style lang="less">
</style>
