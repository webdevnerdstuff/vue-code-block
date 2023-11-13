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
		btn: `<VCodeBlock
  :code="myCode"
  label="Visible on hover"
  lang="html"
  prismjs
/>`,
		btnPersist: `<VCodeBlock
  :code="myCode"
  label="Persistent Copy Button"
  lang="html"
  persistent-copy-button
  prismjs
/>`,
	},
	highlightjs: {
		btn: `<VCodeBlock
  :code="myCode"
  highlightjs
  label="Visible on hover"
  lang="html"
/>`,
		btnPersist: `<VCodeBlock
  :code="myCode"
  highlightjs
  label="Persistent Copy Button"
  lang="html"
  persistent-copy-button
/>`,
	}
};
</script>
