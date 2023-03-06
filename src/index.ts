import { App, Plugin } from 'vue';
import { CodeBlock } from '@/plugin';
import { OptionsSettings } from '@/types';
import '@/style.scss';

const CodeBlockPlugin = {
	install(app: App, options: OptionsSettings) {
		const codeBlockGlobalOptions = { globalOptions: true, ...options };
		console.log({ codeBlockGlobalOptions });

		app.provide('codeBlockGlobalOptions', codeBlockGlobalOptions);
		app.component('CodeBlock', CodeBlock);
	},
};

export default CodeBlockPlugin as unknown as Plugin;
