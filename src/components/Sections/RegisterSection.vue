<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Register Component</h2>
		</div>

		<div class="col-12">
			<CodeBlock
				:code="asPluginGlobalCode"
				label=""
				lang="javascript"
				:showRunButton="false"
				:theme="selectedTheme"
			/>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const styleData = inject('styleData');
const selectedTheme = inject('selectedTheme');

const asPluginGlobalCode = `import { createApp } from 'vue';
import CodeBlock from 'vue3-code-block';

createApp()
  .use(CodeBlock)
  .mount('#app');`;
</script>

<style lang="scss"></style>
