<template>
	<v-app-bar
		class="top-app-bar"
		color="#000"
		density="compact"
		fixed
	>
		<v-app-bar-nav-icon
			v-if="!isPlayground"
			class="nav-drawer-btn me-2 ms-3"
			:height="iconSize.height"
			:width="iconSize.width"
			@click.stop="toggleDrawer"
		>
			<v-icon icon="mdi:mdi-menu"></v-icon>
		</v-app-bar-nav-icon>
		<v-app-bar-nav-icon
			v-else
			class="nav-drawer-btn me-2 ms-3"
			:height="iconSize.height"
			:href="`/${store.packageName}/`"
			:width="iconSize.width"
		>
			<v-icon icon="mdi:mdi-home"></v-icon>
		</v-app-bar-nav-icon>

		<div class="site-title">Vue CodeBlock</div>

		<v-spacer></v-spacer>

		<v-select
			v-if="isPlayground"
			class="ma-0 pa-0 me-2 d-none d-sm-block"
			density="compact"
			hide-details
			:items="menuItems"
			multiple
			placeholder="Links"
			style="max-width: 200px; width: 200px;"
			title="name"
			variant="underlined"
		>
			<template #item="{ item }">
				<v-list-item
					:key="item.raw.key"
					density="compact"
					:href="item.raw.link"
					:prepend-icon="item.raw.icon ? item.raw.icon : '$vuetify'"
					target="_blank"
					:title="item.raw?.topTitle || item.title"
				>
				</v-list-item>
			</template>
		</v-select>

		<v-chip
			v-if="isSmAndUp"
			class="me-2 d-flex justify-center"
			:class="`badge-${codeBlockSettings.plugin.id}`"
			:href="codeBlockSettings.plugin.id === 'prismjs'
				? links.prismjs
				: links.highlightjs
				"
			size="small"
			style="min-width: 117px;"
			target="_blank"
		>
			{{ codeBlockSettings.plugin.title }} Active
		</v-chip>

		<v-btn
			class="me-2"
			:height="iconSize.height"
			:href="links.github"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<v-icon icon="mdi:mdi-github" />
		</v-btn>

		<v-btn
			class="me-2"
			:height="iconSize.height"
			:href="links.npm"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<v-icon icon="mdi:mdi-npm" />
		</v-btn>

		<v-btn
			class="me-3"
			:height="iconSize.height"
			icon
			:width="iconSize.width"
			@click="setTheme"
		>
			<v-icon
				v-if="themeName === 'dark'"
				icon="mdi:mdi-weather-night"
			/>
			<v-icon
				v-else
				icon="mdi:mdi-weather-sunny"
			/>
		</v-btn>
	</v-app-bar>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import { useCoreStore } from '@/stores/index';
import { useMenuStore } from '@/stores/menu';

const emit = defineEmits(['changedTheme', 'updatedDrawer']);

defineProps({
	isPlayground: {
		default: false,
		type: Boolean,
	},
});

onMounted(() => {
	getTheme();
});

const menuStore = useMenuStore();
const store = useCoreStore();
const theme = useTheme();
const { smAndUp } = useDisplay();

const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;

const links: Docs.Links = store.links;
const themeName = ref<string | null>('dark');
const drawer = ref<boolean>(true);
const isSmAndUp = computed(() => smAndUp.value);

const menuItems: Docs.MenuItem[] = [...menuStore.libraryItems] as Docs.MenuItem[];

const iconSize = ref<{ height: number, width: number; }>({
	height: 32,
	width: 32,
});

function getTheme(): void {
	themeName.value = store.getTheme() as string;

	if (!themeName.value) {
		setTheme();
		return;
	}

	theme.change(themeName.value as string);
	emit('changedTheme', themeName.value);
}

function setTheme(): void {
	themeName.value = store.setTheme(themeName.value as string);
	theme.change(themeName.value as string);
}

function toggleDrawer(): void {
	emit('updatedDrawer', drawer.value);
}
</script>

<style lang="scss">
.v-app-bar {
	&.v-toolbar {
		box-shadow: 2px 0 15px #7b7b7b !important;
		z-index: 1006 !important;
	}
}

.site-title {
	font-family: 'Encode Sans Expanded', sans-serif !important;
	font-weight: 700;
}

.v-list-item__prepend {
	.v-list-item__spacer {
		width: 32px;
	}
}

.badge {
	&-prismjs {
		background-color: rgb(var(--v-theme-prismjs)) !important;
		color: #000 !important;
	}

	&-highlightjs {
		background-color: rgb(var(--v-theme-highlightjs)) !important;
		color: #fff !important;
	}
}
</style>
