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
				Vue 3 Code Block
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
		@changedLibrary="selectedLibrary = $event; emit('changedLibrary', $event)"
		@changedTheme="selectedTheme = $event; emit('changedTheme', $event)"
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
						:highlightjs="selectedLibrary.id === 'highlightjs'"
						lang="plain"
						:prismjs="selectedLibrary.id === 'prismjs'"
						:theme="selectedTheme"
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
						:highlightjs="selectedLibrary.id === 'highlightjs'"
						lang="plain"
						:prismjs="selectedLibrary.id === 'prismjs'"
						:theme="selectedTheme"
					>
						<template #label>Using npm:</template>
					</VCodeBlock>
				</v-col>
			</v-row>
		</v-col>
	</v-row>

	<!-- Description -->
	<DescriptionSection />

	<!-- Usage -->
	<UsageSection />

	<!-- Props -->
	<PropsSection />

	<!-- Events -->
	<EventsSection />

	<!-- Slots -->
	<SlotsSection />

	<!-- Example -->
	<ExampleSection />

	<!-- Playground -->
	<PlaygroundSection />

	<!-- Dependencies -->
	<DependenciesSection />

	<!-- License -->
	<LicenseSection />
</template>

<script setup>
import { useCoreStore } from '@/stores/index';
import ThemeSelectComponent from '@/documentation/components/ThemeSelectComponent.vue';
import packageInfo from '../../package.json';
import {
	DependenciesSection,
	DescriptionSection,
	EventsSection,
	ExampleSection,
	LicenseSection,
	PlaygroundSection,
	PropsSection,
	SlotsSection,
	UsageSection,
} from '@/documentation/sections';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';


const emit = defineEmits(['changedLibrary', 'changedTheme']);
const store = useCoreStore();
provide('links', store.links);

const selectedLibrary = ref(store.libraries[0]);
const selectedTheme = ref('neon-bunny');

provide('selectedLibrary', selectedLibrary);
provide('selectedTheme', selectedTheme);

const links = inject('links');

const classes = reactive({
	appLink: 'app-link text-decoration-none primary--text font-weight-medium d-inline-block font-weight-bold',
	h2: 'text-primary v-heading text-h4 text-sm-h4 mb-2',
	h3: 'text-blue-darken-2 v-heading text-h5 text-sm-h5 mb-0',
	headerA: 'text-decoration-none text-right text-md-left d-none d-sm-flex',
});
const componentVersion = ref(packageInfo.version);

provide('classes', classes);
</script>

<style lang="scss" scoped>
body {
	font-family: 'Open Sans', sans-serif;
}

h1,
h2,
h5 {
	font-family: 'Encode Sans Expanded', sans-serif !important;
}

h1 {
	font-size: 3rem;
	font-weight: 700;
}

h2 {
	border-bottom: 1px solid #ccc;
	font-size: 2rem;
	font-weight: 400;
	padding-bottom: 0.5rem;
}

h5 {
	font-weight: 600;
}

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
</style>

<style lang="scss">
.v-theme--light {
	pre,
	code {
		&.ic {
			background-color: rgb(0 0 0 / 10%) !important;
		}
	}
}
</style>
