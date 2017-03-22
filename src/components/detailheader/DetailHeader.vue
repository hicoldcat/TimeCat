<template>
  <header class="detailheader">
    <div class="back">
      <i class="icon-arrow_lift"></i>
    </div>
    <div class="detailtitle">
      <h1>{{title}}</h1>
    </div>
    <div class="share">
      <i class="icon-upload3"></i>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="less">
  @header-height:46px;
  @icon-font-size:22px;
  @title-font-size: 18px;

  .detailheader {
    position: absolute;
    display: flex;
    width: 100%;
    height: @header-height;
    background: #e8e8e8;
    top:0;
    left:0;
    text-align: center;
    line-height: @header-height;
    .back {
      flex: 0 0 @header-height;
      font-size: @icon-font-size;
    }
    .detailtitle {
      flex: 1;
      font-size: @title-font-size;
    }
    .share {
      flex: 0 0 @header-height;
      font-size: @icon-font-size;
    }

  }
</style>
