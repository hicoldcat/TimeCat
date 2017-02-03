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
