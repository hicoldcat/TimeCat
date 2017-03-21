<template>
  <div class="vocality">
    <v-header :nextTitle="nextTitle" :nextPage="nextPage"></v-header>
    <div class="music-container" v-for="item in musiclist">
      <music :music="item" class="music"></music>
    </div>
    <switch-button></switch-button>
  </div>
</template>

<script>
import axios from 'axios'

import Header from 'components/header/Header.vue'
import Music from 'components/music/Music.vue'
import SwitchButton from 'components/switchbutton/SwitchButton.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      nextTitle: "字符留白",
      nextPage:"essay",
      musiclist:[]
    }
  },
  created() {
    axios.get('/api/vocality').then((res) => {
      res = res.data
      if (res.errno === ERR_OK) {
        this.musiclist = res.data
      }
    }).catch((error) => {
      console.warn(error)
    })
  },
  components: {
    "v-header": Header,
    "music": Music,
    "switch-button": SwitchButton
  }}
</script>

<style lang="less">
  .vocality {
    .music{
      margin: 20px 0;
    }
  }
</style>
