<template>
	<v-row>
		<v-col
			id="description"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#description"
				>#</a>
				Description
			</h2>
		</v-col>

		<v-col cols="12">
			The Vue 3 CodeBlock component leverages the power of
			<a
				:href="links.prismjs"
				target="_blank"
			>PrismJS</a>
			or
			<a
				:href="links.highlightjs"
				target="_blank"
			>Highlight.js</a>
			to provide syntax highlighting for code blocks within your
			application. The component takes a prop, which is the code to be
			highlighted, and uses PrismJS or Highlight.js to render the code with
			syntax highlighting. The component supports a variety of programming
			languages and can be customized with different themes to match your
			application's design. With this component, your users can display
			their code snippets with ease and clarity, making it easier to share
			and collaborate on code within your application.
		</v-col>

	</v-row>
</template>

<script setup>
const classes = inject('classes');
const links = inject('links');
</script>
