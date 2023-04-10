<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5>Copy Button</h5>
			</div>
		</div>

		<!-- ======================= Button -->
		<div id="button-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="examples[selectedLibrary.id].btn"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					label="Visible on hover"
					lang="html"
					:prismjs="selectedLibrary.id === 'prism'"
					:tabs="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>

		<!-- ======================= Persistent Button -->
		<div id="persistent-button-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="examples[selectedLibrary.id].btnPersist"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					label="Persistent Copy Button"
					lang="html"
					persistent-copy-button
					:prismjs="selectedLibrary.id === 'prism'"
					:tabs="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';

const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

const examples = {
	prism: {
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
