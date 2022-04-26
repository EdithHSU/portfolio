import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Index',
		component: () => import('../views/Index.vue'),
	},
	{
		path: '/prize',
		name: 'Prize',
		component: () => import('../views/Prize.vue'),
	},
	{
		path: '/question',
		name: 'Question',
		component: () => import('../views/Question.vue'),
	},
	{
		path: '/expert',
		name: 'Expert',
		component: () => import('../views/Expert.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return {};
		} else {
			window.scrollTo(0, 0);
			return { x: 0, y: 0 };
		}
	},
});

export default router;
