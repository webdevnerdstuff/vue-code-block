<template>
	<v-row>
		<v-col
			id="playground"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#playground"
				>#</a>
				Developer Playground
			</h2>

			<h3 class="mb-2 text-secondary">Setup the Playground</h3>

			<VCodeBlock
				class="mb-6"
				code="git clone git@github.com:webdevnerdstuff/vue-code-block.git"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				lang="plain"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:theme="selectedTheme"
			>
				<template #label>
					First clone the <a
						:href="store.links.github"
						target="blank"
					>repository:</a>
				</template>
			</VCodeBlock>

			<VCodeBlock
				code="pnpm i && pnpm play"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				lang="plain"
				:prismjs="selectedLibrary.id === 'prismjs'"
				:theme="selectedTheme"
			>
				<template #label>
					Next run the following command to setup the Playground:
				</template>
			</VCodeBlock>
		</v-col>

		<v-col cols="12">
			This will create a file for you to adjust and play with.
			<br />
			<code class="ic">/src/playground/PlaygroundPage.vue</code>
		</v-col>
	</v-row>
</template>

<script setup>
import { useCoreStore } from '@/stores/index';


const store = useCoreStore();
const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');
const classes = inject('classes');
</script>
