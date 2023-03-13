<template>
	<NavBar />
	<DemoPage />
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import { name, } from '../package';
import DemoPage from '@/components/DemoPage.vue';
import NavBar from '@/components/Layout/NavBar.vue';


provide('styleData', {
	h2ColClass: 'col-12 mb-4',
	fieldWidth: {
		maxWidth: '100%',
		width: '300px',
	},
});

const packageName = name;
const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;

const links = {
	changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
	docs: `https://webdevnerdstuff.github.io/${packageName}/`,
	github: repoBaseUrl,
	license: `${repoBaseUrl}/blob/main/LICENSE.md`,
	neonBunnyTheme: 'https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny',
	npm: `https://www.npmjs.com/package/${packageName}`,
	prism: 'https://prismjs.com/',
	vueJs: 'https://vuejs.org/',
};

provide('links', links);

const codeBlockOptions = ref({
	browserWindow: false,
	preHeight: '30em',
});

provide('codeBlockOptions', codeBlockOptions);
</script>


<style scoped>
</style>
