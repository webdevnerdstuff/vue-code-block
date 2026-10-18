import type { Props } from './types';
import type { App, Plugin } from 'vue';
import './styles/cssVariables.css';
import './styles/utilities.scss';
import './styles/main.scss';
import './styles/themeStyles.scss';
import { useDeepMerge } from './composables/helpers';
import { pluginOptionsInjectionKey } from './data/globals';
import { AllProps } from './data/props';
import VCodeBlock from './VCodeBlock.vue';


export const codeBlockOptions = Symbol();

export function createVCodeBlock(options: Props = {}): Plugin {
	const install = (app: App) => {
		const pluginOptions: PluginOptions = useDeepMerge({}, AllProps, options);

		app.provide(pluginOptionsInjectionKey, pluginOptions);

		app.component('CodeBlock', VCodeBlock);
		app.component('VCodeBlock', VCodeBlock);
	};

	return {
		install,
	} as Plugin;
}

export default VCodeBlock;

export {VCodeBlock};
