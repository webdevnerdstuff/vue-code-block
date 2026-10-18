<template>
	<v-row class="mb-2">
		<v-col
			cols="12"
			md="4"
			sm="6"
		>
			<v-text-field
				v-model="indent"
				density="compact"
				hide-details
				label="indent"
				type="number"
				variant="outlined"
			/>
		</v-col>
	</v-row>

	<VCodeBlock
		:code="code"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		:indent="Number(indent)"
		lang="json"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const indent = ref(2);

const code = `{
  "name": "John Doe",
  "age": 30,
  "isMarried": false,
  "hobbies": ["reading", "hiking", "coding"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}`;

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Change the indentation of JSON code with <code class="ic">indent</code>.',
	name: 'Indent',
	script: buildScriptCode({
		body: `const indent = ref(${indent.value});`,
		code,
		imports: ["import { ref } from 'vue';"],
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="json"',
			':indent="indent"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
