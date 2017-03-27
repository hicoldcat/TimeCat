<template>
  <div class="vocality">
    <div class="music-container" v-for="item in musiclist">
      <music :music="item" class="music"></music>
    </div>
    <switch-button></switch-button>
    <v-player></v-player>
  </div>
</template>

<script>
import axios from 'axios'

import Header from 'components/header/Header.vue'
import Music from 'components/music/Music.vue'
import SwitchButton from 'components/switchbutton/SwitchButton.vue'
import Player from 'components/player/Player.vue'

const ERR_OK = 0

export default {
  data () {
    return {
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
    "music": Music,
    "switch-button": SwitchButton,
    "v-player": Player
  }}
</script>

<style lang="less">
  .vocality {
    .music{
      margin: 20px 0;
    }
  }
</style>
