<template>
	<v-row id="examples-plugins">
		<v-col cols="12">
			<h3 class="text-secondary">Plugins</h3>
		</v-col>
	</v-row>

	<v-row v-if="selectedLibrary.id === 'prismjs'">
		<v-col cols="12">
			PrismJS does not load all plugins by default. In order to use
			additional plugins you will need to import them. Please note that not
			all plugins may work with this component.
		</v-col>

		<v-col cols="12">
			<v-list lines="one">
				<v-list-item
					v-for="plugin in plugins"
					:key="plugin.title"
					:href="plugin.href"
					target="_blank"
					:title="plugin.title"
				></v-list-item>
			</v-list>
		</v-col>

		<v-col cols="12">
			<VCodeBlock
				class="line-numbers"
				:code="pluginExample"
				lang="html"
				prism-plugin
				prismjs
				:tabs="false"
				:theme="selectedTheme"
			>
				<template #label>
					Example using the
					<a
						href="https://prismjs.com/plugins/line-numbers/"
						target="_blank"
					>line-numbers</a>
					Plugin
				</template>
			</VCodeBlock>
		</v-col>
	</v-row>

	<v-row v-else>
		<v-col cols="12">
			Vue3 CodeBlock currently does not support the Highlight.js plugin API.
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

const plugins = ref([
	{
		href: 'https://prismjs.com/plugins/autolinker/',
		title: 'autolinker',
	},
	{
		href: 'https://prismjs.com/plugins/command-line/',
		title: 'command-line',
	},
	{
		href: 'https://prismjs.com/plugins/line-highlight/',
		title: 'line-highlight',
	},
	{
		href: 'https://prismjs.com/plugins/line-numbers/',
		title: 'line-numbers',
	},
	{
		href: 'https://prismjs.com/plugins/match-braces/',
		title: 'match-braces',
	},
	{
		href: 'https://prismjs.com/plugins/show-invisibles/',
		title: 'show-invisibles',
	},
]);

const pluginExample = `<template>
  <CodeBlock
    class="line-numbers"
    :code="pluginExample"
    label="line-numbers"
    lang="html"
    prism-plugin
    prismjs
    :tabs="false"
  />
<\/template>

<script setup>
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
<\/script>`;
</script>
