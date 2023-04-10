<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template>
	<div>
		<div class="row my-4">
			<div class="col-12">
				<CodeBlock
					:code="jsExample"
					copy-button
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					label="Playground Example"
					lang="javascript"
					:prismjs="selectedLibrary.id === 'prism'"
					:tabs="true"
					:theme="selectedTheme"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject } from 'vue';

const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

const cssExample = ``;
const htmlExample = ``;
const jsExample = `const foo = 'bar';`;
</script>

<style lang="scss">
</style>
