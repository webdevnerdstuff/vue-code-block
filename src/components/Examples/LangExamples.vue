<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5>Languages</h5>
			</div>
		</div>

		<!-- ======================= Javascript Example -->
		<div id="lang-js-examples" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="jsExample2"
					label="JavaScript"
					lang="javascript"
					:max-height="codeBlockOptions.preHeight"
					:tabs="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>

		<!-- ======================= Vue Example -->
		<div id="lang-vue-examples" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="vueExample"
					label="Vue (using lang = html)"
					lang="html"
					:max-height="codeBlockOptions.preHeight"
					:tabs="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>

		<!-- ======================= CSS Example -->
		<div id="lang-css-examples" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="cssExample"
					label="CSS"
					lang="css"
					:max-height="codeBlockOptions.preHeight"
					:tabs="false"
					:theme="selectedTheme"
				></CodeBlock>
			</div>
		</div>

		<!-- ======================= HTML Example -->
		<div id="lang-html-examples" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="htmlExample"
					label="HTML"
					lang="html"
					:max-height="codeBlockOptions.preHeight"
					:tabs="false"
					:theme="selectedTheme"
				></CodeBlock>
			</div>
		</div>

		<!-- ======================= SVG Example -->
		<div id="lang-svg-examples" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="svgExample"
					label="SVG"
					lang="svg"
					:tabs="false"
					:theme="selectedTheme"
				></CodeBlock>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';
import neonBunnyTheme from '@/plugin/theme/neon-bunny.css?inline';

const codeBlockOptions = inject('codeBlockOptions');
const selectedTheme = inject('selectedTheme');

const jsExample = `const foo = 'bar';

function bar() {
	return foo;
}

const fooObj = {
	foo,
};
`;

const vueExample = `<template>
  <div>
    <h1>{{ greeting }}<\/h1>
  </div>
<\/template>

<script setup>
import { ref } from 'vue';

const greeting = ref('Hello, World!');
<\/script>`;

const jsExample2 = `// Example 1: Creating an array of numbers and finding the sum
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
`;

const cssExample = neonBunnyTheme;

const htmlExample = `<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Google tag (gtag.js) -->

	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Vue 3 CodeBlock<\/title>

	<meta name="description"
		content="TBD" />
	<meta name="keywords"
		content="vue3-code-block, code, pre, highlight, syntax, vue, vue3, component, javascript, neon bunny, webdevnerdstuff, wdns" />
	<meta name="author" content="WebDevNerdStuff & Bunnies... lots and lots of bunnies!" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="theme-color" content="#f01d7f" />

	<meta property="og:locale" content="en_US">
	<meta property="og:type" content="website">
	<meta property="og:title" content="Vue 3 CodeBlock">
	<meta property="og:description"
		content="TBD">
	<meta property="og:url" content="https://webdevnerdstuff.github.io/vue3-code-block/">
	<meta property="og:image" content="https://webdevnerdstuff.github.io/vue3-code-block/vue3-code-block-social.jpg">
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Henny+Penny&family=Indie+Flower&display=swap" rel="stylesheet">

	<link rel="icon" type="image/svg+xml" href="/vue.svg" />
<\/head>

<body>
	<div id="app"><\/div>
	<script type="module" src="/src/main.ts"><\/script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"><\/script>
<\/body>

<\/html>
`;

const svgExample = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198">
  <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
  <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
  <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
</svg>`;

</script>
