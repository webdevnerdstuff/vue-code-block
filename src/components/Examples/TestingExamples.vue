<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5>Testing</h5>
			</div>
		</div>

		<!-- ======================= Copy Code Tab -->
		<div id="copy-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="phpExample"
					copy-button
					:highlightjs="selectedLibrary.id === 'highlightjs'"
					lang="php"
					:prismjs="selectedLibrary.id === 'prism'"
					:tabs="true"
					:theme="selectedTheme"
				>
					<!-- <template #copyButton>
						<div>click me and shit</div>
					</template> -->
				</CodeBlock>
			</div>
		</div>
	</div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { inject } from 'vue';
import neonBunnyHighlightTheme from '@/plugin/themes/highlight/css/neon-bunny.css?inline';

const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');


const cssExample = neonBunnyHighlightTheme;

const testingCode = `const foo = 'bar'`;

const htmlExample = `<!DOCTYPE html>
<html lang="en">

<head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-79JKH4L3SC"><\/script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());

		gtag('config', 'G-79JKH4L3SC');
	<\/script>


	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Vue 3 CodeBlock<\/title>

	<meta name="description"
		content="Vue 3 CodeBlock - Highlight your code with ease using this
		syntax highlighting component powered by ${selectedLibrary.label}." />
	<meta name="keywords"
		content="vue3-code-block, code, pre, highlight, syntax, vue, vue3,
		component, javascript, neon bunny, webdevnerdstuff, wdns" />
	<meta name="author" content="WebDevNerdStuff & Bunnies... lots and lots
	of bunnies!" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="theme-color" content="#f01d7f" />

	<meta property="og:locale" content="en_US">
	<meta property="og:type" content="website">
	<meta property="og:title" content="Vue 3 CodeBlock">
	<meta property="og:description"
		content="Vue 3 CodeBlock - Highlight your code with ease using this
		syntax highlighting component powered by ${selectedLibrary.label}.">
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

	<div id="foo" class="bar" data-id="foobar">
		<p>Foo Bar<\/p>
	<\/div>
<\/body>

<\/html>
`;


const jsExample2 = `
function renderCode(): void {
	convertCode();

	const foo = 'bar';
	const bar = foo;
	isLoading.value = false;

	if (!isPrismTheme && !isHighlightTheme) {
		removeStylesheets();

		themeStyles.appendChild(document.createTextNode(selectedTheme));
		head.appendChild(themeStyles);

		return;
	}

	if (props.lib === 'highlightjs') {
		return import('highlight.js/lib/core')
			.then((module) => {
				hljs = module.HighlightJS;

				hljs.registerLanguage('json', langJson);
				hljs.registerLanguage('php', langPhp);
				hljs.registerLanguage('javascript', langJavascript);
				hljs.registerLanguage('css', langCss);
				hljs.registerLanguage('html', langHtml);


				renderedCode.value = hljs.highlight(convertedCode.value, { language: props.lang }).value;
			})
			.catch((err) => {
				console.error('Highlight.js import:', { err });
			});
	}

	if (props.lib === 'prism') {
		return import('prismjs')
			.then((module) => {
				Prism = module;

				renderedCode.value = Prism.highlight(
					convertedCode.value,
					Prism.languages[props.lang],
					props.lang,
				);

			})
			.catch((err) => {
				console.error('PrismJS import:', { err });
			});
	}
}


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

`;


const jsonExample = `{
  "name": "John Doe",
  "age": 30,
  "isMarried": false,
  "hobbies": ["reading", "hiking", "coding"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }

}`;

const phpExample = `
<?php

namespace App\\Http\\Controllers;

use App\\Models\User;
use Inertia\\Inertia;
use Illuminate\\Http\\JsonResponse;
use App\\Http\\Controllers\\Controller;
use App\\Http\\Requests\\DestroyUserRequest;
use App\\Http\\Requests\\StoreUserRequest;
use App\\Http\\Requests\\UpdateUserRequest;
use App\\Http\\Resources\\UserResource;

class UserController extends Controller
{

	/**
	 * Users
	 *
	 * @return \\Inertia\\Response
	 */
	public function index()
	{
		$users = User::get();

		return Inertia::render('Users/Index', [
			'currentPage'   => 'Site Options',
			'users'          => $users,
		]);
	}


	/**
	 * Store User.
	 *
	 */
	public function store(StoreUserRequest $request): JsonResponse
	{
		$validated = $request->validated();

		$user = [
			'name'	=> $validated['name'],
			'email'	=> $validated['email'],
		];

		$user = User::create($user);

		$response = [
			'err'   => !$user,
			'msg'   => $user ? 'success' : 'error',
			'user'  => new UserResource($user),
		];

		return response()->json($response);
	}


	/**
	 * Update User
	 */
	public function update(UpdateUserRequest $request, User $userModel): JsonResponse
	{
		$validated  = $request->validated();
		$user       = $userModel->withTrashed()->find($validated['id']);

		$user->updated_by = auth()->id();

		if ($validated['deletedAt'] === 'activate')
		{
			$user->restore();
		}
		else
		{
			$user->name		= $validated['name'];
			$user->email	= $validated['email'];

			$user->update($validated);
		}

		$response = [
			'err'       => !$user,
			'msg'       => $user ? 'success' : 'error',
			'siteOption'   => new UserResource($user),
		];

		return response()->json($response);
	}


	/**
	 * Remove User
	 */
	public function destroy(DestroyUserRequest $request, User $userModel): JsonResponse
	{
		$validated	= $request->validated();
		$user 		= $userModel->findOrFail($validated['id']);

		$user->updated_by = auth()->id();

		$results = $user->delete();

		return response()->json([
			'err'			=> !$results,
			'status'		=> $results ? 'success' : 'error',
			'siteOption'	=> new UserResource($user),
		]);
	}
}
`;

// function handleCopyStatus(status) {
// 	console.log('handleCopyStatus', status);
// }
</script>

<style lang="scss">
</style>
