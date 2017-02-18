<template>
<div class="info">
  <div class="box">
    <div class="pic">
      <img :src="info.pic" alt="">
    </div>
    <div class="desc">
      {{info.desc}}
    </div>
    <div class="bottom">
      <div class="time">
        <div class="day">
          Feb.02
        </div>
        <div class="year">
          2017
        </div>
        <div class="plus">+</div>
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

        .pic {
          width: 94%;
          margin: 3%;
        }

        .pic img{
          width: 100%;
        }

        .desc {
          font-size: 16px;
          font-weight: 400;
          font-family: fangzheng;
          margin:3%;
          padding: 5% 0;
          width: 80%;
        }

        .bottom{
          margin: 3%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          .owner {
            flex: 0 0 20%;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            vertical-align: bottom;

            .avatar img{
              border-radius: 50%;
              width: 40px;
              height: 40px;
              margin: 0 auto;
            }

            .name {
              line-height: 40px;
              height: 40px;
              font-size: 16px;
              text-align: center;
              font-family: fangzheng;
              align-self: center;
            }
          }

          .time {
            flex: 0 0 20%;
            display: inline-block;
            border: 1px solid #B7B7B7;
            color: #B7B7B7;
            padding: 2px;
            width: 20%;
            height: 82px;
            line-height: 20px;

            .plus{
              position: absolute;
              bottom: 20px;
              font-size: 20px;
            }
          }
        }


    }
}
</style>
