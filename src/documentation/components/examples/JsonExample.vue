<template>
	<VCodeBlock
		:code="code"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="json"
		:max-height="codeBlockSettings.preHeight"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

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
	desc: codeBlockSettings.plugin.id === 'prismjs' ?
		'PrismJS does not load all languages by default. To highlight JSON, import <code class="ic">prismjs/components/prism-json</code>.' :
		'Highlight.js languages are all loaded by the component, so JSON works without any extra imports.',
	name: 'JSON',
	script: buildScriptCode({
		code,
		imports: codeBlockSettings.plugin.id === 'prismjs' ? ["import 'prismjs/components/prism-json';"] : undefined,
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="json"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
