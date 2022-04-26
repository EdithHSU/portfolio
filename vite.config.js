import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// pug
import pugPlugin from 'vite-plugin-pug';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), pugPlugin()],
	define: {
		'process.env': {},
	},
});
