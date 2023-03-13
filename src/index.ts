import { App, Plugin } from 'vue';
import { CodeBlock } from '@/plugin';
import { OptionsSettings } from '@/types';
import '@/plugin/styles/cssVariables.css';

const CodeBlockPlugin = {
	install(app: App, options: OptionsSettings) {
		const codeBlockGlobalOptions = { globalOptions: true, ...options };

		app.provide('codeBlockGlobalOptions', codeBlockGlobalOptions);
		app.component('CodeBlock', CodeBlock);
	},
};

export default CodeBlockPlugin as unknown as Plugin;
