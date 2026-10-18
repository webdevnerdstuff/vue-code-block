<template>
	<v-row class="mb-2">
		<v-col
			cols="12"
			md="4"
			sm="6"
		>
			<v-checkbox
				v-model="floatingTabs"
				color="primary"
				density="compact"
				hide-details
				label="floatingTabs"
			/>
		</v-col>
	</v-row>

	<VCodeBlock
		:code="sampleCode"
		:floating-tabs="floatingTabs"
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

const floatingTabs = ref(true);

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Toggle <code class="ic">floating-tabs</code> to float the tabs above the code block or attach them to it.',
	name: 'Floating Tabs',
	script: buildScriptCode({
		body: `const floatingTabs = ref(${floatingTabs.value});`,
		code: sampleCode,
		imports: ["import { ref } from 'vue';"],
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="javascript"',
			':floating-tabs="floatingTabs"',
			'tabs',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
