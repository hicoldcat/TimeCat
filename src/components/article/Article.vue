<template>
  <div class="article">
    <div class="box">
      <pic-box :src="article.pic"></pic-box>
      <bottom-bar :nickname="article.nickname" :avatar="article.avatar" :time="article.time"></bottom-bar>
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

<style lang="css">
</style>
