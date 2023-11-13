<template>
	<v-row id="examples-additional-languages">
		<v-col cols="12">
			<h3 class="text-secondary">Additional Languages</h3>
		</v-col>
	</v-row>

	<v-row>
		<v-col
			v-if="selectedLibrary.id === 'highlightjs'"
			cols="12"
		>
			{{ selectedLibrary.title }} does not load all languages by default, but this component does. It was the best
			solution I could come up with as importing additional languages the Highlight.js way, was not working as I had
			hoped/intended.
		</v-col>
		<v-col
			v-else
			cols="12"
		>
			{{ selectedLibrary.title }} does not load all languages by default. In
			order to use additional languages you will need to import that
			languages component.
		</v-col>
	</v-row>

	<!-- ======================= Typescript Example -->
	<v-row>
		<v-col
			id="additional-languages-ts-usage-example"
			cols="12"
		>
			<VCodeBlock
				:code="usageExamples[selectedLibrary.id].typescript"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				:label="`Example of using ${selectedLibrary.title} to highlight TypeScript`"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:tabs="false"
				:theme="selectedTheme"
			/>
		</v-col>

		<v-col
			id="additional-languages-ts-example"
			cols="12"
		>
			<VCodeBlock
				:code="typescriptExample"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="TypeScript"
				lang="typescript"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:tabs="false"
				:theme="selectedTheme"
			/>
		</v-col>
	</v-row>

	<!-- ======================= JSON Example -->
	<v-row>
		<v-col
			id="additional-languages-json-usage-example"
			cols="12"
		>
			<VCodeBlock
				:code="usageExamples[selectedLibrary.id].json"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				:label="`Example of using ${selectedLibrary.label} to highlight JSON`"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:tabs="false"
				:theme="selectedTheme"
			/>
		</v-col>

		<v-col
			id="additional-languages-json-example"
			cols="12"
		>
			<VCodeBlock
				:code="jsonExample"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="JSON"
				lang="json"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:tabs="false"
				:theme="selectedTheme"
			/>
			<!-- <VCodeBlock
				:code="jsonExample"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				:indent="2"
				label="JSON"
				lang="json"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:tabs="false"
				:theme="selectedTheme"
			/> -->
		</v-col>
	</v-row>

	<!-- ======================= PHP Example -->
	<v-row>
		<v-col
			id="additional-languages-php-usage-example"
			cols="12"
		>
			<VCodeBlock
				:code="usageExamples[selectedLibrary.id].php"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				:label="`Example of using ${selectedLibrary.label} to highlight PHP`"
				lang="html"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:tabs="false"
				:theme="selectedTheme"
			/>
		</v-col>

		<v-col
			id="additional-languages-php-example"
			cols="12"
		>
			<VCodeBlock
				:code="phpExample"
				height="500px"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				:indent="2"
				label="PHP"
				lang="php"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:tabs="false"
				:theme="selectedTheme"
			/>
		</v-col>
	</v-row>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import Prism from 'prismjs';
import hljs from 'highlight.js/lib/core';
import langJson from 'highlight.js/lib/languages/json';
import langPhp from 'highlight.js/lib/languages/php';
import langTypescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('json', langJson);
hljs.registerLanguage('php', langPhp);
hljs.registerLanguage('typescript', langTypescript);

const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

const usageExamples = {
	prismjs: {
		json: `<template>
  <CodeBlock
    :code="myCode"
    :indent="2"
    lang="json"
    prismjs
    :tabs="false"
  /\>
<\/template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-json';
<\/script>`,
		typescript: `<template>
  <CodeBlock
    :code="myCode"
    lang="typescript"
    prismjs
    :tabs="false"
  /\>
<\/template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-typescript';
<\/script>`,
		php: `<template>
  <CodeBlock
    :code="myCode"
    lang="php"
    prismjs
    :tabs="false"
  /\>
<\/template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-markup-templating';
  import 'prismjs/components/prism-php';
<\/script>`,
	},
	highlightjs: {
		json: `<template>
  <CodeBlock
    :code="myCode"
    highlightjs
    :indent="2"
    lang="json"
    :tabs="false"
  /\>
<\/template>

<script setup>
  import hljs from 'highlight.js/lib/core';
  import langJson from 'highlight.js/lib/languages/json';

  hljs.registerLanguage('json', langJson);
<\/script>`,
		typescript: `<template>
  <CodeBlock
    :code="myCode"
    highlightjs
    lang="typescript"
    :tabs="false"
  /\>
<\/template>

<script setup>
  import hljs from 'highlight.js/lib/core';
  import langTypescript from 'highlight.js/lib/languages/typescript';

  hljs.registerLanguage('typescript', langTypescript);
<\/script>`,
		php: `<template>
  <CodeBlock
    :code="myCode"
    highlightjs
    lang="php"
    :tabs="false"
  /\>
<\/template>

<script setup>
  import hljs from 'highlight.js/lib/core';
  import langPhp from 'highlight.js/lib/languages/php';

  hljs.registerLanguage('php', langPhp);
<\/script>`,
	},
};

const typescriptExample = `class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHello() {
    console.log(\`Hello, my name is \${this.name} and I'm \${this.age} years old.\`);
  }
}

const person = new Person("John Doe", 30);
person.sayHello();`;
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
}
`;
const phpExample = `<?php

namespace App\\Http\\Controllers;

use App\\Models\\User;
use Inertia\\Inertia;
use Illuminate\\Http\\JsonResponse;
use App\\Http\Controllers\\Controller;
use App\\Http\Requests\\DestroyUserRequest;
use App\\Http\Requests\\StoreUserRequest;
use App\\Http\Requests\\UpdateUserRequest;
use App\\Http\Resources\\UserResource;

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
			'currentPage'	=> 'Site Options',
			'users'			=> $users,
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
			'err'			=> !$user,
			'msg'			=> $user ? 'success' : 'error',
			'siteOption'	=> new UserResource($user),
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
?>`;
</script>
