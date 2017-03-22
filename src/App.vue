<template>
	<div class="app">
		<v-header></v-header>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from 'components/header/Header.vue'

	export default {
		components: {
	    "v-header": Header
	  }
	}
</script>

<style lang="less">
</style>
