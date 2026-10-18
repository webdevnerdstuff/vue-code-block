<template>
	<VCodeBlock
		:code="code"
		:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
		lang="php"
		:max-height="codeBlockSettings.preHeight"
		:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
		:theme="codeBlockSettings.theme"
	/>
</template>

<script setup lang="ts">
import { buildScriptCode, buildTemplateCode } from './helpers';

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const code = `<?php

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

const exampleCode = computed<Docs.ExampleCode>(() => ({
	desc: codeBlockSettings.plugin.id === 'prismjs' ?
		'PrismJS does not load all languages by default. To highlight PHP, import <code class="ic">prismjs/components/prism-markup-templating</code> and <code class="ic">prismjs/components/prism-php</code>.' :
		'Highlight.js languages are all loaded by the component, so PHP works without any extra imports.',
	name: 'PHP',
	script: buildScriptCode({
		code,
		imports: codeBlockSettings.plugin.id === 'prismjs' ? ["import 'prismjs/components/prism-markup-templating';", "import 'prismjs/components/prism-php';"] : undefined,
	}),
	template: buildTemplateCode({
		attrs: [
			':code="code"',
			'lang="php"',
		],
		library: codeBlockSettings.plugin.id,
	}),
}));

defineExpose({ exampleCode });
</script>
