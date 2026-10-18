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
				:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
				lang="plain"
				:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					First clone the <a
						:href="links.github"
						target="blank"
					>repository:</a>
				</template>
			</VCodeBlock>

			<VCodeBlock
				code="pnpm i && pnpm play"
				:highlightjs="codeBlockSettings.plugin.id === 'highlightjs'"
				lang="plain"
				:prismjs="codeBlockSettings.plugin.id === 'prismjs'"
				:theme="codeBlockSettings.theme"
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

<script setup lang="ts">
const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const links = inject<Docs.Links>('links')!;
const classes = inject<Docs.GlobalClasses>('classes')!;
</script>
