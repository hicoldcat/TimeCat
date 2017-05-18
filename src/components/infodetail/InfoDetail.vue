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

    <div class="love">
      <i class="icon-heart"></i>
    </div>

  </div>
</template>

<script>

export default {
  props: {
    info: {
      type: Object
    }
  },
  components: {
  },
  methods: {
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
  }
</style>
