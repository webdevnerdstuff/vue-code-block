<template>
	<div>
		<div class="row mb-2">
			<div class="col-12">
				<h5>Additional Languages</h5>
			</div>
		</div>

		<div id="additional-languages-json-usage-example" class="row mb-4">
			<div class="col-12">
				<p>
					PrismJS does not load all languages by default. In order to use
					additional languages you will need to import that languages component.
				</p>
			</div>
		</div>

		<!-- ======================= Typescript Example -->
		<div id="additional-languages-ts-usage-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="typescriptUsageExample"
					label="Example of using PrismJS to highlight TypeScript"
					lang="html"
					:lib="selectedLibrary"
					:tabs="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>

		<div id="additional-languages-ts-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="typescriptExample"
					label="TypeScript"
					lang="typescript"
					:lib="selectedLibrary"
					:tabs="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>

		<div id="additional-languages-json-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="jsonUsageExample"
					label="Example of using PrismJS to highlight JSON"
					lang="html"
					:lib="selectedLibrary"
					:tabs="false"
					:theme="selectedTheme"
				/>
			</div>
			<div class="col-12">
				<CodeBlock
					:code="jsonExample"
					:indent="2"
					label="JSON"
					lang="json"
					:lib="selectedLibrary"
					:tabs="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>

		<!-- ======================= PHP Example -->
		<div id="additional-languages-php-usage-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="phpUsageExample"
					label="Example of using PrismJS to highlight PHP"
					lang="html"
					:lib="selectedLibrary"
					:tabs="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>

		<div id="additional-languages-php-example" class="row mb-4">
			<div class="col-12">
				<CodeBlock
					:code="phpExample"
					height="500px"
					:indent="2"
					label="PHP"
					lang="php"
					:lib="selectedLibrary"
					:tabs="false"
					:theme="selectedTheme"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');

const typescriptUsageExample = `<template>
  <CodeBlock
    :code="myCode"
    lang="typescript"
    :tabs="false"
  /\>
<\/template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-typescript';
<\/script>`;
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

const jsonUsageExample = `<template>
  <CodeBlock
    :code="myCode"
    :indent="2"
    lang="json"
    :tabs="false"
  /\>
<\/template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-json';
<\/script>`;
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
const phpUsageExample = `<template>
  <CodeBlock
    :code="myCode"
    lang="php"
    :tabs="false"
  /\>
<\/template>

<script setup>
  import Prism from 'prismjs';
  import 'prismjs/components/prism-markup-templating';
  import 'prismjs/components/prism-php';
<\/script>`;
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
