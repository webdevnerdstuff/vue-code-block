<template>
	<div class="v-code-block v-code-block--mb-5" :class="codeBlockClasses">
		<div
			v-if="label || tabs || slots.label || slots.tabs"
			class="v-code-block--header"
			:style="headerStyles"
		>
			<div class="v-code-block--label v-code-block--pb-1" :class="labelClasses">
				<template v-if="slots.label">
					<slot name="label" />
				</template>
				<template v-else>{{ props.label }}</template>
			</div>

			<div class="v-code-block--tabs" :style="tabGroupStyle">
				<template v-if="slots.tabs">
					<slot name="tabs" />
				</template>
				<template v-else>
					<!-- ======================================== Copy Code Tab/Button -->
					<div
						v-if="copyTab && tabs"
						class="v-code-block--tab"
						:class="tabClasses"
						@click="copyCode"
					>
						<div class="v-code-block--button-copy">
							<StatusIcons
								v-if="copyIcons"
								class="v-code-block--button-copy-icon"
								:class="iconClasses"
								:icon="copyStatus"
							/>
							{{ copyTextValue }}
						</div>
					</div>

					<!-- ======================================== Run Tab/Button -->
					<div
						v-if="runTab && tabs && !isMobile"
						class="v-code-block--tab"
						:class="tabClasses"
						@click="runCode"
					>
						<div class="v-code-block--button-run">{{ runTextValue }}</div>
					</div>
				</template>
			</div>
		</div>
		<div class="v-code-block--code">
			<div
				class="v-code-block--code-copy-button"
				:class="copyButtonClasses"
				@click="copyCode"
			>
				<template v-if="slots.copyButton">
					<slot name="copyButton" />
				</template>
				<template v-else>
					<StatusIcons
						v-if="copyButton"
						class="v-code-block--button-copy-icon"
						:class="iconClasses"
						:icon="copyStatus"
					/>
				</template>
			</div>

			<pre :class="`language-${props.lang}`" :style="preTagStyles">
<code
  :class="`language-${props.lang} ${browserWindow ? 'v-code-block--code-browser' : ''} ${lib === 'highlight' || lib === 'highlightjs' ? 'hljs' : ''}`"
  :style="codeTagStyles"
  v-html="renderedCode"
></code>
			</pre>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	computed,
	inject,
	onBeforeMount,
	onMounted,
	ref,
	useSlots,
	watch,
	StyleValue,
} from 'vue';
// import Prism from 'prismjs';
import UAParser from 'ua-parser-js';
import { Props } from '@/types';
import StatusIcons from '@/plugin/StatusIcons.vue';
import {
	neonBunnyCarrotTheme,
	neonBunnyTheme,
	neonBunnyCarrotHighlightTheme,
	neonBunnyHighlightTheme
} from './themes';

// import hljs from 'highlight.js/lib/core';
import langCss from 'highlight.js/lib/languages/css';
import langJavascript from 'highlight.js/lib/languages/javascript';
import langJson from 'highlight.js/lib/languages/json';
import langPhp from 'highlight.js/lib/languages/php';
import langHtml from 'highlight.js/lib/languages/xml';
import langPlaintext from 'highlight.js/lib/languages/plaintext';
import langTypescript from 'highlight.js/lib/languages/typescript';


const highlightJsVersion = '11.7.0';
const prismVersion = '1.29.0';



// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits(['run', 'update:copy-status']);
const slots = useSlots();
const codeBlockGlobalOptions = inject<Props>('codeBlockGlobalOptions');


// -------------------------------------------------- Props //
const props = defineProps({
	browserWindow: {
		type: Boolean,
		required: false,
		default: false,
	},
	code: {
		type: [Object, Array, String, Number],
		required: true,
	},
	codeBlockRadius: {
		type: String,
		required: false,
		default: '0.5rem',
	},
	copyButton: {
		type: Boolean,
		required: false,
		default: true,
	},
	copyIcons: {
		type: Boolean,
		required: false,
		default: true,
	},
	copyTab: {
		type: Boolean,
		required: false,
		default: true,
	},
	copyFailedText: {
		type: String,
		required: false,
		default: 'Copy failed!',
	},
	copyText: {
		type: String,
		required: false,
		default: 'Copy Code',
	},
	copySuccessText: {
		type: String,
		required: false,
		default: 'Copied!',
	},
	floatingTabs: {
		type: Boolean,
		required: false,
		default: true,
	},
	height: {
		type: [String, Number],
		required: false,
		default: 'auto',
	},
	indent: {
		type: Number,
		required: false,
		default: 2,
	},
	label: {
		type: String,
		required: false,
		default: '',
	},
	lang: {
		type: String,
		required: false,
		default: 'javascript',
	},
	lib: {
		type: String,
		required: false,
		default: 'prism',
	},
	maxHeight: {
		type: [String, Number],
		required: false,
		default: 'auto',
	},
	persistentCopyButton: {
		type: Boolean,
		required: false,
		default: false,
	},
	runTab: {
		type: Boolean,
		required: false,
		default: false,
	},
	runText: {
		type: String,
		required: false,
		default: 'Run',
	},
	tabGap: {
		type: String,
		required: false,
		default: '0.25rem',
	},
	tabs: {
		type: Boolean,
		required: false,
		default: false,
	},
	theme: {
		type: [String, Boolean],
		required: false,
		default: 'neon-bunny',
	},
});


