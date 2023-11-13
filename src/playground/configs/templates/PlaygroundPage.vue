<template>
	<v-col cols="12">
		<v-card elevation="5">
			<v-container>
				<VCodeBlock
					:code="options.code"
					:copy-button="options.copyButton"
					:highlightjs="options.highlightjs"
					:label="options.label"
					:lang="options.lang"
					:prismjs="options.prismjs"
					:tabs="options.tabs"
					:theme="options.theme"
				/>
			</v-container>
		</v-card>
	</v-col>
</template>

<script setup>
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

const cssExample = `.foo {
  display: block;
}`;
const htmlExample = `<div>
  Hello World
</div>`;
const jsExample = `const foo = 'bar';`;

const options = computed(() => ({
	code: jsExample,
	copyButton: true,
	highlightjs: selectedLibrary.value?.id === 'highlightjs',
	label: 'Playground Example',
	lang: 'javascript',
	prismjs: selectedLibrary.value?.id === 'prismjs',
	tabs: true,
	theme: selectedTheme.value,
}));
</script>
