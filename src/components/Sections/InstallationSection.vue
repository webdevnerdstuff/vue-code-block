<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Installation</h2>
		</div>

		<div class="col-12 mb-4">
			<CodeBlock
				:code="pnpmCode"
				label="Using pnpm:"
				lang="plain"
				:show-run="false"
				:theme="selectedTheme"
			/>
		</div>

		<div class="col-12">
			<CodeBlock
				:code="npmCode"
				label="Using npm:"
				lang="plain"
				:show-run="false"
				:theme="selectedTheme"
			/>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const styleData = inject('styleData');
const selectedTheme = inject('selectedTheme');

const pnpmCode = 'pnpm add vue3-code-block';
const npmCode = 'npm i vue3-code-block';
</script>
