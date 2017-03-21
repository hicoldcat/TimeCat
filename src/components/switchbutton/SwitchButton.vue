<template lang="html">
  <div class="switchbutton">
    <button class="button button-3d button-action button-circle button-jumb" @click="goNextPage"><i class="icon-loop2"></i></button>
  </div>
</template>

<script>
export default {
  methods: {
    goNextPage () {
      this.$store.dispatch('updatePage')
    }
  }
}
</script>

<style lang="css">
.switchbutton {
  position: fixed;
  bottom: 5%;
  right: 5%;
  opacity: 0.9;
}
.button {
  color: #666;
  background-color: #EEE;
  border-color: #EEE;
  font-weight: 300;
  font-size: 16px;
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
  height: 40px;
  padding: 0 15px;
  margin: 0;
  display: inline-block;
  appearance: none;
  cursor: pointer;
  border: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: .3s;
  transition-duration: .3s;
}
.button:visited {
  color: #666;
}
.button:hover, .button:focus {
  background-color: #f6f6f6;
  text-decoration: none;
  outline: none;
}
.button:active, .button.active, .button.is-active {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  text-decoration: none;
  background-color: #eeeeee;
  border-color: #cfcfcf;
  color: #d4d4d4;
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}
.button.disabled, .button.is-disabled, .button:disabled {
  top: 0 !important;
  background: #EEE !important;
  border: 1px solid #DDD !important;
  text-shadow: 0 1px 1px white !important;
  color: #CCC !important;
  cursor: default !important;
  appearance: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  opacity: .8 !important;
}
.button-3d {
  position: relative;
  top: 0;
  -webkit-box-shadow: 0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2);
}
.button-3d:hover, .button-3d:focus {
  -webkit-box-shadow: 0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2);
}
.button-3d:active, .button-3d.active, .button-3d.is-active {
  top: 5px;
  -webkit-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: .15s;
  transition-duration: .15s;
  -webkit-box-shadow: 0 2px 0 #bbbbbb, 0 3px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 0 #bbbbbb, 0 3px 3px rgba(0, 0, 0, 0.2);
}
.button-circle {
  border-radius: 100%;
}
.button-jumb {
  font-size: 24px;
  height: 45px;
}
</style>
