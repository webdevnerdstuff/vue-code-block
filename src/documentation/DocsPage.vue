<template>
	<v-row class="text-center">
		<v-col cols="12">
			<v-img
				class="my-3"
				contain
				height="100"
				src="../assets/vue.svg"
			/>
		</v-col>

		<v-col class="mb-4">
			<h1 class="v-heading text-h3 text-sm-h3 mb-1">
				Vue 3 CodeBlock
			</h1>
			<p class="mb-4 text-grey-darken-1">by WebDevNerdStuff</p>
			<v-chip
				color="primary"
				size="small"
				variant="outlined"
			>
				v{{ componentVersion }}
			</v-chip>
		</v-col>
	</v-row>

	<ThemeSelectComponent
		@changedLibrary="codeBlockSettings.plugin = $event; emit('changedLibrary', $event)"
		@changedTheme="codeBlockSettings.theme = $event; emit('changedTheme', $event)"
	/>

	<!-- Installation -->
	<v-row id="installation">
		<v-col
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#installation"
				>#</a>
				Installation
			</h2>

			<v-row>
				<v-col cols="12">
					<VCodeBlock
						code="pnpm add @wdns/vue-code-block"
						:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
						lang="plain"
						:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
						<template #label>
							Using <a
								:href="links.pnpm"
								target="_blank"
							>pnpm</a>:
						</template>
					</VCodeBlock>
				</v-col>
				<v-col cols="12">
					<VCodeBlock
						code="npm i @wdns/vue-code-block"
						:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
						lang="plain"
						:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
						<template #label>Using npm:</template>
					</VCodeBlock>
				</v-col>
			</v-row>
		</v-col>
	</v-row>

	<!-- Description -->
	<Section.DescriptionSection />

	<!-- Usage -->
	<Section.UsageSection />

	<!-- Props -->
	<Section.PropsSection />

	<!-- Events -->
	<Section.EventsSection />

	<!-- Slots -->
	<Section.SlotsSection />

	<!-- Examples -->
	<Section.ExampleSection />

	<!-- Playground -->
	<Section.PlaygroundSection />

	<!-- Dependencies -->
	<Section.DependenciesSection />

	<!-- License -->
	<Section.LicenseSection />
</template>

<script setup lang="ts">
import packageInfo from '../../package.json';
import ThemeSelectComponent from '@/documentation/components/ThemeSelectComponent.vue';
import * as Section from '@/documentation/sections';
import { useCoreStore } from '@/stores/index';


import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';


const emit = defineEmits(['changedLibrary', 'changedTheme']);
const store = useCoreStore();
provide('links', store.links);


const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const links = inject<Docs.Links>('links')!;

const classes = reactive<Docs.GlobalClasses>({
	appLink: 'app-link text-decoration-none primary--text font-weight-medium d-inline-block font-weight-bold',
	h2: 'text-primary v-heading text-h4 text-sm-h4 mb-2',
	h3: 'text-blue-darken-2 v-heading text-h5 text-sm-h5 mb-0',
	h4: 'text-secondary v-heading text-h6 text-sm-h6 mb-0',
	headerA: 'text-decoration-none text-right text-md-left d-none d-sm-flex',
});
const componentVersion = ref<string | number>(packageInfo.version);

provide<Docs.GlobalClasses>('classes', classes);
</script>

<style lang="scss" scoped></style>
