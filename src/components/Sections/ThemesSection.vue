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
				<a :href="links.neonBunnyTheme" target="_blank">Neon Bunny Theme</a>.
			</p>

			<CodeBlock
				:code="bunnyThemeExample"
				label="Using the Neon Bunny Themes"
				lang="html"
				:theme="selectedTheme"
			/>

			<p>
				Another other is to use the main
				<a :href="links.prism" target="_blank">PrismJS</a> themes. If you use
				the component to load the theme, you just need to set the
				<a href="#props-theme-option">theme</a> prop to the desired theme. When
				you load it this way, the component will use a <code>fetch</code> call
				to load them themes from the
				<a :href="links.jsDelivrPrism" target="_blank">jsDelivr CDN</a>.
				Fetching the PrismJS themes from a CDN was the best method I could
				figure out at this time to dynamically load the themes, while making it
				easier for you to use them. You can also link to another CDN of your
				choice.
			</p>

			<CodeBlock
				:code="themePropExample"
				label="Using the theme prop"
				lang="html"
				:theme="selectedTheme"
			/>

			<p>
				You can also load the themes the traditional way of importing them
				directly from the PrismJS package in <code>node_modules</code>. Themes
				from their
				<a :href="links.prismThemes" target="_blank">Prism themes</a>
				repository can be used this way as well (not build into the component).
			</p>

			<CodeBlock
				:code="importJsExample"
				label="Using import (javascript)"
				lang="html"
				:theme="selectedTheme"
			/>

			<p>Alternatively you can import the theme into your css/sass/scss.</p>

			<CodeBlock
				:code="importCssExample"
				label="Using import (css/sass/scss)"
				lang="html"
				:theme="selectedTheme"
			/>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';

const links = inject('links');
const styleData = inject('styleData');
const selectedTheme = inject('selectedTheme');

const bunnyThemeExample = `<CodeBlock
  :code="myCode"
  label="Neon Bunny Theme"
  lang="html"
  theme="neon-bunny"
/>

<CodeBlock
  :code="myCode"
  label="Neon Bunny Carrot Theme"
  lang="html"
  theme="neon-bunny-carrot"
/>`;

const themePropExample = `<CodeBlock
  :code="myCode"
  label="Build in Theming"
  lang="html"
  theme="coy"
/>`;

const importJsExample = `<script setup>
  import 'prismjs/themes/prism-coy.css';
<\/script>`;

const importCssExample = `<style>
  @import 'prismjs/themes/prism-coy.css';
<\/style>`;
</script>;
