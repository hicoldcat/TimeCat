<template>
  <div class="home">
    <v-header :nextTitle="nextTitle" :nextPage="nextPage"></v-header>
    <div class="info-container" v-for="item in homelist">
      <info :info="item" class="info"></info>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Header from 'components/header/Header.vue'
import Info from 'components/info/Info.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      nextTitle: "片刻留白",
      nextPage:"daily",
      homelist: []
    }
  },
  created() {
    axios.get('/api/home').then((res) => {
      res = res.data
      if (res.errno === ERR_OK) {
        this.homelist = res.data
      }
    }).catch((error) => {
      console.warn(error)
    })
  },
  components: {
    "v-header": Header,
    "info": Info
  }
}
</script>

<style lang="less">
  .home {
    .info{
      margin: 20px 0;
    }
  }
</style>
