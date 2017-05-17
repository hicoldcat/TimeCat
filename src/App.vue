<template>
	<div class="app">
		<v-header v-show="!isDetailHeader"></v-header>
		<detail-header :nickname="detailHeaderNickName"  v-show="isDetailHeader"></detail-header>
		<router-view class="content"></router-view>
		<slide-bar></slide-bar>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Header from 'components/header/Header.vue'
import DetailHeader from 'components/detailheader/DetailHeader.vue'
import SlideBar from 'components/slidebar/SlideBar.vue'

	export default {
		data () {
			return {
				nickname: ''
			}
		},
		computed: mapGetters({
			isDetailHeader: 'isDetailHeader',
			detailHeaderNickName: 'detailHeaderNickName'
	  }),
		components: {
	    "v-header": Header,
			"slide-bar": SlideBar,
			"detail-header": DetailHeader,
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
