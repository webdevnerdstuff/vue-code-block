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
					lang="php"
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

const selectedTheme = inject('selectedTheme');

const testingCode = `const foo = 'bar';

alert(foo)';`;

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

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\DestroyUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;

class UserController extends Controller
{

	/**
	 * Users
	 *
	 * @return \Inertia\Response
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
