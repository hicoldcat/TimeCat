<template lang="html">
  <div class="player">
    <audio :src="currentPlayerUrl" autoplay="autoplay" controls="controls" ref="audiopleyer" v-show="isAudioPlay"></audio>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isAudioPlay: 'isAudioPlay'
    }),
    currentPlayerUrl: function ( ) {
      if (this.$refs.audiopleyer) {
        this.$refs.audiopleyer.load()
      }
      return this.$store.getters.currentPlayerUrl
    }
  }
}
</script>

<style lang="less">
  .player{
    width: 100%;
    position: fixed;
    z-index: 10;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    audio {
      width: 90%;
      border: 1px solid #000;
    }
  }
</style>
