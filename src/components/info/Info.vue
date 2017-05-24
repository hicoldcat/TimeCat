<template>
<div class="info">
  <div class="box">
    <pic-box :src="info.pic" :id="info.id" :nickname="info.nickname"></pic-box>
    <div class="desc" @click="goDetailPage(info)">
      {{info.desc}}
    </div>
    <bottom-bar :nickname="info.nickname" :avatar="info.avatar" :time="info.time" :userid="info.userid"></bottom-bar>
  </div>
</div>
</template>

<script>
import BottomBar from 'components/bottombar/BottomBar'
import PicBox from 'components/picbox/PicBox'

export default {
  props: {
    info: {
      type: Object
    }
  },
  components: {
    "bottom-bar": BottomBar,
    "pic-box":PicBox
  },
  methods: {
    goDetailPage: function (info) {
        this.$store.dispatch('goDetailPage',{id:info.id})
        this.$store.dispatch('toggleheader',{nickname:info.nickname})
    }
  }
}
</script>

<style lang="less">
@baseBackgroundColor:#fff;
@baseBorderColor:#3B3B3B;

.info {
    position: relative;
    width: 100%;
    background-color: #fff;

    .box {
        position: relative;
        width: 90%;
        background-color: @baseBackgroundColor;
        margin: 0 auto;
        // border: 1px solid #d1dbe5;
        margin: 0 auto;
        // box-shadow:0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
        box-shadow: 0 0 30px -7px rgba(0,0,0,.3);
        padding: 5px 0;
        border-radius:4px;

        .desc {
          font-size: 16px;
          font-weight: 400;
          font-family: fangzheng;
          margin:3%;
          padding: 5% 0;
          width: 80%;
        }

    }
}
</style>
