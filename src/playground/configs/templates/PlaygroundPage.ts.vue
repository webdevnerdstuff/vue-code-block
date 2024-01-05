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
					:theme="options.theme"
				>
				</VCodeBlock>
			</v-container>
		</v-card>
	</v-col>
</template>

<script setup lang="ts">
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const selectedLibrary = inject<Ref<{ id: string; }>>('selectedLibrary');
const selectedTheme = inject<Ref<string>>('selectedTheme');

let code = `.foo {
  display: block;
}`;

code = `<div>
  Hello World
</div>`;

code = `const foo = 'bar';`;

const options = computed(() => ({
	code,
	copyButton: true,
	highlightjs: selectedLibrary?.value?.id === 'highlightjs',
	label: 'Playground Example',
	lang: 'javascript',
	prismjs: selectedLibrary?.value?.id === 'prismjs',
	tabs: true,
	theme: selectedTheme?.value,
}));
</script>
