import { App, Plugin } from 'vue';
import { VCodeBlock } from './plugin';
import '@/plugin/styles/cssVariables.css';
import '@/plugin/styles/utilities.scss';
import '@/plugin/styles/main.scss';
import '@/plugin/styles/themeStyles.scss';


const install = (app: App) => {
	app.component('CodeBlock', VCodeBlock);
	app.component('VCodeBlock', VCodeBlock);
};

VCodeBlock.install = install;

export default VCodeBlock as unknown as Plugin;

export {
	VCodeBlock
};
