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
				<label class="form-label" for="theme-selection-select"
					>Switch Theme:</label
				>

				<select
					id="theme-selection-select"
					aria-label="Theme Selection"
					class="form-select"
					@change="changeTheme($event.target.value)"
				>
					<option
						v-for="theme in themes"
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
	ref,
} from 'vue';
import { version } from '../../package';
import {
	ChangeLogSection,
	CssVariablesSection,
	DependenciesSection,
	EventsSection,
	ExamplesSection,
	FooterSection,
	InstallationSection,
	LicenseSection,
	PropsSection,
	RegisterSection,
	SlotsSection,
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


const links = inject('links');
const demoTestPage = ref(false);
const selectedTheme = ref('neon-bunny');
const themes = [
	{
		label: 'Neon Bunny',
		value: 'neon-bunny',
	},
	{
		label: 'Neon Bunny - Carrot',
		value: 'neon-bunny-carrot',
	},
	{
		label: 'Prism Default',
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

provide('selectedTheme', selectedTheme);

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
