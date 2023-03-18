import { App, Plugin } from 'vue';
import { CodeBlock } from '@/plugin';
import { Props } from '@/types';
import '@/plugin/styles/cssVariables.css';
import '@/plugin/styles/utilities.scss';
import '@/plugin/styles/main.scss';
import '@/plugin/styles/themeStyles.scss';

const install = (app: App, options: Props) => {
	const codeBlockGlobalOptions: Props = { globalOptions: true, ...options };
	app.provide('codeBlockGlobalOptions', codeBlockGlobalOptions);
	app.component('CodeBlock', CodeBlock);
};

CodeBlock.install = install;

export default CodeBlock as unknown as Plugin;
