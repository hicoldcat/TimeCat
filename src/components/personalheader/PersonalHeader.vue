<template lang="html">
  <header class="personalheader">
    <div class="menu" @click="goBack">
      <i class=" icon-arrow_lift"></i>
    </div>
    <div class="nickname">
      <h1>{{nickname}}</h1>
    </div>
    <div class="share" @click="sharePerson">
      <i class="icon-share2"></i>
    </div>
  </header>
</template>

<script>
import VueRouter from '../../router/routes.js'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    nickname: {
      type: String
    }
  },
  methods: {
    goBack () {
      VueRouter.go(-1)
      this.$store.dispatch('toggleheader')
    },
    sharePerson () {
      alert("分享功能待完善！")
    }
  }
}
</script>

<style lang="less">
@header-height:46px;
@icon-font-size:22px;
@title-font-size: 18px;
@baseBorderColor:#3B3B3B;

.personalheader {
  position: fixed;
  display: flex;
  width: 100%;
  height: @header-height;
  background: #fff;
  text-align: center;
  line-height: @header-height;
  border-bottom: 1px solid @baseBorderColor;
  box-shadow: 0 2px 10px #D8D8D8;
  top:0;
  left: 0;
  z-index: 10;
  .menu {
    flex: 0 0 @header-height;
    font-size: @icon-font-size;
  }
  .nickname {
    flex: 1;
    font-size: @title-font-size;
  }
  .share {
    flex: 0 0 @header-height;
    font-size: @icon-font-size;
  }

}
</style>
