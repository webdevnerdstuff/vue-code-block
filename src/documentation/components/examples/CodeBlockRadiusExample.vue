<template>
	<v-row class="mb-2">
		<v-col
			cols="12"
			md="4"
			sm="6"
		>
			<v-text-field
				v-model="codeBlockRadius"
				density="compact"
				hide-details
				label="codeBlockRadius"
				variant="outlined"
			/>
		</v-col>
	</v-row>

	<VCodeBlock
		:code="sampleCode"
		:code-block-radius="codeBlockRadius"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="javascript"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode, sampleCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const codeBlockRadius = ref('0 1em');

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Change the border radius of the code block with <code class="ic">code-block-radius</code>.',
	name: 'Code Block Radius',
	script: buildScriptCode({
		body: `const codeBlockRadius = ref('${codeBlockRadius.value}');`,
		code: sampleCode,
		imports: ["import { ref } from 'vue';"],
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="javascript"',
			':code-block-radius="codeBlockRadius"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
