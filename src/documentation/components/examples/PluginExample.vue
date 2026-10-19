<template>
	<VCodeBlock
		v-if="codeBlockSettings.plugin.id === 'prismjs'"
		class="line-numbers"
		:code="sampleCode"
		lang="javascript"
		prism-plugin
		prismjs
		:theme="codeBlockSettings.theme"
	/>

	<div v-else>
		Vue 3 CodeBlock currently does not support the Highlight.js plugin API. Switch the library to PrismJS to see
		this example.
	</div>
</template>

<script setup lang="ts">
import { buildScriptCode, sampleCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const plugins = [
	'autolinker',
	'command-line',
	'line-highlight',
	'line-numbers',
	'match-braces',
	'show-invisibles',
];

const pluginLinks = plugins
	.map((plugin) => `<a href="https://prismjs.com/plugins/${plugin}/" target="_blank">${plugin}</a>`)
	.join(', ');

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: `<p>PrismJS does not load all plugins by default. To use a plugin, import its JS and CSS, add the
		<code class="ic">prism-plugin</code> prop, and add the plugin's class (for example
		<code class="ic">line-numbers</code>). Not all plugins may work with this component.</p>
		<p class="mt-2">Plugins: ${pluginLinks}</p>`,
	name: 'Plugins',
	script: buildScriptCode({
		code: sampleCode,
		imports: [
			"import 'prismjs/plugins/line-numbers/prism-line-numbers.js';",
			"import 'prismjs/plugins/line-numbers/prism-line-numbers.css';",
		],
	}),
	template: `<template>
  <VCodeBlock
    class="line-numbers"
    :code="code"
    lang="javascript"
    prism-plugin
    prismjs
  />
</template>`,
}));

defineExpose({ exampleCode });
</script>
