<template>
  <div class="pic" @click="goDetailPage">
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
  computed: {
    imgsrc : function () {
      return this.src
    }
  },
  methods: {
    setErrorImg () {
      this.$nextTick(function () {
        let errorImgUrl = require('../../assets/image/img_error_bg.jpg')
        this.src = errorImgUrl
     })
   },
   goDetailPage () {
     if (this.id && this.nickname) {
       this.$store.dispatch('goDetailPage',{id:this.id})
       this.$store.dispatch('toggleheader',{nickname:this.nickname})
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
