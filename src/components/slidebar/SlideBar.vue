<template lang="html">
  <div class="slideabr">
    <el-row class="container" >
      <el-col :span="16" class="left" @click="toggleSlideBar">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1"><i class="el-icon-menu"></i>导航一</el-menu-item>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8" class="right" ><div @click="toggleSlideBar" class="rightEvent"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSlideBar () {
      this.$store.dispatch('toggleSlideBar')
    }
  }
}
</script>

<style lang="less">

  .slideabr {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 50;

    .container{
      height: 100%;

      .left{
        height: 100%;
        background-color: #252525;

        .el-menu{
          background-color: #252525;

          .el-menu-item{
            color: white;
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
