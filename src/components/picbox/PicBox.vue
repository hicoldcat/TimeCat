<template>
  <div class="pic">
    <img :src="src" alt="">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style lang="less">
  .pic {
    width: 94%;
    margin: 3%;

    img{
     width: 100%;
   }
  }
</style>
