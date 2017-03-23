<template lang="html">
  <div class="slideabr">
    <el-row class="container" >
      <el-col :span="16" class="left" @click="toggleSlideBar">
        <div class="useravatar">
          <div class="avatar">
            <img :src="avatar" alt="">
          </div>
          <div class="name">
            {{nickname}}
          </div>
        </div>
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1"><i class="icon-user"></i><div class="navtext">个人</div></el-menu-item>
          <el-menu-item index="2"><i class="icon-eye"></i><div class="navtext">关注</div></el-menu-item>
          <el-menu-item index="2"><i class="icon-bubbles3"></i><div class="navtext">消息</div></el-menu-item>
          <el-menu-item index="3"><i class="icon-cog"></i><div class="navtext">设置</div></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8" class="right" ><div @click="toggleSlideBar" class="rightEvent"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: mapState({
    avatar: 'avatar',
    nickname: 'nickname'
  }),
  methods: {
    toggleSlideBar () {
      this.$store.dispatch('toggleSlideBar')
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

  .slideabr {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    font-family: fangzheng;

    .container{
      height: 100%;

      .left{
        height: 100%;
        background-color: #252525;

        .useravatar{
          display: flex;
          vertical-align: middle;
          align-items: center;
          flex-direction: column;
          margin: 20% 0 10% 0;

          img{
            border-radius:50%;
            width: 100px;
            height: 100px;
            margin: 0 auto;
            border: 2px solid #404040;
          }

          .name {
            font-size: 20px;
            color: #fff;
            margin: 5% 0;
          }
        }

        .el-menu{
          background-color: #252525;

          .el-menu-item{
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #404040;
            color: #707070;

            i {
              flex: 0 0 5% ;
            }
            .navtext {
              flex: 0 0 50%;
              text-align: center;
            }
          }
          .el-menu-item:hover {
            background-color: #252525;
            color: #fff;
          }
        }
      }

      .right{
        opacity: 0.6;
        height: 100%;
        background-color: #808080;
        z-index: 100;

        .rightEvent {
          height: 100%;
        }
      }
    }
  }
</style>
