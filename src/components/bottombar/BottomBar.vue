<template>
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
    <div class="owner" @click="goPersonalPages(userid,nickname)">
      <div class="avatar">
        <img :src="avatarUrl" alt="" @error="setErrorAvatar">
      </div>
      <div class="name">
        {{nickname}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String
    },
    avatar: {
      type: String
    },
    nickname: {
      type: String
    },
    userid: {
      type: String
    }
  },
  data () {
    return {
      avatarUrl: this.avatar
    }
  },
  methods: {
    goPersonalPages (uid,nickname) {
      if (this.$route.name !== 'personal'){
        if (uid && nickname) {
          this.$store.dispatch('goPersonalPages',{userId:uid})
          this.$store.dispatch('toggleheader',{nickname:nickname})
        }
      }
    },
    setErrorAvatar () {
      this.$nextTick(function () {
        let errorImgUrl = require('../../assets/image/img_error_avatar.png')
        this.avatarUrl = errorImgUrl
     })
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
        font-size: 20px;
        margin-left: 2px;
      }
    }
  }
</style>
