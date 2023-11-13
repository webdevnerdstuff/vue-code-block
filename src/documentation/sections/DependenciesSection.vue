<template>
	<v-row>
		<v-col
			id="dependencies"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#dependencies"
				>#</a>
				Dependencies
			</h2>
		</v-col>

		<v-col cols="12">
			<a
				:href="links.vue"
				target="_blank"
			>
				Vue 3
			</a>
			<br />
			<a
				:href="prismLinks.homepage"
				target="_blank"
			>
				PrismJS
			</a>
			<br />
			<a
				:href="highlightJsLinks.homepage"
				target="_blank"
			>
				Highlight.js
			</a>
			<br />
			<a
				:href="links.uaParser"
				target="_blank"
			>
				UAParser.js
			</a>
		</v-col>
	</v-row>
</template>

<script setup>
import { usePropsStore } from '@/stores/props';

const classes = inject('classes');
const links = inject('links');
const { highlightJsLinks, prismLinks } = usePropsStore();

</script>
