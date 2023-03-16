<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>License</h2>
		</div>

		<div class="col-12">
			<p>
				Copyright &copy; 2023 WebDevNerdStuff
				<br />
				Licensed under the MIT license.
			</p>
			<p>
				<a :href="links.license" target="_blank"> LICENSE.md </a>
			</p>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';

const styleData = inject('styleData');
const links = inject('links');
</script>
