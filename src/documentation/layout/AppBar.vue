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

		<div class="site-title">Vue Code Block</div>

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
					:key="item.key"
					density="compact"
					:href="item.raw.link"
					target="_blank"
					:title="item.raw?.topTitle || item.title"
				>
					<template #prepend>
						<v-icon
							v-if="!item.raw.src"
							:icon="item.raw.icon"
						/>
						<v-img
							v-else
							:src="item.raw.src"
							width="24"
						/>
					</template>
				</v-list-item>
			</template>
		</v-select>

		<v-chip
			class="me-2 d-flex justify-center"
			:class="`badge-${selectedLibrary.id}`"
			:href="selectedLibrary.id === 'prismjs'
				? links.prismjs
				: links.highlightjs
				"
			size="small"
			style="min-width: 117px"
			target="_blank"
		>
			{{ selectedLibrary.title }} Active
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

<script setup>
import { onMounted, ref } from 'vue';
import { useCoreStore } from '@/stores/index';
import { useMenuStore } from '@/stores/menu';
import { useTheme } from 'vuetify';

const emit = defineEmits(['changedTheme', 'updatedDrawer']);

const props = defineProps({
	isPlayground: {
		default: false,
		type: Boolean,
	},
	selectedLibrary: {
		required: true,
		type: Object,
	},
});

const { selectedLibrary } = toRefs(props);


onMounted(() => {
	getTheme();
});

const menuStore = useMenuStore();
const store = useCoreStore();
const theme = useTheme();


const links = store.links;
const themeName = ref('dark');
const drawer = ref(true);

const menuItems = [...menuStore.libraryItems];

const iconSize = ref({
	height: 32,
	width: 32,
});

function getTheme() {
	themeName.value = store.getTheme();
	if (!themeName.value) {
		setTheme();
		return false;
	}

	theme.global.name.value = themeName.value;
	emit('changedTheme', themeName.value);
}

function setTheme() {
	themeName.value = store.setTheme(themeName.value);
	theme.global.name.value = themeName.value;
}

function toggleDrawer() {
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
