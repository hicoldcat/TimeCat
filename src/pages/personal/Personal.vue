<template>
  <div class="personal">
    <div class="personal-container">
      <div class="personal-info">
        <div class="info">
          <div class="avatar">
            <img :src="user.avatar" alt="" @error="setErrorAvatar">
          </div>
          <div class="name">
            {{user.nickname}}
          </div>
        </div>
        <div class="follow">
          <div class="menu" @click="toggleFollowPerson(user.isfollow)">
            <i :class=" isfollow == true ? 'icon-checkbox-checked' : 'icon-checkbox-unchecked'"></i>
          </div>
            <div class="count">
              {{'Follower：'+ followcount}}
            </div>
        </div>
      </div>
      <div class="total">{{'Total Cards : '+listlength}}</div>
      <div class="content-box">
        <template v-for="item in user.contentlist">
          <div v-if="item.themeid === 'info'" class="item">
            <info :info="item"></info>
          </div>
          <div v-else-if="item.themeid === 'music'" class="item">
            <music :music="item"></music>
          </div>
          <div v-else-if="item.themeid === 'article'" class="item">
            <v-article :article="item"></v-article>
          </div>
          <div v-else-if="item.themeid === 'trip'" class="item">
              <trip :trip="item"></trip>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Info from 'components/info/Info.vue'
import Music from 'components/music/Music.vue'
import Article from 'components/article/Article.vue'
import Trip from 'components/trip/Trip.vue'


import { mapGetters, mapActions } from 'vuex'

const ERR_OK = 0

export default {
  data () {
    return {
      user: {},
      listlength: ""
    }
  },
  created() {
    axios.get('/api/personal').then((res) => {
      res = res.data
      if (res.errno === ERR_OK) {
        this.user = res.data
        this.listlength = res.data.contentlist.length
      }
    }).catch((error) => {
      console.warn(error)
    })
  },
  methods: {
    toggleFollowPerson () {
      this.$nextTick(function () {
        this.$store.dispatch('toggleFollowPerson',{userId:this.user.userid})
      })
    },
    setErrorAvatar () {
      this.$nextTick(function () {
        let errorImgUrl = require('../../assets/image/img_error_avatar.png')
        this.user.avatar = errorImgUrl
     })
    }
  },
  // mock下模拟的数据，正常情况下不需要computed下isfollow和followcount,而是真实的数据库数据
  computed: mapGetters({
    isfollow: 'isfollow',
    followcount: 'followcount'
  }),
  components: {
    "info": Info,
    "music": Music,
    "v-article": Article,
    "trip": Trip
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

  .personal {
    .personal-container {

      .personal-info {
        margin: 3%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .info {
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

        .follow {
          flex: 0 0 40%;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          vertical-align: bottom;

          .menu {
            line-height: 42px;
            height: 42px;
            text-align: center;
            font-size: 25px;
          }


          .count {
            line-height: 40px;
            height: 40px;
            font-size: 16px;
            text-align: center;
            font-family: fangzheng;
            align-self: center;
          }
        }

        .total {
          display: inline-block;
          position: relative;
        }
      }

      .total {
        margin: 5%;
        font-size: 16px;
        color: #000;
        font-family: fangzheng;
      }

      .content-box {
        .item {
          margin: 20px 0;
        }
      }
    }
  }

</style>
