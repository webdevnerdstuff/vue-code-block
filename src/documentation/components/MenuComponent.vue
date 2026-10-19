<template>
	<v-navigation-drawer
		v-model="drawer"
		:absolute="drawerOptions.absolute"
		class="main-nav-drawer "
		:color="drawerOptions.color"
		:elevation="drawerOptions.elevation"
	>
		<v-list
			:color="drawerOptions.color ? 'white' : 'primary'"
			density="compact"
		>
			<template v-for="item, k in menuItems">
				<v-list-group
					v-if="item.items"
					:key="k"
					:value="item.title"
				>
					<template v-slot:activator="{ props }">
						<v-list-item
							v-bind="props"
							:prepend-icon="item.icon"
							:title="item.title"
						></v-list-item>
					</template>

					<template v-for="subItem in item.items">
						<v-list-item
							v-if="subItem.href"
							:key="subItem.title"
							class="sub-items"
							:href="subItem.href"
							:prepend-icon="subItem.icon"
						>
							<div v-html="subItem.title"></div>
						</v-list-item>
					</template>
				</v-list-group>

				<v-list-item
					v-else
					:key="item.title"
					:class="{
						'v-list-item--active': active === item.href,
					}"
					:color="drawerOptions.color ? 'white' : 'primary'"
					:href="item.href"
					link
					:title="item.title"
				>

					<template v-slot:prepend>
						<v-icon :icon="item.icon"></v-icon>
					</template>
				</v-list-item>
			</template>
		</v-list>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';


const drawer = defineModel<boolean>();
const drawerOptions = inject<Docs.DrawerOptions>('drawerOptions')!;
const store = useMenuStore();
const active = ref('');
const menuItems: Docs.MenuItem[] = store.menuItems;

onMounted(() => {
	smoothScroll();

	active.value = window.location.hash || '#home';
});

function scrollToHash(hash: string): void {
	const id: string = hash.replace('#', '');
	const yOffset: number = -55;
	const element: HTMLElement | null = document.getElementById(id);

	if (element) {
		const y: number = element.getBoundingClientRect().top + window.scrollY + yOffset;

		active.value = hash;

		window.location.hash = hash;
		window.scrollTo({ behavior: 'smooth', top: y });
	}
}

function smoothScroll(): void {
	document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e: MouseEvent) => {
			e.preventDefault();

			const hash: string = anchor.hash;

			if (hash) {
				scrollToHash(hash);
			}
		});
	});

	window.addEventListener('load', () => {
		const hash = window.location.hash;
		if (hash) {
			scrollToHash(hash);
		}
	});
}
</script>

<style lang="scss">
.main-nav-drawer {
	// Navigation Drawer Rail //
	&.v-navigation-drawer--rail {
		&:not(.v-navigation-drawer--is-hovering) {
			--list-item-padding-left: 7px;
			--list-item-level-3-padding-left: 7px;
		}
	}

	// Navigation Drawer Regular //
	.v-navigation-drawer__content {
		.v-list {
			&-item {
				margin-bottom: 4px;
			}

			&-group--prepend {
				padding: 0 !important;
			}

			&-item__prepend {
				display: flex;
				justify-content: center;
				margin-right: 16px;
				text-align: center !important;
				width: 24px !important;

				> .v-icon {
					margin-inline-end: 0 !important;
				}

				// Level 1 - All Icons //
				svg {
					font-size: 1em;
					width: 1em;
				}
			}

			&-item__spacer {
				display: none;
			}

			// Level 2 //
			&-group__items {
				// Level 2 Dropdown //
				svg {
					font-size: 0.8em;
					width: 0.8em;
				}

				> .v-list {
					&-group {
						> .v-list-item {
							padding-left: var(--list-item-padding-left) !important;
							transition: padding 0.25s ease;
						}
					}

					// Level 3 - First child of dropdowns //
					&-item {
						padding-left: var(--list-item-padding-left) !important;
						transition: padding 0.25s ease;

						svg {
							font-size: 0.8em;
							width: 0.8em;
						}
					}
				}

				// Level 3 //
				.v-list-group__items {
					> .v-list-item {
						padding-left: var(--list-item-level-3-padding-left) !important;
						transition: padding 0.25s ease;

						// Level 3 icons //
						svg {
							font-size: 0.7em;
							width: 0.7em;
						}
					}
				}
			}
		}
	}

	.menu-arrow {
		transition: transform 0.3s;
	}

	.v-list-group--open {
		> .v-list-group__header {
			.menu-arrow {
				transform: rotate(-180deg);
			}
		}
	}

	.sub-items {
		font-size: .9em;
		padding-left: calc(var(--indent-padding) - 10px) !important;

		.v-icon {
			font-size: 1.3em !important;
			margin-right: 1em !important;
		}
	}
}
</style>
