<template>
	<v-row id="examples-tabs">
		<v-col cols="12">
			<h3 class="text-secondary">Tabs</h3>
		</v-col>
	</v-row>

	<!-- ======================= Copy Code Tab -->
	<v-row id="tab-copy-example">
		<v-col cols="12">
			<VCodeBlock
				:code="examples[selectedLibrary.id].copy"
				copy-tab
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Copy Code Tab"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:run-tab="false"
				tabs
				:theme="selectedTheme"
			/>
		</v-col>
	</v-row>

	<!-- ======================= Run Code Tab -->
	<v-row id="tab-run-example">
		<v-col cols="12">
			<VCodeBlock
				:code="examples[selectedLibrary.id].run"
				:copy-tab="false"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Run Code Tab"
				lang="html"
				:max-height="codeBlockOptions.preHeight"
				:prismjs="selectedLibrary.id === 'prismjs'"
				run-tab
				tabs
				:theme="selectedTheme"
				@run="runMyCodeFunction"
			/>
		</v-col>
	</v-row>

	<!-- ======================= Both Tabs -->
	<v-row id="tab-both-example">
		<v-col cols="12">
			<VCodeBlock
				:code="examples[selectedLibrary.id].both"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Copy &amp; Run Code Tabs"
				lang="html"
				:max-height="codeBlockOptions.preHeight"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:run-tab="true"
				tabs
				:theme="selectedTheme"
				@run="runMyOtherCodeFunction"
			/>
		</v-col>
	</v-row>


	<!-- <div> -->
	<!-- ======================= Copy Code Tab -->
	<!-- <div
			id="tab-copy-example"
			class="row mb-4"
		>
			<div class="col-12">
				<VCodeBlock
					:code="examples[selectedLibrary.id].copy"
					copy-tab
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					label="Copy Code Tab"
					lang="html"
					:prismjs="selectedLibrary.id === 'prismjs'"
					:run-tab="false"
					tabs
					:theme="selectedTheme"
				/>
			</div>
		</div> -->

	<!-- ======================= Run Code Tab -->
	<!-- <div
			id="tab-run-example"
			class="row mb-4"
		>
			<div class="col-12">
				<VCodeBlock
					:code="examples[selectedLibrary.id].run"
					:copy-tab="false"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					label="Run Code Tab"
					lang="html"
					:max-height="codeBlockOptions.preHeight"
					:prismjs="selectedLibrary.id === 'prismjs'"
					run-tab
					tabs
					:theme="selectedTheme"
					@run="runMyCodeFunction"
				/>
			</div>
		</div> -->

	<!-- ======================= Both Tabs -->
	<!-- <div
			id="tab-both-example"
			class="row mb-4"
		>
			<div class="col-12">
				<VCodeBlock
					:code="examples[selectedLibrary.id].both"
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					label="Copy &amp; Run Code Tabs"
					lang="html"
					:max-height="codeBlockOptions.preHeight"
					:prismjs="selectedLibrary.id === 'prismjs'"
					:run-tab="true"
					tabs
					:theme="selectedTheme"
					@run="runMyOtherCodeFunction"
				/>
			</div>
		</div> -->
	<!-- </div> -->
</template>

<script setup>
import { inject } from 'vue';

const codeBlockOptions = inject('codeBlockOptions');
const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

const examples = {
	prismjs: {
		copy: `<VCodeBlock
  :code="myCode"
  copy-tab
  label="Copy Code Tab"
  lang="javascript"
  prismjs
  :run-tab="false"
  tabs
/>`,
		run: `<template>
  <VCodeBlock
    :code="myCode"
    :copy-tab="false"
    label="Run Code Tab"
    lang="javascript"
    prismjs
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
<\/script>`,
		both: `<template>
  <VCodeBlock
    :code="myCode"
    label="Copy &amp; Run Code Tabs"
    lang="javascript"
    prismjs
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
<\/script>`,
	},
	highlightjs: {
		copy: `<VCodeBlock
  :code="myCode"
  copy-tab
  highlightjs
  label="Copy Code Tab"
  lang="javascript"
  :run-tab="false"
  tabs
/>`,
		run: `<template>
  <VCodeBlock
    :code="myCode"
    :copy-tab="false"
    highlightjs
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
<\/script>`,
		both: `<template>
  <VCodeBlock
    :code="myCode"
    highlightjs
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
<\/script>`,
	}
};

function runMyCodeFunction() {
	const message = 'Run Code Tab';
	alert(message);
}

function runMyOtherCodeFunction() {
	const message = 'Copy & Run Code Tabs';
	alert(message);
}
</script>
