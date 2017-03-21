<template>
	<div class="app">
		<router-view></router-view>
		<div class="">
			<switch-button></switch-button>
		</div>
	</div>
</template>

<script>
import SwitchButton from 'components/switchbutton/SwitchButton.vue'
	export default {
		components: {
			'switch-button':SwitchButton
		}
	}
</script>

<style lang="less">
</style>
