<template>
	<div class="main-container">
		<div class="container mt-5 mb-5">
			<div class="row mb-4">
				<div class="col-12 text-center">
					<img
						alt="Vue"
						class="vue-logo"
						src="../assets/vue.svg"
					/>
				</div>
			</div>
			<div class="row mb-3">
				<div class="col-12 text-center">
					<h1>Vue 3 CodeBlock</h1>
				</div>
			</div>
		</div>

		<div class="container mb-5">
			<div class="row">
				<div class="col-12 text-center">
					<h2 class="text-danger ">Important Information!</h2>
					<p class="mb-5">
						This repository and npm package has been changed.
					</p>
					<p class="mb-5">
						You can find the new repository here:
						<br />
						<a :href="links.github">{{ links.github }}</a>
					</p>
					<p>
						You can find the new NPM package here:
						<br />
						<a :href="links.npm">{{ links.npm }}</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';
const links = inject('links');
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
	font-size: 2rem;
	font-weight: 400;
	padding-bottom: 0.5rem;
}

h5 {
	font-weight: 600;
}

.main-container {
	height: 100%;
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
