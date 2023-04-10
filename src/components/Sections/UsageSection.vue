<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Usage</h2>
		</div>

		<div class="col-12">
			<CodeBlock
				:code="componentCode"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="My Code"
				lang="html"
				:prismjs="selectedLibrary.id === 'prism'"
				:show-run="false"
				:theme="selectedTheme"
			/>
		</div>

		<div class="col-12">
			<CodeBlock
				:code="runCode"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Run My Code"
				lang="html"
				:prismjs="selectedLibrary.id === 'prism'"
				run-tab
				tabs
				:theme="selectedTheme"
				@run="runMyCode"
			/>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');
const styleData = inject('styleData');

const componentCode = `<template>
  <CodeBlock
    :code="myCode"
    label="My Code"
    lang="html"
  />
<\/template>

<script setup>
  const myCode = \`const foo = 'bar';

  console.log(foo)\`;
<\/script>`;

const runCode = `<template>
  <CodeBlock
    :code="runCode"
    label="Run My Code"
    lang="html"
    run-tab
    @run="runMyCode"
  />
<\/template>

<script setup>
  const myCode = \`const foo = 'bar';

  alert(foo)\`;
<\/script>`;

function runMyCode() {
	const foo = 'bar';

	alert(foo);
}
</script>
