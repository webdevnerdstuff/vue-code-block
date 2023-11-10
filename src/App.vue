<template>
	<NavBar />
	<DemoPage />
	<FooterBar />
</template>

<script setup lang="ts">
import { provide } from 'vue';
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

provide('links', store.links);
provide('highlightJsLinks', store.highlightJsLinks);
provide('prismLinks', store.prismLinks);

</script>


<style>
html,
body {
	height: 100%;
}

#app {
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
}
</style>
