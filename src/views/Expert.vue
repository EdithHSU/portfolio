<template lang="pug">
#expert.page
	.banner
		.left
			h4
				| 身為具備領域 domain know-how 的專家
				br
				| 是否曾經想透過「線上課程」進行知識變現，累積被動收入？

		.right
			.square.first
			.square.transparent
				.deco.top(style="background: #9d93d6")
			.square.second
				.deco.bottom(style="background: #e5c932")
			.square.third
	section
		.container
			.row
				.col-12
					h4.text-center.title 卻因為以下原因，遲遲無法跨出知識變現的第一步...
				.col-4
					.expert_point
						.deco_square
						h2 萬事起頭難
						p 專家從零開始累積用戶需不斷的Try and Error，浪費許多資源及時間
				.col-4
					.expert_point
						.deco_square(style="background: #e5c932")
						h2 無法建立忠實顧客
						p 現今課程平台用戶多為一次性流量，沒有穩定流量池持續觸及顧客，轉難以換為忠實用戶。
				.col-4
					.expert_point
						.deco_square(style="background: #4551bf")
						h2 缺乏企劃經驗
						p 因為時間或經驗限制，難以將知識轉換為探索者適合的呈現形式，降低變現能力。
			.row
				.col-12.block_content
					h4.text-center 卻因為以下原因，遲遲無法
					p.text-center
						| 1. 願意與探索者互動和分享職涯相關經驗
						br
						| 2. 想要進行知識變現，將經驗轉換為課程
			.row.highlight
				.col-sm-6.g-sm-0
					.left_img
				.col-sm-6.right_content
					ul
						li 累積忠實用戶，塑造意見領袖形象
						li 知識變現，累積被動收入
						li 累積實務教學經驗，為履歷增添深度
						li 建立人脈，為職涯發展建立可能性
	section.question_list
		.container
			.row
				.col-sm-5
					h2 專家常見問題
					p 常見問題若找不到解答，歡迎來信詢問！
				.col-sm-7
					.list
						a(data-bs-toggle="collapse", href="#question1", role="button", aria-expanded="false", aria-controls="question1")
							h5 需要什麼資格才可以成為專家？
						.collapse#question1
							p.content
								| 以行銷版的資格，符合以下條件即可成為專家：
								br
								| 1. 在行銷/廣告企劃、公共關係、數位行銷、社群行銷任一領域有三年以上工作經驗。
								br
								| 2. 願意投入時間與探索者進行互動，分享行銷職涯經驗和技能。
					.list
						a(data-bs-toggle="collapse", href="#question2", role="button", aria-expanded="false", aria-controls="question2")
							h5 Takeit伸手牌和其他課程平台有什麼區別？
						.collapse#question2
							p.content
								| 相較於課程平台將課程以產品的形式銷售給探索者，我們將專家塑造成探索者職涯中的導師。
								br
								| 在水平探索、垂直探索、實務經驗到職場銜接完整的提供探索者輔助，更可以建立專家與探索者之間的忠誠度，建立專家的意見領袖地位
					.list
						a(data-bs-toggle="collapse", href="#question3", role="button", aria-expanded="false", aria-controls="question3")
							h5 專家可以怎麼與探索者互動呢？
						.collapse#question3
							p.content
								| 專家可以在討論板中透過發佈文章和回覆問題，與探索者進行互動，建立自己在探索者中的專業形象。透過編輯個人經歷、撰寫專欄文章，經營個人頁面讓探索者加速了解專家經歷，追蹤專家帳號，取得專家第一手資訊專欄和課程資訊。
					.list
						a(data-bs-toggle="collapse", href="#question4", role="button", aria-expanded="false", aria-controls="question4")
							h5 未來會推出線上課程以外的知識變現方式嗎？
						.collapse#question4
							p.content
								| 會的，Takeit伸手牌以加速職涯探索為中旨，未來會陸續推出不同的知識變現方式，如：Side Project計畫、實體工作坊。並且會鎖定企業市場，持續推出企業內訓方案，提供專家更多的變現管道。
					.list
						a(data-bs-toggle="collapse", href="#question5", role="button", aria-expanded="false", aria-controls="question5")
							h5 除了行銷領域的專家，未來會開放其他領域的專家嗎？
						.collapse#question5
							p.content
								| 會的，未來將會視探索者和專家回饋，階段性開放其他討論版，徵求更多不同領域的專家。

	section.question_list
		.container
			.row
				.col-sm-5
					h2 成為專家不麻煩！
					p 點開即可看到詳細文件！
					img.left_deco(src="../assets/expert_deco.png")
				.col-sm-7
					.list
						a(data-bs-toggle="collapse", href="#question6", role="button", aria-expanded="false", aria-controls="question6")
							h5 怎麼與探索者互動？
						.collapse#question6
							p.content 
								| 參考以下文件，對於初次見面的專家非常有幫助！
								a(href="https://docs.google.com/document/d/1ntDCafcs5ERrU8J0xTnAQXMxalz6jS9g05t8smqAykI/edit", target="_blank") Takeit伸手牌_專家合作文件

					.list
						a(data-bs-toggle="collapse", href="#question7", role="button", aria-expanded="false", aria-controls="question7")
							h5 我想開課，怎麼進行？
						.collapse#question7
							p.content
								img.w-100.mb-3(src="../assets/expert_line.png")
								| 詳細流程可以參考
								a(href="https://docs.google.com/document/d/1ntDCafcs5ERrU8J0xTnAQXMxalz6jS9g05t8smqAykI/edit", target="blank") Takeit伸手牌_專家合作文件
					.list
						a(data-bs-toggle="collapse", href="#question8", role="button", aria-expanded="false", aria-controls="question8")
							h5 準備開課，提案怎麼寫？
						.collapse#question8
							p.content
								| 參考以下文件，我們將提案相關的資訊都整理在這！
								a(href="https://docs.google.com/document/d/1jne0xOqASKvXHqSNSIgSDTRaK_q1iKB5dR-wMdEL-d8/edit", target="_blank") Takeit伸手牌_開課提案書
					.list
						a(data-bs-toggle="collapse", href="#question9", role="button", aria-expanded="false", aria-controls="question9")
							h5 募資達標！正式課程規範有哪些？
						.collapse#question9
							p.content
								| 請參考下方文件，我們將正式課程規範都整理在這！
								a(href="https://docs.google.com/document/d/1grNRubMBkNuu27cNgWTs4ik8VS7SZk-YGfpSPQ2iVYk/edit", target="_blank") Takeit_正式課程審核規範
					.list
						a(data-bs-toggle="collapse", href="#question10", role="button", aria-expanded="false", aria-controls="question10")
							h5 我想開課，但不熟悉剪輯和企劃怎麼辦？
						.collapse#question10
							p.content
								| 請參考以下文件，我們提供專家服務方案，解決部分專家對於課程企劃和影像剪輯較為陌生的問題！
								a(href="https://docs.google.com/document/d/1ntDCafcs5ERrU8J0xTnAQXMxalz6jS9g05t8smqAykI/edit", target="_blank") Takeit伸手牌_專家服務方案
	section.subscribe
		.container
			.row.justify-content-center
				.col-12.text-center
					h2 立即聯絡我們！
					p(style="margin-bottom: 50px")
						| 訂閱我們，或來信開始建立你的忠實用戶！
						a(href="mailto:takeit.career@gmail.com") takeit.career@gmail.com
				.col-sm-3
					.input-group.mb-3
						input.form-control(type="text", placeholder="姓名", aria-label="name", aria-describedby="name")
				.col-sm-3
					.input-group.mb-3
						input.form-control(type="text", placeholder="Email", aria-label="name", aria-describedby="name")
				.col-sm-3
					button.btn.btn-dark(type="button", style="width: 100%") Subscribe
