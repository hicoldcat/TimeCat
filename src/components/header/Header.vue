<template>
  <header class="header">
    <div class="switch">
      <i class="icon-delicious"></i>
    </div>
    <div class="title">
      <h1>{{title}}</h1>
    </div>
    <div class="personal">
      <i class="icon-user"></i>
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

  .header {
    position: absolute;
    display: flex;
    width: 100%;
    height: @header-height;
    background: #e8e8e8;
    top:0;
    left:0;
    text-align: center;
    line-height: @header-height;
    .switch {
      flex: 0 0 @header-height;
      font-size: @icon-font-size;
    }
    .title {
      flex: 1;
      font-size: @title-font-size;
    }
    .personal {
      flex: 0 0 @header-height;
      font-size: @icon-font-size;
    }

  }
</style>
