<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5>Tabs</h5>
			</div>
		</div>

		<!-- ======================= Copy Code Tab -->
		<div id="copy-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="copyExample"
					label="Copy Code Tab"
					lang="javascript"
					:show-run-tab="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>

		<!-- ======================= Run Code Tab -->
		<div id="run-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="runExample"
					label="Run Code Tab"
					lang="javascript"
					:max-height="codeBlockOptions.preHeight"
					:show-copy-tab="false"
					:show-run-tab="true"
					:theme="selectedTheme"
					@run="runJsExample"
				></CodeBlock>
			</div>
		</div>

		<!-- ======================= Both Tabs -->
		<div id="run-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="bothExample"
					label="Copy &amp; Run Code Tabs"
					lang="javascript"
					:max-height="codeBlockOptions.preHeight"
					:show-run-tab="true"
					:theme="selectedTheme"
					@run="runBothJsExample"
				></CodeBlock>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';

const codeBlockOptions = inject('codeBlockOptions');
const selectedTheme = inject('selectedTheme');

const bothExample = `const foo = 'bar';

alert(foo);`;
const copyExample = `const foo = 'bar';`;
const runExample = `const helloWorld = 'hello world';

alert(helloWorld);`;

function runJsExample() {
	const helloWorld = 'hello world';
	alert(helloWorld);
}

function runBothJsExample() {
	const foo = 'bar';
	alert(foo);
}


</script>
