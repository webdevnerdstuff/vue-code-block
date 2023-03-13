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
import { inject } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';

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
namespace App\\Http\\Controllers\\API;

use App\\Http\\Controllers\\ApiController;
use App\\Http\\Controllers\\Menu\\MenuItemController;
use App\\Http\\Resources\\API\\Menu as MenuApiResource;
use App\\Http\\Resources\\API\\PlatformUser as PlatformUserResource;
use App\\Models\\Menu\\Menu;
use App\\Models\\Menu\\MenuItem;
use App\\Models\\Platform\\Platform;
use App\\Models\\User\\User;

class MenuController extends ApiController
{

	/**
	 * ------------------------------------------------------ GET Platform Menu
	 *
	 * @param string $platformName
	 * @param string $menuName
	 * @return \\Illuminate\Http\\Response
	 */
	public function getPlatformMenu(Int $platform, String $menuName = false): Response
	{
		$menu		= [];
		$platformId = (new Platform)->getPlatform($platform)->id;

		if (!$platformId)
		{
			return $this->errorResponse("Please provide a valid Platform Name or ID.", 400);
		}
		else
		{
			if (!$menuName)
			{
				return $this->errorResponse("Please provide a Menu name.", 400);
			}
			else
			{
				$menu = (new Menu)->getPlatformMenuByName($menuName, $platformId);

				if (!$menu)
				{
					return $this->errorResponse("Menu '$menuName' does not exist.", 404);
				}
				else
				{
					$menu = new MenuApiResource($menu);
				}
			}
		}

		return $this->successResponse(compact('menu'));
	}


	/**
	 * ------------------------------------------------------ GET Platform Menu Items
	 *
	 * @param string $platformName
	 * @param string $menuName
	 * @return \\Illuminate\\Http\\Response
	 *
	 */
	public function getPlatformMenuItems($platform, $menuName, $userId)
	{
		$menu		= [];
		$platformId = (new Platform)->getPlatform($platform)?->id;

		if (!$platformId)
		{
			return $this->errorResponse("Please provide a valid Platform Name or ID.", 400);
		}

		$menu = (new Menu)->getPlatformMenuByName($menuName, $platformId);

		if (!$menu->id)
		{
			return $this->errorResponse("Menu '$menuName' does not exist.", 404);
		}

		unset($menu->platform);

		$user = User::find($userId);

		if (!$user)
		{
			return $this->errorResponse("Please provide a valid User ID", 400);
		}

		$platform = (object) ['id' => $platformId];
		$user = (new PlatformUserResource($user, $platform))->resolve();

		$menuItemsArray = [];
		$menuItems = MenuItem::select('id', 'parent_menu_item_id', 'weight', 'name', 'link', 'target', 'icon_class')
			->with('menuItemRoles')
			->where('menu_id', $menu->id)
			->orderBy('parent_menu_item_id', 'ASC')
			->get()
			->toArray();

		foreach ($menuItems as $key => $item)
		{
			foreach ($item['menu_item_roles'] as $role)
			{
				if (in_array($role['slug'], $user['roles_slugs']))
				{
					array_push($menuItemsArray, $item);
					break;
				}
			}
		}

		$menu->menuItems  = (new MenuItemController)->buildMenuTree($menuItemsArray);
		return $this->successResponse(compact('menu'));
	}
}
`;

// function handleCopyStatus(status) {
// 	console.log('handleCopyStatus', status);
// }

</script>

<style>
/* svg {
	height: 14px;
	width: 14px;
} */
</style>
