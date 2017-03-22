<template>
	<div class="app">
		<v-header></v-header>
		<router-view class="content"></router-view>
		<slide-bar v-show="isSlideBarShow"></slide-bar>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Header from 'components/header/Header.vue'
import SlideBar from 'components/slidebar/SlideBar.vue'

	export default {
		computed: mapGetters({
	    isSlideBarShow: 'isSlideBarShow',
	  }),
		components: {
	    "v-header": Header,
			"slide-bar": SlideBar
	  }
	}
</script>

<style lang="less">
	.app{
		height: 100%;
	}
	.content{
		margin-top: 60px;
	}
</style>
