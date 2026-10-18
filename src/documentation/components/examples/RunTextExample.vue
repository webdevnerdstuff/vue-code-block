<template>
	<v-row class="mb-2">
		<v-col
			cols="12"
			md="4"
			sm="6"
		>
			<v-text-field
				v-model="runText"
				density="compact"
				hide-details
				label="runText"
				variant="outlined"
			/>
		</v-col>
	</v-row>

	<VCodeBlock
		:code="sampleCode"
		:copy-tab="false"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="javascript"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		run-tab
		:run-text="runText"
		tabs
		:theme="codeBlockSettings.theme"
		@run="runCode"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode, sampleCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const runText = ref('Run');

function runCode(): void {
	alert('Run Text');
}

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Change the text of the run tab with <code class="ic">run-text</code>.',
	name: 'Run Text',
	script: buildScriptCode({
		body: `const runText = ref('${runText.value}');

function runCode() {
  alert('Run Text');
}`,
		code: sampleCode,
		imports: ["import { ref } from 'vue';"],
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="javascript"',
			':run-text="runText"',
			':copy-tab="false"',
			'run-tab',
			'tabs',
			'@run="runCode"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
