<template>
  <div class="article">
    <div class="box">
      <pic-box :src="article.pic"></pic-box>
      <div class="title">{{'「'+article.title+'」'}}</div>
      <bottom-bar :nickname="article.nickname" :avatar="article.avatar" :time="article.time" :userid="article.userid"></bottom-bar>
    </div>
  </div>
</template>

<script>
import PicBox from 'components/picbox/PicBox'
import BottomBar from 'components/bottombar/BottomBar'


export default {
  props: {
    article: {
      type: Object
    }
  },
  components: {
    "bottom-bar": BottomBar,
    "pic-box": PicBox
  }
}
</script>

<style lang="less">
@baseBackgroundColor:#fff;

.article {
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

        .title {
          font-size: 16px;
          font-weight: 400;
          font-family: fangzheng;
          margin:3%;
          padding: 5% 0;
          width: 80%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

    }
}
</style>
