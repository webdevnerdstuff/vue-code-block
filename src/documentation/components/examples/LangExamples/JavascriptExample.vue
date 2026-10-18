<template>
	foo
	<VCodeBlock
		:code="scriptCode"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		label="JavaScript"
		lang="javascript"
		:max-height="codeBlockSettings.preHeight"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const templateCode = `<template>
  <VCodeBlock
    :code="scriptCode"
    :highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
    label="JavaScript"
    lang="javascript"
    :max-height="codeBlockSettings.preHeight"
    :prismjs="codeBlockSettings.plugin.id === 'prismjs'"
    :theme="codeBlockSettings.theme"
  />
</template>
`;

const scriptCode = `\<script setup\>
import { ref } from 'vue';


// Example 1: Creating an array of numbers and finding the sum
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
// Output: The JSON data for the TODO with ID 1 from the API
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'A simple example of the <code class="ic">VStepperForm</code> component.',
		name: 'Simple Form',
		script: scriptCode,
		template: templateCode,
	},
});
</script>


<style lang="scss" scoped></style>
