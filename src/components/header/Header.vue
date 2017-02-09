<template>
  <header class="header">
    <div class="menu">
      <i class="icon-diamond"></i>
    </div>
    <div class="title">
      <h1>{{title}}</h1>
    </div>
    <div class="write">
      <i class="icon-quill"></i>
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
  @baseBorderColor:#3B3B3B;

  .header {
    position: relative;;
    display: flex;
    width: 100%;
    height: @header-height;
    background: #fff;
    text-align: center;
    line-height: @header-height;
    border-bottom: 1px solid @baseBorderColor;
    box-shadow: 0 2px 10px #D8D8D8;
    .menu {
      flex: 0 0 @header-height;
      font-size: @icon-font-size;
    }
    .title {
      flex: 1;
      font-size: @title-font-size;
    }
    .write {
      flex: 0 0 @header-height;
      font-size: @icon-font-size;
    }

  }
</style>