// -------------------------------------------------- Data //
let hljs;
let Prism;

const convertedCode = ref(null);
const copyStatus = ref<string>('copy');
const copyTextValue = ref<string>('');
const copying = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const isMobile = ref<boolean>(false);
const highlightCdn = ref(`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${highlightJsVersion}/build/styles/`);
const prismCdn = ref(`https://cdn.jsdelivr.net/gh/PrismJS/prism@${prismVersion}/themes`);
const renderedCode = ref('');
const runTextValue = ref<string>('');
const useTheme = ref<boolean | string>('');



// -------------------------------------------------- Computed //
const codeBlockClasses = computed<string>(() => {
	return isMobile.value ? 'v-code-block--mobile' : '';
});

const codeTagStyles = computed<StyleValue>(() => {
	const width = useTheme.value === 'coy' && isLoading.value === false ? '100%' : '';
	return { width };
});

const copyButtonClasses = computed<object>(() => {
	return {
		'v-code-block--code-copy-button': true,
		'v-code-block--code-copy-button-mobile': isMobile.value,
		[`v-code-block--code-copy-button-persist`]: props.persistentCopyButton,
		[`v-code-block--code-copy-button-status-${copyStatus.value}`]: true,
	};
});

const headerStyles = computed<StyleValue>(() => {
	return {
		bottom: props.floatingTabs ? '1px' : '0',
		gap: convertToUnit(props.tabGap),
	};
});

const iconClasses = computed<object>(() => {
	const theme = useTheme.value === '' || useTheme.value === 'prism' ? 'default' : useTheme.value;

	const classes = {
		'v-code-block--me-1': true,
		[`v-code-block--tab-${theme}-icon`]: true,
		[`v-code-block--button-copy-icon-status-${copyStatus.value}`]: true,
		[`v-code-block--tab-${theme}-icon-status-${copyStatus.value}`]: true,
	};
	return classes;
});

const labelClasses = computed<string>(() => {
	return isMobile.value ? 'v-code-block--label-mobile' : '';
});

const preTagStyles = computed<StyleValue>(() => {
	const radius = props.codeBlockRadius;
	let borderRadius = `${radius} 0 ${radius} ${radius}`;

	if (!props.tabs || (!props.copyTab && !props.runTab)) {
		borderRadius = radius;
	}

	const display = useTheme.value !== 'funky' ? 'flex' : 'block';

	return {
		borderRadius,
		height: convertToUnit(props.height),
		maxHeight: convertToUnit(props.maxHeight),
		display,
	};
});

const tabClasses = computed<object>(() => {
	const theme = useTheme.value === '' || useTheme.value === 'prism' ? 'default' : useTheme.value;
	const classes = {
		[`v-code-block--tab-${theme}`]: true,
	};
	return classes;
});

const tabGroupStyle = computed<StyleValue>(() => {
	return {
		gap: convertToUnit(props.tabGap),
	};
});


// -------------------------------------------------- Watch //
watch(props, () => {
	if (props.code) {
		renderCode();
	}

	if (props.theme || props.lib) {
		useTheme.value = props.theme;
		loadTheme();
	}

	if (props.copyText) {
		copyTextValue.value = props.copyText;
	}

	if (props.runText) {
		runTextValue.value = props.runText;
	}
});


// -------------------------------------------------- Mounts //
onBeforeMount(() => {
	copyTextValue.value = props.copyText;
	runTextValue.value = props.runText;
});

onMounted(() => {
	useTheme.value = codeBlockGlobalOptions?.theme || props.theme;
	loadTheme();
	mobileCheck();
	renderCode();
});


// -------------------------------------------------- Methods //
function convertCode(): void {
	if (props.lang === 'json') {
		const propsCode = props.code.toString();
		convertedCode.value = JSON.stringify(JSON.parse(propsCode), null, props.indent);
		return;
	}

	convertedCode.value = props.code;
	return;
}

function convertToUnit(str: string | number, unit = 'px'): string {
	if (str == null || str === '') {
		return undefined;
	}
	else if (!+str) {
		return String(str);
	}

	return `${Number(str)}${unit}`;
}

