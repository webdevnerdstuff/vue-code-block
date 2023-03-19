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
					<a :href="links.prism" target="_blank">PrismJS</a> to provide syntax
					highlighting for code blocks within your application. The component
					takes a prop, which is the code to be highlighted, and uses PrismJS to
					render the code with syntax highlighting. The component supports a
					variety of programming languages and can be customized with different
					themes to match your application's design. With this component, your
					users can display their code snippets with ease and clarity, making it
					easier to share and collaborate on code within your application.
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-12 col-md-3">
				<label class="form-label" for="theme-selection-select">
					Switch Library:
				</label>

				<select
					id="library-selection-select"
					aria-label="Library Selection"
					class="form-select"
					@change="changeLibrary($event.target.value)"
				>
					<option
						v-for="lib in libraries"
						:key="lib"
						:selected="selectedLibrary === lib.value"
						:value="lib.value"
					>
						{{ lib.label }}
					</option>
				</select>
			</div>
			<div class="col-12 col-md-3">
				<label class="form-label" for="theme-selection-select">
					Switch Theme:
				</label>

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

	<div v-if="!demoTestPage" class="container">
		<!-- ============================================== Installation -->
		<!-- <InstallationSection id="ul-installation" /> -->

		<!-- ============================================== Register -->
		<!-- <RegisterSection id="ul-register-plugin" /> -->

		<!-- ============================================== Usage -->
		<!-- <UsageSection id="ul-usage" /> -->

		<!-- ============================================== Props -->
		<!-- <PropsSection id="ul-props" /> -->

		<!-- ============================================== Props -->
		<!-- <ThemesSection id="ul-themes" /> -->

		<!-- ============================================== Events -->
		<!-- <EventsSection id="ul-events" /> -->

		<!-- ============================================== Slots -->
		<!-- <SlotsSection id="ul-slots" /> -->

		<!-- ============================================== Examples -->
		<!-- <ExamplesSection id="ul-examples" /> -->

		<!-- ============================================== CSS Variables -->
		<!-- <CssVariablesSection id="ul-css-vars" /> -->

		<!-- ============================================== Dependencies -->
		<!-- <DependenciesSection id="ul-dependencies" /> -->

		<!-- ============================================== Change Log -->
		<!-- <ChangeLogSection id="ul-change-log" /> -->

		<!-- ============================================== License -->
		<!-- <LicenseSection id="ul-license" /> -->

		<!-- <FooterSection /> -->
	</div>

	<div v-else class="container">
		aaa
		<TestingExamples />
	</div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	inject,
	provide,
	ref,
} from 'vue';
import { version } from '../../package';
// import {
// 	ChangeLogSection,
// 	CssVariablesSection,
// 	DependenciesSection,
// 	EventsSection,
// 	ExamplesSection,
// 	FooterSection,
// 	InstallationSection,
// 	LicenseSection,
// 	PropsSection,
// 	RegisterSection,
// 	SlotsSection,
// 	ThemesSection,
// 	UsageSection,
// } from '@/components/Sections/';
import { TestingExamples } from '@/components/Examples/';
// import Prism from 'prismjs';
// import 'prismjs/components/prism-typescript';
// import 'prismjs/components/prism-json';
// import 'prismjs/components/prism-markup-templating';
// import 'prismjs/components/prism-php';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';


const links = inject('links');
const demoTestPage = ref(true);
const selectedLibrary = ref('prism');
const selectedTheme = ref('coy');
const selectOptions = ref(null);
const libraries = [
	{
		label: 'PrismJS',
		value: 'prism',
	},
	{
		label: 'Highlight.js',
		value: 'highlightjs',
	},
];

const defaultThemes = [
	{
		label: 'Neon Bunny',
		value: 'neon-bunny',
	},
	{
		label: 'Neon Bunny - Carrot',
		value: 'neon-bunny-carrot',
	},
];

const prismThemes = [
	{
		label: 'Default',
		value: 'default',
	},
	{
		label: 'Coy',
		value: 'coy',
	},
	{
		label: 'Dark',
		value: 'dark',
	},
	{
		label: 'Funky',
		value: 'funky',
	},
	{
		label: 'Okaidia',
		value: 'okaidia',
	},
	{
		label: 'Solarizedlight',
		value: 'solarizedlight',
	},
	{
		label: 'Tomorrow',
		value: 'tomorrow',
	},
	{
		label: 'Twilight',
		value: 'twilight',
	},
];

