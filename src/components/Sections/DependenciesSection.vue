<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Dependencies</h2>
		</div>

		<div class="col-12">
			<a :href="prismLinks.homepage" target="_blank">PrismJS</a>
			<br />
			<a :href="highlightJsLinks.homepage" target="_blank">Highlight.js</a>
			<br />
			<a :href="links.vueJs" target="_blank">Vue 3</a>
			<br />
			<a :href="links.uaParser" target="_blank">UAParser.js</a>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const highlightJsLinks = inject('highlightJsLinks');
const links = inject('links');
const prismLinks = inject('prismLinks');
const styleData = inject('styleData');
</script>
