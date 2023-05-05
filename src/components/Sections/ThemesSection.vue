<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Themes</h2>
		</div>

		<div class="col-12">
			<p>
				There are a few options for theming the code block. Using the components
				built in method allows you to be able to dynamically change the theme
				easily. If you choose, you can also use your own custom theme.
			</p>

			<p>
				The first way is to use one of the two custom themes
				(<code>neon-bunny</code>,
				<code>neon-bunny-carrot</code>) built into the component that are based
				off of my own VSCode
				<a
					:href="links.neonBunnyTheme"
					target="_blank"
				>Neon Bunny Theme</a>.
			</p>

			<CodeBlock
				:code="examples[selectedLibrary.id].bunnyTheme"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Using the Neon Bunny Themes"
				lang="html"
				:prismjs="selectedLibrary.id === 'prism'"
				:theme="selectedTheme"
			/>

			<!--  PrismJS Section -->
			<p>
				Another other is to use the main
				<a
					:href="selectedLibrary.id === 'prism'
						? prismLinks.homepage
						: highlightJsLinks.homepage
						"
					target="_blank"
				>{{ selectedLibrary.label }}</a>
				themes. If you use the component to load the theme, you just need to set
				the
				<a href="#props-theme-option">theme</a> prop to the desired theme. When
				you load it this way, the component will use a <code>fetch</code> call
				to load them themes from the
				<a
					:href="selectedLibrary.id === 'prism'
						? prismLinks.cdn
						: highlightJsLinks.cdn
						"
					target="_blank"
				>jsDelivr CDN</a>. Fetching the {{ selectedLibrary.label }} themes from a CDN was the
				best method I could figure out at this time to dynamically load the
				themes, while making it easier for you to use them. You can also link to
				another CDN of your choice.
			</p>

			<CodeBlock
				:code="examples[selectedLibrary.id].themeProp"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Using the theme prop"
				lang="html"
				:prismjs="selectedLibrary.id === 'prism'"
				:theme="selectedTheme"
			/>

			<p v-if="selectedLibrary.id === 'highlightjs'">
				You can also use the <code>base16</code> styles.
				<span v-html="tabIconCopy"></span>
			</p>

			<CodeBlock
				v-if="selectedLibrary.id === 'highlightjs'"
				:code="examples[selectedLibrary.id].base16"
				:highlightjs="true"
				label="Using a base16 theme"
				lang="html"
				:prismjs="false"
				:theme="selectedTheme"
			/>

			<p>
				You can also load the themes the traditional way of importing them
				directly from the {{ selectedLibrary.label }} package in
				<code>node_modules</code>. Make sure to set the <code>theme</code> prop
				to false to avoid it conflicting with the default theme.
			</p>

			<p v-if="selectedLibrary.id === 'prism'">
				Themes from their
				<a
					:href="prismLinks.themes"
					target="_blank"
				>Prism themes</a>
				repository can be used this way as well.
				<span v-html="tabIconCopy"></span>
			</p>

			<CodeBlock
				:code="examples[selectedLibrary.id].importJs"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Using import (javascript)"
				lang="html"
				:prismjs="selectedLibrary.id === 'prism'"
				:theme="selectedTheme"
			/>

			<p>
				Alternatively you can import the theme into your css/sass/scss. Make
				sure to set the <code>theme</code> prop to false to avoid it conflicting
				with the default theme.
			</p>

			<CodeBlock
				:code="examples[selectedLibrary.id].importCss"
				:highlightjs="selectedLibrary.id === 'highlightjs'"
				label="Using <code>@use</code> (css/sass/scss)"
				lang="html"
				:prismjs="selectedLibrary.id === 'prism'"
				:theme="selectedTheme"
			>
				<template #label>
					Using <code>@use</code> (css/sass/scss)
				</template>
			</CodeBlock>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const links = inject('links');
const prismLinks = inject('prismLinks');
const highlightJsLinks = inject('highlightJsLinks');
const selectedLibrary = inject('selectedLibrary');
const selectedTheme = inject('selectedTheme');
const styleData = inject('styleData');

const examples = {
	prism: {
		bunnyTheme: `<CodeBlock
  :code="myCode"
  label="Neon Bunny Theme"
  lang="html"
  :prismjs="true"
  theme="neon-bunny"
/>

<CodeBlock
  :code="myCode"
  label="Neon Bunny Carrot Theme"
  lang="html"
  :prismjs="true"
  theme="neon-bunny-carrot"
/>`,
		importCss: `<style>
  @use 'prismjs/themes/prism-coy.css';
<\/style>`,
		importJs: `<script setup>
  import 'prismjs/themes/prism-coy.css';
<\/script>`,
		themeProp: `<CodeBlock
  :code="myCode"
  label="Build in Theming"
  lang="html"
  :prismjs="true"
  theme="coy"
/>`,
	},
	highlightjs: {
		base16: `<CodeBlock
  :code="myCode"
  :highlightjs="true"
  label="Build in Theming"
  lang="html"
  theme="base16-onedark"
/>`,
		bunnyTheme: `<CodeBlock
  :code="myCode"
  :highlightjs="true"
  label="Neon Bunny Theme"
  lang="html"
  theme="neon-bunny"
/>

<CodeBlock
  :code="myCode"
  :highlightjs="true"
  label="Neon Bunny Carrot Theme"
  lang="html"
  theme="neon-bunny-carrot"
/>`,
		importCss: `<style>
  @use 'highlight.js/styles/base16/onedark.css';
<\/style>`,
		importJs: `<script setup>
  import 'highlight.js/styles/base16/onedark.css';
<\/script>`,
		themeProp: `<CodeBlock
  :code="myCode"
  :highlightjs="true"
  label="Build in Theming"
  lang="html"
  theme="atom-one-dark"
/>`,
	}
};

const tabIconCopy = `<div class="alert alert-primary my-2" role="alert">
Not all tab &amp; icon styles for these themes are built into the component.<br />If
you would like to contribute to add tab/icon styles for a theme not
included, you can find instructions located
<a href="${links.contribute}" target="_blank">here</a>.
</div>`;
</script>;