const highlightThemes = [
	{
		label: 'Default',
		value: 'default',
	},
	{
		label: 'A11y Dark',
		value: 'a11y-dark',
	},
	{
		label: 'A11y Light',
		value: 'a11y-light',
	},
	{
		label: 'Agate',
		value: 'agate',
	},
	{
		label: 'An Old Hope',
		value: 'an-old-hope',
	},
	{
		label: 'Android Studio',
		value: 'androidstudio',
	},
	{
		label: 'Arduino Light',
		value: 'arduino-light',
	},
	{
		label: 'Arta',
		value: 'arta',
	},
	{
		label: 'Ascetic',
		value: 'ascetic',
	},
	{
		label: 'atom-one-dark-reasonable',
		value: 'atom-one-dark-reasonable',
	},
	{
		label: 'atom-one-dark',
		value: 'atom-one-dark',
	},
	{
		label: 'atom-one-light',
		value: 'atom-one-light',
	},
	{
		label: 'brown-paper',
		value: 'brown-paper',
	},
	{
		label: 'brown-papersq',
		value: 'brown-papersq',
	},
	{
		label: 'codepen-embed',
		value: 'codepen-embed',
	},
	{
		label: 'color-brewer',
		value: 'color-brewer',
	},
	{
		label: 'dark',
		value: 'dark',
	},
	{
		label: 'devibeans',
		value: 'devibeans',
	},
	{
		label: 'docco',
		value: 'docco',
	},
	{
		label: 'far',
		value: 'far',
	},
	{
		label: 'felipec',
		value: 'felipec',
	},
	{
		label: 'foundation',
		value: 'foundation',
	},
	{
		label: 'github-dark-dimmed',
		value: 'github-dark-dimmed',
	},
	{
		label: 'github-dark',
		value: 'github-dark',
	},
	{
		label: 'github',
		value: 'github',
	},
	{
		label: 'gml',
		value: 'gml',
	},
	{
		label: 'googlecode',
		value: 'googlecode',
	},
	{
		label: 'gradient-dark',
		value: 'gradient-dark',
	},
	{
		label: 'gradient-light',
		value: 'gradient-light',
	},
	{
		label: 'grayscale',
		value: 'grayscale',
	},
	{
		label: 'hybrid',
		value: 'hybrid',
	},
	{
		label: 'idea',
		value: 'idea',
	},
	{
		label: 'intellij-light',
		value: 'intellij-light',
	},
	{
		label: 'ir-black',
		value: 'ir-black',
	},
	{
		label: 'isbl-editor-dark',
		value: 'isbl-editor-dark',
	},
	{
		label: 'isbl-editor-light',
		value: 'isbl-editor-light',
	},
	{
		label: 'kimbie-dark',
		value: 'kimbie-dark',
	},
	{
		label: 'kimbie-light',
		value: 'kimbie-light',
	},
	{
		label: 'lightfair',
		value: 'lightfair',
	},
	{
		label: 'lioshi',
		value: 'lioshi',
	},
	{
		label: 'magula',
		value: 'magula',
	},
	{
		label: 'mono-blue',
		value: 'mono-blue',
	},
	{
		label: 'monokai-sublime',
		value: 'monokai-sublime',
	},
	{
		label: 'monokai',
		value: 'monokai',
	},
	{
		label: 'night-owl',
		value: 'night-owl',
	},
	{
		label: 'nnfx-dark',
		value: 'nnfx-dark',
	},
	{
		label: 'nnfx-light',
		value: 'nnfx-light',
	},
	{
		label: 'nord',
		value: 'nord',
	},
	{
		label: 'obsidian',
		value: 'obsidian',
	},
	{
		label: 'panda-syntax-dark',
		value: 'panda-syntax-dark',
	},
	{
		label: 'panda-syntax-light',
		value: 'panda-syntax-light',
	},
	{
		label: 'paraiso-dark',
		value: 'paraiso-dark',
	},
	{
		label: 'paraiso-light',
		value: 'paraiso-light',
	},
	{
		label: 'pojoaque',
		value: 'pojoaque',
	},
	{
		label: 'purebasic',
		value: 'purebasic',
	},
	{
		label: 'qtcreator-dark',
		value: 'qtcreator-dark',
	},
	{
		label: 'qtcreator-light',
		value: 'qtcreator-light',
	},
	{
		label: 'rainbow',
		value: 'rainbow',
	},
	{
		label: 'routeros',
		value: 'routeros',
	},
	{
		label: 'school-book',
		value: 'school-book',
	},
	{
		label: 'shades-of-purple',
		value: 'shades-of-purple',
	},
	{
		label: 'srcery',
		value: 'srcery',
	},
	{
		label: 'stackoverflow-dark',
		value: 'stackoverflow-dark',
	},
	{
		label: 'stackoverflow-light',
		value: 'stackoverflow-light',
	},
	{
		label: 'sunburst',
		value: 'sunburst',
	},
	{
		label: 'tokyo-night-dark',
		value: 'tokyo-night-dark',
	},
	{
		label: 'tokyo-night-light',
		value: 'tokyo-night-light',
	},
	{
		label: 'tomorrow-night-blue',
		value: 'tomorrow-night-blue',
	},
	{
		label: 'tomorrow-night-bright',
		value: 'tomorrow-night-bright',
	},
	{
		label: 'vs',
		value: 'vs',
	},
	{
		label: 'vs2015',
		value: 'vs2015',
	},
	{
		label: 'xcode',
		value: 'xcode',
	},
	{
		label: 'xt256',
		value: 'xt256',
	},
];

selectOptions.value = [...defaultThemes, ...prismThemes];

provide('selectedTheme', selectedTheme);
provide('selectedLibrary', selectedLibrary);

function changeLibrary(val) {
	console.log('changeLibrary', { val });
	selectedLibrary.value = val;

	if (val === 'prism') {
		selectOptions.value = [...defaultThemes, ...prismThemes];
		selectedTheme.value = 'default';
		return;
	}

	selectOptions.value = [...defaultThemes, ...highlightThemes];
	selectedTheme.value = 'default';
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
</style>
