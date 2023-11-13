import { defineStore } from 'pinia';
// @ts-expect-error @ts-ignore
import packageJson from '@root/package.json';

const dependencies = packageJson.dependencies;
const prismVersion = dependencies.prismjs.replace('^', '');
const highlightJsVersion = dependencies['highlight.js'].replace('^', '');

const highlightJsLinks = {
	cdn: `https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${highlightJsVersion}/build/styles/`,
	homepage: 'https://highlightjs.org/',
	themes: `https://github.com/highlightjs/highlight.js/tree/${highlightJsVersion}/src/styles`,
};
const prismLinks = {
	cdn: `https://cdn.jsdelivr.net/gh/PrismJS/prism@${prismVersion}/themes/`,
	homepage: 'https://prismjs.com/',
	prismThemes: `https://github.com/PrismJS/prism/tree/v${prismVersion}/themes`,
	themes: 'https://github.com/PrismJS/prism-themes',
};


const propsHeaders = [
	{
		align: 'start',
		filterable: true,
		key: 'name',
		sortable: true,
		title: 'Name',
		width: '20%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'type',
		sortable: false,
		title: 'Type',
		width: '15%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'default',
		sortable: false,
		title: 'Default',
		width: '10%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'desc',
		sortable: false,
		title: 'Description',
	},
];

const componentProps = [
	{
		default: 'false',
		desc: 'To give the code block a browser window look.',
		name: 'browserWindow',
		required: false,
		type: 'boolean',
	},
	{
		default: 'undefined',
		desc: 'Used to load the css from a specified location instead of the component using the CDN location. If you want to dynamically change the theme, you will also need to change the theme prop.',
		name: 'cssPath',
		required: false,
		type: 'string | undefined',
	},
	{
		default: '',
		desc: 'The code to be displayed in the code block.',
		name: 'code',
		required: true,
		type: 'object | string | number',
	},
	{
		default: '0.5rem',
		desc: 'The border radius of the code block.',
		name: 'codeBlockRadius',
		required: false,
		type: 'string',
	},
	{
		default: 'true',
		desc: 'To show a copy button within the code block.',
		name: 'copyButton',
		required: false,
		type: 'boolean',
	},
	{
		default: 'true',
		desc: 'To show the copy icons on the copy code tab.',
		name: 'copyIcons',
		required: false,
		type: 'boolean',
	},
	{
		default: 'true?',
		desc: 'To show the copy code tab.',
		name: 'copyTab',
		required: false,
		type: 'boolean',
	},
	{
		default: 'Copy failed!',
		desc: 'The text to be displayed when the code copy failed.',
		name: 'copyFailedText',
		required: false,
		type: 'string',
	},
	{
		default: 'Copy Code',
		desc: 'The text to be displayed on the copy tab.',
		name: 'copyText',
		required: false,
		type: 'string',
	},
	{
		default: 'Copied!',
		desc: 'The text to be displayed when the code copy was successful.',
		name: 'copySuccessText',
		required: false,
		type: 'string',
	},
	{
		default: 'true',
		desc: 'To make the tabs float on top of the code block.',
		name: 'floatingTabs',
		required: false,
		type: 'boolean',
	},
	{
		default: 'auto',
		desc: 'The height of the code block.',
		name: 'height',
		required: false,
		type: 'string | number',
	},
	{
		default: 'false',
		desc: 'Specifies that the Highlight.js library should be used. * Required if <code class="ic">prismjs</code> prop is not set.',
		name: 'highlightjs',
		required: false,
		type: 'boolean',
	},
	{
		default: '4',
		desc: 'The number of spaces to indent the code for json.',
		name: 'indent',
		required: false,
		type: 'number',
	},
	{
		default: '',
		desc: 'The label to be displayed on the code block.',
		name: 'label',
		required: false,
		type: 'string',
	},
	{
		default: 'javascript',
		desc: 'The language of the code.',
		name: 'lang',
		required: false,
		type: 'string',
	},
	{
		default: 'auto',
		desc: 'The max height of the code block.',
		name: 'maxHeight',
		required: false,
		type: 'string | number',
	},
	{
		default: 'false',
		desc: 'To show a persistent copy button within the code block.',
		name: 'persistentCopyButton',
		required: false,
		type: 'boolean',
	},
	{
		default: 'true',
		desc: 'Specifies that the PrismJS library should be used. * Required if <code class="ic">highlightjs</code> prop is not set.',
		name: 'prismjs',
		required: false,
		type: 'boolean',
	},
	{
		default: 'false',
		desc: 'Specifies that a PrismJS plugin is being used. This is needed for the plugin to work properly.',
		name: 'prismPlugin',
		required: false,
		type: 'boolean',
	},
	{
		default: 'false',
		desc: 'To show the run tab.',
		name: 'runTab',
		required: false,
		type: 'boolean',
	},
	{
		default: 'Run',
		desc: 'The text to be displayed on the run tab.',
		name: 'runText',
		required: false,
		type: 'string',
	},
	{
		default: '0.25rem',
		desc: 'The gap between the tabs.',
		name: 'tabGap',
		required: false,
		type: 'string',
	},
	{
		default: 'false',
		desc: 'To show the tabs. This will show/hide all tabs.',
		name: 'tabs',
		required: false,
		type: 'boolean',
	},
	{
		default: 'neon-bunny',
		desc: `<p>The theme to be used for the code block. Available options include:</p>
		<p>
			<code>false</code> - When you are loading the theme's styles yourself.
		</p>
		<p>
			<strong>Neon Bunny Themes</strong>
			<br />
			<code>neon-bunny</code>
			<br />
			<code>neon-bunny-carrot</code>
		</p>
		<p>
		<a href="${prismLinks.prismThemes}" target="_blank">PrismJS Themes</a>
		</p>
		<p>
		  <a href="${highlightJsLinks.themes}" target="_blank">Highlight.js Themes</a>
		</p>
		`,
		name: 'theme',
		required: false,
		type: 'string | boolean',
	},
];

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const componentProps2 = {
	// theme: {
	// 	type: 'string | boolean',
	// 	required: false,
	// 	id: 'props-theme-option',
	// 	default: 'neon-bunny',
	// 	description: `<p>The theme to be used for the code block. Available options include:</p>
	// 	<p>
	// 		<code>false</code> - When you are loading the theme's styles yourself.
	// 	</p>
	// 	<p>
	// 		<strong>Neon Bunny Themes</strong>
	// 		<br />
	// 		<code>neon-bunny</code>
	// 		<br />
	// 		<code>neon-bunny-carrot</code>
	// 	</p>
	// 	<p>
	// 		<a href="${prismLinks.prismThemes}" target="_blank">PrismJS Themes</a>
	// 	</p>
	// 	<p>
	// 		<a href="${highlightJsLinks.themes}" target="_blank">Highlight.js Themes</a>
	// 	</p>
	// 	`,
	// }
};


export const usePropsStore = defineStore('props', {
	state: () => {
		return {
			componentProps,
			highlightJsLinks,
			prismLinks,
			propsHeaders,
		};
	},
});
