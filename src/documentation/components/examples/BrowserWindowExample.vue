<template>
	<VCodeBlock
		browser-window
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
	desc: 'Give the code block a browser window look with <code class="ic">browser-window</code>.',
	name: 'Browser Window',
	script: buildScriptCode({
		code: sampleCode,
	}),
	template: buildTemplateCode({
		attrs: [
			'browser-window',
			':code="code"',
			'lang="javascript"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
