<template>
<div class="momentlife">
  <div class="box">
    <div class="pic">
      <img :src="momentlife.pic" alt="">
    </div>
    <div class="destination">
      {{momentlife.description}}
    </div>
    <div class="owner">
      <div class="avatar">
        <img :src="momentlife.avatar" alt="">
      </div>
      <div class="name">
        {{momentlife.nickname}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

const ERR_OK = 0

export default {
  data() {
    return {
      momentlife: []
    }
  },
  props: {
    MomentLife: {
      type: Object
    }
  },
  created() {
    axios.get('/api/momentlife').then((res) => {
      console.info(res)
      res = res.data
      console.info(res)
      if (res.errno === ERR_OK) {
        this.momentlife = res.data
      }
      console.info(this.momentlife)
    }).catch((error) => {
      console.warn(error)
    })
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

.momentlife {
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
