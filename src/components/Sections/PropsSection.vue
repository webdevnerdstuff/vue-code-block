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
						<tr
							v-for="(prop, key) in componentProps"
							:key="prop"
						>
							<td
								:id="prop?.id"
								valign="top"
							>{{ key }}</td>
							<td
								class="prop-type"
								valign="top"
							>{{ prop.type }}</td>
							<td
								class="prop-default"
								valign="top"
							>{{ prop.default }}</td>
							<td
								valign="top"
								v-html="prop.description"
							></td>
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
const prismLinks = inject('prismLinks');
const highlightJsLinks = inject('highlightJsLinks');

const componentProps = {
	browserWindow: {
		type: 'boolean',
		required: false,
		default: false,
		description: 'To give the code block a browser window look.',
	},
	cssPath: {
		type: 'string | undefined',
		required: false,
		default: 'undefined',
		description: 'Used to load the css from a specified location instead of the component using the CDN location. If you want to dynamically change the theme, you will also need to change the theme prop.',
	},
	code: {
		type: 'object | string | number',
		required: true,
		default: '',
		description: 'The code to be displayed in the code block.',
	},
	codeBlockRadius: {
		type: 'string',
		required: false,
		default: '0.5rem',
		description: 'The border radius of the code block.',
	},
	copyButton: {
		type: 'boolean',
		required: false,
		default: true,
		description: 'To show a copy button within the code block',
	},
	copyIcons: {
		type: 'boolean',
		required: false,
		default: true,
		description: 'To show the copy icons on the copy code tab.',
	},
	copyTab: {
		type: 'boolean',
		required: false,
		default: true,
		description: 'To show the copy code tab.',
	},
	copyFailedText: {
		type: 'string',
		required: false,
		default: 'Copy failed!',
		description: 'The text to be displayed when the code copy failed.',
	},
	copyText: {
		type: 'string',
		required: false,
		default: 'Copy Code',
		description: 'The text to be displayed on the copy tab.',
	},
	copySuccessText: {
		type: 'string',
		required: false,
		default: 'Copied!',
		description: 'The text to be displayed when the code copy was successful.',
	},
	floatingTabs: {
		type: 'boolean',
		required: false,
		default: true,
		description: 'To make the tabs float on top of the code block.',
	},
	height: {
		type: 'string | number',
		required: false,
		default: 'auto',
		description: 'The height of the code block.',
	},
	highlightjs: {
		type: 'boolean',
		required: false,
		default: 'false',
		description: 'Specifies that the Highlight.js library should be used.',
	},
	indent: {
		type: 'Number',
		required: false,
		default: 4,
		description: 'The number of spaces to indent the code for json.',
	},
	label: {
		type: 'string',
		required: false,
		default: '',
		description: 'The label to be displayed on the code block.',
	},
	lang: {
		type: 'string',
		required: false,
		default: 'javascript',
		description: 'The language of the code.',
	},
	maxHeight: {
		type: 'string | number',
		required: false,
		default: 'auto',
		description: 'The max height of the code block.',
	},
	persistentCopyButton: {
		type: 'boolean',
		required: false,
		default: false,
		description: 'To show a persistent copy button within the code block',
	},
	prismjs: {
		type: 'boolean',
		required: false,
		default: 'true',
		description: 'Specifies that the PrismJS library should be used.',
	},
	prismPlugin: {
		type: 'boolean',
		required: false,
		default: 'false',
		description: 'Specifies that a PrismJS plugin is being used. This is needed for the plugin to work properly.',
	},
	runTab: {
		type: 'boolean',
		required: false,
		default: false,
		description: 'To show the run tab.',
	},
	runText: {
		type: 'string',
		required: false,
		default: 'Run',
		description: 'The text to be displayed on the run tab.',
	},
	tabGap: {
		type: 'string',
		required: false,
		default: '0.25rem',
		description: 'The gap between the tabs.',
	},
	tabs: {
		type: 'boolean',
		required: false,
		default: false,
		description: 'To show the tabs. This will show/hide all tabs.',
	},
	theme: {
		type: 'string | boolean',
		required: false,
		id: 'props-theme-option',
		default: 'neon-bunny',
		description: `<p>The theme to be used for the code block. Available options include:</p>
		<p>
			<code>false</code> - When you are loading the theme's styles yourself.
		</p>
		<p>
			<strong>Neon Bunny Themes</strong>
			<br />
			<code>neon-bunny</code>
			<br />
			<code>neon-bunny-carrot</code>
		</p>
		<p>
			<a href="${prismLinks.prismThemes}" target="_blank">PrismJS Themes</a>
		</p>
		<p>
			<a href="${highlightJsLinks.themes}" target="_blank">Highlight.js Themes</a>
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

[data-bs-theme='dark'] {
	.prop {
		&-default {
			color: var(--bs-primary) !important;
		}

		&-type {
			color: hsl(300 100% 38%) !important;
		}
	}
}
</style>
