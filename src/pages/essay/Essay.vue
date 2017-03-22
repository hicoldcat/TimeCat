<template>
  <div class="eassy">
    <div class="article-container" v-for="item in articlelist">
      <v-article :article="item" class="articleitem"></v-article>
    </div>
    <switch-button></switch-button>
  </div>
</template>

<script>
import axios from 'axios'

import Header from 'components/header/Header.vue'
import Article from 'components/article/Article.vue'
import SwitchButton from 'components/switchbutton/SwitchButton.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      articlelist:[]
    }
  },
  created() {
    axios.get('/api/essay').then((res) => {
      res = res.data
      if (res.errno === ERR_OK) {
        this.articlelist = res.data
      }
    }).catch((error) => {
      console.warn(error)
    })
  },
  components: {
    "v-article": Article,
    "switch-button": SwitchButton
  }
}
</script>

<style lang="less">
  .eassy {
    .articleitem{
      margin: 20px 0;
    }
  }
</style>
