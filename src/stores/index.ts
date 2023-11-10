import { defineStore } from 'pinia';
import packageJson from '@root/package.json';

// Themes //
const prismThemes = [
	{
		label: 'Default',
		value: 'default',
	},
	{
		label: 'Coy',
		value: 'coy',
	},
	{
		label: 'Dark',
		value: 'dark',
	},
	{
		label: 'Funky',
		value: 'funky',
	},
	{
		label: 'Night Owl (Prism Themes Repo)',
		value: 'themes-night-owl',
	},
	{
		label: 'Okaidia',
		value: 'okaidia',
	},
	{
		label: 'Solarizedlight',
		value: 'solarizedlight',
	},
	{
		label: 'Tomorrow',
		value: 'tomorrow',
	},
	{
		label: 'Twilight',
		value: 'twilight',
	},
];
const highlightThemes = [
	{
		label: 'Default',
		value: 'default',
	},
	{
		label: 'A11y Dark',
		value: 'a11y-dark',
	},
	{
		label: 'A11y Light',
		value: 'a11y-light',
	},
	{
		label: 'Agate',
		value: 'agate',
	},
	{
		label: 'An Old Hope',
		value: 'an-old-hope',
	},
	{
		label: 'Android Studio',
		value: 'androidstudio',
	},
	{
		label: 'Arduino Light',
		value: 'arduino-light',
	},
	{
		label: 'Arta',
		value: 'arta',
	},
	{
		label: 'Ascetic',
		value: 'ascetic',
	},
	{
		label: 'Atom One Dark Reasonable',
		value: 'atom-one-dark-reasonable',
	},
	{
		label: 'Atom One Dark',
		value: 'atom-one-dark',
	},
	{
		label: 'Atom One Light',
		value: 'atom-one-light',
	},
	{
		label: 'Brown Paper',
		value: 'brown-paper',
	},
	{
		label: 'Base16 One Dark',
		value: 'base16-onedark',
	},
	{
		label: 'CodePen Embed',
		value: 'codepen-embed',
	},
	{
		label: 'Color Brewer',
		value: 'color-brewer',
	},
	{
		label: 'Dark',
		value: 'dark',
	},
	{
		label: 'DeviBeans',
		value: 'devibeans',
	},
	{
		label: 'Docco',
		value: 'docco',
	},
	{
		label: 'Far',
		value: 'far',
	},
	{
		label: 'Felipec',
		value: 'felipec',
	},
	{
		label: 'Foundation',
		value: 'foundation',
	},
	{
		label: 'Github Dark Dimmed',
		value: 'github-dark-dimmed',
	},
	{
		label: 'Github Dark',
		value: 'github-dark',
	},
	{
		label: 'Github',
		value: 'github',
	},
	{
		label: 'GML',
		value: 'gml',
	},
	{
		label: 'Google Code',
		value: 'googlecode',
	},
	{
		label: 'Gradient Dark',
		value: 'gradient-dark',
	},
	{
		label: 'Gradient Light',
		value: 'gradient-light',
	},
	{
		label: 'Grayscale',
		value: 'grayscale',
	},
	{
		label: 'Hybrid',
		value: 'hybrid',
	},
	{
		label: 'Idea',
		value: 'idea',
	},
	{
		label: 'IntelliJ Light',
		value: 'intellij-light',
	},
	{
		label: 'IR Black',
		value: 'ir-black',
	},
	{
		label: 'ISBL Editor Dark',
		value: 'isbl-editor-dark',
	},
	{
		label: 'ISBL Editor Light',
		value: 'isbl-editor-light',
	},
	{
		label: 'Kimbie Dark',
		value: 'kimbie-dark',
	},
	{
		label: 'Kimbie Light',
		value: 'kimbie-light',
	},
	{
		label: 'Lightfair',
		value: 'lightfair',
	},
	{
		label: 'Lioshi',
		value: 'lioshi',
	},
	{
		label: 'Magula',
		value: 'magula',
	},
	{
		label: 'Mono Blue',
		value: 'mono-blue',
	},
	{
		label: 'Monokai Sublime',
		value: 'monokai-sublime',
	},
	{
		label: 'Monokai',
		value: 'monokai',
	},
	{
		label: 'Night Owl',
		value: 'night-owl',
	},
	{
		label: 'NNFX Dark',
		value: 'nnfx-dark',
	},
	{
		label: 'NNFX- Light',
		value: 'nnfx-light',
	},
	{
		label: 'Nord',
		value: 'nord',
	},
	{
		label: 'Obsidian',
		value: 'obsidian',
	},
	{
		label: 'Panda Syntax Dark',
		value: 'panda-syntax-dark',
	},
	{
		label: 'Panda Syntax Light',
		value: 'panda-syntax-light',
	},
	{
		label: 'Paraiso Dark',
		value: 'paraiso-dark',
	},
	{
		label: 'Paraiso Light',
		value: 'paraiso-light',
	},
	{
		label: 'Pojoaque',
		value: 'pojoaque',
	},
	{
		label: 'PureBasic',
		value: 'purebasic',
	},
	{
		label: 'Qt Creator Dark',
		value: 'qtcreator-dark',
	},
	{
		label: 'Qt Creator Light',
		value: 'qtcreator-light',
	},
	{
		label: 'Rainbow',
		value: 'rainbow',
	},
	{
		label: 'RouterOS',
		value: 'routeros',
	},
	{
		label: 'School Book',
		value: 'school-book',
	},
	{
		label: 'Shades of Purple',
		value: 'shades-of-purple',
	},
	{
		label: 'Srcery',
		value: 'srcery',
	},
	{
		label: 'Stack Overflow Dark',
		value: 'stackoverflow-dark',
	},
	{
		label: 'Stack Overflow Light',
		value: 'stackoverflow-light',
	},
	{
		label: 'Sunburst',
		value: 'sunburst',
	},
	{
		label: 'Tokyo Night Dark',
		value: 'tokyo-night-dark',
	},
	{
		label: 'Tokyo Night Light',
		value: 'tokyo-night-light',
	},
	{
		label: 'Tomorrow Night Blue',
		value: 'tomorrow-night-blue',
	},
	{
		label: 'Tomorrow Night Bright',
		value: 'tomorrow-night-bright',
	},
	{
		label: 'VS',
		value: 'vs',
	},
	{
		label: 'VS 2015',
		value: 'vs2015',
	},
	{
		label: 'Xcode',
		value: 'xcode',
	},
	{
		label: 'xt256',
		value: 'xt256',
	},
];

