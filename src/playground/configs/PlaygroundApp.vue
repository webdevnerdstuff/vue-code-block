<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<AppBar
			is-playground
			:selectedLibrary="selectedLibrary"
		/>

		<!-- ====================================================== Main Container -->
		<v-main class="main-container pb-10">
			<v-responsive>
				<v-container class="px-10">
					<v-row>
						<v-col class="v-col-12 text-center">
							<h1>Vue Code Block</h1>
						</v-col>
						<v-col class="v-col-12 text-center">
							<v-chip color="primary">
								Playground v{{ store.pluginVersion }}
							</v-chip>
						</v-col>
					</v-row>

					<ThemeSelectComponent
						playground
						@changedLibrary="selectedLibrary = $event"
						@changedTheme="selectedTheme = $event"
					/>

					<v-row>
						<PlaygroundPage />
					</v-row>
				</v-container>
			</v-responsive>
		</v-main>
	</v-app>
</template>


<script setup>
import { useCoreStore } from '@/stores/index';
import PlaygroundPage from '@/playground/PlaygroundPage.vue';
import ThemeSelectComponent from '@/documentation/components/ThemeSelectComponent.vue';
import AppBar from '@/documentation/layout/AppBar.vue';

const store = useCoreStore();
provide('links', store.links);

const selectedLibrary = ref(store.libraries[0]);
const selectedTheme = ref('neon-bunny');

provide('selectedLibrary', selectedLibrary);
provide('selectedTheme', selectedTheme);
</script>


<style scoped>
</style>
