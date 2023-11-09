<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Installation</h2>
		</div>

		<div class="col-12 mb-4">
			<CodeBlock
				:code="pnpmCode"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Using pnpm:"
				lang="plain"
				:prismjs="selectedLibrary.id === 'prism'"
				:show-run="false"
				:tabs="false"
				:theme="selectedTheme"
			/>
		</div>

		<div class="col-12">
			<CodeBlock
				:code="npmCode"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Using npm:"
				lang="plain"
				:prismjs="selectedLibrary.id === 'prism'"
				:show-run="false"
				:theme="selectedTheme"
			/>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');
const styleData = inject('styleData');

const pnpmCode = 'pnpm add @wdns/vue3-code-block';
const npmCode = 'npm i @wdns/vue3-code-block';
</script>
