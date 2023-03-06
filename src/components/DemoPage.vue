<template>
	<div class="container mb-5">
		<div class="row mb-4">
			<div class="col-12 text-center">
				<img alt="Vue" src="../assets/vue.svg" />
			</div>
		</div>
		<div class="row mb-3">
			<div class="col-12 text-center">
				<h1 class="rainbow-text">Vue 3 CodeBlock</h1>
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

	<div class="container">
		<div aria-label="Basic example" class="btn-group mb-3" role="group">
			<button
				v-for="theme in themes"
				:key="theme"
				class="btn btn-success"
				type="button"
				@click="changeTheme(theme.value)"
			>
				{{ theme.label }}
			</button>
		</div>

		<CodeBlock
			:browserWindow="codeBlockOptions.browserWindow"
			:code="cssCode"
			lang="css"
			:theme="selectedTheme"
		></CodeBlock>

		<CodeBlock
			:browserWindow="codeBlockOptions.browserWindow"
			:code="code2"
		></CodeBlock>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { version } from '../../package';


const selectedTheme = ref('dark');
const themes = [
	{
		label: 'Default',
		value: 'prism',
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

const codeBlockOptions = ref({
	browserWindow: false,
});

function changeTheme(val) {
	selectedTheme.value = val;
}

const code2 = `const helloWorld = 'hello world'`;

const code = `const foo = 'bar'

function foobar() {
  console.log('foobar')
}

const objectStuff = {
	foo: 'bar',
	bar: 'foo',
	foobar: {
		foo: 'bar',
		bar: 'foo',
		foobar: {
			foo: 'bar',
			bar: 'foo',
		},
	},
}

const foo = 'bar'
const foo = 'bar'
const foo = 'bar'
const foo = 'bar'
const foo = 'bar'
const foo = 'bar'
const foo = 'bar'
const foo = 'bar'
const foo = 'bar'
const foo = 'bar'
const foo = 'bar'
const foo = 'bar'
const foo = 'bar'`;

const cssCode = `
$foo = 'blue';

.foo {
	color: $foo;

	.bar {
		color: orange;
	}
}
`

</script>

<style lang="scss"></style>
