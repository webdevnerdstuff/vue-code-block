<template>
	<VCodeBlock
		:code="sampleCode"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		label="Copy &amp; Run Code Tabs"
		lang="javascript"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		run-tab
		tabs
		:theme="codeBlockSettings.theme"
		@run="runCode"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode, sampleCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

function runCode(): void {
	alert('Copy & Run Code Tabs');
}

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Both tabs can be shown together.',
	name: 'Copy and Run Tabs',
	script: buildScriptCode({
		body: `function runCode() {
  alert('Copy & Run Code Tabs');
}`,
		code: sampleCode,
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'label="Copy &amp; Run Code Tabs"',
			'lang="javascript"',
			'run-tab',
			'tabs',
			'@run="runCode"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
