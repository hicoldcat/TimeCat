<template>
  <div class="info-detail">
    <div class="img-box">
      <img :src="info.pic" alt="">
    </div>

    <div class="content-box"><span>{{info.desc}}</span></div>

    <div class="author-box">
      <span class="text">by</span>
      <span class="nickname">{{info.nickname}}</span>
    </div>

    <div class="love" @click="toggleLove">
      <div class="love-icon">
        <img src="../../assets/image/heart_select.png" alt="" v-if="isLove">
        <img src="../../assets/image/heart_unselect.png" alt="" v-else>
      </div>
      <div class="lovecount">{{lovecount}}</div>
    </div>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  props: {
    info: {
      type: Object
    }
  },
  computed: mapGetters({
    isLove: 'isLove',
    lovecount:'lovecount'
  }),
  components: {
  },
  methods: {
    toggleLove: function () {
      this.$store.dispatch('toggleLove')
    }
  }
}
</script>

<style lang="less">
  .info-detail{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: fangzheng;


    .img-box{
      width: 94%;
      margin: 3%;

      img{
        width: 100%;
      }
    }

    .content-box{
      width: 80%;
      margin: 3% auto;
      text-align:left;

      span{
        border-bottom: 1px solid #000;
        line-height: 2rem;
        padding: 5px 0;
      }

    }

    .author-box{
      width: 94%;
      margin: 3% ;
      text-align: right;

      .text{
        color: #7b7b7b;
        font-size: .9rem;
      }

      .nickname{
        font-size: 1rem;
      }
    }

    .love{
      width: 80%;
      text-align: left;
      display: flex;

      .love-icon{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: .5rem;

        img{
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      .lovecount{
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }




    }
  }
</style>
