<template>
	<VCodeBlock
		:code="code"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="html"
		:max-height="codeBlockSettings.preHeight"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const code = `<template>
  <div>
    <h1>{{ greeting }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const greeting = ref('Hello, World!');
<\/script>`;

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Vue single file components can be highlighted using <code class="ic">lang="html"</code>.',
	name: 'Vue',
	script: buildScriptCode({
		code,
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="html"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
