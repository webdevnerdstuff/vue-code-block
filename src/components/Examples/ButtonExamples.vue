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
					:code="btnExample"
					label="Visible on hover"
					lang="html"
					:lib="selectedLibrary"
					:tabs="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>

		<!-- ======================= Persistent Button -->
		<div id="persistent-button-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="btnPersistExample"
					label="Persistent Copy Button"
					lang="html"
					:lib="selectedLibrary"
					persistent-copy-button
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

const btnExample = `<CodeBlock
  :code="myCode"
  label="Visible on hover"
  lang="html"
  :tabs="false"
/>`;
const btnPersistExample = `<CodeBlock
  :code="myCode"
  label="Persistent Copy Button"
  lang="html"
  persistent-copy-button
  :tabs="false"
/>`;
</script>
