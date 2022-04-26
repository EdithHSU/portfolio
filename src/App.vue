<template lang="pug">
#app
  Nav
  router-view
</template>

<script>
import Nav from './components/Nav.vue';
export default {
	data() {
		return {};
	},
	methods: {},
	components: {
		Nav,
	},
};
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 55px
  h2
    font-weight: 600

section
	margin: 80px 0
	padding: 50px 0
	min-height: 300px
	&.subscribe
		background: no-repeat top/cover
		background-image: url('../assets/subscribe.png')
		padding: 100px 0
		
.section_title
	h2
		color: #05173d
		font-size: 36px
		font-weight: 600
		margin-bottom: 30px
	h4
		color: #88aab8
		font-size: 18px
	p
		margin-bottom: 40px
		&.content
			font-weight: 400
	&.center
		text-align: center

.section_half
	padding: 150px 0
	background: linear-gradient(90deg, rgba(243,131,108,1) 35%, rgba(251,211,11,1) 35%);
	.image
		background-size: cover
		background-position: center
		background-repeat: no-repeat
		&.float
			background: no-repeat center/cover
			background-image: url('../assets/vison.png')
			width: 100%
			padding-top: 70%
			box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.4)
	.section_title
		margin-left: 30px
		h4
			color: #a78f2c
	&.full
		background: transparent
		padding: 50px 0
		.image
			&.full
				background: no-repeat center/cover
				background-image: url('../assets/lesson.png')
				width: 100%
				height: 500px
</style>
