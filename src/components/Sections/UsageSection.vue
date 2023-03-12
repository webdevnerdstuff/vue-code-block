<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Usage</h2>
		</div>

		<div class="col-12">
			<!-- <CodeBlock
				:code="setupCode"
				label="Composition API (setup)"
				lang="javascript"
				:showRunButton="false"
			/> -->
		</div>

		<div class="col-12">
			<CodeBlock
				:code="optionsApi"
				label="Options API"
				lang="javascript"
				:showRunButton="false"
			/>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const styleData = inject('styleData');

</script>

<style lang="scss"></style>
