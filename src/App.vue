<template>
	<NavBar :selected-library="selectedLibrary" />
	<DemoPage @changedLibrary="updateLibrary" />
	<FooterBar />
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import { dependencies, name } from '../package';
import DemoPage from '@/components/DemoPage.vue';
import NavBar from '@/components/Layout/NavBar.vue';
import FooterBar from '@/components/Layout/FooterBar.vue';


provide('styleData', {
	h2ColClass: 'col-12 mb-4',
	fieldWidth: {
		maxWidth: '100%',
		width: '300px',
	},
});

const packageName = name;
const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;
const prismVersion = dependencies.prismjs.replace('^', '');
const highlightJsVersion = dependencies['highlight.js'].replace('^', '');
const selectedLibrary = ref({});


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

provide('links', links);
provide('highlightJsLinks', highlightJsLinks);
provide('prismLinks', prismLinks);

const codeBlockOptions = ref({
	browserWindow: false,
	preHeight: '30em',
});

provide('codeBlockOptions', codeBlockOptions);

function updateLibrary(library) {
	selectedLibrary.value = library.value;
}
</script>


<style scoped>
</style>
