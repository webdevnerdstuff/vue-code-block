<template>
	<v-row class="mb-2">
		<v-col
			cols="12"
			md="4"
			sm="6"
		>
			<v-text-field
				v-model="height"
				density="compact"
				hide-details
				label="height"
				type="number"
				variant="outlined"
			/>
		</v-col>
	</v-row>

	<VCodeBlock
		:code="sampleCode"
		:height="height"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="javascript"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode, sampleCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const height = ref(150);

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Set the height of the code block with <code class="ic">height</code>.',
	name: 'Height',
	script: buildScriptCode({
		body: `const height = ref(${height.value});`,
		code: sampleCode,
		imports: ["import { ref } from 'vue';"],
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="javascript"',
			':height="height"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
