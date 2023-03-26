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
						:selected="library === lib.id"
						:value="lib.id"
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

		<FooterSection />
	</div>

	<div v-else class="container">
		<TestingExamples />
	</div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	inject,
	provide,
	reactive,
	ref,
} from 'vue';
import { version } from '../../package';
import {
	ChangeLogSection,
	// TODO: Need to updated props with Highlight.js stuff //
	CssVariablesSection,
	DependenciesSection,
	EventsSection,
	ExamplesSection,
	FooterSection,
	InstallationSection,
	LicenseSection,
	// TODO: Need to updated props with Highlight.js stuff //
	PropsSection,
	RegisterSection,
	SlotsSection,
	ThemesSection,
	UsageSection,
} from '@/components/Sections/';
import { TestingExamples } from '@/components/Examples/';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';

import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';


const highlightJsLinks = inject('highlightJsLinks');
const links = inject('links');
const prismLinks = inject('prismLinks');

const demoTestPage = ref(false);
const library = ref('prism');

const selectedTheme = ref('neon-bunny');
const selectOptions = ref(null);
const libraries = {
	prism: {
		label: 'PrismJS',
		id: 'prism',
	},
	highlightjs: {
		label: 'Highlight.js',
		id: 'highlightjs',
	},
};
const selectedLibrary = ref(libraries.prism);
const neonBunnyThemes = [
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
		label: 'Atom One Dark Reasonable',
		value: 'atom-one-dark-reasonable',
	},
	{
		label: 'Atom One Dark',
		value: 'atom-one-dark',
	},
	{
		label: 'Atom One Light',
		value: 'atom-one-light',
	},
	{
		label: 'Brown Paper',
		value: 'brown-paper',
	},
	{
		label: 'Brown Paper sq',
		value: 'brown-papersq',
	},
	{
		label: 'CodePen Embed',
		value: 'codepen-embed',
	},
	{
		label: 'Color Brewer',
		value: 'color-brewer',
	},
	{
		label: 'Dark',
		value: 'dark',
	},
	{
		label: 'DeviBeans',
		value: 'devibeans',
	},
	{
		label: 'Docco',
		value: 'docco',
	},
	{
		label: 'Far',
		value: 'far',
	},
	{
		label: 'Felipec',
		value: 'felipec',
	},
	{
		label: 'Foundation',
		value: 'foundation',
	},
	{
		label: 'Github Dark Dimmed',
		value: 'github-dark-dimmed',
	},
	{
		label: 'Github Dark',
		value: 'github-dark',
	},
	{
		label: 'Github',
		value: 'github',
	},
	{
		label: 'GML',
		value: 'gml',
	},
	{
		label: 'Google Code',
		value: 'googlecode',
	},
	{
		label: 'Gradient Dark',
		value: 'gradient-dark',
	},
	{
		label: 'Gradient Light',
		value: 'gradient-light',
	},
	{
		label: 'Grayscale',
		value: 'grayscale',
	},
	{
		label: 'Hybrid',
		value: 'hybrid',
	},
	{
		label: 'Idea',
		value: 'idea',
	},
	{
		label: 'IntelliJ Light',
		value: 'intellij-light',
	},
	{
		label: 'IR Black',
		value: 'ir-black',
	},
	{
		label: 'ISBL Editor Dark',
		value: 'isbl-editor-dark',
	},
	{
		label: 'ISBL Editor Light',
		value: 'isbl-editor-light',
	},
	{
		label: 'Kimbie Dark',
		value: 'kimbie-dark',
	},
	{
		label: 'Kimbie Light',
		value: 'kimbie-light',
	},
	{
		label: 'Lightfair',
		value: 'lightfair',
	},
	{
		label: 'Lioshi',
		value: 'lioshi',
	},
	{
		label: 'Magula',
		value: 'magula',
	},
	{
		label: 'Mono Blue',
		value: 'mono-blue',
	},
	{
		label: 'Monokai Sublime',
		value: 'monokai-sublime',
	},
	{
		label: 'Monokai',
		value: 'monokai',
	},
	{
		label: 'Night Owl',
		value: 'night-owl',
	},
	{
		label: 'NNFX Dark',
		value: 'nnfx-dark',
	},
	{
		label: 'NNFX- Light',
		value: 'nnfx-light',
	},
	{
		label: 'Nord',
		value: 'nord',
	},
	{
		label: 'Obsidian',
		value: 'obsidian',
	},
	{
		label: 'Panda Syntax Dark',
		value: 'panda-syntax-dark',
	},
	{
		label: 'Panda Syntax Light',
		value: 'panda-syntax-light',
	},
	{
		label: 'Paraiso Dark',
		value: 'paraiso-dark',
	},
	{
		label: 'Paraiso Light',
		value: 'paraiso-light',
	},
	{
		label: 'Pojoaque',
		value: 'pojoaque',
	},
	{
		label: 'PureBasic',
		value: 'purebasic',
	},
	{
		label: 'Qt Creator Dark',
		value: 'qtcreator-dark',
	},
	{
		label: 'Qt Creator Light',
		value: 'qtcreator-light',
	},
	{
		label: 'Rainbow',
		value: 'rainbow',
	},
	{
		label: 'RouterOS',
		value: 'routeros',
	},
	{
		label: 'School Book',
		value: 'school-book',
	},
	{
		label: 'Shades of Purple',
		value: 'shades-of-purple',
	},
	{
		label: 'Srcery',
		value: 'srcery',
	},
	{
		label: 'Stack Overflow Dark',
		value: 'stackoverflow-dark',
	},
	{
		label: 'Stack Overflow Light',
		value: 'stackoverflow-light',
	},
	{
		label: 'Sunburst',
		value: 'sunburst',
	},
	{
		label: 'Tokyo Night Dark',
		value: 'tokyo-night-dark',
	},
	{
		label: 'Tokyo Night Light',
		value: 'tokyo-night-light',
	},
	{
		label: 'Tomorrow Night Blue',
		value: 'tomorrow-night-blue',
	},
	{
		label: 'Tomorrow Night Bright',
		value: 'tomorrow-night-bright',
	},
	{
		label: 'VS',
		value: 'vs',
	},
	{
		label: 'VS 2015',
		value: 'vs2015',
	},
	{
		label: 'Xcode',
		value: 'xcode',
	},
	{
		label: 'xt256',
		value: 'xt256',
	},
];

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
</style>
