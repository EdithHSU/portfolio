<template lang="pug">
nav#header.navbar.navbar-expand-lg.fixed
	.container
		a.navbar-brand(href="/")
			img(src="../assets/logo_nav.png")
		button.navbar-toggler(type="button", data-bs-toggle="collapse", data-bs-target="#navbar", aria-controls="navbar", aria-expanded="false", aria-label="Toggle navigation")
			span.navbar-toggler-icon
		.collapse.navbar-collapse#navbar
			ul.navbar-nav
				li.nav-item
					a.nav-link.active(aria-current="page", href="http://54.250.193.159:4567", target="_blank") 論壇
				li.nav-item
					a.nav-link.active(aria-current="page", href="question") 常見問答
				li.nav-item
					a.nav-link(aria-current="page", href="prize") 獎勵制度
</template>

<script></script>

<style lang="stylus">
#header
	background-color: #fff
	transition: all 800ms ease-in-out
	transition-property: background-color, color
	box-shadow: -2px 0px 6px 0px rgba(0, 0, 0, 0.25)
	.navbar-brand
		padding: 0
		background-color: $color_blour
		transition: background-color 800ms ease-in-out
		img
			padding: 5px 0
			height: 50px
	.navbar-toggler
		&:focus
			box-shadow: 0 0 0 0.25rem white
		@media screen and (max-width: $screen-sm-max)
			padding: 0.25rem 0
	.navbar-toggler-icon
		display: flex
		justify-content: center
		align-items: center
		color: white
	.navbar-nav
		width: 100%
		justify-content: flex-end
		.nav-item.media
			margin-right: auto
			align-self: center
			a
				color: $color_light
				margin-left: 15px
				font-size: 18px
				transition: color 0.3s
	.nav-link
		color: #2c3e50
		padding-top: 16px
		padding-right: 1rem !important
		padding-bottom: 16px
		padding-left: 1rem !important
		cursor: pointer
		user-select: none
		&:hover, &:focus
			color: $color_light
	ul.dropdown-menu
		min-width: unset
		margin-top: 10px
		border-radius: 15px
		background-color: $color_dark
	.dropdown-item
		color: white
		padding: 0.5rem 2rem
		&:hover
			color: $color_light
			background-color: $color_dark
	.dropdown-toggle::after
		display: none
	&.fixed
		position: fixed
		padding: 0
		left: 0
		top: 0
		width: 100%
		z-index: 999
	&.transparent
		background-color: transparent
		.nav-link
			&:hover, &:focus
				color: $color_blour
		.navbar-brand
			background-color: transparent
		.nav-item.media
			a
				color: #fff
	&.force_color
		background-color: $color_dark !important
		transition-property: none
		.nav-link
			&:hover, &:focus
				color: $color_light !important
		.navbar-brand
			background-color: $color_blour !important
			transition-property: none
		.nav-item.media
			a
				color: $color_light !important
	@media screen and (max-width: $screen-sm-max)
		// bootstrap transiton class
		.collapsing
			height: unset
			max-height: 0 !important
			padding-bottom: 0 !important
		.navbar-collapse
			overflow-y: scroll
			max-height: 0
			padding-bottom: 0
			transition: max-height 0.3s ease-in-out
			&.show
				max-height: 100vh
				padding-bottom: 75px
		.navbar-nav
			.nav-item.media
				margin: 15px 0 0
				a
					margin: 0 10px
		.nav-link
			&.dropdown-toggle
				font-size: $fs-4
				text-align: left
				padding: 1rem
		ul.dropdown-menu
			display: flex
			flex-wrap: wrap
			margin-top: 0
			border: 0
			border-radius: 0
			padding: 1rem
			background-color: #113666
			.dropdown-item
				font-size: $fs-5
			li
				flex-basis: 50%
			.show
				display: flex
</style>
