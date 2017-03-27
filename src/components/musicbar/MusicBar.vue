<template>
  <div class="musicbar">
    <div class="musicbar-container">
      <div class="left">
        <img :src="imgurl" alt="">
      </div>
      <div class="center">
        <div class="songname">{{songname}}</div>
        <div class="singer">{{singer}}</div>
      </div>
      <div class="right" @click="togglePlayerStatus(musicurl)">
        <i class="icon-play3"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    musicurl: {
      type: String
    },
    imgurl: {
      type: String
    },
    singer: {
      type: String
    },
    songname: {
      type: String
    }
  },
  methods: {
    togglePlayerStatus: function (url) {
      this.$store.dispatch('togglePlayerStatus',{currentPlayerUrl:url})
    }
  }
}
</script>

<style lang="less">
  .musicbar {
    margin: 3%;

    .musicbar-container {
      padding: 2px;
      display: flex;
      position: relative;
      border: 1px solid #d1dbe5;

      .left {
        display: inline-block;
        flex: 0 0 40px;

        img {
          width: 40px;
          height: 40px;
        }
      }

      .center {
        display: inline-block;
        flex: 0 0 auto;
        font-family: fangzheng;
        margin-left: 10px;

        .songname {
          height: 25px;
          line-height: 25px;
          font-size: 16px;
        }

        .singer {
          height: 15px;
          line-height: 15px;
          font-size: 12px;
        }
      }

      .right {
        position: absolute;
        right: 0;
        bottom: 0;
        display: inline-block;
        font-size: 30px;
        line-height: 42px;
        height: 42px;
        vertical-align: middle;
        opacity:0.5;
      }

    }

  }
</style>
