<template>
  <div class="music">
    <div class="box">
      <div class="pic">
        <img :src="music.pic" alt="">
      </div>
      <music-bar :musicurl="music.musicurl" :imgurl="music.imgurl" :singer="music.singer" :songname="music.songname"></music-bar>
      <bottom-bar :nickname="music.nickname" :avatar="music.avatar" :time="music.time"></bottom-bar>
    </div>
  </div>
</template>

<script>
import BottomBar from 'components/bottombar/BottomBar'
import MusicBar from 'components/musicbar/MusicBar'

export default {
  props: {
    music: {
      type: Object
    }
  },
  components: {
    "bottom-bar": BottomBar,
    "music-bar": MusicBar
  }
}
</script>

<style lang="less">
@font-face {
  font-family: 'fangzheng';
  src:  url('../../../static/fonts/fangzheng.ttf');
  font-weight: normal;
  font-style: normal;
}

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

  .pic {
    width: 94%;
    margin: 3%;
  }

  .pic img{
    width: 100%;
  }
}
</style>
