import { createApp } from 'vue';
import App from './App.vue';
import CodeBlock from './index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faCircleInfo,
	faCopyright,
	faHouse,
	faMoon,
	faSun,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

library.add({
	faCircleInfo,
	faCopyright,
	faGithub,
	faHouse,
	faMoon,
	faNpm,
	faSun,
});

createApp(App)
	.use(CodeBlock, {
		// theme: 'atom-one-dark',
	})
	.component('fa-icon', FontAwesomeIcon)
	.mount('#app');
