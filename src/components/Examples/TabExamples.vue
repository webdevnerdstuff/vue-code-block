<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5>Tabs</h5>
			</div>
		</div>

		<!-- ======================= Copy Code Tab -->
		<div id="tab-copy-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="copyExample"
					copy-tab
					label="Copy Code Tab"
					lang="html"
					:run-tab="false"
					tabs
					:theme="selectedTheme"
				/>
			</div>
		</div>

		<!-- ======================= Run Code Tab -->
		<div id="tab-run-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="runExample"
					:copy-tab="false"
					label="Run Code Tab"
					lang="html"
					:max-height="codeBlockOptions.preHeight"
					run-tab
					tabs
					:theme="selectedTheme"
					@run="runMyCodeFunction"
				/>
			</div>
		</div>

		<!-- ======================= Both Tabs -->
		<div id="tab-both-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="bothExample"
					label="Copy &amp; Run Code Tabs"
					lang="html"
					:max-height="codeBlockOptions.preHeight"
					:run-tab="true"
					tabs
					:theme="selectedTheme"
					@run="runMyOtherCodeFunction"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';

const codeBlockOptions = inject('codeBlockOptions');
const selectedTheme = inject('selectedTheme');

const copyExample = `<CodeBlock
  :code="myCode"
  copy-tab
  label="Copy Code Tab"
  lang="javascript"
  :run-tab="false"
  tabs
/>`;
const runExample = `<template>
  <CodeBlock
    :code="myCode"
    :copy-tab="false"
    label="Run Code Tab"
    lang="javascript"
    run-tab
    tabs
    @run="runMyCodeFunction"
  />
<\/template>

<script setup>
  function runMyCodeFunction() {
    const message = 'Run Code Tab';
    alert(message);
  }
<\/script>`;
const bothExample = `<template>
  <CodeBlock
    :code="myCode"
    label="Copy &amp; Run Code Tabs"
    lang="javascript"
    :run-tab="true"
    tabs
    @run="runMyOtherCodeFunction"
  />
<\/template>

<script setup>
  function runMyCodeFunction() {
    const message = 'bar';
    alert(message);
  }
<\/script>`;

function runMyCodeFunction() {
	const message = 'Run Code Tab';
	alert(message);
}

function runMyOtherCodeFunction() {
	const message = 'Copy & Run Code Tabs';
	alert(message);
}


</script>
