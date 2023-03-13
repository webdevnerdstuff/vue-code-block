import { createApp } from 'vue';
import App from './App.vue';
import CodeBlock from '@/index';

createApp(App)
	.use(CodeBlock, {
		theme: 'neon-bunny',
	})
	.mount('#app');
