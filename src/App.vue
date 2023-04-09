<template>
	<NavBar :selected-library="selectedLibrary" />
	<DemoPage @changedLibrary="updateLibrary" />
	<FooterBar />
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import { useCoreStore } from '@/stores/index';
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