// ! Do not edit below this line //
const dependencies = packageJson.dependencies;
const packageName = 'vue-code-block';
const prismVersion = dependencies.prismjs.replace('^', '');
const highlightJsVersion = dependencies['highlight.js'].replace('^', '');

// Links //
const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;
const links = {
	changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
	contribute: `${repoBaseUrl}/tree/main/src/plugin/styles`,
	github: repoBaseUrl,
	githubProfile: 'https://github.com/webdevnerdstuff',
	license: `${repoBaseUrl}/blob/main/LICENSE.md`,
	neonBunnyTheme: 'https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny',
	npm: `https://www.npmjs.com/package/@wdns/${packageName}`,
	uaParser: 'https://www.npmjs.com/package/ua-parser-js',
	vueJs: 'https://vuejs.org/',
};
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

// Options //
const libraries = {
	prism: {
		label: 'PrismJS',
		id: 'prism',
	},
	highlightjs: {
		label: 'Highlight.js',
		id: 'highlightjs',
	},
};
const neonBunnyThemes = [
	{
		label: 'Neon Bunny',
		value: 'neon-bunny',
	},
	{
		label: 'Neon Bunny - Carrot',
		value: 'neon-bunny-carrot',
	},
];

interface State {
	highlightJsLinks: object;
	highlightThemes: object;
	libraries: object;
	links: object;
	neonBunnyThemes: object;
	package: object,
	prismLinks: object;
	prismThemes: object;
	storageName: string;
}

export const useCoreStore = defineStore('core', {
	actions: {
		setLocalStorage(val: string): string {
			const oldValue = localStorage.getItem(this.storageName);
			const newValue = val ?? oldValue;

			localStorage.setItem(this.storageName, newValue);
			return newValue;
		},
		setTheme(theme: string, pageTheme: string) {
			let newPageTheme = theme;

			if (newPageTheme === 'toggle') {
				newPageTheme = pageTheme !== 'dark' ? 'dark' : 'light';
			}

			document.documentElement.setAttribute('data-bs-theme', newPageTheme);
			localStorage.setItem('theme', newPageTheme);

			return newPageTheme;
		},
	},
	getters: {
		getLocalStorage: (state: State) => (): string => {
			const value = localStorage.getItem(state.storageName);
			return value;
		},
	},
	state: (): State => {
		return {
			highlightJsLinks,
			highlightThemes,
			libraries,
			links,
			neonBunnyThemes,
			package: packageJson,
			prismLinks,
			prismThemes,
			storageName: 'vue3-code-block-library',
		};
	},
});


