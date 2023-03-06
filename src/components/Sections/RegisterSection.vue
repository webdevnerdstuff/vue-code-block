<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Register Component</h2>
		</div>

		<div class="col-12">
			<CodeBlock
				:code="asPluginGlobalCode"
				lang="javascript"
				:showRunButton="false"
			/>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';
import CodeBlock from '@/components/CodeBlock.vue';


const styleData = inject('styleData');

const asPluginGlobalCode = `import { createApp } from 'vue';
import UnicornLog from 'vue3-unicorn-log';

createApp()
  .use(UnicornLog)
  .mount('#app');`;
</script>

<style lang="scss"></style>
