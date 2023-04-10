<template>
	<NavBar is-playground :selected-library="selectedLibrary" />
	<PlaygroundDemoPage @changedLibrary="updateLibrary" />
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import { useCoreStore } from '@/stores/index';
import PlaygroundDemoPage from './PlaygroundDemoPage.vue';
import NavBar from '@/components/Layout/NavBar.vue';


provide('styleData', {
	h2ColClass: 'col-12 mb-4',
	fieldWidth: {
		maxWidth: '100%',
		width: '300px',
	},
});

const store = useCoreStore();
const selectedLibrary = ref({});

provide('links', store.links);
provide('highlightJsLinks', store.highlightJsLinks);
provide('prismLinks', store.prismLinks);

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
