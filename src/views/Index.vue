<template lang="pug">
#index.page
	.banner
		.container-fluid
			.row: .col-12.g-sm-0
				#carouselIndex.carousel.slide(data-bs-ride="carousel")
					.carousel-indicators
						button(type="button", data-bs-target="#carouselIndex", data-bs-slide-to="0", aria-current="true", aria-label="Slide 1").active
						button(type="button", data-bs-target="#carouselIndex", data-bs-slide-to="1", aria-current="true", aria-label="Slide 2")
						button(type="button", data-bs-target="#carouselIndex", data-bs-slide-to="2", aria-current="true", aria-label="Slide 3")
					.carousel-inner
						.carousel-item.first.active
						.carousel-item.second
							h4
								| Takeit 論壇提供探索者與專家低門檻的互動探索環境，
								br
								| 提升探索深度和廣度的可能性。
							button.btn.btn-outline-light 獲得最新消息
						.carousel-item.third
							h4 招募朋友，立即取得200點獎勵點數
							button.btn.btn-outline-light 了解獎勵制度
					button.carousel-control-prev(type="button", data-bs-target="#carouselIndex", data-bs-slide="prev")
						span.carousel-control-prev-icon(aria-hidden="true")
						span.visually-hidden Previous
					button.carousel-control-next(type="button", data-bs-target="#carouselIndex", data-bs-slide="next")
						span.carousel-control-next-icon(aria-hidden="true")
						span.visually-hidden Next
	section
		.container
			.row: .col-12
				.section_title.center
					h4 通點
					h2 職涯探索限制
					p 身為探索者的你，是否遇過以下限制，導致探索行為受到阻礙…
			.row
				.col-sm-4
					.point_card
						h4 資料雜亂
						p 網路資料缺乏系統性，難以內化為有效資訊。
				.col-sm-4
					.point_card
						h4 缺乏引導
						p 缺乏導師 (mentor) 及同溫層引導及互動。
				.col-sm-4
					.point_card
						h4 資源不足
						p 人脈資源難以拓展，探索視野受限。
				.col-sm-4
					.point_card
						h4 時間受限
						p 課業或工作壓縮時間，探索習慣難以維持。
				.col-sm-4
					.point_card
						h4 外在約束
						p 他人價值觀約束，限制探索可能性。
				.col-sm-4
					.point_card
						h4 缺乏經歷
						p 技能和實作經驗不足，難以往下一階段發展。
	section.section_half
		.container
			.row
				.col-sm-5
					.image.float
				.col-sm-7
					.section_title
						h4 我們的願景
						h2 Our Vision
						p Takeit伸手牌 希望為探索者建構一個具備彈性和價值的探索環境。
						p.content 
							| 並非所有人人都有足夠的資源和視野，在有限的時間探索外界和自己。
							br
							| 希望填補限制造成的探索斷層，讓探索者從多領域探索、技能學習、實務經驗累積到職場銜接，更無負擔的完成每一段探索旅程。

	section.section_half.full
		.container
			.row
				.col-sm-6
					.image.full
				.col-sm-6.d-flex.align-items-center
					.section_title
						h2 加速探索歷程
						p 為探索者和專家創造彈性、互惠的職涯探索環境 降低職涯探索門檻，加速探索過程。

	section
		.container
			.row
				.col-12
					.section_title.center
						h4 RESPONDENTS FEEDBACK
						h2 受訪者回饋
						p 歸納以下痛點，影響探索者職涯探索歷程。
		.container-fluid.precent_group
			.row
				.col-sm-3.g-sm-0
					.percent
						span.number 95
						span %
						h4 職涯探索的過程中遇到問題
				.col-sm-3.g-sm-0
					.percent
						span.number 88
						span %
						h4 資源及時間不夠導致探索廣度和深度受限
				.col-sm-3.g-sm-0
					.percent
						span.number 77
						span %
						h4 網路資料缺乏系統性難以有效應用
				.col-sm-3.g-sm-0
					.percent(style="border: 0")
						span.number 71
						span %
						h4 缺乏前輩引導導致探索歷程受阻
	section
		.container
			.row
				.col-3
					.point_card.people
						.info
							.image.first
							div.ms-3
								h4 趙小姐
								h5 數據分析,經理
						p 「一直想拓展自己不同領域的技能，但沒有同好一起努力，實在很容易一忙就半途而廢。」
				.col-3
					.point_card.people
						.info
							.image.second
							div.ms-3
								h4 陳同學
								h5 行銷系,大學生
						p 「我需要的是一個可以持續培養探索習慣的環境，而不是只想銷售課程的平台。」
				.col-3
					.point_card.people
						.info
							.image.third
							div.ms-3
								h4 王同學
								h5 管理學系,研究生
						p 「對於尚未進入業界的我來說，像是職場甘苦談、業界資訊和經驗分享，這類可以讓我更了解業界現況的資訊，相對於技能學習更為重要。」
				.col-3
					.point_card.people
						.info
							.image.fourth
							div.ms-3
								h4 黃先生
								h5 財經研究,專員
						p 「就算已經進入業界，仍然需要持續進補專業技能和業界資訊，否則職涯發展將會停滯不前。」

	section.list
		.container
			.row
				.col-12
					.list_title
						span What's 	
						img(src="../assets/logo_en.png")
					p.text-center(style="margin-bottom: 80px")
						| 為探索者和專家創造彈性、互惠的職涯探索環境
						br
						| 降低職涯探索門檻，加速探索過程。

				.col-sm-6.g-sm-0
					.list_card.left
						img(src="../assets/icon_1.png")
						h2 Takeit 論壇
						p 以多領域論壇形式，提供探索者與專家低門檻的互動探索環境，提升探索深度和廣度的可能性。
					.content_group.left
						.content
							img(src="../assets/icon_3.png")
							.desc
								h4 討論版
								p 在討論板中以觀看、互動、提問等等形式，與版上專家與其他探索者進行互動，進行領域資訊探索。
						.content
							img(src="../assets/icon_3.png")
							.desc
								h4 個人主頁
								p 探索者與專家呈現個人經歷、擅長領域、專欄文章等資訊，凸顯個人輪廓。
						.content
							img(src="../assets/icon_3.png")
							.desc
								h4 T Café
								p 以一杯咖啡取得與各領域陌生探索者和專家建立對話空間，拓展交際圈。
						.content
							img(src="../assets/icon_3.png")
							.desc
								h4 獎勵機制
								p 根據 Takeit 官方訂定的任務（如：留言、發文、邀請好友），即可取得T Point獎勵回饋，在探索情境進行折抵，建立探索正循環。
				
				.col-sm-6.g-sm-0
					.list_card.right
						img(src="../assets/icon_2.png")
						h2 Takeit 學習平台
						p 系統性歸納領域職涯藍圖，整合專家課程、實作計畫與工作職缺，一站式整合垂直探索需求。
					.content_group.right
						.content
							img(src="../assets/icon_4.png")
							.desc
								h4 職涯藍圖
								p 從各領域、職位、工作項目到關鍵職能歸納，對應相關課程、實作計畫和職缺，提升課程與職場應用連結度。
						.content
							img(src="../assets/icon_4.png")
							.desc
								h4 課程列表
								p 透過專家評價、課程類型和價格等篩選條件，使探索者可以快速選擇偏好課程。
						.content
							img(src="../assets/icon_4.png")
							.desc
								h4 T Project
								p 由 Takeit 官方或專家籌辦實作計畫，讓探索者體驗實際執行，累積作品集和實務經驗。
						.content
							img(src="../assets/icon_4.png")
							.desc
								h4 工作職缺
								p 按照領域、產業區分企業職缺，供探索者關注職缺動向，即時投遞履歷。

	section.subscribe
		.container
			.row.justify-content-center
				.col-12.text-center
					h2 Takeit伸手牌即將正式開放行銷論壇及線上課程
					p(style="margin-bottom: 50px") 留下您的姓名和EMAIL，即可獲得官方最新消息	
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
#index
	.list
		.list_title
			display: flex
			align-content: center
			justify-content: center
			margin-bottom: 30px
			span
				font-size: 50px
				font-weight: 600
			img
				width: auto
				height: 50px
				margin: auto 0 auto 20px
		.list_card
			color: #000
			width: 100%
			padding: 60px 50px
			text-align: center
			background: no-repeat center/cover
			img
				width: 40px
				heigth: auto
			h2
				margin: 20px 0
			&.left
				background-image: url('../assets/bg_bl.png')
			&.right
				background-image: url('../assets/bg_y.png')

		.content_group
			color: #000
			padding: 50px
			min-height: 700px
			.content
				display: flex
				text-align: left
				margin-bottom: 30px
				img
					width: 25px
					height: 25px
					margin-right: 20px
			&.left
				background-color: #7fbbfe
			&.right
				background-color: #f4db79
	.carousel
		.carousel-item
			text-align: center
			background-color: #000
			padding: 30vh 0
			width: 100%
			height: 85vh
			background: no-repeat center/cover
			h4
				color: #fff
				line-height: 1.5
				margin-bottom: 50px
			&.first
				background-image: url('../assets/landing_banner1.png')
			&.second
				background-image: url('../assets/landing_banner2.png')
			&.third
				background-image: url('../assets/landing_banner3.png')
	.point_card
		width: 100%
		min-height: 200px
		border-radius: 15px
		border: 1px solid #bec5d6
		padding: 30px
		margin-bottom: 20px
		h4
			margin-bottom: 20px
		&.people
			padding: 25px
			min-height: 300px
			.info
				display: flex
				margin-bottom: 20px
				h4
					margin-bottom: 5px
				h5
					font-size: 14px
				.image
					width: 50px
					height: 50px
					border-radius: 10px
					background-color: #000
					background: no-repeat center/cover
					&.first
						background-image: url('../assets/person_1.png')
					&.second
						background-image: url('../assets/person_2.png')
					&.third
						background-image: url('../assets/person_3.png')
					&.fourth
						background-image: url('../assets/person_4.png')
			p
				text-align: justify

	.precent_group
		background: #f0f8fa
		padding: 50px 0
		.percent
			border-right: 1px solid #ccd5e0
			padding: 10px 30px
			text-align: center
			.number
				font-size: 70px
				font-weight: 800
				color: #0396c2
			span
				color: #0396c2
				font-size: 30px
			h4
				font-size: 18px
	.subscribe
		background: no-repeat top/cover
		background-image: url('../assets/subscribe.png')
		padding: 100px 0

.section_half
	.image
		&.float
			background-image: url('../assets/vison.png')
	&.full
		.image
			&.full
				background-image: url('../assets/lesson.png')
</style>
