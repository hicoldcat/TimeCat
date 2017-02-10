<template>
  <div class="">
    <h1>MomentLife Modules</h1>
  </div>
</template>

<script>
export default {
  created() {
    axios.get('/api/momentlife').then((res) => {
      console.info(res)
      res = res.data
      console.info(res)
      if (res.errno === ERR_OK) {
        this.momentlife = res.data
      }
      console.info(this.momentlife)
    }).catch((error) => {
      console.warn(error)
    })
  }
}
</script>

<style lang="less">
</style>
