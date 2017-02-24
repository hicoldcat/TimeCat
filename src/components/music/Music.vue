<template>
  <div class="music">
    <div class="box">
      <pic-box :src="music.pic"></pic-box>
      <music-bar :musicurl="music.musicurl" :imgurl="music.imgurl" :singer="music.singer" :songname="music.songname"></music-bar>
      <bottom-bar :nickname="music.nickname" :avatar="music.avatar" :time="music.time"></bottom-bar>
    </div>
  </div>
</template>

<script>
import BottomBar from 'components/bottombar/BottomBar'
import MusicBar from 'components/musicbar/MusicBar'
import PicBox from 'components/picbox/PicBox'

export default {
  props: {
    music: {
      type: Object
    }
  },
  components: {
    "bottom-bar": BottomBar,
    "music-bar": MusicBar,
    "pic-box": PicBox
  }
}
</script>

<style lang="less">
@baseBackgroundColor:#fff;
@baseBorderColor:#3B3B3B;

.music {
  position: relative;
  width: 100%;
  background-color: #fff;

  .box {
    position: relative;
    width: 90%;
    background-color: @baseBackgroundColor;
    margin: 0 auto;
    border: 1px solid @baseBorderColor;
    margin: 0 auto;
  }
}
</style>
