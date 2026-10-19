<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<AppBar
			@changed-theme="updateCodeBlockTheme"
			@updated-drawer="toggleDrawer"
		/>

		<!-- ====================================================== Navigation Drawer -->
		<MenuComponent v-model="drawer" />

		<!-- ====================================================== Main Container -->
		<v-main class="pb-10">
			<v-container
				class="px-7"
				style="max-width: 1368px;"
			>
				<DocsPage
					@changedLibrary="updateCodeBlockLibrary"
					@changedTheme="codeBlockSettings.theme = $event"
				/>
			</v-container>
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
import Prism from 'prismjs';
import { useDisplay } from 'vuetify';
import MenuComponent from './documentation/components/MenuComponent.vue';
import DocsPage from './documentation/DocsPage.vue';
import AppBar from './documentation/layout/AppBar.vue';
import { useCoreStore } from './stores/index';
import 'prismjs/components/prism-typescript.js';


onMounted(() => {
	Prism.highlightAll();
});


const { smAndUp } = useDisplay();
const isSmAndUp = computed<boolean>(() => smAndUp.value);
const store = useCoreStore();
const drawer = ref(isSmAndUp.value);
const drawerOptions: Ref<Docs.DrawerOptions> = ref<Docs.DrawerOptions>({
	absolute: false,
	color: '',
	elevation: 10,
});

const codeBlockPlugin: Docs.Library = {
	id: 'prismjs',
	title: 'PrismJS',
};
const codeBlockLightTheme: string = 'neon-bunny';
const codeBlockDarkTheme: string = 'neon-bunny';

const codeBlockSettings: Ref<Docs.CodeBlockSettings> = ref<Docs.CodeBlockSettings>({
	plugin: codeBlockPlugin,
	preHeight: '30em',
	theme: codeBlockDarkTheme,
});

function updateCodeBlockTheme(val: string): void {
	codeBlockSettings.value.theme = codeBlockLightTheme;

	if (val === 'dark') {
		codeBlockSettings.value.theme = codeBlockDarkTheme;
	}
}

function updateCodeBlockLibrary(library: Docs.Library): void {
	codeBlockSettings.value.plugin = library;
}

provide<Docs.CodeBlockSettings>('codeBlockSettings', codeBlockSettings.value);
provide<Docs.DrawerOptions>('drawerOptions', drawerOptions.value);
provide<Docs.Links>('links', store.links);

function toggleDrawer() {
	drawer.value = !drawer.value;
}
</script>


<style lang="scss">
:root {
	--list-item-padding-left: 50px;
	--list-item-level-3-padding-left: 26px;
}

html {
	scroll-behavior: smooth;
	scroll-padding-top: 70px;
}

a {
	&:not(.v-list-item, .v-btn, .v-icon, .app-link) {
		color: #bb86fc;

		&:hover {
			color: #b39ddb;
		}
	}
}

.v-theme--light {
	a {
		&:not(.v-list-item, .v-btn, .v-icon, .app-link) {
			color: #6200ee;

			&:hover {
				color: #3700b3;
			}
		}
	}
}

.top-app-bar {
	z-index: 99 !important;

	.nav-drawer-btn {
		.nav-drawer-icon {
			height: 18px;
			width: 18px;
		}
	}
}

.v-heading {
	position: relative;

	> a {
		color: rgb(var(--v-theme-primary));
		display: inline-block;
		inset: 0;
		margin: 0 -0.7em;
		position: absolute;

		&:hover {
			color: rgb(var(--v-theme-primary));
		}

		&:not(:hover, :focus) {
			opacity: 0;
		}
	}

	&.text-secondary {
		> a {
			color: rgb(var(--v-theme-secondary));
		}
	}
}

.name-item:not(:hover, :focus) span {
	opacity: 0;
}

.v-divider {
	margin: 0;
}
</style>

<style lang="scss" scoped>
:deep(pre),
:deep(code) {
	&.ic {
		background-color: rgb(255 255 255 / 10%) !important;
		border-radius: 3px;
		font-size: 85%;
		font-weight: normal;
		padding: 0.2em 0.4em;
	}
}

.v-theme--light {
	:deep(pre),
	:deep(code) {
		&.ic {
			background-color: rgb(0 0 0 / 10%) !important;
		}
	}
}
</style>
