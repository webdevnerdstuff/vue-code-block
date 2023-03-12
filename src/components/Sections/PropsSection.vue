<template>
	<div class="row mb-5">
		<div :class="styleData.h2ColClass">
			<h2>Props</h2>
		</div>

		<div class="col-12 mb-3">
			<div class="table-responsive">
				<table class="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(prop, key) in componentProps" :key="prop">
							<td valign="top">{{ key }}</td>
							<td class="prop-type" valign="top">{{ prop.type }}</td>
							<td class="prop-default" valign="top">{{ prop.default }}</td>
							<td valign="top" v-html="prop.description"></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';


const styleData = inject('styleData');

const componentProps = {
	browserWindow: {
		type: 'Boolean',
		required: false,
		default: false,
		description: 'To give the code block a browser window look.',
	},
	code: {
		type: '[Object, Array, String, Number]',
		required: true,
		default: '',
		description: 'The code to be displayed in the code block.',
	},
	codeBlockRadius: {
		type: 'String',
		required: false,
		default: '0.5rem',
		description: 'The border radius of the code block.',
	},
	copyIcon: {
		type: 'String',
		required: false,
		default: 'fa-solid fa-copy',
		description: 'The icon to be used for the copy tab.',
	},
	copyText: {
		type: 'String',
		required: false,
		default: 'Copy Code',
		description: 'The text to be displayed on the copy tab.',
	},
	failedIcon: {
		type: 'String',
		required: false,
		default: 'fa-solid fa-xmark',
		description: 'The icon to be used for the failed tab.',
	},
	floatingTabs: {
		type: 'Boolean',
		required: false,
		default: true,
		description: 'To make the tabs float on top of the code block.',
	},
	height: {
		type: 'String',
		required: false,
		default: 'auto',
		description: 'The height of the code block.',
	},
	indent: {
		type: 'Number',
		required: false,
		default: 4,
		description: 'The number of spaces to indent the code for json.',
	},
	label: {
		type: 'String',
		required: false,
		default: '',
		description: 'The label to be displayed on the code block.',
	},
	lang: {
		type: 'String',
		required: false,
		default: 'javascript',
		description: 'The language of the code.',
	},
	maxHeight: {
		type: String,
		required: false,
		default: 'auto',
		description: 'The max height of the code block.',
	},
	showCopyIcons: {
		type: 'Boolean',
		required: false,
		default: true,
		description: 'To show the copy icons on the copy code tab.',
	},
	showRunTab: {
		type: 'Boolean',
		required: false,
		default: false,
		description: 'To show the run tab.',
	},
	showCopyTab: {
		type: 'Boolean',
		required: false,
		default: true,
		description: 'To show the copy code tab.',
	},
	showTabs: {
		type: 'Boolean',
		required: false,
		default: true,
		description: 'To show the tabs. This will show/hide all tabs.',
	},
	successIcon: {
		type: 'String',
		required: false,
		default: 'fa-solid fa-check',
		description: 'The icon to be used when the code copy was successful.',
	},
	tabGap: {
		type: 'String',
		required: false,
		default: '0.25rem',
		description: 'The gap between the tabs.',
	},
	theme: {
		type: 'String', Boolean,
		required: false,
		default: 'default',
		description: `<p>The theme to be used for the code block. Available options include:</p>
		<p>
			<strong>Neon Bunny Themes</strong>
			<br />
			<code>neon-bunny</code>
			<br />
			<code>neon-bunny-carrot</code>
		</p>
		<p>
			<strong>Prism Themes</strong>
			<br />
			<code>default</code>
			<br />
			<code>prism</code>
			<br />
			<code>coy</code>
			<br />
			<code>dark</code>
			<br />
			<code>funky</code>
			<br />
			<code>okaidia</code>
			<br />
			<code>solarizedlight</code>
			<br />
			<code>tomorrow</code>
			<br />
			<code>twilight</code>
		</p>
		`,
	}
};
</script>

<style lang="scss" scoped>
.prop {
	&-default {
		color: #002eb9 !important;
	}

	&-type {
		color: #900090 !important;
		font-weight: bold !important;
	}
}
</style>
