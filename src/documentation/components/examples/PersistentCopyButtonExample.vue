<template>
	<VCodeBlock
		:code="sampleCode"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="javascript"
		persistent-copy-button
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode, sampleCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Keep the copy button visible with <code class="ic">persistent-copy-button</code>.',
	name: 'Persistent Copy Button',
	script: buildScriptCode({
		code: sampleCode,
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="javascript"',
			'persistent-copy-button',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
