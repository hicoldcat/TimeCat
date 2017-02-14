<template>
  <div class="momentlife">
    <v-header :nextTitle="nextTitle" :nextPage="nextPage"></v-header>
    <h1>MomentLife Modules</h1>
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
    // axios.get('/api/momentlife').then((res) => {
    //   res = res.data
    //   if (res.errno === ERR_OK) {
    //     this.momentlife = res.data
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
