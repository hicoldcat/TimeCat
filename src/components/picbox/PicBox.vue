<template>
  <div class="pic" @click="goDetailPage(id,nickname)">
    <img :src="imgsrc" alt="" @error="setErrorImg">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    src: {
      type: String
    },
    id: {
      type: Number
    },
    nickname: {
      type: String
    }
  },
  data () {
    return {
      imgsrc:this.src
    }
  },
  methods: {
    setErrorImg () {
      this.$nextTick(function () {
        let errorImgUrl = require('../../assets/image/img_error_bg.jpg')
        this.imgsrc = errorImgUrl
     })
   },
   goDetailPage (id,nickname) {
     if (id && nickname) {
       this.$store.dispatch('goDetailPage',{id:id})
       this.$store.dispatch('toggleheader',{nickname:nickname})
     }
   }
  }
}
</script>

<style lang="less">
  .pic {
    width: 94%;
    margin: 3%;

    img{
     width: 100%;
   }
  }
</style>
