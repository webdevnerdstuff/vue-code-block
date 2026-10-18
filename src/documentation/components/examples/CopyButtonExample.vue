<template>
	<VCodeBlock
		:code="sampleCode"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="javascript"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode, sampleCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'By default the copy button is visible when hovering over the code block.',
	name: 'Copy Button',
	script: buildScriptCode({
		code: sampleCode,
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="javascript"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
