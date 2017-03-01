<template>
  <div class="">
    <v-header :nextTitle="nextTitle" :nextPage="nextPage"></v-header>
    <h1>travels Modules</h1>
    <h1>半步留白 旅行！！</h1>
  </div>
</template>

<script>
import axios from 'axios'

import Header from 'components/header/Header.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      nextTitle: "此处留白",
      nextPage:"home"
    }
  },
  created() {
    // axios.get('/api/travels').then((res) => {
    //   res = res.data
    //   if (res.errno === ERR_OK) {
    //     this.travelslist = res.data
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
