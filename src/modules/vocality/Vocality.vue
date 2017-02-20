<template>
  <div class="">
    <v-header :nextTitle="nextTitle" :nextPage="nextPage"></v-header>
    <h1>Vocality Modules</h1>
    <h1>回音留白  音乐！！！</h1>
  </div>
</template>

<script>
import axios from 'axios'

import Header from 'components/header/Header.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      nextTitle: "半步留白",
      nextPage:"meetyourself"
    }
  },
  created() {
    // axios.get('/api/meetyourself').then((res) => {
    //   res = res.data
    //   if (res.errno === ERR_OK) {
    //     this.meetyourself = res.data
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
