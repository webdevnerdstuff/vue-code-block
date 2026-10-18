<template>
	<VCodeBlock
		:code="sampleCode"
		copy-tab
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		label="Copy Code Tab"
		lang="javascript"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:run-tab="false"
		tabs
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode, sampleCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Show a copy tab above the code block with <code class="ic">tabs</code> and <code class="ic">copy-tab</code>.',
	name: 'Copy Tab',
	script: buildScriptCode({
		code: sampleCode,
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'copy-tab',
			'label="Copy Code Tab"',
			'lang="javascript"',
			':run-tab="false"',
			'tabs',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