</template>

<script>
</script>

<style lang="stylus">
#expert
	.block_content
		padding: 100px 0 80px
	h4.text-center
		margin-bottom: 20px
	h4.text-center.title
		margin-bottom: 60px
	.banner
		height: calc( 100% - 50px )
		margin-top: 50px
		background: #11499b
		display: flex
		.left, .right
			width: 50%
			display: flex
			flex-wrap: wrap
			justify-content: center
			align-items: center
		.left
			h4
				padding: 0 25% 0 10%
				line-height: 1.5
				color: #fff
		.square
			position: relative
			padding-top: 50%
			width: 50%
			background: no-repeat center/cover
			&.first
				background-image: url('../assets/person_1.png')
			&.second
				background-image: url('../assets/person_2.png')
			&.third
				background-image: url('../assets/person_3.png')
			&.fourth
				background-image: url('../assets/person_4.png')
			&.transparent
				background: transparent
			.deco
				position: absolute
				width: 40%
				height: 40%
				background: #fff
				&.top
					bottom: 0
					left: 0
				&.bottom
					bottom: 0
					left: -40%
				
	.expert_point
		padding: 20px
		.deco_square
			width: 20px
			height: 20px
			background: #9d93d6
			margin-bottom: 50px
	.highlight
		.left_img
			height: 90vh
			background: no-repeat center/cover
			background-image: url('../assets/expert.png')
		.right_content
			display: flex
			align-items: center
			justify-content: center
			background: #4551bf
			font-size: 22px
			line-height: 2
			color: #fff
	.question_list
		img.left_deco
			margin-top: 175px
			width: 70%
		.list
			border-top: 1px #000 solid
			a
				text-decoration: none
				color: #2c3e50
			h5
				padding: 30px 0
				margin: 0
			.content
				margin-bottom: 30px
				padding: 0 30px
				a
					color: #4551bf
	.subscribe
		background: no-repeat top/cover
		background-image: url('../assets/subscribe.png')
		padding: 100px 0

</style>
