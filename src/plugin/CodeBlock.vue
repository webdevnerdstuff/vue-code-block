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
				<template v-else>
					{{ props.label }}
				</template>
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
<code :class="`language-${props.lang} ${browserWindow ? 'v-code-block--code-browser' : ''}`" :style="codeTagStyles" v-html="renderCode"></code>
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
} from 'vue';
import Prism from 'prismjs';
import UAParser from 'ua-parser-js';
import { Props } from '@/types';

import StatusIcons from '@/plugin/StatusIcons.vue';
const neonBunnyCarrotTheme = import.meta.glob('./themes/neon-bunny-carrot.css', { eager: true, as: 'raw' });
const neonBunnyTheme = import.meta.glob('./themes/neon-bunny.css', { eager: true, as: 'raw' });
const prismTheme = import.meta.glob('prismjs/themes/prism.css', { eager: true, as: 'raw' });
const prismThemeCoy = import.meta.glob('prismjs/themes/prism-coy.css', { eager: true, as: 'raw' });
const prismThemeDark = import.meta.glob('prismjs/themes/prism-dark.css', { eager: true, as: 'raw' });
const prismThemeFunky = import.meta.glob('prismjs/themes/prism-funky.css', { eager: true, as: 'raw' });
const prismThemeOkaidia = import.meta.glob('prismjs/themes/prism-okaidia.css', { eager: true, as: 'raw' });
const prismThemeSolarizedlight = import.meta.glob('prismjs/themes/prism-solarizedlight.css', { eager: true, as: 'raw' });
const prismThemeTomorrow = import.meta.glob('prismjs/themes/prism-tomorrow.css', { eager: true, as: 'raw' });
const prismThemeTwilight = import.meta.glob('prismjs/themes/prism-twilight.css', { eager: true, as: 'raw' });


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
	}
});


// -------------------------------------------------- Data //
const copyTextValue = ref<string>('');
const convertedCode = ref(null);
const copying = ref<boolean>(false);
const copyStatus = ref<string>('copy');
const isMobile = ref<boolean>(false);
const runTextValue = ref<string>('');
const stylesheetId = 'v-code-block--theme';
const useTheme = ref<boolean | string>('');


// -------------------------------------------------- Computed //
const codeBlockClasses = computed<string>(() => {
	return isMobile.value ? 'v-code-block--mobile' : '';
});

const codeTagStyles = computed<object>(() => {
	const width = useTheme.value === 'coy' ? '100%' : '';
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

const headerStyles = computed<object>(() => {
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

const preTagStyles = computed<object>(() => {
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

const renderCode = computed<unknown>(() => {
	convertCode();

	const html = Prism.highlight(convertedCode.value, Prism.languages[props.lang], props.lang);

	return html;
});

const tabClasses = computed<object>(() => {
	const theme = useTheme.value === '' || useTheme.value === 'prism' ? 'default' : useTheme.value;
	const classes = {
		[`v-code-block--tab-${theme}`]: true,
	};
	return classes;
});

const tabGroupStyle = computed<object>(() => {
	return {
		gap: convertToUnit(props.tabGap),
	};
});


// -------------------------------------------------- Watch //
watch(props, () => {
	if (props.theme) {
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
	});

	setTimeout(() => {
		copyTextValue.value = props.copyText;
		copyStatus.value = 'copy';
		emit('update:copy-status', copyStatus.value);
		copying.value = false;
	}, 3000);
}

function loadTheme(): void {
	let selectedTheme = null;
	const loadedThemeStyles = document.getElementById(stylesheetId);
	const head = document.getElementsByTagName('head')[0];
	const themeStyles = document.createElement('style');

	if (loadedThemeStyles) {
		loadedThemeStyles.remove();
	}

	switch (useTheme.value) {
		case 'neon-bunny':
			selectedTheme = neonBunnyTheme;
			break;
		case 'neon-bunny-carrot':
			selectedTheme = neonBunnyCarrotTheme;
			break;
		case 'coy':
			selectedTheme = prismThemeCoy;
			break;
		case 'dark':
			selectedTheme = prismThemeDark;
			break;
		case 'funky':
			selectedTheme = prismThemeFunky;
			break;
		case 'okaidia':
			selectedTheme = prismThemeOkaidia;
			break;
		case 'solarizedlight':
			selectedTheme = prismThemeSolarizedlight;
			break;
		case 'tomorrow':
			selectedTheme = prismThemeTomorrow;
			break;
		case 'twilight':
			selectedTheme = prismThemeTwilight;
			break;
		case 'default':
		case 'prism':
			selectedTheme = prismTheme;
			break;
		default:
			selectedTheme = prismTheme;
			break;
	}

	const themeKey = Object.keys(selectedTheme)[0];
	selectedTheme = selectedTheme[themeKey];

	themeStyles.setAttribute('type', 'text/css');
	themeStyles.id = stylesheetId;
	themeStyles.appendChild(document.createTextNode(selectedTheme));

	head.appendChild(themeStyles);
}

function mobileCheck(): void {
	const ua = UAParser();
	const device = ua.device;
	isMobile.value = device.type === 'mobile';
}

window.addEventListener("orientationchange", () => {
	mobileCheck();
});

function runCode(): void {
	emit('run');
}
</script>


<style lang="scss">
@import './styles/utilities';
@import './styles/main';

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
