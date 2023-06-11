import { App, Plugin } from 'vue';
import { CodeBlock } from './plugin';
import '@/plugin/styles/cssVariables.css';
import '@/plugin/styles/utilities.scss';
import '@/plugin/styles/main.scss';
import '@/plugin/styles/themeStyles.scss';


const install = (app: App) => {
	app.component('CodeBlock', CodeBlock);
};

CodeBlock.install = install;

export default CodeBlock as unknown as Plugin;

export {
	CodeBlock
};
