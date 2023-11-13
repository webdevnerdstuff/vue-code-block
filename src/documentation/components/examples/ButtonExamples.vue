<template>
	<v-row id="examples-copy-button">
		<v-col cols="12">
			<h3 class="text-secondary">Copy Button</h3>
		</v-col>
	</v-row>

	<!-- ======================= Button -->
	<v-row id="browser-window-example">
		<v-col cols="12">
			<VCodeBlock
				:code="examples[selectedLibrary.id].btn"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Visible on hover"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:tabs="false"
				:theme="selectedTheme"
			/>
		</v-col>
	</v-row>

	<!-- ======================= Persistent Button -->
	<v-row id="browser-window-example">
		<v-col cols="12">
			<VCodeBlock
				:code="examples[selectedLibrary.id].btnPersist"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Persistent Copy Button"
				lang="html"
				persistent-copy-button
				:prismjs="selectedLibrary.id === 'prismjs'"
				:tabs="false"
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
	prismjs: {
		btn: `<CodeBlock
  :code="myCode"
  label="Visible on hover"
  lang="html"
  prismjs
  :tabs="false"
/>`,
		btnPersist: `<CodeBlock
  :code="myCode"
  label="Persistent Copy Button"
  lang="html"
  persistent-copy-button
  prismjs
  :tabs="false"
/>`,
	},
	highlightjs: {
		btn: `<CodeBlock
  :code="myCode"
  highlightjs
  label="Visible on hover"
  lang="html"
  :tabs="false"
/>`,
		btnPersist: `<CodeBlock
  :code="myCode"
  highlightjs
  label="Persistent Copy Button"
  lang="html"
  persistent-copy-button
  :tabs="false"
/>`,
	}
};
</script>
