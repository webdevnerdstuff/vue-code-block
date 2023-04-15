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

			<pre
				v-bind="$attrs"
				:class="`language-${props.lang}`"
				:style="preTagStyles"
			>
<code
	v-if="prismPlugin"
  :class="`language-${props.lang} ${browserWindow ? 'v-code-block--code-browser' : ''} ${highlightjs ? 'hljs' : ''}`"
  :style="codeTagStyles"
	v-text="computedCode"
></code>
<code
	v-else
  :class="`language-${props.lang} ${browserWindow ? 'v-code-block--code-browser' : ''} ${highlightjs ? 'hljs' : ''}`"
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
import UAParser from 'ua-parser-js';
import { Props } from '@/types';
import StatusIcons from '@/plugin/StatusIcons.vue';
import {
	neonBunnyCarrotTheme,
	neonBunnyTheme,
	neonBunnyCarrotHighlightTheme,
	neonBunnyHighlightTheme
} from './themes';
import langCss from 'highlight.js/lib/languages/css';
import langJavascript from 'highlight.js/lib/languages/javascript';
import langHtml from 'highlight.js/lib/languages/xml';
import langPlaintext from 'highlight.js/lib/languages/plaintext';


const highlightJsVersion = '11.7.0';
const prismVersion = '1.29.0';
const prismThemesVersion = '1.9.0';


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
	highlightjs: {
		type: Boolean,
		required: false,
		default: false,
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
	prismjs: {
		type: Boolean,
		required: false,
		default: false,
	},
	prismPlugin: {
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
let prismModule;

const convertedCode = ref(null);
const copyStatus = ref<string>('copy');
const copyTextValue = ref<string>('');
const copying = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const isMobile = ref<boolean>(false);
const highlightCdn = ref(`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@${highlightJsVersion}/build/styles`);
const prismCdn = ref(`https://cdn.jsdelivr.net/gh/PrismJS/prism@${prismVersion}/themes`);
const prismThemesCdn = ref(`https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@${prismThemesVersion}/themes`);

const renderedCode = ref('');
const runTextValue = ref<string>('');
const useTheme = ref<boolean | string>('');


// -------------------------------------------------- Computed //
const computedCode = computed<unknown>(() => {
	let html = '';

	if (props.highlightjs) {
		html = renderedCode.value;
	}

	// We need to compute the code for Prism plugins to work //
	if (props.prismjs && props.prismPlugin) {
		html = convertedCode.value;
	}

	return html;
});

const codeBlockClasses = computed<string>(() => {
	let classes = isMobile.value ? 'v-code-block--mobile' : '';
	classes += props.prismjs ? ' v-code-block--prismjs' : ' v-code-block--highlightjs';

	return classes;
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
	const activeLibrary = props.highlightjs ? 'highlightjs' : 'prism';
	const theme = useTheme.value === '' || useTheme.value === 'prism' ? 'default' : useTheme.value;

	const classes = {
		'v-code-block--me-1': true,
		[`v-code-block--tab-${activeLibrary}-${theme}-icon`]: true,
		[`v-code-block--button-copy-icon-status-${copyStatus.value}`]: true,
		[`v-code-block--tab-${activeLibrary}-${theme}-icon-status-${copyStatus.value}`]: true,
	};
	return classes;
});

const labelClasses = computed<string>(() => {
	return isMobile.value ? 'v-code-block--label-mobile' : '';
});

const preTagStyles = computed<StyleValue>(() => {
	const radius = props.codeBlockRadius;
	let borderRadius = `${radius} 0 ${radius} ${radius} !important`;

	if (!props.tabs || (!props.copyTab && !props.runTab)) {
		borderRadius = radius;
	}

	const display = useTheme.value !== 'funky' ? 'flex' : 'block';

	return {
		borderRadius,
		display,
		height: convertToUnit(props.height),
		maxHeight: convertToUnit(props.maxHeight),
		overflow: 'auto',
	};
});

const tabClasses = computed<object>(() => {
	const activeLibrary = props.highlightjs ? 'highlightjs' : 'prism';
	const theme = useTheme.value === '' || useTheme.value === 'prism' ? 'default' : useTheme.value;

	const classes = {
		[`v-code-block--tab-${theme}`]: true,
		[`v-code-block--tab-${activeLibrary}-${theme}`]: true,
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

	if (props.theme || props.prismjs || props.highlightjs) {
		checkLibrary();
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

	checkLibrary();
});

onMounted(() => {
	useTheme.value = codeBlockGlobalOptions?.theme || props.theme;
	loadTheme();
	mobileCheck();
	renderCode();
});


// -------------------------------------------------- Methods //
function checkLibrary(): void {
	if (!props.prismjs && !props.highlightjs) {
		throw new Error('[vue3-code-block]: You must set either the prismjs or highlightjs props.');
	}

	if (props.prismjs && props.highlightjs) {
		throw new Error('[vue3-code-block]: You cannot have both prismjs and highlightjs props set at the same time.');
	}

	if (props.highlightjs && props.prismPlugin) {
		console.warn('[vue3-code-block]: Highlight.js does not support PrismJS plugins. Unexpected results may occur. Remove the `prism-plugin` prop from the vue3-code-block component.');
	}
}

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
	const activeLibrary = props.highlightjs ? 'highlightjs' : 'prism';

	const head = document.getElementsByTagName('head')[0];
	const themeStyles = document.createElement('style');
	const loadedTheme = document.body.getAttribute('data-v-code-block-theme');
	let themeId = `v-code-block--theme-${useTheme.value}-${activeLibrary}`;
	let isHighlightTheme = true;
	let isPrismTheme = true;
	let cssFilename = '';
	let fetchUrl = '';

	themeId = themeNameAdjustments(activeLibrary, themeId);

	// If theme is loaded or false, do not keep trying to add it again //
	if (loadedTheme === useTheme.value || loadedTheme === themeId) {
		return;
	}

	// If theme is set to false, they are loading them them, do not continue //
	if (typeof useTheme.value === 'boolean') {
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

			if (activeLibrary === 'highlightjs') {
				selectedTheme = neonBunnyHighlightTheme;
			}
			break;
		case 'neon-bunny-carrot':
			selectedTheme = neonBunnyCarrotTheme;
			isPrismTheme = false;
			isHighlightTheme = false;

			if (activeLibrary === 'highlightjs') {
				selectedTheme = neonBunnyCarrotHighlightTheme;
			}
			break;
		default:
			break;
	}

	if (!isPrismTheme && !isHighlightTheme) {
		removeStylesheets();

		themeStyles.appendChild(document.createTextNode(selectedTheme));
		head.appendChild(themeStyles);

		return;
	}

	const adjustCssFilename = themeNameAdjustments(activeLibrary, useTheme.value);

	switch (activeLibrary) {
		case 'highlightjs':
			cssFilename = `${adjustCssFilename}.min.css`;
			fetchUrl = `${highlightCdn.value}/${cssFilename}`;
			break;
		case 'prism':
			cssFilename = `${adjustCssFilename}.css`;

			if (useTheme.value === 'default') {
				fetchUrl = `${prismCdn.value}/prism.css`;
			}
			else if (useTheme.value.includes('themes-')) {
				fetchUrl = `${prismThemesCdn.value}/${cssFilename}`;
			}
			else {
				fetchUrl = `${prismCdn.value}/prism-${cssFilename}`;
			}

			break;
		default:
			cssFilename = '';
			break;
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
			const activeLibrary = props.highlightjs ? 'Highlight.js' : 'PrismJS';
			console.error(`${activeLibrary} CDN Error:`, error);
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

function themeNameAdjustments(lib: string, name: string, clean = false): string {
	let newName = name;

	if (lib === 'prism') {
		newName = newName.replace('themes-', 'prism-');
		newName = newName.replace('prism-prism-', 'prism-');
		newName = newName.replace('theme-prism-', 'theme-');

		if (clean) {
			newName = newName.replace('prism-prism-', '');
			newName = newName.replace('prism-', '');
		}
	}

	if (lib === 'highlightjs') {
		newName = newName.replace('base16-', 'base16/');
	}

	return newName;
}

function removeStylesheets() {
	const themeSheets = document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');

	if (themeSheets.length > 0) {
		themeSheets.forEach((themeSheet) => {
			themeSheet.remove();
		});
	}
}

function renderCode(): void {
	convertCode();

	if (props.highlightjs) {
		import('highlight.js/lib/core')
			.then((module) => {
				hljs = module.default;

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

	if (props.prismjs) {
		import('prismjs').then((result) => {
			prismModule = result;

			renderedCode.value = prismModule.highlight(
				convertedCode.value,
				prismModule.languages[props.lang],
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
