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
					:code="browserWindowExample"
					lang="javascript"
					:show-tabs="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const selectedTheme = inject('selectedTheme');


const browserWindowExample = `const foo = 'bar';`;

</script>
