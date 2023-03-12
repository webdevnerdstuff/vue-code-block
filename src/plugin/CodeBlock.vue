<template>
	<div
		class="v-code-block--container v-code-block-mb-5"
		:class="codeBlockClasses"
	>
		<div class="v-code-block--container-header" :style="headerStyles">
			<div
				class="v-code-block--container-label v-code-block-pb-1"
				:class="labelClasses"
			>
				<template v-if="slots.label">
					<slot name="label" />
				</template>
				<template v-else>
					{{ props.label }}
				</template>
			</div>

			<div class="v-code-block--container-tabs" :style="tabGroupStyle">
				<template v-if="slots.tabs">
					<slot name="tabs" />
				</template>
				<template v-else>
					<!-- ======================================== Copy Code Tab/Button -->
					<div
						v-if="showCopyTab && showTabs"
						class="v-code-block--container-tab"
						:class="tabClasses"
						@click="copyCode"
					>
						<div class="v-code-block--container-button-copy">
							<fa-icon
								v-if="showCopyIcons"
								class="fa-fw v-code-block-me-1 v-code-block--container-button-copy-icon"
								:class="iconClasses"
								:icon="buttonIconValue"
							/>
							{{ buttonTextValue }}
						</div>
					</div>

					<!-- ======================================== Run Tab/Button -->
					<div
						v-if="showRunTab && showTabs && !isMobile"
						class="v-code-block--container-tab"
						:class="tabClasses"
						@click="runCode"
					>
						<div class="v-code-block--container-button-run">Run</div>
					</div>
				</template>
			</div>
		</div>
		<div class="v-code-block--container-code">
			<pre :class="`language-${props.lang}`" :style="preTagStyles">
<code :class="`language-${props.lang} ${browserWindow ? 'v-code-block--container-code-browser' : ''}`" :style="codeTagStyles" v-html="renderCode"></code>
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
// import PrismComponents from 'prismjs/components';
import UAParser from 'ua-parser-js';

import prismTheme from 'prismjs/themes/prism.css?inline';
import prismThemeCoy from 'prismjs/themes/prism-coy.css?inline';
import prismThemeDark from 'prismjs/themes/prism-dark.css?inline';
import prismThemeFunky from 'prismjs/themes/prism-funky.css?inline';
import prismThemeOkaidia from 'prismjs/themes/prism-okaidia.css?inline';
import prismThemeSolarizedlight from 'prismjs/themes/prism-solarizedlight.css?inline';
import prismThemeTomorrow from 'prismjs/themes/prism-tomorrow.css?inline';
import prismThemeTwilight from 'prismjs/themes/prism-twilight.css?inline';
import neonBunnyTheme from '@/plugin/theme/neon-bunny.css?inline';
import neonBunnyCarrotTheme from '@/plugin/theme/neon-bunny-carrot.css?inline';

// ! Remove this later as it should be loaded by the user ! //
import prismThemeNightOwl from 'prism-themes/themes/prism-night-owl.css?inline';


// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits(['copied', 'run']);
const slots = useSlots();
const codeBlockGlobalOptions = inject('codeBlockGlobalOptions');


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
	copyIcon: {
		type: String,
		required: false,
		default: 'fa-solid fa-copy',
	},
	copyText: {
		type: String,
		required: false,
		default: 'Copy Code',
	},
	failedIcon: {
		type: String,
		required: false,
		default: 'fa-solid fa-xmark',
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
		default: 4,
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
	showCopyIcons: {
		type: Boolean,
		required: false,
		default: true,
	},
	showRunTab: {
		type: Boolean,
		required: false,
		default: false,
	},
	showCopyTab: {
		type: Boolean,
		required: false,
		default: true,
	},
	showTabs: {
		type: Boolean,
		required: false,
		default: true,
	},
	successIcon: {
		type: String,
		required: false,
		default: 'fa-solid fa-check',
	},
	tabGap: {
		type: String,
		required: false,
		default: '0.25rem',
	},
	theme: {
		type: String, Boolean,
		required: false,
		default: '',
	}
});


