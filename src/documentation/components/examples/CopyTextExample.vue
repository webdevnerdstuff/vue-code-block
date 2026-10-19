<template>
	<v-row class="mb-2">
		<v-col
			cols="12"
			md="4"
			sm="6"
		>
			<v-text-field
				v-model="copyText"
				density="compact"
				hide-details
				label="copyText"
				variant="outlined"
			/>
		</v-col>
	</v-row>

	<VCodeBlock
		:code="sampleCode"
		copy-tab
		:copy-text="copyText"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="javascript"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		tabs
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode, sampleCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const copyText = ref('Copy Text');

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Change the text of the copy tab with <code class="ic">copy-text</code>.',
	name: 'Copy Text',
	script: buildScriptCode({
		body: `const copyText = ref('${copyText.value}');`,
		code: sampleCode,
		imports: ["import { ref } from 'vue';"],
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="javascript"',
			':copy-text="copyText"',
			'copy-tab',
			'tabs',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
