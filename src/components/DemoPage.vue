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

		<div class="row">
			<div class="col-12 mb-4">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga
					officiis libero numquam eveniet ut quasi sint non possimus quaerat
					fugit ad, quidem natus quia iste esse provident sequi minima?
				</p>
			</div>
		</div>
	</div>

	<div class="container mb-5 text-center">
		<div aria-label="Basic example" class="btn-group mb-3" role="group">
			<button
				v-for="theme in themes"
				:key="theme"
				class="btn btn-success"
				:class="{
					active: selectedTheme === theme.value,
					'btn-success': selectedTheme !== theme.value,
				}"
				type="button"
				@click="changeTheme(theme.value)"
			>
				{{ theme.label }}
			</button>
		</div>
	</div>

	<div class="container">
		<!-- ============================================== Installation -->
		<InstallationSection id="ul-installation" />

		<!-- ============================================== Register -->
		<RegisterSection id="ul-register-plugin" />

		<!-- ============================================== Props -->
		<PropsSection id="ul-props" />

		<!-- ============================================== Events -->
		<EventsSection id="ul-events" />

		<!-- ============================================== Slots -->
		<SlotsSection id="ul-slots" />

		<!-- ============================================== CSS Variables -->
		<CssVariablesSection id="ul-css-vars" />

		<!-- ============================================== Examples -->
		<ExamplesSection id="ul-examples" />

		<!-- ============================================== Dependencies -->
		<DependenciesSection id="ul-dependencies" />

		<!-- ============================================== Change Log -->
		<ChangeLogSection id="ul-change-log" />

		<!-- ============================================== License -->
		<LicenseSection id="ul-license" />

		<FooterSection />
	</div>
</template>

<script setup>
import {
	provide,
	ref,
} from 'vue';
import { name, version } from '../../package';
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
} from '@/components/Sections/';


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
	{
		label: 'Night Owl',
		value: 'night-owl',
	},
];

provide('selectedTheme', selectedTheme);

provide('styleData', {
	h2ColClass: 'col-12 mb-4',
});

const packageName = name;
const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;

const links = {
	changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
	docs: `https://webdevnerdstuff.github.io/${packageName}/`,
	github: repoBaseUrl,
	license: `${repoBaseUrl}/blob/main/LICENSE.md`,
	neonBunnyTheme: 'https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny',
	npm: `https://www.npmjs.com/package/${packageName}`,
	prism: 'https://prismjs.com/',
	vueJs: 'https://vuejs.org/',
};

provide('links', links);


const codeBlockOptions = ref({
	browserWindow: false,
	preHeight: '30em',
});

provide('codeBlockOptions', codeBlockOptions);

function changeTheme(val) {
	selectedTheme.value = val;
}
</script>


<style lang="scss">
:root {
	--v-cb-label-font: 'Encode Sans Expanded', sans-serif;
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

.vue-logo {
	width: 80px;
}

.boolean-style {
	color: hsl(240, 100%, 50%) !important;
	font-weight: 500;
}
</style>
