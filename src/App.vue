<template>
	<div class="root">
		<div class="hello">Hello</div>
		<div class="info icon-home">Welcome To My Applacation ！</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
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
