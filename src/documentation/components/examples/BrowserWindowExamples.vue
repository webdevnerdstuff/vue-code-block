<template>
	<v-row id="examples-browser-window">
		<v-col cols="12">
			<h3 class="text-secondary">Browser Window</h3>
		</v-col>
	</v-row>

	<v-row id="browser-window-example">
		<v-col cols="12">
			<VCodeBlock
				:browser-window="true"
				:code="examples[selectedLibrary.id]"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:theme="selectedTheme"
			/>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';


const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

const examples = {
	prismjs: `<VCodeBlock
  :browser-window="true"
  :code="myCode"
  lang="javascript"
  prismjs
/>`,
	highlightjs: `<VCodeBlock
  :browser-window="true"
  :code="myCode"
  highlightjs
  lang="javascript"
/>`
};
</script>
