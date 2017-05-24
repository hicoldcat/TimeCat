<template>
  <div class="trip">
    <div class="box">
      <pic-box :src="trip.pic"></pic-box>
      <div class="center">
        <div class="destination">
          {{'【'+trip.destination+'】'}}
        </div>
        <div class="title">
          {{trip.title}}
        </div>
      </div>
      <bottom-bar :nickname="trip.nickname" :avatar="trip.avatar" :time="trip.time" :userid="trip.userid"></bottom-bar>
    </div>
  </div>
</template>

<script>
import PicBox from 'components/picbox/PicBox'
import BottomBar from 'components/bottombar/BottomBar'

export default {
  props: {
    trip: {
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
  .trip {
      position: relative;
      width: 100%;
      background-color: #fff;

      .box {
          position: relative;
          width: 90%;
          background-color: #fff;
          margin: 0 auto;
          // border: 1px solid #d1dbe5;
          margin: 0 auto;
          // box-shadow:0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
          box-shadow: 0 0 30px -7px rgba(0,0,0,.3);
          padding: 5px 0;
          border-radius:4px;

          .center {
            font-size: 16px;
            font-weight: 400;
            font-family: fangzheng;
            margin:3%;
            padding: 5% 0;
            width: 94%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            display: flex;

            .destination {
            }

            .title {
              flex: 1;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
      }
  }
</style>
