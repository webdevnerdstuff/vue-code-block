<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Installation</h2>
		</div>

		<div class="col-12 mb-4">
			<CodeBlock
				:code="pnpmCode"
				label="Using pnpm:"
				lang="plain"
				:showRunButton="false"
			/>
		</div>

		<div class="col-12">
			<CodeBlock
				:code="npmCode"
				label="Using npm:"
				lang="plain"
				:showRunButton="false"
			/>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';
import CodeBlock from '@/components/CodeBlock.vue';


const styleData = inject('styleData');

const pnpmCode = 'pnpm add vue3-code-block';
const npmCode = 'npm i vue3-code-block';
</script>

<style lang="scss"></style>

