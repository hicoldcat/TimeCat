<template>
	<div class="app">
		<v-header :title="title"></v-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from 'components/header/Header.vue'

	export default {
		data () {
	    return {
	      title: "此处留白"
	    }
	  },
		components: {
			"v-header": Header
		}
	}
</script>

<style lang="less">
	@hello: #dd4433;
	@world: #66bb33;
	.hello {
		color: @hello
	}
	.info {
		color: @world
	}
</style>
