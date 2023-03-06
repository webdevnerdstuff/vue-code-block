<template>
	<NavBar />
	<DemoPage />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import DemoPage from '@/components/DemoPage.vue';
import NavBar from '@/components/Layout/NavBar.vue';


provide('styleData', {
	h2ColClass: 'col-12 mb-4',
	fieldWidth: {
		maxWidth: '100%',
		width: '300px',
	},
});

const pageLinks = {
	docs: '',
	github: '',
	npm: '',
};

provide('pageLinks', pageLinks);
</script>


<style scoped>
</style>
