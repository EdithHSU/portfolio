<template lang="pug">
#prize.page
	section
		.container
			.row
				.col-12.g-sm-0
					.banner
						.section_title.center
							h4 取得獎勵回饋，建立探索正循環
							h2 Takeit 獎勵制度
				.col-sm-4.g-sm-0
					.deco_img
				.col-sm-8.g-sm-0
					.content
						h2 獎勵制度	
						ol
							li 發布貼文：在論壇中發佈一篇貼文，就可以獲得 50 點 T Points ，有超過 5 人迴響（回覆）可獲得 200 點 T Points。當週按讚和留言數最高文章，可以另獲得 1000 點 T Points。
							li 回覆貼文：回覆論壇貼文，一則回覆可獲得5點 T Points 。回覆取得他人按讚，一個讚可獲得1點 T Points，每則回覆最多可獲得 500 點 T Points。
							li 推薦朋友：推薦友人註冊Takeit帳號，並在註冊頁面「推薦人欄位」填寫推薦人帳號，推薦人與被推薦人就可以獲得 200 點 T Points 。		
						h2 T Point 應用與計算
						ol
							li 20 T Points = 1 NTD
							li 課程折抵：單門課程最高可以折抵 15% 費用，舉例：一堂課,5000 元,可折抵15%，最高可以折抵 5000*0.15= 750 元，也就是 7500 點T Point。
							li 未來應用：未來將陸續開放人脈建立、技能交流和Side Project等應用，鼓勵探索者與專家積極累積T Point！
				.col-12.g-sm-0
					.notice
						h2 Notice
						ul
							li 結算時間：Takeit 將於每月第二和第四個禮拜六進行結算，以系統信形式通知探索者期間累積的 T Point。系統信通知後代表 T Point 正式入帳，探索者即可以自由應用。
							li * 未來提供探索者更多的 T Point 應用情境，T Point 獎勵制度會不定期進行改版，並提供2-4週的緩沖期供平台使用者準備。改版將會公告在此頁面，並以系統通知信形式公佈訊息。
</template>

<script>
</script>

<style lang="stylus">
#prize
	.banner
		display: flex
		justify-content: center
		align-items: center
		background: #f1846e
		width: 100%
		height: 65vh
		.section_title
			h2
				color: #fff
			h4
				color: #05173d
	.deco_img
		background: no-repeat center/cover
		background-image: url('../assets/coin.png')
		height: 100%
		width: 100%
		filter: brightness(0.95)
	.content
		width: 100%
		min-height: 65vh
		background: #ffd845
		padding: 80px 80px 40px
	.content, .notice
		ol
			margin-bottom: 50px
		li
			margin-bottom: 15px
		h2
			margin-bottom: 20px
	.notice
		padding: 80px
		background: #f7f7f7
</style>
