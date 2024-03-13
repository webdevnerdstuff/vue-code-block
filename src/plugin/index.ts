import { defineAsyncComponent } from 'vue';
import type { App } from 'vue';
import type { Props } from './types';
import './styles/cssVariables.css';
import './styles/utilities.scss';
import './styles/main.scss';
import './styles/themeStyles.scss';
import VCodeBlock from './VCodeBlock.vue';


export const codeBlockOptions = Symbol();

export function createVCodeBlock(options: Props = {}) {
	const install = (app: App) => {
		app.provide(codeBlockOptions, options);

		app.component('CodeBlock', defineAsyncComponent(() => import('./VCodeBlock.vue')));
		app.component('VCodeBlock', defineAsyncComponent(() => import('./VCodeBlock.vue')));
	};

	return {
		install,
	};
}

export default VCodeBlock;

export {
	VCodeBlock,
};
