<template>
  <div class="momentlife">
    <v-header :title="title" :nextpage="nextPage"></v-header>
    <h1>MomentLife Modules</h1>
  </div>
</template>

<script>
import axios from 'axios'

import Header from 'components/header/Header.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      title: "片刻留白",
      nextPage:"home"
    }
  },
  created() {
    axios.get('/api/momentlife').then((res) => {
      res = res.data
      if (res.errno === ERR_OK) {
        this.momentlife = res.data
      }
    }).catch((error) => {
      console.warn(error)
    })
  },
  components: {
    "v-header": Header
  }}
</script>

<style lang="less">
</style>
