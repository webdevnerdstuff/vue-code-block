<template>
	<VCodeBlock
		:code="code"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="css"
		:max-height="codeBlockSettings.preHeight"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const code = `:root {
  --brand-color: #f01d7f;
  --text-color: #e0e0e0;
}

@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

body {
  background-color: #1e1e1e;
  color: var(--text-color);
  font-family: 'Indie Flower', cursive;
  margin: 0;
}

.card {
  border: 1px solid var(--brand-color);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 30%);
  padding: 1rem 1.5rem;
}

.card:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease-in-out;
}

@media (width <= 600px) {
  .card {
    padding: 0.75rem;
  }
}`;

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Highlight CSS using <code class="ic">lang="css"</code>.',
	name: 'CSS',
	script: buildScriptCode({
		code,
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="css"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
