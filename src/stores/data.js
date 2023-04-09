import { defineStore } from 'pinia';
import packageJson from '../../package.json';

const dependencies = packageJson.dependencies;
const packageName = packageJson.name;

const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;
const prismVersion = dependencies.prismjs.replace('^', '');
const highlightJsVersion = dependencies['highlight.js'].replace('^', '');


const links = {
	changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
	contribute: `${repoBaseUrl}/tree/main/src/plugin/styles`,
	github: repoBaseUrl,
	githubProfile: 'https://github.com/webdevnerdstuff',
	license: `${repoBaseUrl}/blob/main/LICENSE.md`,
	neonBunnyTheme: 'https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny',
	npm: `https://www.npmjs.com/package/${packageName}`,
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

export const useDataStore = defineStore('data', {
	state: () => ({
		highlightJsLinks,
		links,
		package: packageJson,
		prismLinks,
	}),
});
