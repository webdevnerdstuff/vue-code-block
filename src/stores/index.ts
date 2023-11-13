import { defineStore } from 'pinia';
// @ts-expect-error @ts-ignore
import packageJson from '@root/package.json';


export const useCoreStore = defineStore('core', () => {
	const scopedPackageName = packageJson.name;
	const packageName = scopedPackageName.split('/')[1];

	const dependencies = packageJson.dependencies;
	const prismVersion = dependencies.prismjs.replace('^', '');
	const highlightJsVersion = dependencies['highlight.js'].replace('^', '');

	// Themes //
	const prismThemes = [
		{
			title: 'Default',
			id: 'default',
		},
		{
			title: 'Coy',
			id: 'coy',
		},
		{
			title: 'Dark',
			id: 'dark',
		},
		{
			title: 'Funky',
			id: 'funky',
		},
		{
			title: 'Night Owl (Prism Themes Repo)',
			id: 'themes-night-owl',
		},
		{
			title: 'Okaidia',
			id: 'okaidia',
		},
		{
			title: 'Solarizedlight',
			id: 'solarizedlight',
		},
		{
			title: 'Tomorrow',
			id: 'tomorrow',
		},
		{
			title: 'Twilight',
			id: 'twilight',
		},
	];
	const highlightThemes = [
		{
			title: 'Default',
			id: 'default',
		},
		{
			title: 'A11y Dark',
			id: 'a11y-dark',
		},
		{
			title: 'A11y Light',
			id: 'a11y-light',
		},
		{
			title: 'Agate',
			id: 'agate',
		},
		{
			title: 'An Old Hope',
			id: 'an-old-hope',
		},
		{
			title: 'Android Studio',
			id: 'androidstudio',
		},
		{
			title: 'Arduino Light',
			id: 'arduino-light',
		},
		{
			title: 'Arta',
			id: 'arta',
		},
		{
			title: 'Ascetic',
			id: 'ascetic',
		},
		{
			title: 'Atom One Dark Reasonable',
			id: 'atom-one-dark-reasonable',
		},
		{
			title: 'Atom One Dark',
			id: 'atom-one-dark',
		},
		{
			title: 'Atom One Light',
			id: 'atom-one-light',
		},
		{
			title: 'Brown Paper',
			id: 'brown-paper',
		},
		{
			title: 'Base16 One Dark',
			id: 'base16-onedark',
		},
		{
			title: 'CodePen Embed',
			id: 'codepen-embed',
		},
		{
			title: 'Color Brewer',
			id: 'color-brewer',
		},
		{
			title: 'Dark',
			id: 'dark',
		},
		{
			title: 'DeviBeans',
			id: 'devibeans',
		},
		{
			title: 'Docco',
			id: 'docco',
		},
		{
			title: 'Far',
			id: 'far',
		},
		{
			title: 'Felipec',
			id: 'felipec',
		},
		{
			title: 'Foundation',
			id: 'foundation',
		},
		{
			title: 'Github Dark Dimmed',
			id: 'github-dark-dimmed',
		},
		{
			title: 'Github Dark',
			id: 'github-dark',
		},
		{
			title: 'Github',
			id: 'github',
		},
		{
			title: 'GML',
			id: 'gml',
		},
		{
			title: 'Google Code',
			id: 'googlecode',
		},
		{
			title: 'Gradient Dark',
			id: 'gradient-dark',
		},
		{
			title: 'Gradient Light',
			id: 'gradient-light',
		},
		{
			title: 'Grayscale',
			id: 'grayscale',
		},
		{
			title: 'Hybrid',
			id: 'hybrid',
		},
		{
			title: 'Idea',
			id: 'idea',
		},
		{
			title: 'IntelliJ Light',
			id: 'intellij-light',
		},
		{
			title: 'IR Black',
			id: 'ir-black',
		},
		{
			title: 'ISBL Editor Dark',
			id: 'isbl-editor-dark',
		},
		{
			title: 'ISBL Editor Light',
			id: 'isbl-editor-light',
		},
		{
			title: 'Kimbie Dark',
			id: 'kimbie-dark',
		},
		{
			title: 'Kimbie Light',
			id: 'kimbie-light',
		},
		{
			title: 'Lightfair',
			id: 'lightfair',
		},
		{
			title: 'Lioshi',
			id: 'lioshi',
		},
		{
			title: 'Magula',
			id: 'magula',
		},
		{
			title: 'Mono Blue',
			id: 'mono-blue',
		},
		{
			title: 'Monokai Sublime',
			id: 'monokai-sublime',
		},
		{
			title: 'Monokai',
			id: 'monokai',
		},
		{
			title: 'Night Owl',
			id: 'night-owl',
		},
		{
			title: 'NNFX Dark',
			id: 'nnfx-dark',
		},
		{
			title: 'NNFX- Light',
			id: 'nnfx-light',
		},
		{
			title: 'Nord',
			id: 'nord',
		},
		{
			title: 'Obsidian',
			id: 'obsidian',
		},
		{
			title: 'Panda Syntax Dark',
			id: 'panda-syntax-dark',
		},
		{
			title: 'Panda Syntax Light',
			id: 'panda-syntax-light',
		},
		{
			title: 'Paraiso Dark',
			id: 'paraiso-dark',
		},
		{
			title: 'Paraiso Light',
			id: 'paraiso-light',
		},
		{
			title: 'Pojoaque',
			id: 'pojoaque',
		},
		{
			title: 'PureBasic',
			id: 'purebasic',
		},
		{
			title: 'Qt Creator Dark',
			id: 'qtcreator-dark',
		},
		{
			title: 'Qt Creator Light',
			id: 'qtcreator-light',
		},
		{
			title: 'Rainbow',
			id: 'rainbow',
		},
		{
			title: 'RouterOS',
			id: 'routeros',
		},
		{
			title: 'School Book',
			id: 'school-book',
		},
		{
			title: 'Shades of Purple',
			id: 'shades-of-purple',
		},
		{
			title: 'Srcery',
			id: 'srcery',
		},
		{
			title: 'Stack Overflow Dark',
			id: 'stackoverflow-dark',
		},
		{
			title: 'Stack Overflow Light',
			id: 'stackoverflow-light',
		},
		{
			title: 'Sunburst',
			id: 'sunburst',
		},
		{
			title: 'Tokyo Night Dark',
			id: 'tokyo-night-dark',
		},
		{
			title: 'Tokyo Night Light',
			id: 'tokyo-night-light',
		},
		{
			title: 'Tomorrow Night Blue',
			id: 'tomorrow-night-blue',
		},
		{
			title: 'Tomorrow Night Bright',
			id: 'tomorrow-night-bright',
		},
		{
			title: 'VS',
			id: 'vs',
		},
		{
			title: 'VS 2015',
			id: 'vs2015',
		},
		{
			title: 'Xcode',
			id: 'xcode',
		},
		{
			title: 'xt256',
			id: 'xt256',
		},
	];

	// Options //
	const libraries = [
		{
			id: 'prismjs',
			title: 'PrismJS',
		},
		{
			id: 'highlightjs',
			title: 'Highlight.js',
		},
	];

	const neonBunnyThemes = [
		{
			title: 'Neon Bunny',
			id: 'neon-bunny',
		},
		{
			title: 'Neon Bunny - Carrot',
			id: 'neon-bunny-carrot',
		},
	];

	// Links //
	const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;
	const links = {
		changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
		github: repoBaseUrl,
		githubProfile: 'https://github.com/webdevnerdstuff',
		highlightjs: 'https://highlightjs.org/',
		license: `${repoBaseUrl}/blob/main/LICENSE.md`,
		neonBunnyTheme: 'https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny',
		npm: `https://www.npmjs.com/package/${scopedPackageName}`,
		prismjs: 'https://prismjs.com/',
		uaParser: 'https://www.npmjs.com/package/ua-parser-js',
		vue: 'https://vuejs.org/',
		vueUse: 'https://vueuse.org/',
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

	const actions = {
		setLocalStorage(val: string): string {
			const oldValue = localStorage.getItem(packageName);
			const newValue = val ?? oldValue;

			localStorage.setItem(packageName, newValue);
			return newValue;
		},
		setTheme(val: string): string {
			const themeName = val === 'dark' ? 'light' : 'dark';
			const currentTheme = localStorage.getItem(`${packageName}-theme`);
			const newTheme = themeName ?? currentTheme;

			localStorage.setItem(`${packageName}-theme`, newTheme);
			return newTheme;
		},
	};

	const getters = {
		getLocalStorage: () => {
			const value = localStorage.getItem(packageName);
			return value;
		},
		getTheme: () => {
			const value = localStorage.getItem(`${packageName}-theme`);
			return value;
		},
	};

	return {
		...actions,
		...getters,
		highlightThemes,
		highlightJsLinks,
		highlightJsVersion,
		libraries,
		links,
		neonBunnyThemes,
		package: packageJson,
		packageName,
		pluginVersion: packageJson.version,
		prismLinks,
		prismThemes,
		prismVersion,
	};
});
