<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5>Plugins</h5>
			</div>
		</div>

		<div
			v-if="selectedLibrary.id === 'prism'"
			id="plugin-example"
			class="row mb-4"
		>
			<div class="col-12">
				<p>
					PrismJS does not load all plugins by default. In order to use
					additional plugins you will need to import them. Please note that not
					all plugins may work with this component.
				</p>
				<p>Tested Plugins that do work include:</p>
				<ul>
					<li>
						<a href="https://prismjs.com/plugins/autolinker/" target="_blank">
							autolinker
						</a>
					</li>
					<li>
						<a href="https://prismjs.com/plugins/inline-color/" target="_blank">
							inline-color
						</a>
					</li>
					<li>
						<a href="https://prismjs.com/plugins/line-numbers/" target="_blank">
							line-numbers
						</a>
					</li>
					<li>
						<a href="https://prismjs.com/plugins/match-braces/" target="_blank">
							match-braces
						</a>
					</li>
					<li>
						<a
							href="https://prismjs.com/plugins/show-invisibles/"
							target="_blank"
						>
							show-invisibles
						</a>
					</li>
				</ul>
			</div>

			<div class="col-12">
				<CodeBlock
					class="line-numbers"
					:code="pluginExample"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					lang="html"
					prism-plugin
					:prismjs="selectedLibrary.id === 'prism'"
					:tabs="false"
					:theme="selectedTheme"
				>
					<template #label>
						Example using the
						<a href="https://prismjs.com/plugins/line-numbers/" target="_blank"
							>line-numbers</a
						>
						Plugin
					</template>
				</CodeBlock>
			</div>
		</div>
		<div v-else id="plugin-example" class="row mb-4">
			<div class="col-12">
				<p>
					Vue3 CodeBlock currently does not support the Highlight.js plugin API.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

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
