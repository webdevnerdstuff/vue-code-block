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

const code = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vue 3 CodeBlock</title>

  <meta name="description"
    content="Vue 3 CodeBlock - Highlight your code with ease using this
    syntax highlighting component powered by PrismJS or Highlight.js." />
  <meta name="theme-color" content="#f01d7f" />

  <link rel="icon" type="image/svg+xml" href="/vue.svg" />
</head>

<body>
  <div id="app"></div>
  <script type="module" src="/src/main.ts"><\/script>
</body>

</html>`;

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Highlight HTML using <code class="ic">lang="html"</code>.',
	name: 'HTML',
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