// -------------------------------------------------- Data //
const buttonIconValue: string = ref('');
const buttonTextValue: string = ref('');
const convertedCode: string = ref('');
const copying: boolean = ref(false);
const copyStatus: string = ref('copy');
const iconClass: string = ref('fa-solid fa-copy');
const isMobile: boolean = ref(false);
const stylesheetId = 'v-code-block--theme';
const useTheme = ref('');


// -------------------------------------------------- Computed //
const codeBlockClasses = computed<string>(() => {
	return isMobile.value ? 'v-code-block--container-mobile' : '';
});

const codeTagStyles = computed<object>(() => {
	const width = useTheme.value === 'coy' ? '100%' : '';
	return { width };
});

const headerStyles = computed<object>(() => {
	return {
		bottom: props.floatingTabs ? '1px' : '0',
		gap: props.tabGap,
	};
});

const iconClasses = computed<object>(() => {
	const theme = useTheme.value === '' || useTheme.value === 'prism' ? 'default' : useTheme.value;

	const classes = {
		[`v-code-block--container-tab-${theme}-icon`]: true,
		[`v-code-block--container-button-copy-icon-status-${copyStatus.value}`]: true,
		[`v-code-block--container-tab-${theme}-icon-status-${copyStatus.value}`]: true,
	};
	return classes;
});

const labelClasses = computed<string>(() => {
	return isMobile.value ? 'v-code-block--container-label-mobile' : '';
});

const preTagStyles = computed<object>(() => {
	const radius = props.codeBlockRadius;
	let borderRadius = `${radius} 0 ${radius} ${radius}`;

	if (!props.showTabs || (!props.showCopyTab && !props.showRunTab)) {
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
	// console.log({ Prism });
	// console.log({ PrismComponents });

	const html = Prism.highlight(convertedCode.value, Prism.languages[props.lang], props.lang);

	return html;
});

const tabClasses = computed<object>(() => {
	const theme = useTheme.value === '' || useTheme.value === 'prism' ? 'default' : useTheme.value;
	const classes = {
		[`v-code-block--container-tab-${theme}`]: true,
	};
	return classes;
});

const tabGroupStyle = computed<object>(() => {
	return {
		gap: props.tabGap,
	};
});


// -------------------------------------------------- Watch //
watch(props, () => {
	if (props.theme) {
		useTheme.value = props.theme;
		loadTheme();
	}

	if (props.copyText) {
		buttonTextValue.value = props.copyText;
	}
});

console.log({ Prism });


// -------------------------------------------------- Mounts //
onBeforeMount(() => {
	buttonTextValue.value = props.copyText;
	buttonIconValue.value = props.copyIcon;
});

onMounted(() => {
	useTheme.value = codeBlockGlobalOptions?.theme || props.theme;
	loadTheme();
	mobileCheck();
});


// -------------------------------------------------- Methods //
function convertCode(): void {
	if (props.lang === 'json') {

		convertedCode.value = JSON.stringify(props.code, null, props.indent);
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
		buttonIconValue.value = props.successIcon;
		buttonTextValue.value = 'Copied!';
		iconClass.value = 'fa-solid fa-check';
		copyStatus.value = 'success';
	}, (err) => {
		buttonIconValue.value = props.failedIcon;
		buttonTextValue.value = 'Copy failed!';
		iconClass.value = 'fa-solid fa-xmark';
		copyStatus.value = 'failed';
		console.error('Copy to clipboard failed: ', err);
	});

	setTimeout(() => {
		buttonIconValue.value = props.copyIcon;
		buttonTextValue.value = props.copyText;
		copyStatus.value = 'copy';
		iconClass.value = 'fa-solid fa-copy';
		copying.value = false;
	}, 3000);
}

function loadTheme(): void {
	let selectedTheme = prismTheme;
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
		// ! Remove this later as it should be loaded by the user ! //
		case 'night-owl':
			selectedTheme = prismThemeNightOwl;
			break;
		case 'default':
		case 'prism':
			selectedTheme = prismTheme;
			break;
		default:
			selectedTheme = prismTheme;
			break;
	}

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
.v-code-block {
	&--container {
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
@import '../style';
</style>
