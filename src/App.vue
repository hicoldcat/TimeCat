<template>
	<div class="app">
		<v-header v-show="!isDetailHeader"></v-header>
		<personal-header :nickname="detailHeaderNickName"  v-show="isDetailHeader"></personal-header>
		<router-view class="content"></router-view>
		<slide-bar v-show="isSlideBarShow"></slide-bar>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Header from 'components/header/Header.vue'
import PersonalHeader from 'components/personalheader/PersonalHeader.vue'
import SlideBar from 'components/slidebar/SlideBar.vue'

	export default {
		data () {
			return {
				nickname: ''
			}
		},
		computed: mapGetters({
	    isSlideBarShow: 'isSlideBarShow',
			isDetailHeader: 'isDetailHeader',
			detailHeaderNickName: 'detailHeaderNickName'
	  }),
		components: {
	    "v-header": Header,
			"slide-bar": SlideBar,
			"personal-header": PersonalHeader,
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
