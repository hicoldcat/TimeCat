<template>
<div class="info">
  <div class="box">
    <div class="pic">
      <img :src="info.pic" alt="">
    </div>
    <div class="destination">
      {{info.description}}
    </div>
    <div class="owner">
      <div class="avatar">
        <img :src="info.avatar" alt="">
      </div>
      <div class="name">
        {{info.nickname}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object
    }
  }

}
</script>

<style lang="less">

@font-face {
  font-family: 'fangzheng';
  src:  url('../../../static/fonts/fangzheng.ttf');
  font-weight: normal;
  font-style: normal;
}

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
        border: 1px solid @baseBorderColor;
        margin: 0 auto;
        padding-bottom: 70px;

        .pic {
          width: 94%;
          margin: 3%;
        }

        .pic img{
          width: 100%;
        }

        .destination {
          font-size: 16px;
          font-weight: 400;
          font-family: fangzheng;
          margin: 0 auto 0 3%;
          padding: 5% 0;
          width: 80%;
        }

        .owner {
          display: flex;
          justify-content:space-between;
          flex-direction: column;
          align-items: center;
          position: absolute;
          width: 20%;
          right: 3%;
          bottom: 15px;

          .avatar {
          }

          .avatar img{
            border-radius: 50%;
            width: 40px;
            height: 40px;
          }

          .name {
            line-height: 40px;
            height: 40px;
            font-size: 16px;
            text-align: center;
            font-family: fangzheng;
          }
        }
    }
}
</style>
