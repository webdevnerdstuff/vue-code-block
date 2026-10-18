<template>
	<v-row class="mb-2">
		<v-col
			cols="12"
			md="4"
			sm="6"
		>
			<v-text-field
				v-model="tabGap"
				density="compact"
				hide-details
				label="tabGap"
				variant="outlined"
			/>
		</v-col>
	</v-row>

	<VCodeBlock
		:code="sampleCode"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="javascript"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		run-tab
		:tab-gap="tabGap"
		tabs
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode, sampleCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const tabGap = ref('0.25rem');

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Change the space between the tabs with <code class="ic">tab-gap</code>.',
	name: 'Tab Gap',
	script: buildScriptCode({
		body: `const tabGap = ref('${tabGap.value}');`,
		code: sampleCode,
		imports: ["import { ref } from 'vue';"],
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="javascript"',
			':tab-gap="tabGap"',
			'run-tab',
			'tabs',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
