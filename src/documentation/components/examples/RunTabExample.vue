<template>
	<VCodeBlock
		:code="sampleCode"
		:copy-tab="false"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		label="Run Code Tab"
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
	alert('Run Code Tab');
}

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Show a run tab with <code class="ic">run-tab</code>. Clicking it emits the <code class="ic">run</code> event.',
	name: 'Run Tab',
	script: buildScriptCode({
		body: `function runCode() {
  alert('Run Code Tab');
}`,
		code: sampleCode,
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			':copy-tab="false"',
			'label="Run Code Tab"',
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
