<template>
  <div class="personal">
    <personal-header :nickname="user.nickname"></personal-header>
    <h1>Personal Pages {{ $route.params.userId }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

import PersonalHeader from 'components/personalheader/PersonalHeader.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      user: {}
    }
  },
  created() {
    axios.get('/api/personal').then((res) => {
      res = res.data
      console.info(res)
      if (res.errno === ERR_OK) {
        this.user = res.data
      }
    }).catch((error) => {
      console.warn(error)
    })
  },
  components: {
    "personal-header": PersonalHeader
  }
}
</script>

<style lang="less">
  
</style>
