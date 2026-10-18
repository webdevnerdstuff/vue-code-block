<template>
	<VCodeBlock
		:code="code"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="javascript"
		:max-height="codeBlockSettings.preHeight"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const code = `// Example 1: Creating an array of numbers and finding the sum
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num);
console.log(sum); // Output: 15

// Example 2: Converting a string to uppercase
const greeting = 'hello world';
const uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting); // Output: HELLO WORLD

// Example 3: Generating a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber); // Output: A random number between 1 and 10

// Example 4: Checking if a number is even or odd
const num = 4;
if (num % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
} // Output: Even

// Example 5: Fetching data from an API
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
// Output: The JSON data for the TODO with ID 1 from the API`;

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: 'Highlight JavaScript using <code class="ic">lang="javascript"</code>.',
	name: 'JavaScript',
	script: buildScriptCode({
		code,
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="javascript"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