function copyCode(): void {
	if (copying.value) {
		return;
	}

	copying.value = true;

	navigator.clipboard.writeText(convertedCode.value).then(() => {
		copyTextValue.value = props.copySuccessText;
		copyStatus.value = 'success';
		emit('update:copy-status', copyStatus.value);
	}, (err) => {
		copyTextValue.value = props.copyFailedText;
		copyStatus.value = 'failed';
		emit('update:copy-status', copyStatus.value);
		console.error('Copy to clipboard failed: ', err);
	},
	);

	setTimeout(() => {
		copyTextValue.value = props.copyText;
		copyStatus.value = 'copy';
		emit('update:copy-status', copyStatus.value);
		copying.value = false;
	}, 3000);
}

function loadTheme(): void {
	let selectedTheme = null;
	const head = document.getElementsByTagName('head')[0];
	const themeStyles = document.createElement('style');
	const themeId = `v-code-block--theme-${useTheme.value}-${props.lib}`;
	const loadedTheme = document.body.getAttribute('data-v-code-block-theme');
	let isHighlightTheme = true;
	let isPrismTheme = true;
	let cssFilename = '';
	let fetchUrl = '';

	// If theme is loaded, do not keep trying to add it again //
	if (loadedTheme === useTheme.value) {
		return;
	}

	document.body.setAttribute('data-v-code-block-theme', themeId);

	themeStyles.setAttribute('type', 'text/css');
	themeStyles.setAttribute('data-theme-id', themeId);
	themeStyles.setAttribute('data-theme', 'v-code-block--theme-sheet');

	switch (useTheme.value) {
		case 'neon-bunny':
			selectedTheme = neonBunnyTheme;
			isPrismTheme = false;
			isHighlightTheme = false;
			break;
		case 'neon-bunny-carrot':
			selectedTheme = neonBunnyCarrotTheme;
			isPrismTheme = false;
			isHighlightTheme = false;
			break;
		case 'neon-bunny-highlight':
			selectedTheme = neonBunnyHighlightTheme;
			isPrismTheme = false;
			isHighlightTheme = false;
			break;
		case 'neon-bunny-carrot-highlight':
			selectedTheme = neonBunnyCarrotHighlightTheme;
			isPrismTheme = false;
			isHighlightTheme = false;
			break;
		default:
			break;
	}

	switch (props.lib) {
		case 'highlight':
		case 'highlightjs':
			cssFilename = `${useTheme.value}.min.css`;
			fetchUrl = `${highlightCdn.value}/${cssFilename}`;
			break;
		case 'prism':
			cssFilename = `prism-${useTheme.value}.css`;

			if (useTheme.value === 'default') {
				cssFilename = `prism.css`;
			}
			fetchUrl = `${prismCdn.value}/${cssFilename}`;
			break;
		default:
			isPrismTheme = true;
			cssFilename = '';
			break;
	}

	if (!isPrismTheme && !isHighlightTheme) {
		removeStylesheets();

		themeStyles.appendChild(document.createTextNode(selectedTheme));
		head.appendChild(themeStyles);

		return;
	}

	isLoading.value = true;

	fetch(fetchUrl).then((response) => {
		return response.text();
	})
		.then((data) => {
			removeStylesheets();

			themeStyles.appendChild(document.createTextNode(data));
			head.appendChild(themeStyles);
			isLoading.value = false;
		})
		.catch((error) => {
			console.error(`${props.lib} CDN Error:`, error);
		});
}

function mobileCheck(): void {
	const ua = UAParser();
	const device = ua.device;
	isMobile.value = device.type === 'mobile';
}

window.addEventListener('orientationchange', () => {
	mobileCheck();
});

function removeStylesheets() {
	const themeSheets = document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');

	if (themeSheets.length > 0) {
		themeSheets.forEach((themeSheet) => {
			themeSheet.remove();
		});
	}
}

function renderCode() {
	convertCode();

	if (props.lib === 'highlight' || props.lib === 'highlightjs') {
		return import('highlight.js/lib/core')
			.then((module) => {
				hljs = module.HighlightJS;

				hljs.registerLanguage('json', langJson);
				hljs.registerLanguage('php', langPhp);
				hljs.registerLanguage('typescript', langTypescript);
				hljs.registerLanguage('javascript', langJavascript);
				hljs.registerLanguage('css', langCss);
				hljs.registerLanguage('html', langHtml);
				hljs.registerLanguage('plain', langPlaintext);

				renderedCode.value = hljs.highlight(convertedCode.value, { language: props.lang }).value;
			})
			.catch((err) => {
				console.error('Highlight.js import:', { err });
			});
	}

	if (props.lib === 'prism') {
		return import('prismjs')
			.then((module) => {
				Prism = module;

				renderedCode.value = Prism.highlight(
					convertedCode.value,
					Prism.languages[props.lang],
					props.lang,
				);

			})
			.catch((err) => {
				console.error('PrismJS import:', { err });
			});
	}
}

function runCode(): void {
	emit('run');
}
</script>

<style lang="scss">
@import './styles/utilities';

.v-code-block {
	&- {
		&--label {
			&-mobile {
				input,
				select,
				textarea {
					display: none;
				}
			}
		}
	}
}
</style>

<style lang="scss" scoped>
@import './styles/main';
</style>
