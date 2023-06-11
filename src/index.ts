import { App } from 'vue';
import { CodeBlock } from './plugin';
import '@/plugin/styles/cssVariables.css';
import '@/plugin/styles/utilities.scss';
import '@/plugin/styles/main.scss';
import '@/plugin/styles/themeStyles.scss';

export default {
	install: (app: App) => {
		app.component('CodeBlock', CodeBlock);
	}
};

export { CodeBlock };
