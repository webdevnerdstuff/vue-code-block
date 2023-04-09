<template>
	<div class="container mb-5">
		<div class="row mb-4">
			<div class="col-12 text-center">
				<img alt="Vue" class="vue-logo" src="../assets/vue.svg" />
			</div>
		</div>
		<div class="row mb-3">
			<div class="col-12 text-center">
				<h1>Vue 3 CodeBlock</h1>
			</div>
			<div class="col-12 text-center">
				<span class="badge bg-secondary rounded-pill">{{ version }}</span>
			</div>
		</div>
	</div>

	<div class="container mb-5">
		<div class="row">
			<div class="col-12">
				<p>
					The Vue 3 CodeBlock component leverages the power of
					<a :href="prismLinks.homepage" target="_blank">PrismJS</a>
					or
					<a :href="highlightJsLinks.homepage" target="_blank">Highlight.js</a>
					to provide syntax highlighting for code blocks within your
					application. The component takes a prop, which is the code to be
					highlighted, and uses PrismJS or Highlight.js to render the code with
					syntax highlighting. The component supports a variety of programming
					languages and can be customized with different themes to match your
					application's design. With this component, your users can display
					their code snippets with ease and clarity, making it easier to share
					and collaborate on code within your application.
				</p>
			</div>
		</div>
		<hr />
		<div class="row">
			<div class="col-12 mb-3">
				<h5>Switch between PrismJS and Highlight.js</h5>

				<small
					class="d-inline-flex align-items-center px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2"
				>
					<fa-icon class="text-success me-1" icon="fa-solid fa-circle-info" />
					This will also update the examples and documentation below.
				</small>
			</div>
			<div class="col-12 col-md-3 mb-3">
				<select
					aria-label="Library Selection"
					class="form-select"
					@change="changeLibrary($event.target.value)"
				>
					<option
						v-for="lib in libraries"
						:key="lib"
						:selected="library === lib.id"
						:value="lib.id"
					>
						{{ lib.label }}
					</option>
				</select>
			</div>
		</div>
		<div class="row">
			<div class="col-12 col-md-3">
				<label class="form-label" for="theme-selection-select"
					>Select Theme:</label
				>

				<select
					id="theme-selection-select"
					aria-label="Theme Selection"
					class="form-select"
					@change="changeTheme($event.target.value)"
				>
					<option
						v-for="theme in selectOptions"
						:key="theme"
						:selected="selectedTheme === theme.value"
						:value="theme.value"
					>
						{{ theme.label }}
					</option>
				</select>
			</div>
		</div>
	</div>

	<div class="container">
		<!-- ============================================== Installation -->
		<InstallationSection id="ul-installation" />

		<!-- ============================================== Register -->
		<RegisterSection id="ul-register-plugin" />

		<!-- ============================================== Usage -->
		<UsageSection id="ul-usage" />

		<!-- ============================================== Props -->
		<PropsSection id="ul-props" />

		<!-- ============================================== Props -->
		<ThemesSection id="ul-themes" />

		<!-- ============================================== Events -->
		<EventsSection id="ul-events" />

		<!-- ============================================== Slots -->
		<SlotsSection id="ul-slots" />

		<!-- ============================================== Examples -->
		<ExamplesSection id="ul-examples" />

		<!-- ============================================== CSS Variables -->
		<CssVariablesSection id="ul-css-vars" />

		<!-- ============================================== Dependencies -->
		<DependenciesSection id="ul-dependencies" />

		<!-- ============================================== Change Log -->
		<ChangeLogSection id="ul-change-log" />

		<!-- ============================================== License -->
		<LicenseSection id="ul-license" />
	</div>
</template>

<script setup lang='ts'>
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	inject,
	onMounted,
	provide,
	reactive,
	ref,
} from 'vue';
import { useCoreStore } from '@/stores/index';
import { version } from '../../package';
import {
	ChangeLogSection,
	CssVariablesSection,
	DependenciesSection,
	EventsSection,
	ExamplesSection,
	InstallationSection,
	LicenseSection,
	PropsSection,
	RegisterSection,
	SlotsSection,
	ThemesSection,
	UsageSection,
} from '@/components/Sections/';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';


const highlightJsLinks = inject('highlightJsLinks');
const prismLinks = inject('prismLinks');

const store = useCoreStore();
const library = ref('prism');
const libraries = store.libraries;

const highlightThemes = store.highlightThemes;
const neonBunnyThemes = store.neonBunnyThemes;
const prismThemes = store.prismThemes;
const selectOptions = ref(null);
const selectedLibrary = ref(libraries.prism);
const selectedTheme = ref('neon-bunny');


onMounted(() => {
	library.value = store.getLocalStorage() ?? store.setLocalStorage();
	changeLibrary(library.value);
});

const emit = defineEmits(['changedLibrary']);

selectOptions.value = [...neonBunnyThemes, ...prismThemes];

provide('selectedTheme', selectedTheme);
provide('selectedLibrary', selectedLibrary);

if (library.value === 'highlightjs') {
	selectOptions.value = [...neonBunnyThemes, ...highlightThemes];
	selectedLibrary.value = libraries.highlightjs;
}

function changeLibrary(val) {
	library.value = val;
	selectedLibrary.value = libraries[val];
	selectedTheme.value = 'neon-bunny';

	store.setLocalStorage(library.value);
	emit('changedLibrary', selectedLibrary);

	if (val === 'prism') {
		selectOptions.value = [...neonBunnyThemes, ...prismThemes];
		return;
	}

	selectOptions.value = [...neonBunnyThemes, ...highlightThemes];
}

function changeTheme(val) {
	selectedTheme.value = val;
}
</script>


<style lang="scss">
:root {
	--v-cb-label-font: 'Encode Sans Expanded', sans-serif !important;
}

html {
	scroll-padding-top: 70px;
}

body {
	font-family: 'Open Sans', sans-serif;
}

h1,
h2,
h5 {
	font-family: var(--v-cb-label-font);
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

.vue-logo {
	width: 80px;
}

.table-responsive {
	box-shadow: 0 3px 1px -2px hsl(0 0% 0% / 20%), -0 2px 2px 0 hsl(0 0% 0% / 14%),
		0 1px 5px 0 hsl(0 0% 0% / 12%);

	.table {
		margin-bottom: 0;
	}
}

.boolean-style {
	color: hsl(240 100% 50%) !important;
	font-weight: 500;
}

[data-bs-theme='dark'] {
	.boolean-style {
		color: var(--bs-primary) !important;
		font-weight: 500;
	}
}
</style>
