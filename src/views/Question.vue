<template lang="pug">
#question.page
	.banner_half
		.container
			.row
				.col-sm-6.left
					.title
						h2 Takeit 常見問答
						p 若在常見問題中找不到問題解答，歡迎來信詢問！ takeit.information.startup@gmail.com
				.col-sm-5.g-sm-0.right
					.image
</template>

<script>
</script>

<style lang="stylus">
#question
	.banner_half
		height: 375px
		background: linear-gradient(90deg, rgba(251,211,11,1) 75%, rgba(255,255,255,1) 75%)
		.left
			height: 375px
			display: flex
			align-items: center
			justify-content: center
			.title
				margin-left: 50px
		.right
			background: linear-gradient(90deg, rgba(251,211,11,1) 43%, rgba(255,255,255,1) 43%);
			.image
				padding-left: 100%
				margin-top: 100px
				padding-top: 75%
				background: no-repeat center/cover
				background-image: url('../assets/blog.png')
</style>
