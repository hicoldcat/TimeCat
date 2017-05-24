<template>
  <div class="music">
    <div class="box">
      <pic-box :src="music.pic"></pic-box>
      <music-bar :musicurl="music.musicurl" :imgurl="music.imgurl" :singer="music.singer" :songname="music.songname" ></music-bar>
      <bottom-bar :nickname="music.nickname" :avatar="music.avatar" :time="music.time" :userid="music.userid"></bottom-bar>
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
@baseBorderColor:#d1dbe5;

.music {
  position: relative;
  width: 100%;
  background-color: #fff;


  .box {
    position: relative;
    width: 90%;
    background-color: @baseBackgroundColor;
    // border: 1px solid #d1dbe5;
    margin: 0 auto;
    // box-shadow:0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    box-shadow: 0 0 30px -7px rgba(0,0,0,.3);
    padding: 5px 0;
    border-radius:4px;
  }
}
</style>
