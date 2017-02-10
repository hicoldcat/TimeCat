<template>
  <div class="home">
    <v-header :title="title"></v-header>
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
      title: "此处留白",
      homelist: []
    }
  },
  created() {
    axios.get('/api/home').then((res) => {
      console.info(res)
      res = res.data
      console.info(res)
      if (res.errno === ERR_OK) {
        this.homelist = res.data
      }
      console.info(this.homelist)
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
