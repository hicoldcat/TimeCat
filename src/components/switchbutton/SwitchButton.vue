<template lang="html">
  <div class="switchbutton">
    <div class="button" @click="goNextPage"><i class="icon-loop2" ref="iconLoop"></i></div>
  </div>
</template>

<script>
export default {
  methods: {
    goNextPage () {
      this.$store.dispatch('updatePage')
      // this.$refs.iconLoop.style.transform = 'rotate(360deg)'
    }
  }
}
</script>

<style lang="css">
.switchbutton {
  position: fixed;
  bottom: 5%;
  right: 5%;
}
.button {
  background-color: #000;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.icon-loop2{
  margin: 0.5rem;
}

</style>
