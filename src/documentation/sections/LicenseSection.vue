<template>
	<v-row>
		<v-col
			id="license"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#license"
				>#</a>
				License
			</h2>
		</v-col>

		<v-col cols="12">
			Copyright &copy; {{ new Date().getFullYear() }}
			<a
				:href="links.github"
				target="_blank"
			>WebDevNerdStuff</a>
			<br />
			Licensed under the
			<a
				:href="`${links.github}/blob/main/LICENSE.md`"
				target="_blank"
			>
				MIT License
			</a>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';

const classes = inject('classes');
const links = inject('links');
</script>
