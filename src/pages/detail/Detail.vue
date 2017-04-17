<template lang="html">
  <div class="detail">
    <h1>Detail</h1>
  </div>
</template>

<script>


export default {
  data () {
    return {
    }
  },
  components: {

  },
  created () {
    console.info(this.$route.params)
  }
}
</script>

<style lang="css">
</style>
