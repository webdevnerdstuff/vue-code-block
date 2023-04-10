<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5>Browser Window</h5>
			</div>
		</div>

		<!-- ======================= Copy Code Tab -->
		<div id="browser-window-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:browser-window="true"
					:code="examples[selectedLibrary.id]"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					lang="html"
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
	prism: `<CodeBlock
  :browser-window="true"
  :code="myCode"
  lang="javascript"
  prismjs
  :tabs="false"
/>`,
	highlightjs: `<CodeBlock
  :browser-window="true"
  :code="myCode"
  highlightjs
  lang="javascript"
  :tabs="false"
/>`
};
</script>
